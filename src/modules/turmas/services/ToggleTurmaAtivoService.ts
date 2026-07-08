import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class ToggleTurmaAtivoService {
  async execute(id: number) {
    const turma = await prisma.turma.findUnique({ where: { id } });

    if (!turma) {
      throw new AppError("Turma não encontrada.");
    }

    return prisma.turma.update({
      where: { id },
      data: { ativo: !turma.ativo },
    });
  }
}