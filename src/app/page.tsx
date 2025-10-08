import Image from "next/image";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import SortControls from "../components/SortControls";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../app/data/products";
import type { Product } from "../app/types";

export default function HomePage() {
  const products: Product[] = PRODUCTS;

  return (
    <main className="min-h-screen bg-[#A885F2]">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#733CEB] to-[#A885F2] text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            ¡Prepárate para el Mundial 2026!
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Camisetas, balones y recuerdos exclusivos para celebrar el evento de
            fútbol más grande del mundo.
          </p>
          <a
            href="#tienda"
            className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all"
          >
            Ver Productos
          </a>
        </div>

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

      {/* SECCIÓN SOLUCIÓN */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Por qué elegirnos?</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Nuestra tienda ofrece productos oficiales y de calidad, envío rápido y
          seguro, y una experiencia de compra diseñada para los verdaderos fans
          del fútbol.
        </p>
      </section>

      {/* SECCIÓN COMUNIDAD */}
      <section className="bg-[#733CEB] py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Únete a nuestra comunidad</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Miles de aficionados ya forman parte de nuestra comunidad. ¡No te
          quedes fuera!
        </p>
        <a
          href="#registro"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all"
        >
          Crear cuenta gratis
        </a>
      </section>

      {/* SECCIÓN RECURSOS */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Recursos para fans</h2>
        <p className="max-w-2xl mx-auto opacity-90 mb-8">
          Encuentra artículos, estadísticas y curiosidades para disfrutar al
          máximo el Mundial.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Noticias</h3>
            <p className="text-sm opacity-80">
              Mantente al día con lo último del torneo.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Calendario</h3>
            <p className="text-sm opacity-80">
              Consulta fechas y horarios de los partidos.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow">
            <h3 className="font-bold mb-2">Guías</h3>
            <p className="text-sm opacity-80">
              Consejos y datos curiosos para los fans más apasionados.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRECIOS */}
      <section className="bg-[#5b2ec7] py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Nuestros precios</h2>
        <p className="max-w-2xl mx-auto opacity-90 mb-8">
          Productos de calidad a precios accesibles para todos los fans.
        </p>
        <a
          href="#tienda"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all"
        >
          Ver catálogo
        </a>
      </section>

      {/* SECCIÓN TIENDA */}
      <div id="tienda" className="max-w-7xl mx-auto px-6 py-8">
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

        <section className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-72">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* SECCIÓN CONTACTO */}
      <section className="bg-[#733CEB] py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <p className="max-w-2xl mx-auto mb-6 opacity-90">
          ¿Tienes dudas o sugerencias? Escríbenos, queremos escucharte.
        </p>
        <a
          href="/contacto"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition-all"
        >
          Ir a formulario
        </a>
      </section>
    </main>
  );
}
