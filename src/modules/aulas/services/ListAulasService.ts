import { prisma } from "../../../shared/database/prisma";

export class ListAulasService {
  async execute() {
    return prisma.aula.findMany({
      include: {
        turma: true,
      },
      orderBy: {
        data: "desc",
      },
    });
  }
}