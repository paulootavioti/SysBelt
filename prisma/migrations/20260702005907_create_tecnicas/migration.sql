/*
  Warnings:

  - You are about to drop the column `ativo` on the `Tecnica` table. All the data in the column will be lost.
  - Made the column `categoria` on table `Tecnica` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tecnica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "subCategoria" TEXT,
    "descricao" TEXT,
    "faixaMinima" TEXT,
    "idadeMinima" INTEGER,
    "nivel" TEXT,
    "ordemCurriculo" INTEGER,
    "ativa" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Tecnica" ("categoria", "createdAt", "descricao", "faixaMinima", "id", "idadeMinima", "nome", "updatedAt") SELECT "categoria", "createdAt", "descricao", "faixaMinima", "id", "idadeMinima", "nome", "updatedAt" FROM "Tecnica";
DROP TABLE "Tecnica";
ALTER TABLE "new_Tecnica" RENAME TO "Tecnica";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
