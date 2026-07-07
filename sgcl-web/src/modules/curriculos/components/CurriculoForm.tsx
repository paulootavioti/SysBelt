import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { FormGrid } from "../../../components/ui/FormGrid";
import { FormGridItem } from "../../../components/ui/FormGridItem";

import { curriculoSchema, type CurriculoFormData } from "../schema/curriculo.schema";

interface CurriculoFormProps {
  loading?: boolean;
  onSubmit: (data: CurriculoFormData) => void;
}

export function CurriculoForm({ loading = false, onSubmit }: CurriculoFormProps) {
  const methods = useForm<CurriculoFormData>({
    resolver: zodResolver(curriculoSchema),
    defaultValues: { nome: "", descricao: "", modalidade: "Jiu-Jitsu", publico: "Kids" },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid columns={2}>
          <FormGridItem span={2}>
            <Input label="Nome do Currículo" {...register("nome")} />
            <ErrorMessage message={errors.nome?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Modalidade" {...register("modalidade")} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Público" {...register("publico")} />
          </FormGridItem>

          <FormGridItem span={2}>
            <Input label="Descrição" {...register("descricao")} />
          </FormGridItem>
        </FormGrid>

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Cadastrar Currículo"}
        </Button>
      </form>
    </FormProvider>
  );
}