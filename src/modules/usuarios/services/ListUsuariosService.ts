import { prisma } from "../../../shared/database/prisma";

export class ListUsuariosService {

  async execute() {

    return prisma.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        perfil: true,
        ativo: true,
        createdAt: true
      },
      orderBy: {
        nome: "asc"
      }
    });

  }

}