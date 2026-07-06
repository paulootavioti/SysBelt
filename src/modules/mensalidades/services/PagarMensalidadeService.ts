import { prisma } from "../../../shared/database/prisma";

export class PagarMensalidadeService {

  async execute(id: number) {

    const mensalidade =
      await prisma.mensalidade.update({
        where: {
          id
        },
        data: {
          pago: true,
          dataPagamento: new Date()
        }
      });

    return mensalidade;
  }

}