export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export class ViaCepService {
  static async buscar(cep: string): Promise<ViaCepResponse | null> {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      return null;
    }

    const response = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    const data: ViaCepResponse = await response.json();

    if (data.erro) {
      return null;
    }

    return data;
  }
}