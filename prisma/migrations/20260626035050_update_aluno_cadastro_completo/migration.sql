-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "sexo" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "telefone" TEXT,
    "whatsapp" TEXT,
    "email" TEXT,
    "cep" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "escola" TEXT,
    "serieEscolar" TEXT,
    "turnoEscolar" TEXT,
    "peso" REAL,
    "altura" REAL,
    "tamanhoKimono" TEXT,
    "marcaKimono" TEXT,
    "restricoesMedicas" TEXT,
    "alergias" TEXT,
    "medicamentos" TEXT,
    "observacoes" TEXT,
    "fotoUrl" TEXT,
    "faixa" TEXT NOT NULL DEFAULT 'Branca',
    "grau" INTEGER NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "turmaId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aluno_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Aluno" ("ativo", "createdAt", "dataNascimento", "faixa", "grau", "id", "nome", "telefone", "turmaId") SELECT "ativo", "createdAt", "dataNascimento", "faixa", "grau", "id", "nome", "telefone", "turmaId" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
