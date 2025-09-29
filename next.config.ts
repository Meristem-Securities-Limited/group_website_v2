import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        hostname: "meristemng.com",
        pathname: "/**",
      },
    ],
    domains: ["www.meritrade.com", "www.res.cloudinary.com", "www.meristemng.com"],
  },
};

export default nextConfig;
