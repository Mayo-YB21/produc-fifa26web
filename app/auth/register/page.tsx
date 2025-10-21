'use client';

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registro exitoso! (Funcionalidad no implementada)');
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '400px', 
      margin: '50px auto',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      background: 'white'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
         Crear Cuenta
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder=" Nombre completo"
          style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <input 
          type="email" 
          placeholder=" Correo electrónico"
          style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <input 
          type="password" 
          placeholder=" Contraseña"
          style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
        />
        <button 
          type="submit"
          style={{ 
            padding: '12px', 
            backgroundColor: '#007acc', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Registrarse
        </button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="/auth/login" style={{ color: '#007acc' }}>
          ¿Ya tienes cuenta? Inicia sesión
        </a>
      </p>
    </div>
  );
}
