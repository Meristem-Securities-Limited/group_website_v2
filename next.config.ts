import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't let ESLint warnings/errors fail `next build` / `yarn build`.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.meritrade.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "meristemng.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
    domains: [
      "www.meritrade.com",
      "www.res.cloudinary.com",
      "www.meristemng.com",
      "www.unsplash.com",
      "www.placehold.co",
    ],
  },
};

export default nextConfig;
