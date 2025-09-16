// src/types/index.ts
// ------------------
// Tipos TypeScript usados por la UI.
// Tener tipos hace que el IDE/TypeScript te advierta si usas mal un campo.

export type Product = {
  id: string;            // id único (ej: 'p1')
  name: string;          // nombre mostrado
  slug: string;          // ruta amigable (ej: 'camiseta-francia-2026')
  price: number;         // precio en moneda local (ej: 1299.99) - usamos number para cálculos
  image: string;         // ruta relativa a `public/` (ej: '/images/camiseta-francia.png')
  category: string;      // categoría general (ej: 'Ropa', 'Balón', 'Accesorio')
  description?: string;  // descripción corta (opcional)
  tags?: string[];       // etiquetas útiles para filtros/search
  sizes?: string[];      // si aplica (S, M, L, XL)
  inStock?: boolean;     // disponible para compra o no
  rating?: number;       // valoración promedio 0..5 (opcional)
};