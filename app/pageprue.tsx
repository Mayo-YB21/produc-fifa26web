// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6">
            FIFA26
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto">
            La experiencia definitiva del Mundial 2026. 
            <span className="block text-blue-500 font-medium">Diseño. Innovación. Pasión.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg font-medium">
              Descubrir Productos
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors text-lg font-medium">
              Ver Ediciones
            </button>
          </div>
        </div>
      </section>

      {/* Scroll para probar el efecto del header */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Desplázate hacia abajo para ver el efecto del header</p>
      </section>
    </div>
  );
}