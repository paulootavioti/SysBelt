export function somenteNumeros(valor: string) {
  return valor.replace(/\D/g, "");
}

export function validarCPF(cpf: string) {
  const cpfLimpo = somenteNumeros(cpf);

  return cpfLimpo.length === 11;
}