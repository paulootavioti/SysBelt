import type { ReactNode } from "react";

import "./styles.css";

interface SectionProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export function Section({
  title,
  description,
  actions,
  children,
}: SectionProps) {
  return (
    <section className="sgcl-section">
      {(title || description || actions) && (
        <header className="sgcl-section-header">
          <div>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>

          {actions}
        </header>
      )}

      {children}
    </section>
  );
}