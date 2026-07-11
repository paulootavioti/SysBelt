export function linkWhatsapp(telefone: string | null | undefined, mensagem: string): string | null {
  if (!telefone) return null;

  return `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
}

export function formatarTelefoneWhatsapp(telefone?: string | null): string | null {
  if (!telefone) return null;

  const digitos = telefone.replace(/\D/g, "");
  if (!digitos) return null;

  if (digitos.startsWith("55") && digitos.length >= 12) return digitos;

  return `55${digitos}`;
}
