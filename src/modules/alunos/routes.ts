import { Router } from "express";
import { AlunosController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../shared/middlewares/ensureRole";

const alunosRoutes = Router();

const alunosController =
  new AlunosController();


  alunosRoutes.post(
    "/",
    ensureAuthenticated,
    ensureRole(["ADMIN", "RECEPCAO"]),
    alunosController.create
  );
  
  alunosRoutes.get(
    "/",
    ensureAuthenticated,
    ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
    alunosController.list
  );
  
  alunosRoutes.get(
    "/aniversariantes",
    ensureAuthenticated,
    ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
    alunosController.aniversariantes
  );

  alunosRoutes.get(
    "/:id/prontuario",
    ensureAuthenticated,
    ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
    alunosController.prontuario
  );
  
  alunosRoutes.get(
    "/:id",
    ensureAuthenticated,
    ensureRole(["ADMIN", "PROFESSOR", "RECEPCAO"]),
    alunosController.show
  );
  
  alunosRoutes.put(
    "/:id",
    ensureAuthenticated,
    ensureRole(["ADMIN", "RECEPCAO"]),
    alunosController.update
  );
  
  alunosRoutes.patch(
    "/:id/ativo",
    ensureAuthenticated,
    ensureRole(["ADMIN", "RECEPCAO"]),
    alunosController.toggleAtivo
  );

  
// temporariamente comentado
// alunosRoutes.get(
//   "/aniversariantes",
//   alunosController.aniversariantes
// );


export { alunosRoutes };