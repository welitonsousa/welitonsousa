/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")(["ui"]);

const nextConfig = {
  swcMinify: true,
  dir: "src",
  // outDir: "./build",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
