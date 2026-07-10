import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface UpdatePlanoDTO {
  nome: string;
  valor: number;
  periodicidade: string;
}

export class UpdatePlanoService {
  async execute(id: number, data: UpdatePlanoDTO) {
    const plano = await prisma.plano.findUnique({ where: { id } });

    if (!plano) {
      throw new AppError("Plano não encontrado.");
    }

    return prisma.plano.update({
      where: { id },
      data,
    });
  }
}
