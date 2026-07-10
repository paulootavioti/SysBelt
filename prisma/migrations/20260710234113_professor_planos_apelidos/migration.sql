/*
  Warnings:

  - You are about to drop the column `professor` on the `Turma` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Responsavel" ADD COLUMN "apelido" TEXT;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN "apelido" TEXT;
ALTER TABLE "Usuario" ADD COLUMN "nivelGraduacao" TEXT;
ALTER TABLE "Usuario" ADD COLUMN "outrasGraduacoes" TEXT;

-- CreateTable
CREATE TABLE "Plano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    "periodicidade" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "dataNascimento" DATETIME NOT NULL,
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
    "peso" REAL,
    "altura" REAL,
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aluno_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Aluno_planoId_fkey" FOREIGN KEY ("planoId") REFERENCES "Plano" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("alergias", "altura", "ativo", "bairro", "cep", "cidade", "complemento", "cpf", "createdAt", "dataNascimento", "email", "escola", "faixa", "fotoUrl", "grau", "id", "logradouro", "marcaKimono", "medicamentos", "nome", "numero", "observacoes", "peso", "restricoesMedicas", "rg", "serieEscolar", "sexo", "tamanhoKimono", "telefone", "turmaId", "turnoEscolar", "uf", "updatedAt", "whatsapp") SELECT "alergias", "altura", "ativo", "bairro", "cep", "cidade", "complemento", "cpf", "createdAt", "dataNascimento", "email", "escola", "faixa", "fotoUrl", "grau", "id", "logradouro", "marcaKimono", "medicamentos", "nome", "numero", "observacoes", "peso", "restricoesMedicas", "rg", "serieEscolar", "sexo", "tamanhoKimono", "telefone", "turmaId", "turnoEscolar", "uf", "updatedAt", "whatsapp" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE TABLE "new_Turma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "faixaEtaria" TEXT NOT NULL,
    "diasSemana" TEXT NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFim" TEXT NOT NULL,
    "professorId" INTEGER,
    "limiteAlunos" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "curriculoId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Turma_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Turma" ("ativo", "createdAt", "curriculoId", "diasSemana", "faixaEtaria", "horarioFim", "horarioInicio", "id", "limiteAlunos", "nome") SELECT "ativo", "createdAt", "curriculoId", "diasSemana", "faixaEtaria", "horarioFim", "horarioInicio", "id", "limiteAlunos", "nome" FROM "Turma";
DROP TABLE "Turma";
ALTER TABLE "new_Turma" RENAME TO "Turma";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
