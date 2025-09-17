import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#733CEB] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Nombre */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tienda Mundial 2026</h3>
          <p className="text-sm opacity-80">
            Productos oficiales para celebrar el torneo más grande del fútbol.
          </p>
        </div>

        {/* Columna 1 */}
        <div>
          <h4 className="font-semibold mb-3">Explorar</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#tienda" className="hover:underline">Productos</a></li>
            <li><a href="/acerca-de" className="hover:underline">Acerca de</a></li>
            <li><a href="/contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-semibold mb-3">Recursos</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Soporte</a></li>
            <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-yellow-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-6">
        <p className="text-center text-sm py-4 opacity-75">
          &copy; {new Date().getFullYear()} Tienda Mundial 2026. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
