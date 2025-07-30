import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
