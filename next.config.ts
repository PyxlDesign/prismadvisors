import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable for static exports (remove if using API routes)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true, // Required for static export
  // },

  // Optimize for production
  compress: true,
  poweredByHeader: false,

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://prismadvisors.com',
  },

  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
