import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export
  basePath: "",
  // basePath: process.env.NODE_ENV === "production" ? "/YagmurGULEC.github.io" : "", // Change "your-repo-name" to your actual GitHub repository name
  images: { unoptimized: true } // Required for Next.js images on GitHub Pages
};

export default nextConfig;
