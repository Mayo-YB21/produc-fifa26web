"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Productos", href: "/#tienda" },
    { name: "Solución", href: "/solucion" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Recursos", href: "/recursos" },
    { name: "Precios", href: "/precios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Iniciar sesión", href: "/login" },
    { name: "Registrarse", href: "/registro" },
  ];

  return (
    <nav className="bg-[#733CEB] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Logo Tienda Mundial"
            className="h-10 w-auto"
          />
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={i}
                href={link.href}
                className={`relative transition-all duration-200 hover:text-yellow-300
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 after:transition-all after:duration-200 hover:after:w-full
                  ${isActive ? "text-yellow-300 after:w-full" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-purple-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE EN MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-[#733CEB] border-t border-purple-700">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={i}
                  href={link.href}
                  className={`block transition-all duration-200 hover:text-yellow-300
                    ${isActive ? "text-yellow-300 font-semibold" : ""}`}
                  onClick={() => setIsOpen(false)} // cerrar menú al hacer clic
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
