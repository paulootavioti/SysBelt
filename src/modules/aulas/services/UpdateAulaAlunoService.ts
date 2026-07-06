import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface UpdateAulaAlunoDTO {
  id: number;

  presente?: boolean;

  respeito?: boolean;
  valentia?: boolean;
  esforco?: boolean;
  atencao?: boolean;
  disciplina?: boolean;

  observacao?: string | null;
}

export class UpdateAulaAlunoService {
  async execute(data: UpdateAulaAlunoDTO) {
    const registro = await prisma.aulaAluno.findUnique({
      where: {
        id: data.id,
      },
      include: {
        aula: true,
      },
    });

    if (!registro) {
      throw new AppError("Registro da aula não encontrado.");
    }

    if (registro.aula.status === "FINALIZADA") {
      throw new AppError(
        "Não é possível alterar uma aula finalizada."
      );
    }

    return prisma.aulaAluno.update({
      where: {
        id: data.id,
      },
      data: {
        presente: data.presente,

        respeito: data.respeito,
        valentia: data.valentia,
        esforco: data.esforco,
        atencao: data.atencao,
        disciplina: data.disciplina,

        observacao: data.observacao,
      },
    });
  }
}