import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";
import { AtualizarEvolucaoAlunoService } from "../../graduacoes/services/AtualizarEvolucaoAlunoService";

const faixasKids = [
  "Branca",
  "Cinza e Branca",
  "Cinza",
  "Cinza e Preta",
  "Amarela e Branca",
  "Amarela",
  "Amarela e Preta",
  "Laranja e Branca",
  "Laranja",
  "Laranja e Preta",
  "Verde"
];

interface CreatePresencaDTO {
  alunoId: number;
}

export class CreatePresencaService {
  async execute({ alunoId }: CreatePresencaDTO) {
    const hoje = new Date();

    const inicioDia = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate()
    );

    const fimDia = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate() + 1
    );

    const presencaExistente = await prisma.presenca.findFirst({
      where: {
        alunoId,
        data: {
          gte: inicioDia,
          lt: fimDia
        }
      }
    });

    if (presencaExistente) {
      throw new AppError(
        "Este aluno já possui presença registrada hoje."
      );
    }

    const presenca = await prisma.presenca.create({
      data: {
        alunoId,
        data: hoje
      }
    });

    const atualizarEvolucaoAlunoService = 
      new AtualizarEvolucaoAlunoService();

    await atualizarEvolucaoAlunoService.execute(alunoId);
    
    
    
    // const aulasPorGrau = 8;
    // const grausPorFaixa = 4;
    
    
    return presenca;
  }
}