/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tattoo-portfolio',
  env: { NEXT_PUBLIC_BASE_PATH: '/tattoo-portfolio' },
  images: { unoptimized: true },
};

export default nextConfig;
