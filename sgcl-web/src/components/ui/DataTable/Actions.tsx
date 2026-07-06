import { Button } from "../Button/index";

import "./styles.css";

interface ActionsProps {
  onEdit?(): void;
  onDelete?(): void;
}

export function Actions({
  onEdit,
  onDelete,
}: ActionsProps) {
  return (
    <div className="datatable-actions">
      {onEdit && (
        <Button
          type="button"
          variant="secondary"
          onClick={onEdit}
        >
          Editar
        </Button>
      )}

      {onDelete && (
        <Button
          type="button"
          variant="danger"
          onClick={onDelete}
        >
          Excluir
        </Button>
      )}
    </div>
  );
}