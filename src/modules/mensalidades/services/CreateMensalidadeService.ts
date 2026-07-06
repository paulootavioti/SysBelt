import { prisma } from "../../../shared/database/prisma";
import { AppError } from "../../../shared/errors/AppError";

interface CreateMensalidadeDTO {
  valor: number;
  vencimento: string;
  alunoId: number;
}

export class CreateMensalidadeService {

  async execute({
    valor,
    vencimento,
    alunoId
  }: CreateMensalidadeDTO) {

    const dataVencimento =
      new Date(vencimento);

    const mes =
      dataVencimento.getMonth();

    const ano =
      dataVencimento.getFullYear();

    const mensalidadesAluno =
      await prisma.mensalidade.findMany({
        where: {
          alunoId
        }
      });

    const mensalidadeExistente =
      mensalidadesAluno.find(item => {

        const data =
          new Date(item.vencimento);

        return (
          data.getMonth() === mes &&
          data.getFullYear() === ano
        );
      });

    if (mensalidadeExistente) {

      throw new AppError(
        "Já existe uma mensalidade para este aluno neste mês."
      );
    }

    const mensalidade =
      await prisma.mensalidade.create({
        data: {
          valor,
          vencimento: dataVencimento,
          alunoId
        }
      });

    return mensalidade;
  }
}