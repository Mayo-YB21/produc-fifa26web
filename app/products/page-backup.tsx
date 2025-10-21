'use client';

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Camiseta Oficial Local', price: 89.99, inStock: true },
    { id: 2, name: 'Balón Mundial 2026', price: 129.99, inStock: true },
    { id: 3, name: 'Gorra Colección Oficial', price: 34.99, inStock: true },
    { id: 4, name: 'Bufanda Oficial', price: 24.99, inStock: false }
  ];

  const handleAddToCart = (productName: string) => {
    alert('✅ ' + productName + ' agregado al carrito!');
    // Aquí se conectaría con el CartContext real
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center' }}>
         Productos FIFA26
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map(product => (
          <div key={product.id} style={{ 
            border: '1px solid #e0e0e0', 
            borderRadius: '12px', 
            padding: '20px',
            background: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>
              {product.name}
            </h3>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#007acc',
              margin: '10px 0'
            }}>
              
            </p>
            <button 
              onClick={() => handleAddToCart(product.name)}
              disabled={!product.inStock}
              style={{ 
                width: '100%',
                padding: '12px',
                backgroundColor: product.inStock ? '#007acc' : '#cccccc',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                cursor: product.inStock ? 'pointer' : 'not-allowed'
              }}
            >
              {product.inStock ? '🛒 Agregar al Carrito' : ' Agotado'}
            </button>
            {!product.inStock && (
              <p style={{ color: '#ff4444', fontSize: '0.9rem', marginTop: '8px' }}>
                Producto temporalmente agotado
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
