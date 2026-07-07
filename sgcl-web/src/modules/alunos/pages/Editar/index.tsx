import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Layout } from "../../../../components/layout/Layout";
import { PageHeader } from "../../../../components/layout/PageHeader";
import { ErrorMessage } from "../../../../components/ui/ErrorMessage";
import { Loading } from "../../../../components/ui/Loading";

import { AlunoForm } from "../../components/AlunoForm";
import { AlunoService } from "../../services/AlunoService";
import { getApiErrorMessage } from "../../../../shared/utils/getApiErrorMessage";

import type { Aluno } from "../../types";
import type { AlunoFormData } from "../../schema/aluno.schema";

export function EditarAluno() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarAluno() {
      try {
        setLoading(true);

        const data = await AlunoService.buscar(Number(id));

        setAluno(data);
      } catch (error) {
        setErro(
          getApiErrorMessage(
            error,
            "Erro ao carregar aluno."
          )
        );
      } finally {
        setLoading(false);
      }
    }

    carregarAluno();
  }, [id]);

  async function handleSalvar(data: AlunoFormData) {
    try {
      setSalvando(true);
      setErro("");

      await AlunoService.editar(Number(id), data);

      navigate("/alunos");
    } catch (error) {
      setErro(
        getApiErrorMessage(
          error,
          "Erro ao editar aluno."
        )
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <Layout>
      <PageHeader
        title="Editar Aluno"
        subtitle="Alteração dos dados do aluno."
      />

      <ErrorMessage message={erro} />

      {loading ? (
        <Loading />
      ) : (
        <AlunoForm
          aluno={aluno ?? undefined}
          loading={salvando}
          onSubmit={handleSalvar}
        />
      )}
    </Layout>
  );
}