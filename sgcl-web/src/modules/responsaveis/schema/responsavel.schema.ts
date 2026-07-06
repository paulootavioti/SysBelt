import { z } from "zod";

export const responsavelSchema = z.object({
  nome: z
    .string()
    .min(3, "Informe o nome do responsável."),

  parentesco: z
    .string()
    .min(2, "Informe o parentesco."),

  telefone: z.string().optional(),

  whatsapp: z.string().optional(),

  email: z
    .string()
    .email("Email inválido.")
    .optional()
    .or(z.literal("")),

  cpf: z.string().optional(),

  rg: z.string().optional(),

  dataNascimento: z.string().optional(),

  sexo: z.string().optional(),

  cep: z.string().optional(),

  logradouro: z.string().optional(),

  numero: z.string().optional(),

  complemento: z.string().optional(),

  bairro: z.string().optional(),

  cidade: z.string().optional(),

  uf: z.string().optional(),

  responsavelFinanceiro: z.boolean(),

  podeBuscar: z.boolean(),

  contatoEmergencia: z.boolean(),

  recebeComunicados: z.boolean(),

  observacoes: z.string().optional(),
});

export type ResponsavelFormData =
  z.infer<typeof responsavelSchema>;