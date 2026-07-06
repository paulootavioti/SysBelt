import type { ReactNode } from "react";

import "./styles.css";

interface FormGridItemProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4;
}

export function FormGridItem({
  children,
  span = 1,
}: FormGridItemProps) {
  return (
    <div
      className={`form-grid-item span-${span}`}
    >
      {children}
    </div>
  );
}
