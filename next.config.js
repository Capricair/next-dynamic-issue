/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notexistsdomain.com", "images.drawelry.com"],
  },
}

module.exports = nextConfig
