import { useEffect, useState } from "react";
import type { Curriculo } from "../types/curriculo";
import { CurriculoService } from "../services/CurriculoService";

export function useCurriculos() {
  const [curriculos, setCurriculos] = useState<Curriculo[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function carregarCurriculos() {
    try {
      setLoading(true);
      setErro("");
      const data = await CurriculoService.listar();
      setCurriculos(data);
    } catch {
      setErro("Erro ao carregar currículos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarCurriculos();
  }, []);

  return {
    curriculos,
    setCurriculos,
    loading,
    erro,
    setErro,
    carregarCurriculos,
  };
}