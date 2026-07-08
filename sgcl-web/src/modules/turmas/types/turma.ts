export interface Turma {
  id: number;
  nome: string;
  faixaEtaria: string;
  diasSemana: string;
  horarioInicio: string;
  horarioFim: string;
  professor: string;
  ativo: boolean;
  createdAt: string;
}

export interface AlunoDaTurma {
  id: number;
  nome: string;
  faixa: string;
  ativo: boolean;
}

export interface TurmaDetalhada extends Turma {
  alunos: AlunoDaTurma[];
}