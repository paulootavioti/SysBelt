import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class GetTurmaDetalhadaService {
  async execute(id: number) {
    const turma = await prisma.turma.findUnique({
      where: {
        id,
      },
      include: {
        curriculo: true,
        professor: {
          select: {
            id: true,
            nome: true,
            apelido: true,
          },
        },
        alunos: {
          orderBy: {
            nome: "asc",
          },
        },
      },
    });

    if (!turma) {
      throw new AppError("Turma não encontrada.");
    }

    return turma;
  }
}