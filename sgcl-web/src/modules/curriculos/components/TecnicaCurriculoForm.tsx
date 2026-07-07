import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../../components/ui/Input";
import { Checkbox } from "../../../components/ui/Checkbox";
import { Button } from "../../../components/ui/Button";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { FormGrid } from "../../../components/ui/FormGrid";
import { FormGridItem } from "../../../components/ui/FormGridItem";

import { tecnicaCurriculoSchema, type TecnicaCurriculoFormData } from "../schema/curriculo.schema";

interface TecnicaCurriculoFormProps {
  loading?: boolean;
  onSubmit: (data: TecnicaCurriculoFormData) => void;
}

export function TecnicaCurriculoForm({ loading = false, onSubmit }: TecnicaCurriculoFormProps) {
  const methods = useForm<TecnicaCurriculoFormData>({
    resolver: zodResolver(tecnicaCurriculoSchema),
    defaultValues: { nome: "", categoria: "", descricao: "", obrigatoria: true },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid columns={2}>
          <FormGridItem span={2}>
            <Input label="Nome da Técnica" {...register("nome")} />
            <ErrorMessage message={errors.nome?.message ?? ""} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Categoria" {...register("categoria")} />
          </FormGridItem>

          <FormGridItem>
            <Checkbox label="Obrigatória" {...register("obrigatoria")} />
          </FormGridItem>

          <FormGridItem span={2}>
            <Input label="Descrição" {...register("descricao")} />
          </FormGridItem>
        </FormGrid>

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Cadastrar Técnica"}
        </Button>
      </form>
    </FormProvider>
  );
}