import type { ReactNode } from "react";

import "./styles.css";

interface FormGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
}

export function FormGrid({
  children,
  columns = 2,
}: FormGridProps) {
  return (
    <div
      className={`form-grid form-grid-${columns}`}
    >
      {children}
    </div>
  );
}