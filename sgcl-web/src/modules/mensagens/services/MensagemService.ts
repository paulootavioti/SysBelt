import { ApiClient } from "../../../shared/api/ApiClient";
import type { MensagemGerada } from "../types/mensagem";

export class MensagemService {
  static async lembreteSemanal() {
    return ApiClient.get<MensagemGerada[]>("/mensagens/lembrete-semanal");
  }

  static async lembreteVencimento() {
    return ApiClient.get<MensagemGerada[]>("/mensagens/lembrete-vencimento");
  }

  static async lembreteAtraso() {
    return ApiClient.get<MensagemGerada[]>("/mensagens/lembrete-atraso");
  }

  static async relatorioMensal() {
    return ApiClient.get<MensagemGerada[]>("/mensagens/relatorio-mensal");
  }

  static async congratulacoesGraduacao() {
    return ApiClient.get<MensagemGerada[]>("/mensagens/congratulacoes-graduacao");
  }

  static async ausencia() {
    return ApiClient.get<MensagemGerada[]>("/mensagens/ausencia");
  }
}
