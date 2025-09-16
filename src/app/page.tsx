// src/app/page.tsx
import Filters from "./components/Filters";       // tu sidebar de filtros
import SearchBar from "./components/SearchBar";   // nuevo
import SortControls from "./components/SortControls"; // nuevo
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "../data/products";      // ruta relativa hacia src/data/products.ts
import type { Product } from "../types";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#A885F2]">
      {/* Contenedor central */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Top bar: título + barra de búsqueda + controles de orden */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-4">Tienda Mundial 2026</h1>

          {/* fila con SearchBar (al centro) y SortControls a la derecha */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <SearchBar />
            <div className="flex items-center gap-4">
              {/* badge 'New' o similar se maneja dentro de SortControls */}
              <SortControls />
            </div>
          </div>
        </header>

        {/* Layout principal: sidebar + grid de productos */}
        <section className="flex flex-col lg:flex-row gap-6">
          {/* SIDEBAR (ocupa ancho fijo en desktop) */}
          <div className="w-full lg:w-72">
            <Filters />
          </div>

          {/* CONTENIDO (grid de productos) */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((p: Product) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

