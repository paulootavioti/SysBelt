-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aula" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "professor" TEXT,
    "observacoes" TEXT,
    "turmaId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'ABERTA',
    CONSTRAINT "Aula_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aula" ("createdAt", "data", "id", "observacoes", "professor", "turmaId", "updatedAt") SELECT "createdAt", "data", "id", "observacoes", "professor", "turmaId", "updatedAt" FROM "Aula";
DROP TABLE "Aula";
ALTER TABLE "new_Aula" RENAME TO "Aula";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
