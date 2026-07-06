import type { ReactNode } from "react";
import "./styles.css";

interface CardProps {
  titulo?: string;
  valor?: string | number;
  children?: ReactNode;
}

export function Card({
  titulo,
  valor,
  children,
}: CardProps) {
  return (
    <div className="card">
      {titulo && <p>{titulo}</p>}
      {valor !== undefined && <h2>{valor}</h2>}
      {children}
    </div>
  );
}