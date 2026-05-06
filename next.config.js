/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // CRITICAL: This tells Next.js to create the /out folder
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
};

module.exports = nextConfig;