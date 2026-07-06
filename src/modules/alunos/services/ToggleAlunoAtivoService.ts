import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class ToggleAlunoAtivoService {

  async execute(id: number) {

    const aluno =
      await prisma.aluno.findUnique({
        where: { id }
      });

    if (!aluno) {
      throw new AppError(
        "Aluno não encontrado."
      );
    }

    return prisma.aluno.update({
      where: { id },
      data: {
        ativo: !aluno.ativo
      }
    });

  }

}