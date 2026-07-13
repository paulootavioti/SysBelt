-- CreateTable
CREATE TABLE "Comportamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "alunoId" INTEGER NOT NULL,
    "respeito" INTEGER NOT NULL,
    "valentia" INTEGER NOT NULL,
    "esforco" INTEGER NOT NULL,
    "atencao" INTEGER NOT NULL,
    "disciplina" INTEGER NOT NULL,
    "observacao" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comportamento_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
