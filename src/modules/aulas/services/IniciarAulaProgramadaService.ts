import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";
import { StartAulaService } from "./StartAulaService";

export class IniciarAulaProgramadaService {
  async execute(id: number) {
    const programacao = await prisma.aulaProgramada.findUnique({
      where: { id },
    });

    if (!programacao) {
      throw new AppError("Programação não encontrada.");
    }

    if (programacao.status !== "PENDENTE") {
      throw new AppError("Esta programação já foi iniciada ou cancelada.");
    }

    const startAulaService = new StartAulaService();

    const aula = await startAulaService.execute({
      turmaId: programacao.turmaId,
      aulaCurriculoId: programacao.aulaCurriculoId ?? undefined,
      observacoes: programacao.observacoes ?? undefined,
    });

    await prisma.aulaProgramada.update({
      where: { id },
      data: {
        status: "INICIADA",
        aulaId: aula.id,
      },
    });

    return aula;
  }
}