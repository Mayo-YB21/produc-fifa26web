// src/data/products.ts
// --------------------
// Datos de productos personalizados que me pasaste.
// Asegúrate de tener las imágenes en /public/images con estos nombres de archivo.

import type { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Camisa Fran1", // <- tu nombre
    slug: "camisa-fran1", // slug (se usa en URLs, minúsculas y sin espacios)
    price: 1200,
    image: "/images/camisa-fran1.png", // pon la imagen con este nombre en /public/images
    category: "Ropa",
    description: "Camisa edición Francia, diseño 2026.",
    tags: ["camisa", "francia", "mundial"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    rating: 4.6,
  },
  {
    id: "p2",
    name: "Camisa Bra2",
    slug: "camisa-bra2",
    price: 1200,
    image: "/images/camisa-bra2.png",
    category: "Ropa",
    description: "Camisa edición Brasil, diseño 2026.",
    tags: ["camisa", "brasil", "mundial"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    rating: 4.5,
  },
  {
    id: "p3",
    name: "Copa Mun1",
    slug: "copa-mun1",
    price: 1500,
    image: "/images/copa-mun1.png",
    category: "Colección",
    description: "Mini trofeo edición coleccionista.",
    tags: ["copa", "trofeo", "coleccion"],
    inStock: true,
    rating: 4.8,
  },
  {
    id: "p4",
    name: "Copa MunVi2",
    slug: "copa-munvi2",
    price: 1800,
    image: "/images/copa-munvi2.png",
    category: "Colección",
    description: "Versión premium de trofeo con acabado brillante.",
    tags: ["copa", "trofeo", "premium"],
    inStock: true,
    rating: 4.9,
  },
  {
    id: "p5",
    name: "Balon Mun1",
    slug: "balon-mun1",
    price: 900,
    image: "/images/balon-mun1.png",
    category: "Balón",
    description: "Balón oficial, tamaño reglamentario.",
    tags: ["balon", "oficial"],
    inStock: true,
    rating: 4.7,
  },
  {
    id: "p6",
    name: "Balon Mun2Blan",
    slug: "balon-mun2blan",
    price: 950,
    image: "/images/balon-mun2blan.png",
    category: "Balón",
    description: "Balón edición especial en color blanco.",
    tags: ["balon", "edicion-especial"],
    inStock: true,
    rating: 4.6,
  },
];
