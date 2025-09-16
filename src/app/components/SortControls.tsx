"use client";

import { useState } from "react";

/**
 * SortControls - botones para ordenar / filtrar visualmente.
 * Por ahora mantiene estado propio; en el futuro lo puedes elevar al padre.
 */
export default function SortControls() {
  // estado para saber cuál filtro/orden está activo
  const [active, setActive] = useState<"new" | "priceAsc" | "priceDesc" | "rating" | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Botón 'New' */}
      <button
        onClick={() => setActive(active === "new" ? null : "new")}
        className={`text-sm px-3 py-1 rounded-full border ${active === "new" ? "bg-white text-[#733CEB] font-semibold" : "bg-transparent text-white/90"}`}
      >
        New
      </button>

      {/* Precio ascendente */}
      <button
        onClick={() => setActive(active === "priceAsc" ? null : "priceAsc")}
        className={`text-sm px-3 py-1 rounded-full border ${active === "priceAsc" ? "bg-white text-[#733CEB] font-semibold" : "bg-transparent text-white/90"}`}
      >
        Price ascending
      </button>

      {/* Precio descendente */}
      <button
        onClick={() => setActive(active === "priceDesc" ? null : "priceDesc")}
        className={`text-sm px-3 py-1 rounded-full border ${active === "priceDesc" ? "bg-white text-[#733CEB] font-semibold" : "bg-transparent text-white/90"}`}
      >
        Price descending
      </button>

      {/* Rating */}
      <button
        onClick={() => setActive(active === "rating" ? null : "rating")}
        className={`text-sm px-3 py-1 rounded-full border ${active === "rating" ? "bg-white text-[#733CEB] font-semibold" : "bg-transparent text-white/90"}`}
      >
        Rating
      </button>
    </div>
  );
}
