import { Input } from "../Input";

import "./styles.css";

interface ToolbarProps {
  search?: string;

  onSearch?(value: string): void;

  actions?: React.ReactNode;
}

export function Toolbar({
  search = "",
  onSearch,
  actions,
}: ToolbarProps) {
  return (
    <div className="datatable-toolbar">

      <div className="datatable-search">

        <Input
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) =>
            onSearch?.(e.target.value)
          }
        />

      </div>

      <div className="datatable-toolbar-actions">
        {actions}
      </div>

    </div>
  );
}