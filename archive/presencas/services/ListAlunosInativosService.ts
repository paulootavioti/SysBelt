import { prisma } from "../../../shared/database/prisma";

export class ListAlunosInativosService {
  async execute() {
    const alunos = await prisma.aluno.findMany({
      where: {
        ativo: true
      }
    });

    const resultado = [];

    for (const aluno of alunos) {
      const ultimaPresenca =
        await prisma.presenca.findFirst({
          where: {
            alunoId: aluno.id
          },
          orderBy: {
            data: "desc"
          }
        });

      if (!ultimaPresenca) {
        resultado.push({
          alunoId: aluno.id,
          nome: aluno.nome,
          faixa: aluno.faixa,
          diasSemTreinar: "Nunca treinou"
        });

        continue;
      }

      const diasSemTreinar = Math.floor(
        (
          Date.now() -
          new Date(ultimaPresenca.data).getTime()
        ) / (1000 * 60 * 60 * 24)
      );

      if (diasSemTreinar > 30) {
        resultado.push({
          alunoId: aluno.id,
          nome: aluno.nome,
          faixa: aluno.faixa,
          diasSemTreinar
        });
      }
    }

    return resultado;
  }
}