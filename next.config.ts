import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hiresprintcanvas.dreamhosters.com",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
