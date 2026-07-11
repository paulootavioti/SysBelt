export interface MensagemGerada {
  alunoId: number;
  nome: string;
  apelido?: string | null;
  destinatario: "ALUNO" | "RESPONSAVEL";
  nomeDestinatario: string;
  telefone: string | null;
  mensagem: string;
}
