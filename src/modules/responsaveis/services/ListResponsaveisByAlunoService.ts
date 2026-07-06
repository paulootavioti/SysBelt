import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class ListResponsaveisByAlunoService {
  async execute(alunoId: number) {
    const aluno = await prisma.aluno.findUnique({
      where: { id: alunoId },
    });

    if (!aluno) {
      throw new AppError("Aluno não encontrado.");
    }

    return prisma.responsavel.findMany({
      where: {
        alunoId,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }
}