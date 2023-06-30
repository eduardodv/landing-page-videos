/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'img.youtube.com',
      },
    ],
  },
}

module.exports = nextConfig
