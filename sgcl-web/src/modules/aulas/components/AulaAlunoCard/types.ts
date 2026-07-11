import type { AulaAluno } from "../../types";

export interface AulaAlunoCardProps {
  registro: AulaAluno;
  aulaFinalizada: boolean;
  dataAula: string;

  onChange(
    registro: AulaAluno,
    data: Partial<AulaAluno>
  ): void;
}