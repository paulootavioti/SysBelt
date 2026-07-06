import { prisma } from "../../../shared/database/prisma";

export class RankingPresencasService {
  async execute() {
    const ranking = await prisma.presenca.groupBy({
      by: ["alunoId"],

      _count: {
        alunoId: true
      },

      orderBy: {
        _count: {
          alunoId: "desc"
        }
      }
    });

    const resultado = await Promise.all(
      ranking.map(async (item, index) => {
        const aluno = await prisma.aluno.findUnique({
          where: {
            id: item.alunoId
          }
        });

        return {
          posicao: index + 1,
          alunoId: item.alunoId,
          nome: aluno?.nome,
          faixa: aluno?.faixa,
          presencas: item._count.alunoId
        };
      })
    );

    return resultado;
  }
}