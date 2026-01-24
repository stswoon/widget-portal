import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '.'),
  },

  output: "standalone", //run node with next plugin inside consumes much less memory the usual next start
  // images: {
  //   remotePatterns: [
  //     {
  //       // protocol: "https",
  //       // hostname: "s3.amazonaws.com",
  //       // port: "",
  //       pathname: "/img/**",
  //       // search: ""
  //     }
  //   ]
  // }
};

export default nextConfig;
