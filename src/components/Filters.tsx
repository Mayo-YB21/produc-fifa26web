"use client";

import { useState } from "react";

export default function Filters() {
  const [keywords, setKeywords] = useState(["Spring", "Smart"]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 100]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  // Quitar keyword
  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  return (
    <aside className="w-full md:w-64 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 space-y-6 text-black">
      {/* Keywords */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="flex items-center gap-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
            >
              {k}
              <button
                onClick={() => removeKeyword(k)}
                className="text-gray-500 hover:text-red-500 text-sm"
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Categoría */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Categoría
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-purple-400"
        >
          <option value="">Todas</option>
          <option value="ropa">Ropa</option>
          <option value="balon">Balones</option>
          <option value="accesorio">Accesorios</option>
        </select>
      </div>

      {/* Rango de precio */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Precio
        </label>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>${price[0]}</span>
          <span>${price[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={price[0]}
          onChange={(e) => setPrice([+e.target.value, price[1]])}
          className="w-full accent-purple-600"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={price[1]}
          onChange={(e) => setPrice([price[0], +e.target.value])}
          className="w-full accent-purple-600"
        />
      </div>

      {/* Filtro por color */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1">Color</h3>
        {["Rojo", "Azul", "Verde"].map((c) => (
          <label key={c} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={colors.includes(c)}
              onChange={() =>
                setColors((prev) =>
                  prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
                )
              }
              className="accent-purple-600"
            />
            {c}
          </label>
        ))}
      </div>

      {/* Filtro por talla */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1">Tamaño</h3>
        {["S", "M", "L", "XL"].map((s) => (
          <label key={s} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={sizes.includes(s)}
              onChange={() =>
                setSizes((prev) =>
                  prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
                )
              }
              className="accent-purple-600"
            />
            {s}
          </label>
        ))}
      </div>
    </aside>
  );
}
