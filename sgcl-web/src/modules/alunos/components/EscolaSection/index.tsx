import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { Select } from "../../../../components/ui/Select";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormGridItem } from "../../../../components/ui/FormGridItem";
import { FormSection } from "../../../../components/ui/FormSection";

import type { AlunoFormData } from "../../schema/aluno.schema";

export function EscolaSection() {
  const { register } = useFormContext<AlunoFormData>();

  return (
    <FormSection
      title="Escola"
      subtitle="Informações escolares do aluno."
    >
      <FormGrid columns={2}>
        <FormGridItem span={2}>
          <Input
            label="Escola"
            placeholder="Nome da escola"
            {...register("escola")}
          />
        </FormGridItem>

        <Input
          label="Série escolar"
          placeholder="Ex: 3º ano"
          {...register("serieEscolar")}
        />

        <Select
          label="Turno"
          options={[
            { label: "Matutino", value: "MATUTINO" },
            { label: "Vespertino", value: "VESPERTINO" },
            { label: "Integral", value: "INTEGRAL" },
            { label: "Noturno", value: "NOTURNO" },
          ]}
          {...register("turnoEscolar")}
        />
      </FormGrid>
    </FormSection>
  );
}