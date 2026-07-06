import { useFormContext } from "react-hook-form";

import { Checkbox } from "../../../../components/ui/Checkbox";
import { FormSection } from "../../../../components/ui/FormSection";

import type { ResponsavelFormData } from "../../schema/responsavel.schema";

export function PermissoesSection() {
  const { register } =
    useFormContext<ResponsavelFormData>();

  return (
    <FormSection
      title="Permissões"
      subtitle="Permissões do responsável."
    >
      <Checkbox
        label="Responsável Financeiro"
        {...register("responsavelFinanceiro")}
      />

      <Checkbox
        label="Pode buscar o aluno"
        {...register("podeBuscar")}
      />

      <Checkbox
        label="Contato de emergência"
        {...register("contatoEmergencia")}
      />

      <Checkbox
        label="Recebe comunicados"
        {...register("recebeComunicados")}
      />
    </FormSection>
  );
}