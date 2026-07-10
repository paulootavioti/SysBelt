import { prisma } from "../../../shared/database/prisma";

export class ListTurmasService {
  async execute() {
    return prisma.turma.findMany({
      include: {
        curriculo: true,
        professor: {
          select: {
            id: true,
            nome: true,
            apelido: true,
          },
        },
        _count: {
          select: {
            alunos: {
              where: { ativo: true },
            },
          },
        },
      },
      orderBy: {
        nome: "asc",
      },
    });
  }
}