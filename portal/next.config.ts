import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // async rewrites() {
  //   return [
  //     {
  //       source: "/cms/:path*",
  //       destination: "http://localhost:3101",
  //     },
  //     {
  //       source: "/data/:path*",
  //       destination: "http://localhost:3102",
  //     }
  //   ];
  // }
};

export default nextConfig;
