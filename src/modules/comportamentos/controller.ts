import { Request, Response } from "express";

import { CreateComportamentoService } from "./services/CreateComportamentoService";
import { ListComportamentosService } from "./services/ListComportamentosService";
import { GetResumoComportamentalService } from "./services/GetResumoComportamentalService";

export class ComportamentosController {

  async create(req: Request, res: Response) {

    const service =
      new CreateComportamentoService();

    const comportamento =
      await service.execute({
        ...req.body,
        alunoId: Number(req.body.alunoId)
      });

    return res.status(201).json(comportamento);
  }

  async list(req: Request, res: Response) {

    const service =
      new ListComportamentosService();

    const comportamentos =
      await service.execute();

    return res.json(comportamentos);
  }

  async resumo(req: Request, res: Response) {

    const { alunoId } =
      req.params;

    const service =
      new GetResumoComportamentalService();

    const resumo =
      await service.execute(
        Number(alunoId)
      );

    return res.json(resumo);
  }

}