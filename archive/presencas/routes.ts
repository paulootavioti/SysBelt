import { Router } from "express";
import { PresencasController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../shared/middlewares/ensureRole";

const presencasRoutes = Router();

const presencasController = new PresencasController();

presencasRoutes.post("/",
  ensureAuthenticated,
  ensureRole([
    "ADMIN",
    "PROFESSOR"
  ]),
  presencasController.create
);

presencasRoutes.get("/",
ensureAuthenticated,
ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
 presencasController.list);

presencasRoutes.get("/aluno/:id",
ensureAuthenticated,
ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
 presencasController.aluno);

presencasRoutes.get("/ranking",
ensureAuthenticated,
ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
 presencasController.ranking);

presencasRoutes.get("/inativos",
ensureAuthenticated,
ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
 presencasController.inativos);

export { presencasRoutes };