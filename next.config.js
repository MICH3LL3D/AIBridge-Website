/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/aibridge-website', // Replace with your repo name
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig 