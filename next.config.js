/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub repo name is case-sensitive
  basePath: '/sigma_eye_clinic', 
  // Ensures assets are linked correctly within the repo subfolder
  assetPrefix: '/sigma_eye_clinic/', 
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;