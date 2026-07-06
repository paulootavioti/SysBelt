import "./styles.css";

interface BehaviorSelectorProps {
  values: {
    respeito: boolean;
    valentia: boolean;
    esforco: boolean;
    atencao: boolean;
    disciplina: boolean;
  };

  disabled?: boolean;

  onChange(
    field:
      | "respeito"
      | "valentia"
      | "esforco"
      | "atencao"
      | "disciplina",
    value: boolean
  ): void;
}

const behaviors = [
  {
    field: "respeito",
    label: "Respeito",
    className: "behavior-blue",
  },
  {
    field: "valentia",
    label: "Valentia",
    className: "behavior-green",
  },
  {
    field: "esforco",
    label: "Esforço",
    className: "behavior-orange",
  },
  {
    field: "atencao",
    label: "Atenção",
    className: "behavior-yellow",
  },
  {
    field: "disciplina",
    label: "Disciplina",
    className: "behavior-red",
  },
] as const;

export function BehaviorSelector({
  values,
  disabled = false,
  onChange,
}: BehaviorSelectorProps) {
  return (
    <div className="behavior-selector">
      {behaviors.map((behavior) => {
        const active = values[behavior.field];

        return (
          <button
            key={behavior.field}
            type="button"
            disabled={disabled}
            className={`behavior-item ${behavior.className} ${
              active ? "active" : ""
            }`}
            onClick={() =>
              onChange(behavior.field, !active)
            }
          >
            <span className="behavior-color" />
            <span>{behavior.label}</span>
            <strong>{active ? "✓" : "—"}</strong>
          </button>
        );
      })}
    </div>
  );
}