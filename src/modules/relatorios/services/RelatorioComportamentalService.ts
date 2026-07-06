import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class RelatorioComportamentalService {

  async execute(alunoId: number) {

    const aluno =
      await prisma.aluno.findUnique({
        where: {
          id: alunoId
        }
      });

    if (!aluno) {
      throw new AppError(
        "Aluno não encontrado."
      );
    }

    const registros =
      await prisma.comportamento.findMany({
        where: {
          alunoId
        }
      });

    const resumo = registros.reduce(
      (acc, item) => {

        acc.respeito += item.respeito;
        acc.valentia += item.valentia;
        acc.esforco += item.esforco;
        acc.atencao += item.atencao;
        acc.disciplina += item.disciplina;

        return acc;

      },
      {
        respeito: 0,
        valentia: 0,
        esforco: 0,
        atencao: 0,
        disciplina: 0
      }
    );

    const ranking = [

      {
        nome: "Respeito",
        valor: resumo.respeito
      },

      {
        nome: "Valentia",
        valor: resumo.valentia
      },

      {
        nome: "Esforço",
        valor: resumo.esforco
      },

      {
        nome: "Atenção",
        valor: resumo.atencao
      },

      {
        nome: "Disciplina",
        valor: resumo.disciplina
      }

    ].sort((a, b) => b.valor - a.valor);

    return {

      aluno: aluno.nome,

      mensagem: `
📋 RELATÓRIO COMPORTAMENTAL

🥋 Aluno: ${aluno.nome}
🏅 Faixa: ${aluno.faixa}

🔵 Respeito: ${resumo.respeito}
🟢 Valentia: ${resumo.valentia}
🟠 Esforço: ${resumo.esforco}
🟡 Atenção: ${resumo.atencao}
🔴 Disciplina: ${resumo.disciplina}

⭐ Destaque:
${ranking[0].nome}

Parabéns pela evolução!

Equipe Cia de Lutas Weberty Viana
      `.trim()

    };

  }

}