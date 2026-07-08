import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { FormGrid } from "../../../components/ui/FormGrid";
import { FormGridItem } from "../../../components/ui/FormGridItem";

import { turmaSchema, type TurmaFormData } from "../schema/turma.schema";

interface TurmaFormProps {
  loading?: boolean;
  onSubmit: (data: TurmaFormData) => void;
}

export function TurmaForm({ loading = false, onSubmit }: TurmaFormProps) {
  const methods = useForm<TurmaFormData>({
    resolver: zodResolver(turmaSchema),
    defaultValues: {
      nome: "",
      faixaEtaria: "",
      diasSemana: "",
      horarioInicio: "",
      horarioFim: "",
      professor: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid columns={2}>
          <FormGridItem span={2}>
            <Input label="Nome da Turma" {...register("nome")} />
            <ErrorMessage message={errors.nome?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Faixa Etária" placeholder="Ex: 4 a 9 anos" {...register("faixaEtaria")} />
            <ErrorMessage message={errors.faixaEtaria?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Professor" {...register("professor")} />
            <ErrorMessage message={errors.professor?.message ?? ""} />
          </FormGridItem>

          <FormGridItem span={2}>
            <Input label="Dias da Semana" placeholder="Ex: Segunda, Quarta, Sexta" {...register("diasSemana")} />
            <ErrorMessage message={errors.diasSemana?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Horário de Início" type="time" {...register("horarioInicio")} />
            <ErrorMessage message={errors.horarioInicio?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Horário de Término" type="time" {...register("horarioFim")} />
            <ErrorMessage message={errors.horarioFim?.message ?? ""} />
          </FormGridItem>
        </FormGrid>

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Cadastrar Turma"}
        </Button>
      </form>
    </FormProvider>
  );
}