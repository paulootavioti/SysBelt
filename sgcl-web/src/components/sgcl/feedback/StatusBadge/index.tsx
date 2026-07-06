import { Badge } from "../../../ui/Badge";

interface StatusBadgeProps {
  status: "ABERTA" | "FINALIZADA" | "ATIVO" | "INATIVO";
}

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  const variant =
    status === "ABERTA"
      ? "warning"
      : status === "FINALIZADA"
        ? "success"
        : status === "ATIVO"
          ? "success"
          : "danger";

  const label =
    status === "ABERTA"
      ? "Aberta"
      : status === "FINALIZADA"
        ? "Finalizada"
        : status === "ATIVO"
          ? "Ativo"
          : "Inativo";

  return (
    <Badge variant={variant}>
      {label}
    </Badge>
  );
}