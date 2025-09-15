// src/app/page.tsx
// ---------------
// Página principal que muestra los productos en un grid.

import { PRODUCTS } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#A885F2] p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Bienvenido a la Tienda Mundial 2026
      </h1>

      {/* Grid de productos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}
