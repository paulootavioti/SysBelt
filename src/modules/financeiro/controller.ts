import { Request, Response } from "express";
import { prisma } from "../../shared/database/prisma";

export class FinanceiroController {

  async resumo(req: Request, res: Response) {

    const recebidas =
      await prisma.mensalidade.aggregate({
        where: {
          pago: true
        },
        _sum: {
          valor: true
        }
      });

    const pendentes =
      await prisma.mensalidade.aggregate({
        where: {
          pago: false
        },
        _sum: {
          valor: true
        }
      });

    const inadimplentes =
      await prisma.mensalidade.count({
        where: {
          pago: false,
          vencimento: {
            lt: new Date()
          }
        }
      });

    return res.json({
      totalRecebido:
        recebidas._sum.valor || 0,

      totalPendente:
        pendentes._sum.valor || 0,

      inadimplentes
    });
  }

}