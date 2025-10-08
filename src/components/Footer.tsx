"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#733CEB] text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 🟣 LOGO Y DESCRIPCIÓN */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Tienda Mundial 2026</h2>
          <p className="text-sm opacity-80">
            La mejor tienda para los fanáticos del fútbol. Encuentra camisetas,
            balones y accesorios oficiales para celebrar el Mundial 2026.
          </p>
        </div>

        {/* 🟣 ENLACES - EXPLORAR */}
        <div>
          <h3 className="font-semibold mb-3">Explorar</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/#tienda"
                className="hover:text-yellow-300 transition-colors"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/acerca-de"
                className="hover:text-yellow-300 transition-colors"
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="hover:text-yellow-300 transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* 🟣 ENLACES - SOPORTE */}
        <div>
          <h3 className="font-semibold mb-3">Soporte</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/faq"
                className="hover:text-yellow-300 transition-colors"
              >
                Preguntas Frecuentes
              </Link>
            </li>
            <li>
              <Link
                href="/politicas"
                className="hover:text-yellow-300 transition-colors"
              >
                Políticas de Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terminos"
                className="hover:text-yellow-300 transition-colors"
              >
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>

        {/* 🟣 REDES SOCIALES */}
        <div>
          <h3 className="font-semibold mb-3">Síguenos</h3>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook" className="hover:text-yellow-300">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-yellow-300">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-yellow-300">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-yellow-300">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-yellow-300">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 🟣 COPYRIGHT */}
      <div className="border-t border-white/20 text-center py-4 text-sm opacity-80">
        &copy; {new Date().getFullYear()} Tienda Mundial 2026. Todos los derechos reservados.
      </div>
    </footer>
  );
}
