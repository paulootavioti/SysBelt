import { useState } from "react";
import { CORES_FAIXA } from "../types";
import { formatarData } from "../utils/helpers";
import "./TimelineGraduacoes.css";

interface GraduacaoTimelineItem {
  id: number;
  faixa: string;
  data: string;
}

interface TimelineGraduacoesProps {
  graduacoes: GraduacaoTimelineItem[];
}

export function TimelineGraduacoes({ graduacoes }: TimelineGraduacoesProps) {
  const [agora] = useState(() => Date.now());

  const graduacoesOrdenadas = [...graduacoes].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );

  if (graduacoesOrdenadas.length === 0) {
    return <p className="timeline-vazia">Nenhuma graduação registrada.</p>;
  }

  return (
    <div className="timeline-graduacoes">
      {graduacoesOrdenadas.map((grad, idx) => {
        const cor = CORES_FAIXA[grad.faixa];
        const diasDesde = Math.floor((agora - new Date(grad.data).getTime()) / (1000 * 60 * 60 * 24));

        return (
          <div key={grad.id} className="timeline-item">
            <div className="timeline-marcador">
              <span
                className="timeline-ponto"
                style={{
                  background: cor?.background ?? "#9CA3AF",
                  border: grad.faixa === "Branca" ? "1px solid var(--color-border)" : undefined,
                }}
              />
              {idx < graduacoesOrdenadas.length - 1 && <span className="timeline-linha" />}
            </div>

            <div className="timeline-conteudo">
              <div className="timeline-conteudo-header">
                <strong>{grad.faixa}</strong>
                <span className="timeline-data">{formatarData(grad.data)}</span>
              </div>
              <p className="timeline-descricao">
                {idx === 0 ? "Faixa atual" : `Conquistada há ${diasDesde} dias`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}