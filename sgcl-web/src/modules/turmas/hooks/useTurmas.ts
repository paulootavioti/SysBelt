import { useEffect, useState } from "react";
import type { Turma } from "../types/turma";
import { TurmaService } from "../services/TurmaService";

export function useTurmas() {
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarTurmas() {
    try {
      setLoading(true);
      setErro("");
      const data = await TurmaService.listar();
      setTurmas(data);
    } catch {
      setErro("Erro ao carregar turmas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarTurmas();
  }, []);

  return {
    turmas,
    setTurmas,
    loading,
    erro,
    setErro,
    carregarTurmas,
  };
}