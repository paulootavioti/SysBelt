import type { AlunoCompleto } from "../../../types/alunoCompleto";

interface FinanceiroTabProps {
  aluno: AlunoCompleto;
}

export function FinanceiroTab({
  aluno,
}: FinanceiroTabProps) {
  if (!aluno.mensalidades?.length) {
    return <p>Nenhuma mensalidade cadastrada.</p>;
  }

  return (
    <div>
      <h3>Mensalidades</h3>

      {aluno.mensalidades.map((mensalidade) => (
        <p key={mensalidade.id}>
          R$ {mensalidade.valor.toFixed(2)}
          {" - "}
          {mensalidade.pago
            ? "Pago"
            : "Pendente"}
        </p>
      ))}
    </div>
  );
}