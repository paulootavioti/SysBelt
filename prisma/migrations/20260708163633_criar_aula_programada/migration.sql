-- CreateTable
CREATE TABLE "AulaProgramada" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "turmaId" INTEGER NOT NULL,
    "aulaCurriculoId" INTEGER,
    "data" DATETIME NOT NULL,
    "observacoes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "aulaId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AulaProgramada_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AulaProgramada_aulaCurriculoId_fkey" FOREIGN KEY ("aulaCurriculoId") REFERENCES "AulaCurriculo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "AulaProgramada_aulaId_fkey" FOREIGN KEY ("aulaId") REFERENCES "Aula" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "AulaProgramada_aulaId_key" ON "AulaProgramada"("aulaId");
