import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormGridItem } from "../../../../components/ui/FormGridItem";
import { FormSection } from "../../../../components/ui/FormSection";

import type { ResponsavelFormData } from "../../schema/responsavel.schema";

export function EnderecoSection() {
  const { register } =
    useFormContext<ResponsavelFormData>();

  return (
    <FormSection
      title="Endereço"
      subtitle="Endereço residencial."
    >
      <FormGrid columns={2}>
        <Input
          label="CEP"
          {...register("cep")}
        />

        <FormGridItem span={2}>
          <Input
            label="Logradouro"
            {...register("logradouro")}
          />
        </FormGridItem>

        <Input
          label="Número"
          {...register("numero")}
        />

        <Input
          label="Complemento"
          {...register("complemento")}
        />

        <Input
          label="Bairro"
          {...register("bairro")}
        />

        <Input
          label="Cidade"
          {...register("cidade")}
        />

        <Input
          label="UF"
          {...register("uf")}
        />
      </FormGrid>
    </FormSection>
  );
}