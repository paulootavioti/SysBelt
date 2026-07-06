import { prisma } from "../../../shared/database/prisma";
import { hash } from "bcryptjs";
import { AppError } from "../../../shared/errors/AppError";

interface CreateUsuarioDTO {
  nome: string;
  email: string;
  senha: string;
  perfil: string;
}

export class CreateUsuarioService {

  async execute({
    nome,
    email,
    senha,
    perfil
  }: CreateUsuarioDTO) {

    const usuarioExistente =
      await prisma.usuario.findUnique({
        where: {
          email
        }
      });

    if (usuarioExistente) {
      throw new AppError(
        "E-mail já cadastrado."
      );
    }

    const senhaHash =
      await hash(senha, 8);

    return prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        perfil
      }
    });

  }

}