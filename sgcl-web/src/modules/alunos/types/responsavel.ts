export interface Responsavel {
  id: number;
  nome: string;

  cpf?: string | null;
  rg?: string | null;
  dataNascimento?: string | null;
  sexo?: string | null;

  telefone?: string | null;
  whatsapp?: string | null;
  email?: string | null;

  parentesco?: string | null;

  responsavelFinanceiro?: boolean;
  podeBuscar?: boolean;
  contatoEmergencia?: boolean;
  recebeComunicados?: boolean;

  observacoes?: string | null;
  fotoUrl?: string | null;

  ativo?: boolean;
  alunoId?: number;
}