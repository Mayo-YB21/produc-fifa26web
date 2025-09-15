// src/app/components/ProductCard.tsx
// ---------------------------------
// Componente para mostrar cada producto en forma de tarjeta.
// Recibe props (image, title, price) y las renderiza de forma bonita.

import Image from "next/image";

type ProductCardProps = {
  image: string; // Ruta de la imagen (ej: /images/camisa-fran1.png)
  title: string; // Nombre del producto
  price: number; // Precio
};

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-xl">
      {/* Imagen del producto */}
      <div className="relative w-full h-48 mb-3">
        <Image
          src={image}
          alt={title}
          fill // hace que la imagen se adapte al contenedor
          className="object-contain"
        />
      </div>

      {/* Nombre */}
      <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>

      {/* Precio */}
      <p className="text-purple-700 font-bold text-xl mt-2">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
