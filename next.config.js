/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});



const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // assetPrefix: 'https://raw.githubusercontent.com/welitonsousa/welitonsousa/main/docs/',
  images: {
    unoptimized: true,
  }, 
}

export default withMDX(nextConfig)
// module.exports = nextConfig
