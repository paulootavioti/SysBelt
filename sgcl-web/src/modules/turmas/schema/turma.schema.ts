import { z } from "zod";

export const turmaSchema = z.object({
  nome: z.string().min(3, "Informe o nome da turma."),
  faixaEtaria: z.string().min(1, "Informe a faixa etária."),
  diasSemana: z.string().min(1, "Informe os dias da semana."),
  horarioInicio: z.string().min(1, "Informe o horário de início."),
  horarioFim: z.string().min(1, "Informe o horário de término."),
  professorId: z.string().min(1, "Selecione o professor."),
  curriculoId: z.string().optional(),
  limiteAlunos: z.string().optional(),
});

export type TurmaFormData = z.infer<typeof turmaSchema>;