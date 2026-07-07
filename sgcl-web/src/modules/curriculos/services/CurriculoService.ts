import { ApiClient } from "../../../shared/api/ApiClient";
import type { Curriculo } from "../types/curriculo";
import type {
  CurriculoFormData,
  ModuloFormData,
  AulaCurriculoFormData,
  TecnicaCurriculoFormData,
} from "../schema/curriculo.schema";

export class CurriculoService {
  static async listar() {
    return ApiClient.get<Curriculo[]>("/curriculos");
  }

  static async criar(data: CurriculoFormData) {
    return ApiClient.post<Curriculo>("/curriculos", data);
  }

  static async criarModulo(data: ModuloFormData & { curriculoId: number }) {
    return ApiClient.post("/curriculos/modulos", data);
  }

  static async criarAula(
    data: Omit<AulaCurriculoFormData, "duracaoMinutos"> & {
      duracaoMinutos?: number;
      moduloId: number;
    }
  ) {
    return ApiClient.post("/curriculos/aulas", data);
  }

  static async criarTecnica(data: TecnicaCurriculoFormData & { aulaCurriculoId: number }) {
    return ApiClient.post("/curriculos/tecnicas", data);
  }
}