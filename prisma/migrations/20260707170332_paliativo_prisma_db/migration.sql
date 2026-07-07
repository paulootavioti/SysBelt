/*
  Warnings:

  - You are about to drop the column `jogosSugeridos` on the `AulaCurriculo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AulaCurriculo" (
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
INSERT INTO "new_AulaCurriculo" ("createdAt", "descricao", "duracaoMinutos", "id", "moduloId", "objetivo", "ordem", "titulo", "updatedAt") SELECT "createdAt", "descricao", "duracaoMinutos", "id", "moduloId", "objetivo", "ordem", "titulo", "updatedAt" FROM "AulaCurriculo";
DROP TABLE "AulaCurriculo";
ALTER TABLE "new_AulaCurriculo" RENAME TO "AulaCurriculo";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
