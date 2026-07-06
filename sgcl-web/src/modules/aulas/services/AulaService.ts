import { api } from "../../../services/api";

import type { Aula, AulaAluno } from "../types";

interface StartAulaData {
  turmaId: number;
  professor?: string;
  observacoes?: string;
}

interface UpdateAulaAlunoData {
  presente?: boolean;

  respeito?: boolean;
  valentia?: boolean;
  esforco?: boolean;
  atencao?: boolean;
  disciplina?: boolean;

  observacao?: string | null;
}

export class AulaService {
  static async listar() {
    const response = await api.get<Aula[]>("/aulas");

    return response.data;
  }

  static async buscar(id: number) {
    const response = await api.get<Aula>(`/aulas/${id}`);

    return response.data;
  }

  static async iniciar(data: StartAulaData) {
    const response = await api.post<Aula>("/aulas", data);

    return response.data;
  }

  static async atualizarAluno(
    aulaAlunoId: number,
    data: UpdateAulaAlunoData
  ) {
    const response = await api.put<AulaAluno>(
      `/aulas/alunos/${aulaAlunoId}`,
      data
    );

    return response.data;
  }

  static async finalizar(id: number) {
    const response = await api.patch<Aula>(
      `/aulas/${id}/finalizar`
    );

    return response.data;
  }
}