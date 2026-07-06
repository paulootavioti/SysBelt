import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class ToggleResponsavelAtivoService {
  async execute(id: number) {
    const responsavel = await prisma.responsavel.findUnique({
      where: { id },
    });

    if (!responsavel) {
      throw new AppError("Responsável não encontrado.");
    }

    return prisma.responsavel.update({
      where: { id },
      data: {
        ativo: !responsavel.ativo,
      },
    });
  }
}