import { Request, Response } from "express";
import { prisma } from "../../shared/database/prisma";
import { CreatePresencaService } from "./services/CreatePresencaService";
import { ListPresencasService } from "./services/ListPresencasService";
import { RankingPresencasService } from "./services/RankingPresencasService";
import { ListAlunosInativosService } from "./services/ListAlunosInativosService";

export class PresencasController {

  async create(req: Request, res: Response) {
    const { alunoId } = req.body;
  
    const service = new CreatePresencaService();
  
    const presenca = await service.execute({
      alunoId: Number(alunoId)
    });
  
    return res.status(201).json(presenca);
  }

  async list(req: Request, res: Response) {
    const service = new ListPresencasService();
  
    const presencas = await service.execute();
  
    return res.json(presencas);
  }

  // Histórico de frequência por aluno
  async aluno(req: Request, res: Response) {

    const { id } = req.params;
  
    const presencas = await prisma.presenca.findMany({
      where: {
        alunoId: Number(id)
      },
      orderBy: {
        data: "desc"
      }
    });
  
    return res.json(presencas);
  }

  // Ranking Frequencia
  async ranking(req: Request, res: Response) {
    const service = new RankingPresencasService();
  
    const ranking = await service.execute();
  
    return res.json(ranking);
  }

  //Alunos Inativos
  async inativos(req: Request, res: Response) {
    const service = new ListAlunosInativosService();
  
    const alunos = await service.execute();
  
    return res.json(alunos);
  }

}