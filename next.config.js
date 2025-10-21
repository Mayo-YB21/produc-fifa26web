/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify ya no es necesario en Next.js 15
  experimental: {
    optimizeCss: true,
  }
}

module.exports = nextConfig
