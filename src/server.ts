import express from "express";

import cors from "cors";
import "dotenv/config";


import { alunosRoutes } from "./modules/alunos/routes";
import { responsaveisRoutes } from "./modules/responsaveis/routes";
import { mensalidadesRoutes } from "./modules/mensalidades/routes";
//import { presencasRoutes } from "./modules/presencas/routes";
import { graduacoesRoutes } from "./modules/graduacoes/routes";
import { competicoesRoutes } from "./modules/competicoes/routes";
import { dashboardRoutes } from "./modules/dashboard/routes";
import { financeiroRoutes } from "./modules/financeiro/routes";
import { errorHandler } from "./shared/middlewares/errorHandler";
import { relatoriosRoutes } from "./modules/relatorios/routes";
import { comportamentosRoutes } from "./modules/comportamentos/routes";
import { turmasRoutes } from "./modules/turmas/routes";
import { authRoutes } from "./modules/auth/routes";
import { usuariosRoutes } from "./modules/usuarios/routes";
import { aulasRoutes } from "./modules/aulas/routes";
import { tecnicasRoutes } from "./modules/tecnicas/routes";
import { curriculosRoutes } from "./modules/curriculos/routes";
import { planosRoutes } from "./modules/planos/routes";
const app = express();

app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.get("/", (req, res) => {
  console.log("Entrou na rota raiz");

  return res.json({
    projeto: "SGCL",
    versao: "1.0.0",
  });
});

app.use("/alunos", alunosRoutes);
app.use("/responsaveis", responsaveisRoutes);
app.use("/mensalidades", mensalidadesRoutes);
//app.use("/presencas", presencasRoutes);
app.use("/graduacoes", graduacoesRoutes);
app.use("/competicoes", competicoesRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/financeiro",financeiroRoutes);
app.use("/relatorios", relatoriosRoutes);
app.use("/comportamentos", comportamentosRoutes);
app.use("/turmas", turmasRoutes);
app.use("/usuarios", usuariosRoutes);
app.use("/aulas", aulasRoutes);
app.use("/tecnicas", tecnicasRoutes);
app.use("/curriculos", curriculosRoutes);
app.use("/planos", planosRoutes);

app.use("/auth", authRoutes);
app.use(errorHandler);

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});