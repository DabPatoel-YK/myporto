import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  turbopack: {},  // 👈 empty turbopack config silences the error
};

export default withContentlayer(nextConfig);