'use client';

import { useState } from 'react';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types/product';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Camiseta Argentina 2024',
    description: 'Camiseta oficial - Edición Limitada',
    price: 89990,
    image: 'https://site-product.innovasport.com/img-test/JF2641/JF2641_5-1200_x_1200.jpg', // Camiseta de fútbol real
    category: 'Camisetas',
    stock: 15,
    featured: true
  },
  {
    id: '2', 
    name: 'Balón Oficial FIFA 2024',
    description: 'Balón profesional para competiciones',
    price: 59990,
    image: 'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/4018665-0199V1.jpg', // Balón de fútbol real
    category: 'Balones',
    stock: 8,
    featured: true
  },
  {
    id: '3',
    name: 'Gorra Nike Legacy 91',
    description: 'Gorra ajustable - Color negro',
    price: 34990,
    image: 'https://i5.walmartimages.com/asr/becec118-f45e-4ede-94c6-0a14892305a8.b21b60a70545b5bdb7d5d3a6caa9b85d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', // Gorra Nike negra real
    category: 'Accesorios',
    stock: 20,
    featured: false
  },
  {
    id: '4',
    name: 'Bufanda Oficial FIFA',
    description: 'Bufanda de lana premium',
    price: 24990,
    image: 'https://m.media-amazon.com/images/I/61YXl9PpIZL._SL1500_.jpg', // Bufanda de fútbol real
    category: 'Accesorios',
    stock: 12,
    featured: false
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const categories = ['Todos', 'Camisetas', 'Balones', 'Accesorios'];
  
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header con MÁS ESPACIO arriba */}
      <div className="bg-white border-b border-gray-200 pt-16"> {/* ← pt-16 agrega padding-top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Catálogo FIFA26</h1>
          <p className="text-lg text-gray-600">Productos oficiales</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2">
            {categories.map(category => {
              const isSelected = selectedCategory === category;
              const baseClasses = 'px-4 py-3 rounded-lg border transition-colors';
              const selectedClasses = isSelected 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50';
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={baseClasses + ' ' + selectedClasses}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}