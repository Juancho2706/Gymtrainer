import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olympuswolf.cl"),
  title: "Olympus Wolf | Rendimiento de Élite",
  description: "Transforma tu cuerpo y mente con la metodología del lobo.",
  keywords: ["Entrenador Personal", "Personal Trainer", "Viña del Mar", "Hipertrofia", "Coach Online", "Gimnasio", "Fitness", "Olympus Wolf", "Roberto Carrasco"],
  authors: [{ name: "Roberto Carrasco" }],
  creator: "Roberto Carrasco",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
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
  twitter: {
    card: "summary_large_image",
    title: "Olympus Wolf | Rendimiento de Élite",
    description: "Entrenamiento híbrido y transformación integral con Roberto Carrasco.",
    images: ["/trainer-portrait.jpeg"], // Fallback to main image
  },
  icons: {
    icon: "/tow-logo.png",
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
