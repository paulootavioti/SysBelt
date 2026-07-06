import { useFormContext } from "react-hook-form";

import { FormSection } from "../../../../components/ui/FormSection";
import { Textarea } from "../../../../components/ui/Textarea";

import type { AlunoFormData } from "../../schema/aluno.schema";

export function ObservacoesSection() {
  const { register } = useFormContext<AlunoFormData>();

  return (
    <FormSection
      title="Observações"
      subtitle="Informações adicionais."
    >
      <Textarea
        label="Observações"
        rows={5}
        placeholder="Digite informações importantes sobre o aluno..."
        {...register("observacoes")}
      />
    </FormSection>
  );
}