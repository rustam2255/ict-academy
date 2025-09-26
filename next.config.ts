// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ictacademy.uz',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'ictacademy.uz',
        pathname: '/media/**',
      },
        {
        protocol: 'http',
        hostname: 'ictacademy.uz',
        pathname: '/backend/media/**',
      },
      {
        protocol: 'https',
        hostname: 'ictacademy.uz',
        pathname: '/backend/media/**',
      },
    ],
  }
}


module.exports = nextConfig
