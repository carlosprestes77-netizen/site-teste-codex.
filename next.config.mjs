/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/site-teste-codex',
  env: { NEXT_PUBLIC_BASE_PATH: '/site-teste-codex' },
  images: { unoptimized: true },
};

export default nextConfig;
