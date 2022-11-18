/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  
  // dir: "src",
  images: {
    unoptimized: true,
  },
  distDir: "_next",
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  // basePath: './',
  // assetPrefix: './next',
  
 
}

module.exports = nextConfig
