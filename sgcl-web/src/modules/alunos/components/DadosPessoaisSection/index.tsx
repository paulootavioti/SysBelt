import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/ui/Input";
import { ErrorMessage } from "../../../../components/ui/ErrorMessage";
import { FormSection } from "../../../../components/ui/FormSection";
import { Select } from "../../../../components/ui/Select";
import { FormGrid } from "../../../../components/ui/FormGrid";
import { FormGridItem } from "../../../../components/ui/FormGridItem";

import { SEXOS } from "../../constants/sexo";
import { maskCPF, maskTelefone } from "../../../../shared/formatters/masks";
import { calcularIdade } from "../../../../shared/formatters/data";


import type { AlunoFormData } from "../../schema/aluno.schema";

export function DadosPessoaisSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<AlunoFormData>();

  const dataNascimento = watch("dataNascimento");
  const idade = calcularIdade(dataNascimento);

  return (
    <FormSection
      title="Dados Pessoais"
      subtitle="Informações básicas do aluno."
    >
      <FormGrid columns={2}>
        <FormGridItem span={2}>
        <Input label="Nome *" {...register("nome")} />

          <ErrorMessage message={errors.nome?.message ?? ""} />
        </FormGridItem>

        <Input label="Apelido (como gosta de ser chamado)" {...register("apelido")} />

        <div>
        <Input
            label="Data de nascimento *"
            type="date"
            {...register("dataNascimento")}
          />

          <ErrorMessage message={errors.dataNascimento?.message ?? ""} />

          {idade !== null && (
            <p style={{ fontSize: 14, color: "var(--color-text-light)" }}>
              Idade: {idade} anos
            </p>
          )}
        </div>

        <Select label="Sexo" options={SEXOS} {...register("sexo")} />

        <div>
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            {...register("cpf")}
            onChange={(e) => {
              e.target.value = maskCPF(e.target.value);
              register("cpf").onChange(e);
            }}
          />

          <ErrorMessage message={errors.cpf?.message ?? ""} />
        </div>

        <Input label="RG" placeholder="Número do RG" {...register("rg")} />

        <Input
          label="WhatsApp"
          {...register("whatsapp")}
          onChange={(e) => {
            e.target.value = maskTelefone(e.target.value);
            register("whatsapp").onChange(e);
          }}
        />

        <Input
          label="Telefone *"
          {...register("telefone")}
          onChange={(e) => {
            e.target.value = maskTelefone(e.target.value);
            register("telefone").onChange(e);
          }}
        />

        <FormGridItem span={2}>
          <Input label="E-mail" {...register("email")} />
          <ErrorMessage message={errors.email?.message ?? ""} />
        </FormGridItem>
      </FormGrid>
    </FormSection>
  );
}
