import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone" //run node with next plugin inside consumes much less memory the usual next start
};

export default nextConfig;
