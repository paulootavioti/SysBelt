import { z } from "zod";

export const planoSchema = z.object({
  nome: z.string().min(2, "Informe o nome do plano."),
  valor: z.string().min(1, "Informe o valor do plano."),
  periodicidade: z.string().min(1, "Selecione a periodicidade."),
});

export type PlanoFormData = z.infer<typeof planoSchema>;
