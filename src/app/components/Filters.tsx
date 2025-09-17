// src/app/components/Filters.tsx
"use client";

import { useState } from "react";

export default function Filters() {
  const [category, setCategory] = useState<string[]>([]);
  const [price, setPrice] = useState(50);
  const [inStock, setInStock] = useState(false);

  // Manejo de checkboxes de categoría
  const toggleCategory = (value: string) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  return (
    <aside className="w-full md:w-64 bg-white border border-gray-200 rounded-2xl shadow-md p-5">
      <h2 className="text-lg font-bold mb-4 text-gray-700">Filtros</h2>

      {/* TAGS o Keywords */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {["Spring", "Smart"].map((tag) => (
            <span
              key={tag}
              className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-purple-200"
            >
              {tag} ✕
            </span>
          ))}
        </div>
      </div>

      {/* Categorías */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Categoría</h3>
        {["Camisetas", "Trofeos", "Balones"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              checked={category.includes(item)}
              onChange={() => toggleCategory(item)}
              className="text-purple-600 focus:ring-purple-500"
            />
            {item}
          </label>
        ))}
      </div>

      {/* Precio */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Precio</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-purple-600"
        />
        <p className="text-xs text-gray-500">Hasta: ${price}</p>
      </div>

      {/* Colores */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Color</h3>
        {["Blanco", "Amarillo", "Verde"].map((color) => (
          <label key={color} className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="text-purple-600 focus:ring-purple-500" />
            {color}
          </label>
        ))}
      </div>

      {/* Tallas */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Talla</h3>
        {["S", "M", "L", "XL"].map((size) => (
          <label key={size} className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="text-purple-600 focus:ring-purple-500" />
            {size}
          </label>
        ))}
      </div>

      {/* Disponibilidad */}
      <div className="flex items-center gap-2">
        <input
          id="inStock"
          type="checkbox"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
        />
        <label htmlFor="inStock" className="text-sm text-gray-700">
          Solo en stock
        </label>
      </div>
    </aside>
  );
}

