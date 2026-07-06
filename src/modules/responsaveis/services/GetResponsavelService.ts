import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class GetResponsavelService {
  async execute(id: number) {
    const responsavel = await prisma.responsavel.findUnique({
      where: { id },
      include: {
        aluno: {
          select: {
            id: true,
            nome: true,
            faixa: true,
          },
        },
      },
    });

    if (!responsavel) {
      throw new AppError("Responsável não encontrado.");
    }

    return responsavel;
  }
}