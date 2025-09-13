import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fifa Produc 2026 ext App", ///Se cambia el titulo, por el de la pagina
  description: "Un citio wed de alucion a productos del mundial next app", ////Se cambia la descripcion, por la de la pagina que se esta haciendo.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (           //Se cambia el lenguaje de ingles "en"a español "es" //Se descubrio un error al cambiar el lenguaje de ingles a español, el error se llama "Error de suppress"
    <html lang="es"suppressHydrationWarning={true}>  
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
