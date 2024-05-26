/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.ctfassets.net',
      'images.unsplash.com',
      'source.unsplash.com',
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
