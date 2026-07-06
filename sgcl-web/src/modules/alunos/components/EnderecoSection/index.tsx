import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormGridItem } from "../../../../components/ui/FormGridItem";
import { FormSection } from "../../../../components/ui/FormSection";
import { ErrorMessage } from "../../../../components/ui/ErrorMessage";

import { maskCEP } from "../../../../shared/formatters/masks";

import { ViaCepService } from "../../../../services/viacep";

import type { AlunoFormData } from "../../schema/aluno.schema";

export function EnderecoSection() {
  const [erroCep, setErroCep] = useState("");

  const { register, setValue } =
    useFormContext<AlunoFormData>();

  async function buscarCep(
    event: React.FocusEvent<HTMLInputElement>
  ) {
    const cep = event.target.value;

    setErroCep("");

    const endereco = await ViaCepService.buscar(cep);

    if (!endereco) {
      setErroCep("CEP não encontrado.");
      return;
    }

    setValue("logradouro", endereco.logradouro);
    setValue("bairro", endereco.bairro);
    setValue("cidade", endereco.localidade);
    setValue("uf", endereco.uf);
  }

  return (
    <FormSection
      title="Endereço"
      subtitle="Endereço residencial do aluno."
    >
      <FormGrid columns={2}>
        <div>
        <Input
          label="CEP"
          placeholder="00000-000"
          {...register("cep")}
          onChange={(e) => {
            e.target.value = maskCEP(e.target.value);
            register("cep").onChange(e);
          }}
          onBlur={buscarCep}
        />

          <ErrorMessage message={erroCep} />
        </div>

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