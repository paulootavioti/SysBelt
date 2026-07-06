import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../../components/ui/Card";
import { Layout } from "../../components/layout/Layout";
import { PageHeader } from "../../components/layout/PageHeader";
import { Loading } from "../../components/ui/Loading";

interface DashboardData {
  alunosAtivos: number;
  responsaveis: number;
  mensalidadesPendentes: number;
  mensalidadesVencidas: number;
  totalRecebido: number;
  totalPendente: number;
  presencasHoje: number;
  graduacoes: number;
  competicoes: number;
}

export function Dashboard() {
  const [dados, setDados] =
    useState<DashboardData | null>(null);

  useEffect(() => {
    api.get("/dashboard").then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) {
    return <Loading />;
  }

  return (
    <Layout>
    <div style={{ padding: 24 }}>
    <PageHeader
    title="Dashboard"
    subtitle="Resumo geral da academia."
/>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 24,
        }}
      >
        <Card titulo="Alunos Ativos" valor={dados.alunosAtivos} />
        <Card titulo="Responsáveis" valor={dados.responsaveis} />
        <Card titulo="Mensalidades Pendentes" valor={dados.mensalidadesPendentes} />
        <Card titulo="Mensalidades Vencidas" valor={dados.mensalidadesVencidas} />
        <Card titulo="Total Recebido" valor={`R$ ${dados.totalRecebido.toFixed(2)}`} />
        <Card titulo="Total Pendente" valor={`R$ ${dados.totalPendente.toFixed(2)}`} />
        <Card titulo="Presenças Hoje" valor={dados.presencasHoje} />
        <Card titulo="Graduações" valor={dados.graduacoes} />
        <Card titulo="Competições" valor={dados.competicoes} />
      </div>
    </div>
    </Layout>
  );
}