import { prisma } from "../../../shared/database/prisma";

export class ListTecnicasService {
  async execute() {
    return prisma.tecnica.findMany({
      where: {
        ativa: true,
      },
      orderBy: {
        nome: "asc",
      },
    });
  }
}