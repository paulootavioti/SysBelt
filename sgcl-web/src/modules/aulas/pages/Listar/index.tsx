import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../../../../components/layout/Layout";
import { PageHeader } from "../../../../components/layout/PageHeader";
import { CrudDataTable } from "../../../../components/ui/CrudDataTable";
import { Badge } from "../../../../components/ui/Badge";

import { AulaService } from "../../services/AulaService";

import type { Aula } from "../../types";

export function Aulas() {
  const navigate = useNavigate();

  const [aulas, setAulas] = useState<Aula[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarAulas() {
      try {
        const data = await AulaService.listar();
        setAulas(data);
      } finally {
        setLoading(false);
      }
    }

    carregarAulas();
  }, []);

  return (
    <Layout>
      <PageHeader
        title="Aulas"
        subtitle="Controle das aulas e chamadas."
      />

      <CrudDataTable
        title="Aulas"
        description="Aulas iniciadas no sistema."
        data={aulas}
        loading={loading}
        searchable
        searchPlaceholder="Pesquisar aula..."
        searchKeys={["professor", "status"]}
        createLabel="Iniciar Aula"
        onCreate={() => {
          console.log("Iniciar aula");
        }}
        onEdit={(aula) => {
          navigate(`/aulas/${aula.id}/chamada`);
        }}
        columns={[
          {
            header: "Turma",
            render: (aula) => aula.turma?.nome ?? "-",
          },
          {
            header: "Professor",
            render: (aula) => aula.professor ?? "-",
          },
          {
            header: "Data",
            render: (aula) =>
              new Date(aula.data).toLocaleDateString("pt-BR"),
          },
          {
            header: "Status",
            align: "center",
            render: (aula) =>
              aula.status === "ABERTA" ? (
                <Badge variant="warning">Aberta</Badge>
              ) : (
                <Badge variant="success">Finalizada</Badge>
              ),
          },
        ]}
        emptyMessage="Nenhuma aula encontrada."
      />
    </Layout>
  );
}