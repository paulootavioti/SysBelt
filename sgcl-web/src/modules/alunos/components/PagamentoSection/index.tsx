import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { Select } from "../../../../components/ui/Select";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormSection } from "../../../../components/ui/FormSection";

import { FORMAS_PAGAMENTO } from "../../../../shared/constants/formaPagamento";
import { PlanoService } from "../../../planos/services/PlanoService";
import type { Plano } from "../../../planos/types/plano";

import type { AlunoFormData } from "../../schema/aluno.schema";

export function PagamentoSection() {
  const { register } = useFormContext<AlunoFormData>();
  const [planos, setPlanos] = useState<Plano[]>([]);

  useEffect(() => {
    PlanoService.listar().then((data) => setPlanos(data.filter((plano) => plano.ativo)));
  }, []);

  return (
    <FormSection
      title="Pagamento"
      subtitle="Forma de pagamento e plano contratado."
    >
      <FormGrid columns={2}>
        <Select label="Forma de Pagamento" options={FORMAS_PAGAMENTO} {...register("formaPagamento")} />

        <Input
          label="Dia de vencimento"
          type="number"
          min="1"
          max="31"
          placeholder="Ex: 10"
          {...register("diaVencimento")}
        />

        <Select
          label="Plano"
          options={planos.map((plano) => ({
            label: `${plano.nome} — R$ ${plano.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} (${plano.periodicidade})`,
            value: String(plano.id),
          }))}
          {...register("planoId")}
        />
      </FormGrid>
    </FormSection>
  );
}
