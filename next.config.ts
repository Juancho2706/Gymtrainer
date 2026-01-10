import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRUCIAL: Esto hace que toda esa app viva bajo /segundapagina
  basePath: "/segundapagina",
};

export default nextConfig;
