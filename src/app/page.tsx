import Image from "next/image";
import Filters from "@/app/components/Filters";
import SearchBar from "@/app/components/SearchBar";
import SortControls from "@/app/components/SortControls";
import ProductCard from "@/app/components/ProductCard";
import Footer from "@/app/components/Footer";
import { PRODUCTS } from "@/app/data/products";
import type { Product } from "@/app/types";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#A885F2]">
        {/* 🏆 HERO SECTION - Portada */}
        <section className="bg-gradient-to-r from-[#733CEB] to-[#A885F2] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-8">
          {/* TEXTO PRINCIPAL */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              ¡Prepárate para el Mundial 2026!
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Camisetas, balones y recuerdos exclusivos para celebrar el evento
              de fútbol más grande del mundo.
            </p>
            <a
              href="#tienda"
              className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all"
            >
              Ver Productos
            </a>
          </div>

          {/* IMAGEN DEL HERO */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/hero-mundial.png"
              alt="Mundial 2026"
              width={400}
              height={400}
              className="drop-shadow-lg"
            />
          </div>
        </section>

        {/* 🛒 SECCIÓN DE TIENDA */}
        <div id="tienda" className="max-w-7xl mx-auto px-6 py-8">
          {/* Top bar: título + barra de búsqueda + controles */}
          <header className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tienda Mundial 2026
            </h2>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <SearchBar />
              <div className="flex items-center gap-4">
                <SortControls />
              </div>
            </div>
          </header>

          {/* Layout principal: sidebar + productos */}
          <section className="flex flex-col lg:flex-row gap-6">
            {/* SIDEBAR DE FILTROS */}
            <div className="w-full lg:w-72">
              <Filters />
            </div>

            {/* GRID DE PRODUCTOS */}
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

      {/* FOOTER */}
      <Footer />
    </>
  );
}

