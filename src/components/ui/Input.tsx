"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // texto opcional arriba del input
  error?: string; // mensaje de error opcional
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, type = "text", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {/* Etiqueta del campo */}
        {label && (
          <label className="text-sm font-medium text-gray-800">{label}</label>
        )}

        {/* Campo de texto */}
        <input
          ref={ref}
          type={type}
          {...props}
          className={cn(
            "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-300",
            className
          )}
        />

        {/* Mensaje de error */}
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

