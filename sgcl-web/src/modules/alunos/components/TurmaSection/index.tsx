import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import { FormSection } from "../../../../components/ui/FormSection";
import { Select } from "../../../../components/ui/Select";

import { TurmaService } from "../../../turmas/services/TurmaService";

import type { AlunoFormData } from "../../schema/aluno.schema";

interface TurmaOption {
  id: number;
  nome: string;
}

export function TurmaSection() {
  const { register } =
    useFormContext<AlunoFormData>();

  const [turmas, setTurmas] = useState<TurmaOption[]>([]);

  useEffect(() => {
    async function carregar() {
      const data = await TurmaService.listar();
      setTurmas(data);
    }

    carregar();
  }, []);

  return (
    <FormSection
      title="Turma"
      subtitle="Turma em que o aluno está matriculado."
    >
      <Select
        label="Turma"

        options={[
          {
            label: "Selecione...",
            value: "",
          },

          ...turmas.map((turma) => ({
            label: turma.nome,
            value: turma.id.toString(),
          })),
        ]}

        {...register("turmaId")}
      />
    </FormSection>
  );
}