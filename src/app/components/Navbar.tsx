"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; //  Importamos para saber en qué ruta estamos

export default function Navbar() {
  const pathname = usePathname(); //  Obtiene la URL actual (ejemplo: "/productos")

  // Lista de enlaces de navegación
  const links = [
    { name: "Productos", href: "/" },
    { name: "Solución", href: "/solucion" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Recursos", href: "/recursos" },
    { name: "Precios", href: "/precios" },
    { name: "Contacto", href: "/contacto" },
    { name: "Enlace", href: "/enlace" },
  ];

  return (
    <nav className="bg-[#733CEB] text-white flex items-center justify-between px-8 py-4 shadow-md">
      {/* LOGO como imagen */}
    <Link href="/" className="flex items-center gap-2">
      <img
        src="/images/logo.png"
        alt="Logo FIFA 2026"
        className="h-10 w-auto"
      />
    </Link>

      {/* LINKS DEL NAVBAR */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {links.map((link, i) => {
          // Verificamos si el link actual es el activo
          const isActive = pathname === link.href;

          return (
            <Link
              key={i}
              href={link.href}
              className={`relative transition-all duration-200 
                hover:text-yellow-300 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-300 after:left-0 after:-bottom-1 after:transition-all after:duration-200 
                hover:after:w-full
                ${isActive ? "text-yellow-300 after:w-full" : ""}`} //  Si es activo, queda resaltado
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* BOTONES DERECHA */}
      <div className="flex gap-3">
        {/* Botón de iniciar sesión */}
        <button className="px-4 py-1 bg-transparent border border-white rounded-lg hover:bg-white hover:text-[#733CEB] transition-all duration-200">
          Iniciar sesión
        </button>

        {/* Botón de registrarse */}
        <button className="px-4 py-1 bg-white text-[#733CEB] font-bold rounded-lg hover:bg-gray-200 transition-all duration-200">
          Registrarse
        </button>
      </div>
    </nav>
  );
}
