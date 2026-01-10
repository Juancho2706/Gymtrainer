import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/segundapagina",
        destination: "https://gymtrainer-71qwxx0qu-juancho2706s-projects.vercel.app/segundapagina",
      },
      {
        source: "/segundapagina/:path*",
        destination: "https://gymtrainer-71qwxx0qu-juancho2706s-projects.vercel.app/segundapagina/:path*",
      },
    ];
  },
};

export default nextConfig;
