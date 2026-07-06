import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Button } from "../../../../components/ui/Button";
import { ImageUpload } from "../../../../components/ui/ImageUpload";
import { FormSection } from "../../../../components/ui/FormSection";

import { alunoSchema, type AlunoFormData } from "../../schema/aluno.schema";

import { DadosPessoaisSection } from "../DadosPessoaisSection";
import { ContatoSection } from "../ContatoSection";
import { EnderecoSection } from "../EnderecoSection";
import { EscolaSection } from "../EscolaSection";
import { SaudeSection } from "../SaudeSection";
import { KimonoSection } from "../KimonoSection";
import { TurmaSection } from "../TurmaSection";
import { ObservacoesSection } from "../ObservacoesSection";

import { alunoParaFormulario } from "../../mappers/aluno.mapper";

import type { AlunoFormProps } from "./types";

import "./styles.css";

export function AlunoForm({ aluno, loading, onSubmit }: AlunoFormProps) {
  const [, setFoto] = useState<File | null>(null);
  const methods = useForm<AlunoFormData>({
    resolver: zodResolver(alunoSchema),
    defaultValues: alunoParaFormulario(aluno),
  });

  return (
    <FormProvider {...methods}>
      <form className="aluno-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <DadosPessoaisSection />

        <ContatoSection />

        <EnderecoSection />

        <EscolaSection />

        <TurmaSection />

        <SaudeSection />

        <KimonoSection />

        <ObservacoesSection />

        <FormSection title="Foto" subtitle="Foto do aluno.">
          <ImageUpload label="Foto" onChange={setFoto} />
        </FormSection>

        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </FormProvider>
  );
}
