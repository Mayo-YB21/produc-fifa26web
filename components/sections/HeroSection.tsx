"use client";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title - Estilo Apple */}
        <h1 className="text-6xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6">
          FIFA
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">26</span>
        </h1>
        
        {/* Subtitle - Minimalista como Apple */}
        <p className="text-2xl lg:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          La experiencia definitiva del 
          <span className="block text-gray-900 font-medium">Mundial 2026</span>
        </p>
        
        {/* Description - Texto pequeño y elegante */}
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-7">
          Descubre la colección oficial con diseño premium. 
          <span className="block">Innovación y pasión en cada detalle.</span>
        </p>
        
        {/* CTA Buttons - Estilo Apple */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/products" 
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 text-lg font-medium transform hover:scale-105 active:scale-95"
          >
            Descubrir Productos
          </a>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-all duration-300 text-lg font-medium">
            Ver Video ›
          </button>
        </div>
        
        {/* Scroll indicator - Típico de Apple */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
