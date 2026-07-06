import { prisma } from "../../../shared/database/prisma";

export class ListResponsaveisService {
  async execute() {
    return prisma.responsavel.findMany({
      include: {
        aluno: {
          select: {
            id: true,
            nome: true,
            faixa: true,
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }
}