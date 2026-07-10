import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../../components/ui/Input";
import { Select } from "../../../components/ui/Select";
import { Button } from "../../../components/ui/Button";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { FormGrid } from "../../../components/ui/FormGrid";
import { FormGridItem } from "../../../components/ui/FormGridItem";

import { PERIODICIDADES } from "../../../shared/constants/periodicidade";
import { planoSchema, type PlanoFormData } from "../schema/plano.schema";
import type { Plano } from "../types/plano";

interface PlanoFormProps {
  plano?: Plano;
  loading?: boolean;
  onSubmit: (data: PlanoFormData) => void;
}

export function PlanoForm({ plano, loading = false, onSubmit }: PlanoFormProps) {
  const methods = useForm<PlanoFormData>({
    resolver: zodResolver(planoSchema),
    defaultValues: {
      nome: plano?.nome ?? "",
      valor: plano ? String(plano.valor) : "",
      periodicidade: plano?.periodicidade ?? "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid columns={2}>
          <FormGridItem span={2}>
            <Input label="Nome do Plano" placeholder="Ex: Mensal" {...register("nome")} />
            <ErrorMessage message={errors.nome?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Valor (R$)" type="number" step="0.01" min="0" {...register("valor")} />
            <ErrorMessage message={errors.valor?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Select label="Periodicidade" options={PERIODICIDADES} {...register("periodicidade")} />
            <ErrorMessage message={errors.periodicidade?.message ?? ""} />
          </FormGridItem>
        </FormGrid>

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : plano ? "Salvar Alterações" : "Cadastrar Plano"}
        </Button>
      </form>
    </FormProvider>
  );
}
