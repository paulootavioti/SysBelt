export interface MensagemGerada {
  alunoId: number;
  nome: string;
  apelido?: string | null;
  destinatario: "ALUNO" | "RESPONSAVEL";
  nomeDestinatario: string;
  telefone: string | null;
  mensagem: string;
}

export function formatarTelefoneWhatsapp(telefone?: string | null): string | null {
  if (!telefone) return null;

  const digitos = telefone.replace(/\D/g, "");

  if (!digitos) return null;

  if (digitos.startsWith("55") && digitos.length >= 12) {
    return digitos;
  }

  return `55${digitos}`;
}

export function calcularIdade(dataNascimento: Date): number {
  const hoje = new Date();

  let idade = hoje.getFullYear() - dataNascimento.getFullYear();

  const aniversarioNaoChegou =
    hoje.getMonth() < dataNascimento.getMonth() ||
    (hoje.getMonth() === dataNascimento.getMonth() && hoje.getDate() < dataNascimento.getDate());

  if (aniversarioNaoChegou) {
    idade--;
  }

  return idade;
}

export function formatarDataBr(data: Date): string {
  return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

export function formatarValorBr(valor: number): string {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
