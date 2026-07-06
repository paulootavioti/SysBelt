export function somenteNumeros(value: string) {
  return value.replace(/\D/g, "");
}

export function maskCPF(value: string) {
  const numbers = somenteNumeros(value).slice(0, 11);

  return numbers
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function maskCEP(value: string) {
  const numbers = somenteNumeros(value).slice(0, 8);

  return numbers.replace(/(\d{5})(\d)/, "$1-$2");
}

export function maskTelefone(value: string) {
  const numbers = somenteNumeros(value).slice(0, 11);

  if (numbers.length <= 10) {
    return numbers
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numbers
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}