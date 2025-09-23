"use client";

import { useState } from "react";

type Props = {
  // opcional: callback si en el futuro quieres manejar la búsqueda desde el padre
  onSearch?: (q: string) => void;
};

/**
 * SearchBar - input con icono. Por ahora local (no hace fetch), pero
 * expone onSearch para integrarlo más adelante.
 */
export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    // si el padre pasa onSearch, lo llamamos (esto permite hacer búsqueda real luego)
    if (onSearch) onSearch(query);
    // por ahora solo lo mantenemos local (no navegamos ni hacemos API)
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-3 w-full max-w-2xl">
      {/* contenedor del input para dar estilo */}
      <div className="flex items-center flex-1 bg-white rounded-full px-3 py-2 shadow-sm">
        {/* icono de lupa (SVG) */}
        <svg className="w-5 h-5 text-gray-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1 0 9 16.5a7.5 7.5 0 0 0 7.65.15z" />
        </svg>

        {/* input controlado */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
          aria-label="Buscar productos"
        />

        {/* botón pequeño de búsqueda (solo UI) */}
        <button
          type="submit"
          className="ml-2 bg-[#733CEB] text-white rounded-full px-3 py-1 text-sm hover:opacity-90 transition"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
