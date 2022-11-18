/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  
  // dir: "src",
  images: {
    unoptimized: true,
  },
  nextConfigDir: './',
  staticDir: './../static',
  // serverless-nextjs:
}

module.exports = nextConfig
