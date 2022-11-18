/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  // dir: "src",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
