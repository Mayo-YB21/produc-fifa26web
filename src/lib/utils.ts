// src/app/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de forma inteligente.
 * - `clsx` permite condicionales y arrays.
 * - `twMerge` elimina conflictos entre clases de Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
