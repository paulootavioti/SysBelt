import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class GetAulaService {
  async execute(id: number) {
    const aula = await prisma.aula.findUnique({
      where: {
        id,
      },
      include: {
        turma: true,
        alunos: {
          include: {
            aluno: true,
          },
          orderBy: {
            aluno: {
              nome: "asc",
            },
          },
        },
      },
    });

    if (!aula) {
      throw new AppError("Aula não encontrada.");
    }

    return aula;
  }
}