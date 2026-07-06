import { prisma } from "../../../shared/database/prisma";

export class ListMensalidadesService {

  async execute() {

    const mensalidades =
      await prisma.mensalidade.findMany({
        include: {
          aluno: true
        }
      });

    return mensalidades;
  }

}