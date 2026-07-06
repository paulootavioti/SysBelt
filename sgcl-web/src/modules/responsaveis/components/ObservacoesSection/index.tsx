import { useFormContext } from "react-hook-form";

import { Textarea } from "../../../../components/ui/Textarea";
import { FormSection } from "../../../../components/ui/FormSection";

import type { ResponsavelFormData } from "../../schema/responsavel.schema";

export function ObservacoesSection() {
  const { register } =
    useFormContext<ResponsavelFormData>();

  return (
    <FormSection
      title="Observações"
      subtitle="Informações adicionais."
    >
      <Textarea
        label="Observações"
        rows={5}
        {...register("observacoes")}
      />
    </FormSection>
  );
}