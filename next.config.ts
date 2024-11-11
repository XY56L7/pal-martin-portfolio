import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  output: 'export',
  basePath: '/pal-martin-portfolio',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
