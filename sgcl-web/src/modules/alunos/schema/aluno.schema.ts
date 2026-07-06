import { z } from "zod";

export const alunoSchema = z.object({
  nome: z.string().min(3, "Informe o nome do aluno."),

  dataNascimento: z.string().min(1, "Informe a data de nascimento."),

  sexo: z.string().optional(),

  cpf: z.string().optional(),

  rg: z.string().optional(),

  telefone: z.string().min(8, "Informe um telefone válido."),

  whatsapp: z.string().optional(),
  email: z
    .string()
    .email("Informe um e-mail válido.")
    .optional()
    .or(z.literal("")),

  cep: z.string().optional(),

  logradouro: z.string().optional(),

  numero: z.string().optional(),

  complemento: z.string().optional(),

  bairro: z.string().optional(),

  cidade: z.string().optional(),

  uf: z.string().optional(),

  escola: z.string().optional(),

  serieEscolar: z.string().optional(),

  turnoEscolar: z.string().optional(),

  peso: z.string().optional(),

  altura: z.string().optional(),

  restricoesMedicas: z.string().optional(),

  alergias: z.string().optional(),

  medicamentos: z.string().optional(),

  tamanhoKimono: z.string().optional(),

  marcaKimono: z.string().optional(),

  observacoes: z.string().optional(),

  turmaId: z.string().optional(),

  fotoUrl: z.string().optional(),
});

export type AlunoFormData = z.infer<typeof alunoSchema>;
