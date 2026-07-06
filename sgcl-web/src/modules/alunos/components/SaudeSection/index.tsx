import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormGridItem } from "../../../../components/ui/FormGridItem";
import { FormSection } from "../../../../components/ui/FormSection";

import type { AlunoFormData } from "../../schema/aluno.schema";

export function SaudeSection() {
  const { register } = useFormContext<AlunoFormData>();

  return (
    <FormSection
      title="Saúde"
      subtitle="Informações médicas importantes."
    >
      <FormGrid columns={2}>
        <Input
          label="Peso (kg)"
          type="number"
          step="0.1"
          {...register("peso")}
        />

        <Input
          label="Altura (m)"
          type="number"
          step="0.01"
          {...register("altura")}
        />

        <FormGridItem span={2}>
          <Input
            label="Restrições médicas"
            {...register("restricoesMedicas")}
          />
        </FormGridItem>

        <FormGridItem span={2}>
          <Input
            label="Alergias"
            {...register("alergias")}
          />
        </FormGridItem>

        <FormGridItem span={2}>
          <Input
            label="Medicamentos"
            {...register("medicamentos")}
          />
        </FormGridItem>
      </FormGrid>
    </FormSection>
  );
}