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
    ],
    domains: ["www.meritrade.com", "www.res.cloudinary.com"],
  },
};

export default nextConfig;
