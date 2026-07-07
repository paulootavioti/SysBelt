import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../../components/ui/Input";
import { Textarea } from "../../../components/ui/Textarea";
import { Button } from "../../../components/ui/Button";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { FormGrid } from "../../../components/ui/FormGrid";
import { FormGridItem } from "../../../components/ui/FormGridItem";

import { aulaCurriculoSchema, type AulaCurriculoFormData } from "../schema/curriculo.schema";

interface AulaCurriculoFormProps {
  loading?: boolean;
  onSubmit: (data: AulaCurriculoFormData) => void;
}

export function AulaCurriculoForm({ loading = false, onSubmit }: AulaCurriculoFormProps) {
  const methods = useForm<AulaCurriculoFormData>({
    resolver: zodResolver(aulaCurriculoSchema),
    defaultValues: {
      titulo: "",
      objetivo: "",
      descricao: "",
      duracaoMinutos: "",
      jogosSugeridos: "",
    },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGrid columns={2}>
          <FormGridItem span={2}>
            <Input label="Título da Aula" {...register("titulo")} />
            <ErrorMessage message={errors.titulo?.message ?? ""} />
          </FormGridItem>

          <FormGridItem span={2}>
            <Input label="Objetivo" {...register("objetivo")} />
          </FormGridItem>

          <FormGridItem>
            <Input label="Duração (minutos)" type="number" {...register("duracaoMinutos")} />
          </FormGridItem>

          <FormGridItem span={2}>
            <Textarea label="Jogos Sugeridos" {...register("jogosSugeridos")} />
          </FormGridItem>

          <FormGridItem span={2}>
            <Textarea label="Descrição" {...register("descricao")} />
          </FormGridItem>
        </FormGrid>

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Cadastrar Aula"}
        </Button>
      </form>
    </FormProvider>
  );
}