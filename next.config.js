/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

// Only enable static export for GitHub Pages
if (process.env.EXPORT_NEXT) {
  nextConfig.output = 'export';
}

module.exports = nextConfig;
