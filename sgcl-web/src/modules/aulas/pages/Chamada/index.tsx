import "./styles.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PageHeader } from "../../../../components/layout/PageHeader";
import { AulaAlunoCard } from "../../components/AulaAlunoCard";
import { Loading } from "../../../../components/ui/Loading";
import { Button } from "../../../../components/ui/Button";

import { Page } from "../../../../components/sgcl/layout/Page";
import { Section } from "../../../../components/sgcl/layout/Section";
import { InfoCard } from "../../../../components/sgcl/cards/InfoCard";
import { StatusBadge } from "../../../../components/sgcl/feedback/StatusBadge";

import { AulaService } from "../../services/AulaService";

import type { Aula, AulaAluno } from "../../types";

export function ChamadaAula() {
  const { id } = useParams();

  const [aula, setAula] = useState<Aula | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarAula() {
      if (!id) return;

      const data = await AulaService.buscar(Number(id));

      setAula(data);
      setLoading(false);
    }

    carregarAula();
  }, [id]);

  async function atualizarAluno(
    registro: AulaAluno,
    data: Partial<AulaAluno>
  ) {
    const atualizado = await AulaService.atualizarAluno(
      registro.id,
      data
    );

    setAula((old) => {
      if (!old) return old;

      return {
        ...old,
        alunos: old.alunos.map((item) =>
          item.id === registro.id
            ? {
                ...item,
                ...atualizado,
              }
            : item
        ),
      };
    });

  }

  async function finalizarAula() {
    if (!aula) return;

    await AulaService.finalizar(aula.id);

    const atualizada = await AulaService.buscar(aula.id);

    setAula(atualizada);
  }

  if (loading || !aula) {
    return (
      <Page>
        <Loading />
      </Page>
    );
  }

  return (
    <Page>
      <PageHeader
        title={`Chamada - ${aula.turma?.nome ?? "Aula"}`}
        subtitle={`Professor: ${aula.professor ?? "-"}`}
      />

        <div className="chamada-info-grid">
          <InfoCard
            title="Turma"
            value={aula.turma?.nome ?? "-"}
          />

          <InfoCard
            title="Professor"
            value={aula.professor ?? "-"}
          />

          <InfoCard
            title="Status"
            value={<StatusBadge status={aula.status} />}
          />
        </div>
        
        {aula.aulaCurriculo && (
        <Section
          title="Plano de Aula"
          description={aula.aulaCurriculo.titulo}
        >
          <div className="chamada-plano">
            {aula.aulaCurriculo.objetivo && (
              <p><strong>🎯 Objetivo:</strong> {aula.aulaCurriculo.objetivo}</p>
            )}

            {aula.aulaCurriculo.jogosSugeridos && (
              <p><strong>🎮 Jogos sugeridos:</strong> {aula.aulaCurriculo.jogosSugeridos}</p>
            )}

            {aula.aulaCurriculo.tecnicas.length > 0 && (
              <div className="chamada-plano-tecnicas">
                <strong>Técnicas sugeridas:</strong>
                <div className="chamada-plano-tecnicas-lista">
                  {aula.aulaCurriculo.tecnicas.map((tecnica) => (
                    <span key={tecnica.id} className="chamada-plano-tecnica">
                      {tecnica.nome}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Section>
      )}

    <Section
      title="Chamada"
      description="Marque presença e comportamento dos alunos."
    >
      {aula.alunos.map((registro) => (
        <AulaAlunoCard
          key={registro.id}
          registro={registro}
          aulaFinalizada={aula.status === "FINALIZADA"}
          onChange={atualizarAluno}
        />
      ))}

    </Section>

      {aula.status === "ABERTA" && (
        <Button type="button" onClick={finalizarAula}>
          Finalizar Aula
        </Button>
      )}

    </Page>

  );
}