// Cria (ou atualiza a senha de) o primeiro usuário ADMIN.
// Necessário porque POST /auth/register exige um ADMIN autenticado —
// num banco novo (ex.: recém-migrado para o Netlify/Neon) não existe
// nenhum usuário ainda, então não há como logar para criar o primeiro.
//
// Uso: DATABASE_URL="..." npx ts-node prisma/seeds/criarAdminInicial.ts
// Variáveis opcionais: ADMIN_NOME, ADMIN_EMAIL, ADMIN_SENHA
// (senha default só serve para teste — troque depois do primeiro login).

import "dotenv/config";
import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const nome = process.env.ADMIN_NOME || "Administrador";
  const email = process.env.ADMIN_EMAIL || "admin@sysbelt.com";
  const senha = process.env.ADMIN_SENHA || "admin123";

  const senhaHash = await hash(senha, 8);

  const usuario = await prisma.usuario.upsert({
    where: { email },
    update: { senha: senhaHash, perfil: "ADMIN", ativo: true },
    create: { nome, email, senha: senhaHash, perfil: "ADMIN" },
  });

  console.log(`Usuário ADMIN pronto: ${usuario.email} (id ${usuario.id})`);
  console.log("Se usou a senha default, troque-a após o primeiro login.");
}

main()
  .catch((err) => {
    console.error("Erro ao criar admin inicial:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
