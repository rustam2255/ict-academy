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
    ],
  }
}


module.exports = nextConfig
