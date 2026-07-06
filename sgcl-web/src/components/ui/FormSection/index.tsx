import type { ReactNode } from "react";

import "./styles.css";

interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function FormSection({
  title,
  subtitle,
  children,
}: FormSectionProps) {
  return (
    <section className="form-section">
      <header className="form-section-header">
        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </header>

      <div className="form-section-content">
        {children}
      </div>
    </section>
  );
}