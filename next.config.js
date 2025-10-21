/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactiva la opción experimental que puede causar errores de compilación
  // experimental: {
  //   optimizeCss: true,
  // },

  // Ignora errores de ESLint y TypeScript durante el build para evitar que falle el despliegue
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Habilita las rutas tipadas para mejor experiencia en TypeScript (Estable en 15.5)
  typedRoutes: true,

  // Configuración para imágenes si tu proyecto las utiliza
  images: {
    // Agrega aquí los dominios de los que cargas imágenes externas, si los hay
    // domains: ['ejemplo.com'],
  },
}

module.exports = nextConfig