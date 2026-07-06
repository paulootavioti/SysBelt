import type { AulaAluno } from "../../types";

export interface AulaAlunoCardProps {
  registro: AulaAluno;
  aulaFinalizada: boolean;

  onChange(
    registro: AulaAluno,
    data: Partial<AulaAluno>
  ): void;
}