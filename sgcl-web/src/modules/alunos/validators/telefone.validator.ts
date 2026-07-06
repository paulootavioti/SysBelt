export function validarTelefone(telefone: string) {
  const telefoneLimpo = telefone.replace(/\D/g, "");

  return telefoneLimpo.length >= 10 && telefoneLimpo.length <= 11;
}