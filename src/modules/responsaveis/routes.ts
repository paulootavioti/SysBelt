import { Router } from "express";

import { ResponsaveisController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";

const responsaveisRoutes = Router();

const controller = new ResponsaveisController();

responsaveisRoutes.post(
  "/",
  ensureAuthenticated,
  controller.create
);

responsaveisRoutes.get(
  "/",
  ensureAuthenticated,
  controller.list
);

responsaveisRoutes.get(
  "/:id",
  ensureAuthenticated,
  controller.show
);

responsaveisRoutes.put(
  "/:id",
  ensureAuthenticated,
  controller.update
);

responsaveisRoutes.patch(
  "/:id/ativo",
  ensureAuthenticated,
  controller.toggleAtivo
);

responsaveisRoutes.delete(
  "/:id",
  ensureAuthenticated,
  controller.delete
);

responsaveisRoutes.get(
  "/aluno/:alunoId",
  ensureAuthenticated,
  controller.listByAluno
);

export { responsaveisRoutes };