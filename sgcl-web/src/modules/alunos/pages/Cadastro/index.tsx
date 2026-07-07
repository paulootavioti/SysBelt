import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../../../../components/layout/Layout";
import { PageHeader } from "../../../../components/layout/PageHeader";
import { ErrorMessage } from "../../../../components/ui/ErrorMessage";

import { AlunoForm } from "../../components/AlunoForm";
import { AlunoService } from "../../services/AlunoService";
import { getApiErrorMessage } from "../../../../shared/utils/getApiErrorMessage";

import type { AlunoFormData } from "../../schema/aluno.schema";


export function CadastroAluno() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  
  async function handleSalvar(data: AlunoFormData) {
    try {
      setLoading(true);
      setErro("");
  
      await AlunoService.criar(data);
      
      navigate("/alunos");
    } catch (error) {
      setErro(
        getApiErrorMessage(
          error,
          "Erro ao cadastrar aluno."
        )
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <PageHeader
        title="Cadastro de Aluno"
        subtitle="Novo aluno da academia."
      />

      <ErrorMessage message={erro} />

      <AlunoForm
        loading={loading}
        onSubmit={handleSalvar}
      />
    </Layout>
  );
}