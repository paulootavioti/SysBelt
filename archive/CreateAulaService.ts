import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface CreateAulaDTO {
  turmaId: number;
  professor?: string;
  observacoes?: string;
}

export class CreateAulaService {
  async execute(data: CreateAulaDTO) {
    const turma = await prisma.turma.findUnique({
      where: {
        id: data.turmaId,
      },
    });

    if (!turma) {
      throw new AppError("Turma não encontrada.");
    }

    const aulaAberta = await prisma.aula.findFirst({
      where: {
        turmaId: data.turmaId,
        status: "ABERTA",
      },
    });

    if (aulaAberta) {
      throw new AppError(
        "Já existe uma aula aberta para esta turma."
      );
    }

    const aula = await prisma.aula.create({
      data: {
        data: new Date(),
        turmaId: data.turmaId,
        professor: data.professor,
        observacoes: data.observacoes,
        status: "ABERTA",
      },
    });

    return aula;
  }
}