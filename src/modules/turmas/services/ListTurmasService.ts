import { prisma } from "../../../shared/database/prisma";

export class ListTurmasService {
  async execute() {
    return prisma.turma.findMany({
      include: {
        curriculo: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }
}