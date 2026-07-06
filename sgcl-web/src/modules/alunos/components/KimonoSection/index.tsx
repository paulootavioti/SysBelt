import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { Select } from "../../../../components/ui/Select";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormSection } from "../../../../components/ui/FormSection";

import type { AlunoFormData } from "../../schema/aluno.schema";

const tamanhosKimono = [
  { label: "M000", value: "M000" },
  { label: "M00", value: "M00" },
  { label: "M0", value: "M0" },
  { label: "M1", value: "M1" },
  { label: "M2", value: "M2" },
  { label: "M3", value: "M3" },
  { label: "M4", value: "M4" },
  { label: "A0", value: "A0" },
  { label: "A1", value: "A1" },
  { label: "A2", value: "A2" },
  { label: "A3", value: "A3" },
  { label: "A4", value: "A4" },
  { label: "A5", value: "A5" },
] as const;

export function KimonoSection() {
  const { register } = useFormContext<AlunoFormData>();

  return (
    <FormSection
      title="Kimono"
      subtitle="Informações do uniforme."
    >
      <FormGrid columns={2}>
        <Select
          label="Tamanho"
          options={[...tamanhosKimono]}
          {...register("tamanhoKimono")}
        />

        <Input
          label="Marca"
          placeholder="Atama, Keiko..."
          {...register("marcaKimono")}
        />
      </FormGrid>
    </FormSection>
  );
}