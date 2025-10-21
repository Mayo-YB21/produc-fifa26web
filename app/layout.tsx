import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppleStyleHeader from "@/components/layout/AppleStyleHeader";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { CartSidebar } from "@/components/cart/CartSidebar";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FIFA26 Store - Tienda Oficial",
  description: "Descubre la colección oficial de productos del Mundial FIFA 2026. Diseño premium, calidad excepcional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>
          <CartProvider>
            <AppleStyleHeader />
            <main>
              {children}
            </main>
            <CartSidebar />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}