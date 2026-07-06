import type { ReactNode } from "react";

import "./styles.css";

interface ToolbarProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

export function Toolbar({
  left,
  center,
  right,
}: ToolbarProps) {
  return (
    <div className="toolbar">

      <div className="toolbar-left">
        {left}
      </div>

      <div className="toolbar-center">
        {center}
      </div>

      <div className="toolbar-right">
        {right}
      </div>

    </div>
  );
}