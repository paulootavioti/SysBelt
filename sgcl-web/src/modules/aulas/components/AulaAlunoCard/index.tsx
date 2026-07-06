import { Checkbox } from "../../../../components/ui/Checkbox";
import { BehaviorSelector } from "../BehaviorSelector";

import type { AulaAlunoCardProps } from "./types";

import "./styles.css";

export function AulaAlunoCard({
  registro,
  aulaFinalizada,
  onChange,
}: AulaAlunoCardProps) {
  return (
    <article className="aula-aluno-card">
      <header className="aula-aluno-card-header">
        <div>
          <h3>{registro.aluno.nome}</h3>

          <p>
            Faixa {registro.aluno.faixa} • Grau{" "}
            {registro.aluno.grau}
          </p>
        </div>

        <Checkbox
          label="Presente"
          checked={registro.presente}
          disabled={aulaFinalizada}
          onChange={(event) =>
            onChange(registro, {
              presente: event.target.checked,
            })
          }
        />
      </header>

      <BehaviorSelector
        disabled={aulaFinalizada}
        values={{
          respeito: registro.respeito,
          valentia: registro.valentia,
          esforco: registro.esforco,
          atencao: registro.atencao,
          disciplina: registro.disciplina,
        }}
        onChange={(field, value) =>
          onChange(registro, {
            [field]: value,
          })
        }
      />
    </article>
  );
}