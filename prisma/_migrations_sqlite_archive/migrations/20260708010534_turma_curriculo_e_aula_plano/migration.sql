-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "professor" TEXT,
    "observacoes" TEXT,
    "turmaId" INTEGER,
    "aulaCurriculoId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'ABERTA',
    CONSTRAINT "Aula_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Aula_aulaCurriculoId_fkey" FOREIGN KEY ("aulaCurriculoId") REFERENCES "AulaCurriculo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aula" ("createdAt", "data", "id", "observacoes", "professor", "status", "turmaId", "updatedAt") SELECT "createdAt", "data", "id", "observacoes", "professor", "status", "turmaId", "updatedAt" FROM "Aula";
DROP TABLE "Aula";
ALTER TABLE "new_Aula" RENAME TO "Aula";
CREATE TABLE "new_Turma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "faixaEtaria" TEXT NOT NULL,
    "diasSemana" TEXT NOT NULL,
    "horarioInicio" TEXT NOT NULL,
    "horarioFim" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "curriculoId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Turma_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "Curriculo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Turma" ("ativo", "createdAt", "diasSemana", "faixaEtaria", "horarioFim", "horarioInicio", "id", "nome", "professor") SELECT "ativo", "createdAt", "diasSemana", "faixaEtaria", "horarioFim", "horarioInicio", "id", "nome", "professor" FROM "Turma";
DROP TABLE "Turma";
ALTER TABLE "new_Turma" RENAME TO "Turma";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
