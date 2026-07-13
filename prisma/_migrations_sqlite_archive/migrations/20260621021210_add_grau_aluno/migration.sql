-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "telefone" TEXT NOT NULL,
    "faixa" TEXT NOT NULL DEFAULT 'Branca',
    "grau" INTEGER NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Aluno" ("ativo", "createdAt", "dataNascimento", "faixa", "id", "nome", "telefone") SELECT "ativo", "createdAt", "dataNascimento", "faixa", "id", "nome", "telefone" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
