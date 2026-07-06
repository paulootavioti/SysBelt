import { Request, Response } from "express";

import { CreateTecnicaService } from "./services/CreateTecnicaService";
import { ListTecnicasService } from "./services/ListTecnicasService";

export class TecnicasController {
  async create(req: Request, res: Response) {
    const service = new CreateTecnicaService();

    const tecnica = await service.execute(req.body);

    return res.status(201).json(tecnica);
  }

  async list(req: Request, res: Response) {
    const service = new ListTecnicasService();

    const tecnicas = await service.execute();

    return res.json(tecnicas);
  }
}