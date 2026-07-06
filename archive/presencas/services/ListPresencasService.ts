import { prisma } from "../../../shared/database/prisma";

export class ListPresencasService {
  async execute() {
    return prisma.presenca.findMany({
      include: {
        aluno: true
      },
      orderBy: {
        data: "desc"
      }
    });
  }
}