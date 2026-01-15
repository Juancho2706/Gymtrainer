import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Olympus Wolf | Rendimiento de Élite",
  description: "Transforma tu cuerpo y mente con la metodología del lobo.",
  openGraph: {
    title: "Olympus Wolf | Protocolo de Élite",
    description: "Entrenamiento híbrido, fuerza y nutrición. Únete a la manada.",
    url: "https://olympuswolf.cl",
    siteName: "Olympus Wolf",
    images: [
      {
        url: "/trainer-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Roberto - Head Coach Olympus Wolf",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-onyx text-white`}
      >
        {children}
      </body>
    </html>
  );
}
