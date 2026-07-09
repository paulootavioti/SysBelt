import { prisma } from "../../../shared/database/prisma";

export class ListAlunosService {

  async execute() {

    const alunos =
      await prisma.aluno.findMany({
        orderBy: {
          nome: "asc"
        },
        include: {
          mensalidades: {
            orderBy: {
              vencimento: "desc"
            }
          }
        }
      });

    return alunos;
  }
}