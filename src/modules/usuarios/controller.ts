import { Request, Response } from "express";

import { ListUsuariosService } from "./services/ListUsuariosService";
import { UpdatePerfilUsuarioService } from "./services/UpdatePerfilUsuarioService";
import { ToggleUsuarioAtivoService } from "./services/ToggleUsuarioAtivoService";

export class UsuariosController {

  async list(
    req: Request,
    res: Response
  ) {

    const service =
      new ListUsuariosService();

    const usuarios =
      await service.execute();

    return res.json(usuarios);

  }

  async updatePerfil(
    req: Request,
    res: Response
  ) {

    const { id } =
      req.params;

    const { perfil } =
      req.body;

    const service =
      new UpdatePerfilUsuarioService();

    const usuario =
      await service.execute(
        Number(id),
        perfil
      );

    return res.json(usuario);

  }

  async toggleAtivo(
    req: Request,
    res: Response
  ) {

    const { id } =
      req.params;

    const service =
      new ToggleUsuarioAtivoService();

    const usuario =
      await service.execute(
        Number(id)
      );

    return res.json(usuario);

  }

}