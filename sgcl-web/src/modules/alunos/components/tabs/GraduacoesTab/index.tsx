import type { AlunoCompleto } from "../../../types/alunoCompleto";

interface GraduacoesTabProps {
  aluno: AlunoCompleto;
}

export function GraduacoesTab({
  aluno,
}: GraduacoesTabProps) {
  if (!aluno.graduacoes?.length) {
    return <p>Nenhuma graduação registrada.</p>;
  }

  return (
    <div>
      <h3>Graduações</h3>

      {aluno.graduacoes.map((graduacao) => (
        <p key={graduacao.id}>
          {graduacao.faixa}
          {" - "}
          {new Date(
            graduacao.data
          ).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          })}
        </p>
      ))}
    </div>
  );
}