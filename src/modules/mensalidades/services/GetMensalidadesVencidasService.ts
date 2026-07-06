import { prisma } from "../../../shared/database/prisma";

export class GetMensalidadesVencidasService {

  async execute() {

    const hoje = new Date();

    const mensalidades =
      await prisma.mensalidade.findMany({
        where: {
          pago: false,
          vencimento: {
            lt: hoje
          }
        },
        include: {
          aluno: true
        }
      });

    return mensalidades;
  }

}