-- CreateTable
CREATE TABLE "Aula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "professor" TEXT,
    "observacoes" TEXT,
    "turmaId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aula_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Presenca" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "presente" BOOLEAN NOT NULL DEFAULT true,
    "respeito" INTEGER,
    "valentia" INTEGER,
    "esforco" INTEGER,
    "atencao" INTEGER,
    "disciplina" INTEGER,
    "observacao" TEXT,
    "alunoId" INTEGER NOT NULL,
    "aulaId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Presenca_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Presenca_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aula" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Presenca" ("alunoId", "data", "id") SELECT "alunoId", "data", "id" FROM "Presenca";
DROP TABLE "Presenca";
ALTER TABLE "new_Presenca" RENAME TO "Presenca";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
