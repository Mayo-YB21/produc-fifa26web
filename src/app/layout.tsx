import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"; //  Importamos el Navbar que creaste

//  Metadata = Título y descripción que verá el navegador
export const metadata: Metadata = {
  title: "Tienda FIFA 2026",
  description: "Página escolar inspirada en el Mundial 2026",
};

//  RootLayout = estructura global de la página
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#A885F2] text-white">
        {/* NAVBAR global, aparece en todas las páginas */}
        <Navbar />

        {/* Aquí se inyecta el contenido de cada página */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
