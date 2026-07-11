import { Layout } from "../../../../components/layout/Layout";
import { PageHeader } from "../../../../components/layout/PageHeader";
import { Tabs } from "../../../../components/ui/Tabs";

import { MensagemLista } from "../../components/MensagemLista";
import { MensagemService } from "../../services/MensagemService";

export function Mensagens() {
  return (
    <Layout>
      <PageHeader
        title="Mensagens"
        subtitle="Modelos de mensagem prontos para enviar pelo WhatsApp Web."
      />

      <Tabs
        tabs={[
          {
            label: "Lembrete de Treino",
            value: "lembrete-semanal",
            content: (
              <MensagemLista
                carregar={MensagemService.lembreteSemanal}
                tituloVazio="Nenhum lembrete para enviar"
                descricaoVazio="Não há alunos com turma cadastrada no momento."
              />
            ),
          },
          {
            label: "Vencimento Próximo",
            value: "lembrete-vencimento",
            content: (
              <MensagemLista
                carregar={MensagemService.lembreteVencimento}
                tituloVazio="Nenhum vencimento próximo"
                descricaoVazio="Não há mensalidades vencendo em 5 dias."
              />
            ),
          },
          {
            label: "Mensalidade Atrasada",
            value: "lembrete-atraso",
            content: (
              <MensagemLista
                carregar={MensagemService.lembreteAtraso}
                tituloVazio="Nenhuma mensalidade atrasada"
                descricaoVazio="Não há mensalidades com 10 dias de atraso."
              />
            ),
          },
          {
            label: "Relatório Mensal",
            value: "relatorio-mensal",
            content: (
              <MensagemLista
                carregar={MensagemService.relatorioMensal}
                tituloVazio="Nenhum relatório disponível"
                descricaoVazio="Não há aulas registradas neste mês ainda."
              />
            ),
          },
          {
            label: "Congratulações",
            value: "congratulacoes-graduacao",
            content: (
              <MensagemLista
                carregar={MensagemService.congratulacoesGraduacao}
                tituloVazio="Nenhuma graduação recente"
                descricaoVazio="Não há trocas de faixa nos últimos 7 dias."
              />
            ),
          },
          {
            label: "Ausência",
            value: "ausencia",
            content: (
              <MensagemLista
                carregar={MensagemService.ausencia}
                tituloVazio="Nenhuma ausência detectada"
                descricaoVazio="Não há alunos ausentes há mais de 14 dias."
              />
            ),
          },
        ]}
      />
    </Layout>
  );
}
