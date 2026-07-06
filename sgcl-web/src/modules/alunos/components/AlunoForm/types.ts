import type { Aluno } from "../../types";
import type { AlunoFormData } from "../../schema/aluno.schema";

export interface AlunoFormProps {
  aluno?: Partial<Aluno>;
  loading?: boolean;
  onSubmit: (data: AlunoFormData) => void;
}

