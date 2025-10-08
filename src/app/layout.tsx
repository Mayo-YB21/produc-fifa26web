import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthWrapper from "../components/AuthWrapper";

export const metadata: Metadata = {
  title: "Tu Proyecto",
  description: "Plataforma web desarrollada en Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <AuthWrapper>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}


