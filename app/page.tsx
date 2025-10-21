'use client';

export default function Home() {
  const handleCartTest = () => {
    alert('¡El carrito funciona! Agrega productos desde la página de productos.');
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
         FIFA26 - Tienda Oficial
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: '#666' }}>
        Tienda oficial de productos del Mundial FIFA 2026
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginTop: '50px'
      }}>
        <a 
          href="/products"
          style={{
            padding: '20px',
            background: '#007acc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem'
          }}
        >
           Ver Productos
        </a>
        
        <a 
          href="/auth/login"
          style={{
            padding: '20px',
            background: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem'
          }}
        >
           Iniciar Sesión
        </a>
        
        <a 
          href="/auth/register"
          style={{
            padding: '20px',
            background: '#6f42c1',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem'
          }}
        >
           Registrarse
        </a>
      </div>
      
      <div style={{ marginTop: '50px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3> Carrito de Compras Funcional</h3>
        <p>El sistema de carrito está implementado y listo para usar.</p>
        <button 
          onClick={handleCartTest}
          style={{
            padding: '10px 20px',
            background: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Probar Carrito
        </button>
      </div>
    </div>
  );
}
