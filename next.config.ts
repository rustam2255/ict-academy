// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ictacademy.uz',
        pathname: '/backend/media/**',
      },
    ],
  }

}

module.exports = nextConfig
