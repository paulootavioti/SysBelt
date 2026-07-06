import { Router } from "express";

import { AulasController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";

const aulasRoutes = Router();

const controller = new AulasController();

aulasRoutes.post(
  "/",
  ensureAuthenticated,
  controller.create
);

aulasRoutes.get(
  "/",
  ensureAuthenticated,
  controller.list
);

aulasRoutes.put(
  "/alunos/:id",
  ensureAuthenticated,
  controller.updateAluno
);

aulasRoutes.patch(
  "/:id/finalizar",
  ensureAuthenticated,
  controller.finalizar
);

aulasRoutes.get(
  "/:id",
  ensureAuthenticated,
  controller.show
);


export { aulasRoutes };