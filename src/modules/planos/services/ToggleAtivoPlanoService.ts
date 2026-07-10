import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class ToggleAtivoPlanoService {
  async execute(id: number) {
    const plano = await prisma.plano.findUnique({ where: { id } });

    if (!plano) {
      throw new AppError("Plano não encontrado.");
    }

    return prisma.plano.update({
      where: { id },
      data: { ativo: !plano.ativo },
    });
  }
}
