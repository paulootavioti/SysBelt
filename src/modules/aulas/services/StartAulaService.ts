import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface StartAulaDTO {
  turmaId: number;
  professor?: string;
  observacoes?: string;
}

export class StartAulaService {
  async execute(data: StartAulaDTO) {
    const turma = await prisma.turma.findUnique({
      where: {
        id: data.turmaId,
      },
      include: {
        alunos: {
          where: {
            ativo: true,
          },
          orderBy: {
            nome: "asc",
          },
        },
      },
    });

    if (!turma) {
      throw new AppError("Turma não encontrada.");
    }

    if (turma.alunos.length === 0) {
      throw new AppError(
        "Não existem alunos ativos nesta turma."
      );
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

        alunos: {
          create: turma.alunos.map((aluno) => ({
            alunoId: aluno.id,
            presente: false,
          })),
        },
      },
      include: {
        turma: true,
        alunos: {
          include: {
            aluno: true,
          },
          orderBy: {
            aluno: {
              nome: "asc",
            },
          },
        },
      },
    });

    return aula;
  }
}