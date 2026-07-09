import { useCallback, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ToastContext, type ToastItem, type ToastTipo } from "./toastContext";
import { ToastContainer } from "../../components/ui/Toast";

const DURACAO_MS = 4000;

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(1);

  const remover = useCallback((id: number) => {
    setToasts((atual) => atual.filter((toast) => toast.id !== id));
  }, []);

  const adicionar = useCallback(
    (tipo: ToastTipo, mensagem: string) => {
      const id = nextId.current++;
      setToasts((atual) => [...atual, { id, tipo, mensagem }]);
      setTimeout(() => remover(id), DURACAO_MS);
    },
    [remover]
  );

  const success = useCallback((mensagem: string) => adicionar("success", mensagem), [adicionar]);
  const error = useCallback((mensagem: string) => adicionar("error", mensagem), [adicionar]);
  const info = useCallback((mensagem: string) => adicionar("info", mensagem), [adicionar]);

  return (
    <ToastContext.Provider value={{ success, error, info }}>
      {children}
      <ToastContainer toasts={toasts} onFechar={remover} />
    </ToastContext.Provider>
  );
}