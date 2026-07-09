import type { EvolucaoAluno } from "../types";
import "./ProgressBar.css";

interface ProgressBarProps {
  evolucao: EvolucaoAluno;
}

export function ProgressBar({ evolucao }: ProgressBarProps) {
  const percentualGrau = Math.min(((evolucao.presencas % 32) / 8) * 25, 100);
  const percentualFaixa = Math.min(((evolucao.presencas % 32) / 32) * 100, 100);

  return (
    <div className="progresso-graduacao">
      <div className="progresso-item">
        <div className="progresso-item-header">
          <span className="progresso-item-label">Faixa Atual — {evolucao.faixaAtual}</span>
          <span className="progresso-item-valor">{evolucao.presencas} aulas</span>
        </div>
        <div className="progresso-barra">
          <div className="progresso-barra-preenchimento progresso-barra-faixa" style={{ width: `${percentualFaixa}%` }} />
        </div>
        <p className="progresso-item-nota">
          Faltam {evolucao.faltamParaProximaFaixa} aulas para a próxima faixa
        </p>
      </div>

      <div className="progresso-item">
        <div className="progresso-item-header">
          <span className="progresso-item-label">Progresso no Grau</span>
          <span className="progresso-item-valor">Grau {evolucao.grauAtual + 1} de 4</span>
        </div>
        <div className="progresso-barra progresso-barra-pequena">
          <div className="progresso-barra-preenchimento progresso-barra-grau" style={{ width: `${percentualGrau}%` }} />
        </div>
        <p className="progresso-item-nota">
          Faltam {evolucao.faltamParaProximoGrau} aulas para o próximo grau
        </p>
      </div>
    </div>
  );
}