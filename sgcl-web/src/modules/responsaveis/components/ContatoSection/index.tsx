import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormSection } from "../../../../components/ui/FormSection";

import type { ResponsavelFormData } from "../../schema/responsavel.schema";

export function ContatoSection() {
  const { register } =
    useFormContext<ResponsavelFormData>();

  return (
    <FormSection
      title="Contato"
      subtitle="Informações de contato."
    >
      <FormGrid columns={2}>
        <Input
          label="Telefone"
          {...register("telefone")}
        />

        <Input
          label="WhatsApp"
          {...register("whatsapp")}
        />

        <Input
          label="Email"
          type="email"
          {...register("email")}
        />
      </FormGrid>
    </FormSection>
  );
}