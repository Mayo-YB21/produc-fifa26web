"use client";

import Image from "next/image";
import type { Product } from "../app/types";; // ajusta si tu path de types es otro

type Props = {
  product: Product;
};

/**
 * ProductCard - tarjeta que muestra imagen, nombre, precio, rating y estado.
 * Comentarios en cada bloque para que comprendas qué hace.
 */
export default function ProductCard({ product }: Props) {
  // Formateo de precio simple (puedes extraerlo a lib/format.ts)
  const priceText = product.price.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      {/* Imagen: usamos un contenedor responsive */}
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
        <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
        {/* Si no está en stock, mostramos una capa encima */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-gray-700 font-semibold">
            Agotado
          </div>
        )}
      </div>

      {/* Contenido (texto) */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Nombre */}
        <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>

        {/* Descripción corta (opcional) */}
        {product.description && <p className="text-xs text-gray-500 mb-3 flex-1">{product.description}</p>}

        {/* Precio y acciones */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-purple-700 font-bold">{priceText}</p>
            {/* Rating simple con estrellas */}
            {typeof product.rating === "number" && (
              <div className="text-yellow-400 text-sm mt-1">
                {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-xs text-gray-400 ml-2">({product.rating.toFixed(1)})</span>
              </div>
            )}
          </div>

          {/* Botón Comprar (desactivado si no hay stock) */}
          <button
            disabled={!product.inStock}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${product.inStock ? "bg-[#733CEB] text-white hover:opacity-90" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
          >
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}

