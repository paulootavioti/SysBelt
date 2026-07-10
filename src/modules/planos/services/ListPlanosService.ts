import { prisma } from "../../../shared/database/prisma";

export class ListPlanosService {
  async execute() {
    return prisma.plano.findMany({
      orderBy: {
        nome: "asc",
      },
    });
  }
}
