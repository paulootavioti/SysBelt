import { prisma } from "../../../shared/database/prisma";

interface CreateComportamentoDTO {
  alunoId: number;
  respeito: number;
  valentia: number;
  esforco: number;
  atencao: number;
  disciplina: number;
  observacao?: string;
}

export class CreateComportamentoService {
  async execute(data: CreateComportamentoDTO) {
    return prisma.comportamento.create({
      data
    });
  }
}