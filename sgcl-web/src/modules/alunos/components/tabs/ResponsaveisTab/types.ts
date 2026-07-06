import type { Responsavel } from "../../../types/responsavel";

export interface ResponsaveisTabProps {
  responsaveis: Responsavel[];
  onNovo?: () => void;
  onEditar?: (responsavel: Responsavel) => void;
  onExcluir?: (responsavel: Responsavel) => void;
}