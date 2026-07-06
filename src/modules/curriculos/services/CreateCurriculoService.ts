import { prisma } from "../../../shared/database/prisma";

interface CreateCurriculoDTO {
  nome: string;
  descricao?: string;
  modalidade?: string;
  publico?: string;
}

export class CreateCurriculoService {
  async execute(data: CreateCurriculoDTO) {
    return prisma.curriculo.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        modalidade: data.modalidade ?? "Jiu-Jitsu",
        publico: data.publico ?? "Kids",
      },
    });
  }
}