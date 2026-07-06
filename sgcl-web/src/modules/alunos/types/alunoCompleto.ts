import type { Aluno } from "./aluno";
import type { Responsavel } from "./responsavel";
import type { Presenca } from "./presenca";
import type { Graduacao } from "./graduacao";
import type { Mensalidade } from "./mensalidade";

export interface AlunoCompleto extends Aluno {
  responsaveis?: Responsavel[];
  presencas?: Presenca[];
  graduacoes?: Graduacao[];
  mensalidades?: Mensalidade[];
}