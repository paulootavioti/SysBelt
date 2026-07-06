-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Responsavel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT,
    "rg" TEXT,
    "dataNascimento" DATETIME,
    "sexo" TEXT,
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
    "parentesco" TEXT NOT NULL DEFAULT 'Não informado',
    "responsavelFinanceiro" BOOLEAN NOT NULL DEFAULT false,
    "podeBuscar" BOOLEAN NOT NULL DEFAULT true,
    "contatoEmergencia" BOOLEAN NOT NULL DEFAULT false,
    "recebeComunicados" BOOLEAN NOT NULL DEFAULT true,
    "observacoes" TEXT,
    "fotoUrl" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "alunoId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Responsavel_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Responsavel" ("alunoId", "createdAt", "email", "id", "nome", "telefone") SELECT "alunoId", "createdAt", "email", "id", "nome", "telefone" FROM "Responsavel";
DROP TABLE "Responsavel";
ALTER TABLE "new_Responsavel" RENAME TO "Responsavel";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
