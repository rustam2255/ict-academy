// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '217.76.56.73',
        port: '8008',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
