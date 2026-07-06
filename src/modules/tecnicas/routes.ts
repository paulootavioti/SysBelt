import { Router } from "express";

import { TecnicasController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";

const tecnicasRoutes = Router();

const controller = new TecnicasController();

tecnicasRoutes.post(
  "/",
  ensureAuthenticated,
  controller.create
);

tecnicasRoutes.get(
  "/",
  ensureAuthenticated,
  controller.list
);

export { tecnicasRoutes };