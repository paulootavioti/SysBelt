import { Request, Response } from "express";

import { CreateCurriculoService } from "./services/CreateCurriculoService";
import { ListCurriculosService } from "./services/ListCurriculosService";
import { GetCurriculoService } from "./services/GetCurriculoService";

export class CurriculosController {
  async create(req: Request, res: Response) {
    const service = new CreateCurriculoService();

    const curriculo = await service.execute(req.body);

    return res.status(201).json(curriculo);
  }

  async list(req: Request, res: Response) {
    const service = new ListCurriculosService();

    const curriculos = await service.execute();

    return res.json(curriculos);
  }

  async show(req: Request, res: Response) {
    const service = new GetCurriculoService();

    const curriculo = await service.execute(Number(req.params.id));

    return res.json(curriculo);
  }
}