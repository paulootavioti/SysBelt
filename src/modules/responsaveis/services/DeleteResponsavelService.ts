import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class DeleteResponsavelService {
  async execute(id: number) {
    const responsavel = await prisma.responsavel.findUnique({
      where: { id },
    });

    if (!responsavel) {
      throw new AppError("Responsável não encontrado.");
    }

    await prisma.responsavel.delete({
      where: { id },
    });

    return {
      message: "Responsável excluído com sucesso.",
    };
  }
}