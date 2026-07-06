export interface TurmaResumo {
  id: number;
  nome: string;
  professor: string;
}

export interface AulaAluno {
  id: number;
  aulaId: number;
  alunoId: number;

  presente: boolean;

  respeito: boolean;
  valentia: boolean;
  esforco: boolean;
  atencao: boolean;
  disciplina: boolean;

  observacao?: string | null;

  aluno: {
    id: number;
    nome: string;
    faixa: string;
    grau: number;
  };
}

export interface Aula {
  id: number;
  data: string;
  professor?: string | null;
  observacoes?: string | null;
  status: "ABERTA" | "FINALIZADA";

  turma?: TurmaResumo | null;

  alunos: AulaAluno[];
}