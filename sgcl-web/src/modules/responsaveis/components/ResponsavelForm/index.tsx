import { useEffect } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../../components/ui/Button";

import {
  responsavelSchema,
  type ResponsavelFormData,
} from "../../schema/responsavel.schema";

import { DadosPessoaisSection } from "../DadosPessoaisSection";
import { ContatoSection } from "../ContatoSection";
import { EnderecoSection } from "../EnderecoSection";
import { PermissoesSection } from "../PermissoesSection";
import { ObservacoesSection } from "../ObservacoesSection";

import type { ResponsavelFormProps } from "./types";

import "./styles.css";

export function ResponsavelForm({
  loading,
  initialValues,
  onSubmit,
}: ResponsavelFormProps) {
  const methods = useForm<ResponsavelFormData>({
    resolver: zodResolver(responsavelSchema),
    defaultValues: {
      responsavelFinanceiro: false,
      podeBuscar: true,
      contatoEmergencia: false,
      recebeComunicados: true,
      ...initialValues,
    },
  });
  useEffect(() => {
    methods.reset({
      responsavelFinanceiro: false,
      podeBuscar: true,
      contatoEmergencia: false,
      recebeComunicados: true,
      ...initialValues,
    });
  }, [initialValues, methods]);

  return (
    <FormProvider {...methods}>
      <form
        className="responsavel-form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <DadosPessoaisSection />

        <ContatoSection />

        <EnderecoSection />

        <PermissoesSection />

        <ObservacoesSection />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Salvando..."
            : "Salvar Responsável"}
        </Button>
      </form>
    </FormProvider>
    
  );
 
}