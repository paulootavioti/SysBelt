import { ApiClient } from "../../../shared/api/ApiClient";
import type { Plano } from "../types/plano";
import type { PlanoFormData } from "../schema/plano.schema";

export class PlanoService {
  static async listar() {
    return ApiClient.get<Plano[]>("/planos");
  }

  static async criar(data: PlanoFormData) {
    return ApiClient.post<Plano>("/planos", {
      nome: data.nome,
      valor: Number(data.valor),
      periodicidade: data.periodicidade,
    });
  }

  static async editar(id: number, data: PlanoFormData) {
    return ApiClient.put<Plano>(`/planos/${id}`, {
      nome: data.nome,
      valor: Number(data.valor),
      periodicidade: data.periodicidade,
    });
  }

  static async alterarStatus(id: number) {
    return ApiClient.patch<Plano>(`/planos/${id}/ativo`);
  }
}
