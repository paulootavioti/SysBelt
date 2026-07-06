import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

export class GetCurriculoService {
  async execute(id: number) {
    const curriculo = await prisma.curriculo.findUnique({
      where: {
        id,
      },
      include: {
        modulos: {
          orderBy: {
            ordem: "asc",
          },
          include: {
            aulas: {
              orderBy: {
                ordem: "asc",
              },
              include: {
                tecnicas: {
                  orderBy: {
                    ordem: "asc",
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!curriculo) {
      throw new AppError("Currículo não encontrado.");
    }

    return curriculo;
  }
}