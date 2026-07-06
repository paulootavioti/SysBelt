-- CreateTable
CREATE TABLE "Curriculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "modalidade" TEXT NOT NULL DEFAULT 'Jiu-Jitsu',
    "publico" TEXT NOT NULL DEFAULT 'Kids',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ModuloCurriculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "faixa" TEXT,
    "idadeMinima" INTEGER,
    "idadeMaxima" INTEGER,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "curriculoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ModuloCurriculo_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AulaCurriculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "objetivo" TEXT,
    "descricao" TEXT,
    "duracaoMinutos" INTEGER,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "moduloId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AulaCurriculo_moduloId_fkey" FOREIGN KEY ("moduloId") REFERENCES "ModuloCurriculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TecnicaCurriculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT,
    "descricao" TEXT,
    "obrigatoria" BOOLEAN NOT NULL DEFAULT true,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "aulaCurriculoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TecnicaCurriculo_aulaCurriculoId_fkey" FOREIGN KEY ("aulaCurriculoId") REFERENCES "AulaCurriculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
