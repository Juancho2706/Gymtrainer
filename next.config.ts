import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/segundapagina",
        destination: "https://gymtrainer-a2g6feaoo-juancho2706s-projects.vercel.app/segundapagina",
      },
      {
        source: "/segundapagina/:path*",
        destination: "https://gymtrainer-a2g6feaoo-juancho2706s-projects.vercel.app/segundapagina/:path*",
      },
    ];
  },
};

export default nextConfig;
