import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Alunos } from "../modules/alunos/pages/Listar";
import { AlunoDetalhes } from "../modules/alunos/pages/Detalhes";

import { CadastroAluno } from "../modules/alunos/pages/Cadastro";
import { EditarAluno } from "../modules/alunos/pages/Editar";

import { Aulas } from "../modules/aulas/pages/Listar";
import { ChamadaAula } from "../modules/aulas/pages/Chamada";
import { ProntuarioAluno } from "../modules/alunos/pages/Prontuario";

import { ProgramacaoAulas } from "../modules/aulas/pages/Programacao";

import { ListarMensalidades } from "../modules/mensalidades/pages/Listar";
import { DetalheMensalidade } from "../modules/mensalidades/pages/Detalhes";
import { NovaMensalidade } from "../modules/mensalidades/pages/Detalhes/novo";
import { Usuarios } from "../modules/usuarios/pages/Listar";
import { ListarGraduacoes } from "../modules/graduacoes/pages/Listar";
import { ProximasGraduacoes } from "../modules/graduacoes/pages/Proximas";
import { Relatorios } from "../modules/relatorios/pages/Listar";
import { Competicoes } from "../modules/competicoes/pages/Listar";
import { Financeiro } from "../modules/financeiro/pages/Listar";
import { DetalheCompeticao } from "../modules/competicoes/pages/Detalhes";
import { Curriculos } from "../modules/curriculos/pages/Listar";
import { PrivateRoute } from "./PrivateRoute";

import { Turmas } from "../modules/turmas/pages/Listar";
import { DetalheTurma } from "../modules/turmas/pages/Detalhes";

import { Planos } from "../modules/planos/pages/Listar";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/alunos"
        element={
          <PrivateRoute>
            <Alunos />
          </PrivateRoute>
        }
      />

      <Route
        path="/alunos/:id"
        element={
          <PrivateRoute>
            <AlunoDetalhes />
          </PrivateRoute>
        }
      />

      <Route
        path="/alunos/:id/prontuario"
        element={
          <PrivateRoute>
            <ProntuarioAluno />
          </PrivateRoute>
        }
      />

      <Route
        path="/alunos/cadastro"
        element={
          <PrivateRoute>
            <CadastroAluno />
          </PrivateRoute>
        }
      />

      <Route
        path="/alunos/:id/editar"
        element={
          <PrivateRoute>
            <EditarAluno />
          </PrivateRoute>
        }
      />

      <Route
        path="/aulas"
        element={
          <PrivateRoute>
            <Aulas />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/aulas/:id/chamada"
        element={
          <PrivateRoute>
            <ChamadaAula />
          </PrivateRoute>
        }
      />

      <Route
        path="/mensalidades"
        element={
          <PrivateRoute>
            <ListarMensalidades />
          </PrivateRoute>
        }
      />

      <Route
        path="/mensalidades/novo"
        element={
          <PrivateRoute>
            <NovaMensalidade />
          </PrivateRoute>
        }
      />

      <Route
        path="/mensalidades/:id"
        element={
          <PrivateRoute>
            <DetalheMensalidade />
          </PrivateRoute>
        }
      />

      <Route
        path="/graduacoes"
        element={
          <PrivateRoute>
            <ListarGraduacoes />
          </PrivateRoute>
        }
      />

      <Route
        path="/graduacoes/proximas"
        element={
          <PrivateRoute>
            <ProximasGraduacoes />
          </PrivateRoute>
        }
      />

      <Route
        path="/usuarios"
        element={
          <PrivateRoute>
            <Usuarios />
          </PrivateRoute>
        }
      />

      <Route
        path="/competicoes"
        element={
          <PrivateRoute>
            <Competicoes />
          </PrivateRoute>
        }
      />

      <Route
        path="/competicoes/:id"
        element={
          <PrivateRoute>
            <DetalheCompeticao />
          </PrivateRoute>
        }
      />
      
      <Route
        path="/relatorios"
        element={
          <PrivateRoute>
            <Relatorios />
          </PrivateRoute>
        }
      />  

      <Route
        path="/financeiro"
        element={
          <PrivateRoute>
            <Financeiro />
          </PrivateRoute>
        }
      />          
      
      <Route
        path="/planejamento"
        element={
          <PrivateRoute>
            <Curriculos />
          </PrivateRoute>
        }
      />

      <Route
        path="/turmas"
        element={
          <PrivateRoute>
            <Turmas />
          </PrivateRoute>
        }
      />

      <Route
        path="/turmas/:id"
        element={
          <PrivateRoute>
            <DetalheTurma />
          </PrivateRoute>
        }
      />

      <Route
        path="/planos"
        element={
          <PrivateRoute>
            <Planos />
          </PrivateRoute>
        }
      />

      <Route
        path="/aulas/programacao"
        element={
          <PrivateRoute>
            <ProgramacaoAulas />
          </PrivateRoute>
        }
      />

    </Routes>
  );
}
