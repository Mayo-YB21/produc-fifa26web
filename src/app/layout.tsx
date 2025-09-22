// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthWrapper from "./components/AuthWrapper"; // 👈 ahora aquí usamos el wrapper

export const metadata: Metadata = {
  title: "Tienda FIFA 2026",
  description: "Página escolar inspirada en el Mundial 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#A885F2] text-white">
        {/* El AuthWrapper maneja redirecciones en cliente */}
        <AuthWrapper>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}

