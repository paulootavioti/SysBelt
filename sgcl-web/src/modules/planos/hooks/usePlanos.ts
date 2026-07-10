import { useEffect, useState } from "react";
import type { Plano } from "../types/plano";
import { PlanoService } from "../services/PlanoService";

export function usePlanos() {
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarPlanos() {
    try {
      setLoading(true);
      setErro("");
      const data = await PlanoService.listar();
      setPlanos(data);
    } catch {
      setErro("Erro ao carregar planos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarPlanos();
  }, []);

  return {
    planos,
    setPlanos,
    loading,
    erro,
    setErro,
    carregarPlanos,
  };
}
