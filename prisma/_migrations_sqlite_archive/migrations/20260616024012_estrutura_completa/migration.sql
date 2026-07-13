-- CreateTable
CREATE TABLE "Responsavel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT,
    "alunoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Responsavel_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mensalidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "vencimento" DATETIME NOT NULL,
    "dataPagamento" DATETIME,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "Mensalidade_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Graduacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "faixa" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "Graduacao_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Presenca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "alunoId" INTEGER NOT NULL,
    CONSTRAINT "Presenca_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Competicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "local" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CompeticaoAluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "competicaoId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "resultado" TEXT,
    CONSTRAINT "CompeticaoAluno_competicaoId_fkey" FOREIGN KEY ("competicaoId") REFERENCES "Competicao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CompeticaoAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
