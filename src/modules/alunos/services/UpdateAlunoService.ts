import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface UpdateAlunoDTO {
  id: number;

  nome: string;
  dataNascimento: string;

  sexo?: string | null;
  cpf?: string | null;
  rg?: string | null;

  telefone?: string | null;
  whatsapp?: string | null;
  email?: string | null;

  cep?: string | null;
  logradouro?: string | null;
  numero?: string | null;
  complemento?: string | null;
  bairro?: string | null;
  cidade?: string | null;
  uf?: string | null;

  escola?: string | null;
  serieEscolar?: string | null;
  turnoEscolar?: string | null;

  peso?: string | number | null;
  altura?: string | number | null;

  tamanhoKimono?: string | null;
  marcaKimono?: string | null;

  restricoesMedicas?: string | null;
  alergias?: string | null;
  medicamentos?: string | null;
  observacoes?: string | null;

  fotoUrl?: string | null;

  turmaId?: string | number | null;
}

function toNumberOrNull(value: unknown) {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  return Number(value);
}

export class UpdateAlunoService {
  async execute(data: UpdateAlunoDTO) {
    const aluno = await prisma.aluno.findUnique({
      where: { id: data.id },
    });

    if (!aluno) {
      throw new AppError("Aluno não encontrado.");
    }

    return prisma.aluno.update({
      where: { id: data.id },
      data: {
        nome: data.nome,
        dataNascimento: new Date(data.dataNascimento),

        sexo: data.sexo,
        cpf: data.cpf,
        rg: data.rg,

        telefone: data.telefone,
        whatsapp: data.whatsapp,
        email: data.email,

        cep: data.cep,
        logradouro: data.logradouro,
        numero: data.numero,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,

        escola: data.escola,
        serieEscolar: data.serieEscolar,
        turnoEscolar: data.turnoEscolar,

        peso: toNumberOrNull(data.peso),
        altura: toNumberOrNull(data.altura),

        tamanhoKimono: data.tamanhoKimono,
        marcaKimono: data.marcaKimono,

        restricoesMedicas: data.restricoesMedicas,
        alergias: data.alergias,
        medicamentos: data.medicamentos,
        observacoes: data.observacoes,

        fotoUrl: data.fotoUrl,
        turmaId: toNumberOrNull(data.turmaId),
      },
    });
  }
}