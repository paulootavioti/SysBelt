import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class UpdatePerfilUsuarioService {

  async execute(
    id: number,
    perfil: string
  ) {

    const usuario =
      await prisma.usuario.findUnique({
        where: {
          id
        }
      });

    if (!usuario) {
      throw new AppError(
        "Usuário não encontrado."
      );
    }

    return prisma.usuario.update({
      where: {
        id
      },
      data: {
        perfil
      }
    });

  }

}