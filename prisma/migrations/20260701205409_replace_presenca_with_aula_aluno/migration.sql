/*
  Warnings:

  - You are about to drop the `Presenca` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Presenca";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AulaAluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aulaId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "presente" BOOLEAN NOT NULL DEFAULT false,
    "respeito" INTEGER,
    "valentia" INTEGER,
    "esforco" INTEGER,
    "atencao" INTEGER,
    "disciplina" INTEGER,
    "observacao" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AulaAluno_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aula" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AulaAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "AulaAluno_aulaId_alunoId_key" ON "AulaAluno"("aulaId", "alunoId");
