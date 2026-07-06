import { prisma } from "../../../shared/database/prisma";

interface CreateGraduacaoDTO {
  faixa: string;
  data: string;
  alunoId: number;
}

export class CreateGraduacaoService {
  async execute({
    faixa,
    data,
    alunoId
  }: CreateGraduacaoDTO) {
    const graduacao = await prisma.graduacao.create({
      data: {
        faixa,
        data: new Date(data),
        alunoId
      }
    });

    await prisma.aluno.update({
      where: {
        id: alunoId
      },
      data: {
        faixa
      }
    });

    return graduacao;
  }
}