'use client';

import { useCart } from '@/context/CartContext';

export const CartIcon = () => {
  const { getTotalItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 transition-colors duration-200 hover:bg-gray-100 rounded-full"
      aria-label="Abrir carrito de compras"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21"
        />
      </svg>
      
      {getTotalItems() > 0 && (
        <span className="absolute -top-1 -right-1 bg-apple-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
          {getTotalItems()}
        </span>
      )}
    </button>
  );
};
