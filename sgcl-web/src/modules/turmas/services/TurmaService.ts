import { api } from "../../../services/api";

export interface TurmaOption {
  id: number;
  nome: string;
}

export class TurmaService {
  static async listar() {
    const response = await api.get<TurmaOption[]>("/turmas");

    return response.data;
  }
}