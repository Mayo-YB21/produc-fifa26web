// src/app/lib/utils.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn = Combina clases de forma inteligente.
 * Usa clsx para condicionales y twMerge para sobrescribir estilos duplicados de Tailwind.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
