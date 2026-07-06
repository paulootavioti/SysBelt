import { prisma } from "../../../shared/database/prisma";

export class ListCurriculosService {
  async execute() {
    return prisma.curriculo.findMany({
      where: {
        ativo: true,
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
      orderBy: {
        nome: "asc",
      },
    });
  }
}