import { Router } from "express";

import { CurriculosController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";

const curriculosRoutes = Router();

const controller = new CurriculosController();

curriculosRoutes.post(
  "/",
  ensureAuthenticated,
  controller.create
);

curriculosRoutes.get(
  "/",
  ensureAuthenticated,
  controller.list
);

curriculosRoutes.get(
  "/:id",
  ensureAuthenticated,
  controller.show
);

export { curriculosRoutes };