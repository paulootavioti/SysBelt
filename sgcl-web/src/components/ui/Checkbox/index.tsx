import type { InputHTMLAttributes } from "react";

import "./styles.css";

interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Checkbox({
  label,
  ...props
}: CheckboxProps) {
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        className="checkbox"
        {...props}
      />

      <span>{label}</span>
    </label>
  );
}