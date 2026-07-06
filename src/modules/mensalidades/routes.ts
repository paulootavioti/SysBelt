import { Router } from "express";
import { MensalidadesController } from "./controller";
import { ensureAuthenticated } from "../../shared/middlewares/ensureAuthenticated";
import { ensureRole } from "../../shared/middlewares/ensureRole";

const mensalidadesRoutes = Router();

const mensalidadesController =
  new MensalidadesController();

mensalidadesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureRole(["ADMIN", "RECEPCAO"]),
  mensalidadesController.create
);

mensalidadesRoutes.get(
  "/",
  ensureAuthenticated,
  ensureRole(["ADMIN", "RECEPCAO"]),
  mensalidadesController.list
);

mensalidadesRoutes.get(
  "/vencidas",
  ensureAuthenticated,
  ensureRole(["ADMIN", "RECEPCAO"]),
  mensalidadesController.vencidas
);

mensalidadesRoutes.patch(
  "/:id/pagar",
  ensureAuthenticated,
  ensureRole(["ADMIN"]),
  mensalidadesController.pagar
);

//Migrado para financeiro
// mensalidadesRoutes.get(
//   "/inadimplentes",
//   mensalidadesController.inadimplentes
// );

export { mensalidadesRoutes };