import { Router } from "express";

import { RelatoriosController }
from "./controller";

import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../shared/middlewares/ensureRole";

const relatoriosRoutes =
  Router();

const relatoriosController =
  new RelatoriosController();

relatoriosRoutes.get(
  "/evolucao/:alunoId",
  ensureAuthenticated,
  ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
  relatoriosController.evolucao
);

relatoriosRoutes.get(
  "/financeiro",
  ensureAuthenticated,
  ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
  relatoriosController.financeiro
);

relatoriosRoutes.get(
  "/ranking",
  ensureAuthenticated,
  ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
  relatoriosController.ranking
);

relatoriosRoutes.get(
  "/aniversariantes",
  ensureAuthenticated,
  ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
  relatoriosController.aniversariantes
);

relatoriosRoutes.get(
  "/comportamental/:alunoId",
  ensureAuthenticated,
  ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
  relatoriosController.comportamental
);

export {
  relatoriosRoutes
};