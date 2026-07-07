import { useState } from "react";

import { Layout } from "../../../../components/layout/Layout";
import { PageHeader } from "../../../../components/layout/PageHeader";
import { Button } from "../../../../components/ui/Button";
import { ErrorMessage } from "../../../../components/ui/ErrorMessage";
import { Loading } from "../../../../components/ui/Loading";
import { EmptyState } from "../../../../components/ui/EmptyState";
import { Modal } from "../../../../components/ui/Modal";
import { Badge } from "../../../../components/ui/Badge";

import { useCurriculos } from "../../hooks/useCurriculos";
import { CurriculoService } from "../../services/CurriculoService";
import { getApiErrorMessage } from "../../../../shared/utils/getApiErrorMessage";

import { CurriculoForm } from "../../components/CurriculoForm";
import { ModuloForm } from "../../components/ModuloForm";
import { AulaCurriculoForm } from "../../components/AulaCurriculoForm";
import { TecnicaCurriculoForm } from "../../components/TecnicaCurriculoForm";

import type {
  CurriculoFormData,
  ModuloFormData,
  AulaCurriculoFormData,
  TecnicaCurriculoFormData,
} from "../../schema/curriculo.schema";

import "./styles.css";

type ModalState =
  | { tipo: "curriculo" }
  | { tipo: "modulo"; curriculoId: number }
  | { tipo: "aula"; moduloId: number }
  | { tipo: "tecnica"; aulaCurriculoId: number }
  | null;

export function Curriculos() {
  const { curriculos, loading, erro, setErro, carregarCurriculos } = useCurriculos();
  const [modal, setModal] = useState<ModalState>(null);
  const [salvando, setSalvando] = useState(false);

  async function handleCriarCurriculo(data: CurriculoFormData) {
    try {
      setSalvando(true);
      setErro("");
      await CurriculoService.criar(data);
      await carregarCurriculos();
      setModal(null);
    } catch (error) {
      setErro(getApiErrorMessage(error, "Erro ao cadastrar currículo."));
    } finally {
      setSalvando(false);
    }
  }

  async function handleCriarModulo(data: ModuloFormData, curriculoId: number) {
    try {
      setSalvando(true);
      setErro("");
      await CurriculoService.criarModulo({ ...data, curriculoId });
      await carregarCurriculos();
      setModal(null);
    } catch (error) {
      setErro(getApiErrorMessage(error, "Erro ao cadastrar módulo."));
    } finally {
      setSalvando(false);
    }
  }

  async function handleCriarAula(data: AulaCurriculoFormData, moduloId: number) {
    try {
      setSalvando(true);
      setErro("");
      await CurriculoService.criarAula({
        ...data,
        duracaoMinutos: data.duracaoMinutos ? Number(data.duracaoMinutos) : undefined,
        moduloId,
      });
      await carregarCurriculos();
      setModal(null);
    } catch (error) {
      setErro(getApiErrorMessage(error, "Erro ao cadastrar aula."));
    } finally {
      setSalvando(false);
    }
  }

  async function handleCriarTecnica(data: TecnicaCurriculoFormData, aulaCurriculoId: number) {
    try {
      setSalvando(true);
      setErro("");
      await CurriculoService.criarTecnica({ ...data, aulaCurriculoId });
      await carregarCurriculos();
      setModal(null);
    } catch (error) {
      setErro(getApiErrorMessage(error, "Erro ao cadastrar técnica."));
    } finally {
      setSalvando(false);
    }
  }

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title="Planejamento Pedagógico"
        subtitle="Currículo, módulos, aulas planejadas, técnicas sugeridas e jogos."
      />

      <ErrorMessage message={erro} />

      <div className="curriculos-acoes">
        <Button type="button" onClick={() => setModal({ tipo: "curriculo" })}>
          + Novo Currículo
        </Button>
      </div>

      {curriculos.length === 0 ? (
        <EmptyState
          title="Nenhum currículo cadastrado"
          description="Cadastre o primeiro currículo pedagógico."
        />
      ) : (
        curriculos.map((curriculo) => (
          <div key={curriculo.id} className="curriculo-card">
            <div className="curriculo-card-header">
              <div>
                <h2>{curriculo.nome}</h2>
                <p>{curriculo.modalidade} — {curriculo.publico}</p>
              </div>

              <Button
                type="button"
                variant="secondary"
                onClick={() => setModal({ tipo: "modulo", curriculoId: curriculo.id })}
              >
                + Módulo
              </Button>
            </div>

            {curriculo.modulos.length === 0 ? (
              <p className="curriculos-vazio">Nenhum módulo cadastrado.</p>
            ) : (
              curriculo.modulos.map((modulo) => (
                <div key={modulo.id} className="modulo-card">
                  <div className="modulo-card-header">
                    <div>
                      <h3>{modulo.nome}</h3>
                      {modulo.faixa && <span className="modulo-faixa">{modulo.faixa}</span>}
                    </div>

                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setModal({ tipo: "aula", moduloId: modulo.id })}
                    >
                      + Aula
                    </Button>
                  </div>

                  {modulo.aulas.length === 0 ? (
                    <p className="curriculos-vazio">Nenhuma aula planejada.</p>
                  ) : (
                    modulo.aulas.map((aula) => (
                      <div key={aula.id} className="aula-curriculo-card">
                        <div className="aula-curriculo-header">
                          <div>
                            <h4>{aula.titulo}</h4>
                            {aula.objetivo && <p>🎯 {aula.objetivo}</p>}
                            {aula.duracaoMinutos && <p>⏱ {aula.duracaoMinutos} min</p>}
                            {aula.jogosSugeridos && <p>🎮 {aula.jogosSugeridos}</p>}
                          </div>

                          <Button
                            type="button"
                            variant="secondary"
                            onClick={() => setModal({ tipo: "tecnica", aulaCurriculoId: aula.id })}
                          >
                            + Técnica
                          </Button>
                        </div>

                        {aula.tecnicas.length > 0 && (
                          <div className="tecnicas-lista">
                            {aula.tecnicas.map((tecnica) => (
                              <Badge
                                key={tecnica.id}
                                variant={tecnica.obrigatoria ? "info" : "neutral"}
                              >
                                {tecnica.nome}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              ))
            )}
          </div>
        ))
      )}

      <Modal open={modal?.tipo === "curriculo"} title="Novo Currículo" onClose={() => setModal(null)}>
        <CurriculoForm loading={salvando} onSubmit={handleCriarCurriculo} />
      </Modal>

      <Modal open={modal?.tipo === "modulo"} title="Novo Módulo" onClose={() => setModal(null)}>
        <ModuloForm
          loading={salvando}
          onSubmit={(data) => modal?.tipo === "modulo" && handleCriarModulo(data, modal.curriculoId)}
        />
      </Modal>

      <Modal open={modal?.tipo === "aula"} title="Nova Aula Planejada" onClose={() => setModal(null)}>
        <AulaCurriculoForm
          loading={salvando}
          onSubmit={(data) => modal?.tipo === "aula" && handleCriarAula(data, modal.moduloId)}
        />
      </Modal>

      <Modal open={modal?.tipo === "tecnica"} title="Nova Técnica Sugerida" onClose={() => setModal(null)}>
        <TecnicaCurriculoForm
          loading={salvando}
          onSubmit={(data) => modal?.tipo === "tecnica" && handleCriarTecnica(data, modal.aulaCurriculoId)}
        />
      </Modal>
    </Layout>
  );
}