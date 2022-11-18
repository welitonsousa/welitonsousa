/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  
  // dir: "src",
  images: {
    unoptimized: true,
  },
  "public": true,
    "builds": [
        { "src": "package.json", "use": "@now/next" },
        { "src": "static/css/style.css", "use": "@now/static" }
    ]
}

module.exports = nextConfig
