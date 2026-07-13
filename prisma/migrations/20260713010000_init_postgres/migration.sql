-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "AulaStatus" AS ENUM ('ABERTA', 'FINALIZADA');

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "sexo" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "telefone" TEXT,
    "whatsapp" TEXT,
    "email" TEXT,
    "cep" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "escola" TEXT,
    "serieEscolar" TEXT,
    "turnoEscolar" TEXT,
    "peso" DOUBLE PRECISION,
    "altura" DOUBLE PRECISION,
    "tamanhoKimono" TEXT,
    "marcaKimono" TEXT,
    "restricoesMedicas" TEXT,
    "alergias" TEXT,
    "medicamentos" TEXT,
    "observacoes" TEXT,
    "fotoUrl" TEXT,
    "faixa" TEXT NOT NULL DEFAULT 'Branca',
    "grau" INTEGER NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "turmaId" INTEGER,
    "formaPagamento" TEXT,
    "diaVencimento" INTEGER,
    "planoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Responsavel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "dataNascimento" TIMESTAMP(3),
    "sexo" TEXT,
    "telefone" TEXT,
    "whatsapp" TEXT,
    "email" TEXT,
    "cep" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "parentesco" TEXT NOT NULL DEFAULT 'Não informado',
    "responsavelFinanceiro" BOOLEAN NOT NULL DEFAULT false,
    "podeBuscar" BOOLEAN NOT NULL DEFAULT true,
    "contatoEmergencia" BOOLEAN NOT NULL DEFAULT false,
    "recebeComunicados" BOOLEAN NOT NULL DEFAULT true,
    "observacoes" TEXT,
    "fotoUrl" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "alunoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mensalidade" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "dataPagamento" TIMESTAMP(3),
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "alunoId" INTEGER NOT NULL,

    CONSTRAINT "Mensalidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Graduacao" (
    "id" SERIAL NOT NULL,
    "faixa" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "alunoId" INTEGER NOT NULL,

    CONSTRAINT "Graduacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AulaAluno" (
    "id" SERIAL NOT NULL,
    "aulaId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "presente" BOOLEAN NOT NULL DEFAULT false,
    "respeito" BOOLEAN NOT NULL DEFAULT false,
    "valentia" BOOLEAN NOT NULL DEFAULT false,
    "esforco" BOOLEAN NOT NULL DEFAULT false,
    "atencao" BOOLEAN NOT NULL DEFAULT false,
    "disciplina" BOOLEAN NOT NULL DEFAULT false,
    "observacao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AulaAluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competicao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "Competicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompeticaoAluno" (
    "id" SERIAL NOT NULL,
    "competicaoId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "resultado" TEXT,

    CONSTRAINT "CompeticaoAluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comportamento" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "respeito" INTEGER NOT NULL,
    "valentia" INTEGER NOT NULL,
    "esforco" INTEGER NOT NULL,
    "atencao" INTEGER NOT NULL,
    "disciplina" INTEGER NOT NULL,
    "observacao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comportamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "faixaEtaria" TEXT NOT NULL,
    "diasSemana" TEXT NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFim" TEXT NOT NULL,
    "professorId" INTEGER,
    "limiteAlunos" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "curriculoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "perfil" TEXT NOT NULL,
    "nivelGraduacao" TEXT,
    "outrasGraduacoes" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "periodicidade" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plano_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aula" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "professor" TEXT,
    "observacoes" TEXT,
    "turmaId" INTEGER,
    "aulaCurriculoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "AulaStatus" NOT NULL DEFAULT 'ABERTA',

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnica" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "subCategoria" TEXT,
    "descricao" TEXT,
    "faixaMinima" TEXT,
    "idadeMinima" INTEGER,
    "nivel" TEXT,
    "ordemCurriculo" INTEGER,
    "ativa" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tecnica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curriculo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "modalidade" TEXT NOT NULL DEFAULT 'Jiu-Jitsu',
    "publico" TEXT NOT NULL DEFAULT 'Kids',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Curriculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModuloCurriculo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "faixa" TEXT,
    "idadeMinima" INTEGER,
    "idadeMaxima" INTEGER,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "curriculoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ModuloCurriculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AulaCurriculo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "objetivo" TEXT,
    "descricao" TEXT,
    "duracaoMinutos" INTEGER,
    "jogosSugeridos" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "moduloId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AulaCurriculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TecnicaCurriculo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT,
    "descricao" TEXT,
    "obrigatoria" BOOLEAN NOT NULL DEFAULT true,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "aulaCurriculoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TecnicaCurriculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AulaProgramada" (
    "id" SERIAL NOT NULL,
    "turmaId" INTEGER NOT NULL,
    "aulaCurriculoId" INTEGER,
    "data" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "aulaId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AulaProgramada_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AulaAluno_aulaId_alunoId_key" ON "AulaAluno"("aulaId", "alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AulaProgramada_aulaId_key" ON "AulaProgramada"("aulaId");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Responsavel" ADD CONSTRAINT "Responsavel_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensalidade" ADD CONSTRAINT "Mensalidade_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Graduacao" ADD CONSTRAINT "Graduacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AulaAluno" ADD CONSTRAINT "AulaAluno_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aula"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AulaAluno" ADD CONSTRAINT "AulaAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompeticaoAluno" ADD CONSTRAINT "CompeticaoAluno_competicaoId_fkey" FOREIGN KEY ("competicaoId") REFERENCES "Competicao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompeticaoAluno" ADD CONSTRAINT "CompeticaoAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comportamento" ADD CONSTRAINT "Comportamento_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_aulaCurriculoId_fkey" FOREIGN KEY ("aulaCurriculoId") REFERENCES "AulaCurriculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuloCurriculo" ADD CONSTRAINT "ModuloCurriculo_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AulaCurriculo" ADD CONSTRAINT "AulaCurriculo_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "ModuloCurriculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TecnicaCurriculo" ADD CONSTRAINT "TecnicaCurriculo_aulaCurriculoId_fkey" FOREIGN KEY ("aulaCurriculoId") REFERENCES "AulaCurriculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AulaProgramada" ADD CONSTRAINT "AulaProgramada_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AulaProgramada" ADD CONSTRAINT "AulaProgramada_aulaCurriculoId_fkey" FOREIGN KEY ("aulaCurriculoId") REFERENCES "AulaCurriculo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AulaProgramada" ADD CONSTRAINT "AulaProgramada_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aula"("id") ON DELETE SET NULL ON UPDATE CASCADE;

