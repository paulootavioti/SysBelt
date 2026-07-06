import { prisma } from "../../../shared/database/prisma";

export class ListComportamentosService {
  async execute() {
    return prisma.comportamento.findMany({
      include: {
        aluno: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
}