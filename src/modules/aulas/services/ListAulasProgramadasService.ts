import { prisma } from "../../../shared/database/prisma";

export class ListAulasProgramadasService {
  async execute() {
    return prisma.aulaProgramada.findMany({
      include: {
        turma: true,
        aulaCurriculo: true,
      },
      orderBy: {
        data: "asc",
      },
    });
  }
}