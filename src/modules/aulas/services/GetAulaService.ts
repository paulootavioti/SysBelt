import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class GetAulaService {
  async execute(id: number) {
    const aula = await prisma.aula.findUnique({
      where: {
        id,
      },
      include: {
        turma: true,
        aulaCurriculo: {
          include: {
            tecnicas: true,
          },
        },
        alunos: {
          include: {
            aluno: {
              include: {
                responsaveis: {
                  where: { ativo: true },
                  select: {
                    id: true,
                    nome: true,
                    apelido: true,
                    telefone: true,
                    whatsapp: true,
                    parentesco: true,
                    recebeComunicados: true,
                  },
                },
              },
            },
          },
          orderBy: {
            aluno: {
              nome: "asc",
            },
          },
        },
      },
    });

    if (!aula) {
      throw new AppError("Aula não encontrada.");
    }

    return aula;
  }
}