import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Aquí irán las otras secciones después */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Próximas Secciones
          </h2>
          <p className="text-gray-600">
            Product Showcase, Features Grid y más componentes Apple-style se agregarán aquí
          </p>
        </div>
      </section>
    </>
  );
}