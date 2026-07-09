import { createContext } from "react";

export type ToastTipo = "success" | "error" | "info";

export interface ToastItem {
  id: number;
  tipo: ToastTipo;
  mensagem: string;
}

export interface ToastContextData {
  success: (mensagem: string) => void;
  error: (mensagem: string) => void;
  info: (mensagem: string) => void;
}

export const ToastContext = createContext({} as ToastContextData);