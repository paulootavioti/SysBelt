/*
  Warnings:

  - You are about to alter the column `atencao` on the `AulaAluno` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.
  - You are about to alter the column `disciplina` on the `AulaAluno` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.
  - You are about to alter the column `esforco` on the `AulaAluno` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.
  - You are about to alter the column `respeito` on the `AulaAluno` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.
  - You are about to alter the column `valentia` on the `AulaAluno` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AulaAluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "aulaId" INTEGER NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "presente" BOOLEAN NOT NULL DEFAULT false,
    "respeito" BOOLEAN NOT NULL DEFAULT false,
    "valentia" BOOLEAN NOT NULL DEFAULT false,
    "esforco" BOOLEAN NOT NULL DEFAULT false,
    "atencao" BOOLEAN NOT NULL DEFAULT false,
    "disciplina" BOOLEAN NOT NULL DEFAULT false,
    "observacao" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AulaAluno_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aula" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AulaAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AulaAluno" ("alunoId", "atencao", "aulaId", "createdAt", "disciplina", "esforco", "id", "observacao", "presente", "respeito", "updatedAt", "valentia") SELECT "alunoId", coalesce("atencao", false) AS "atencao", "aulaId", "createdAt", coalesce("disciplina", false) AS "disciplina", coalesce("esforco", false) AS "esforco", "id", "observacao", "presente", coalesce("respeito", false) AS "respeito", "updatedAt", coalesce("valentia", false) AS "valentia" FROM "AulaAluno";
DROP TABLE "AulaAluno";
ALTER TABLE "new_AulaAluno" RENAME TO "AulaAluno";
CREATE UNIQUE INDEX "AulaAluno_aulaId_alunoId_key" ON "AulaAluno"("aulaId", "alunoId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
