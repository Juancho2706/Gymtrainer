"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-neon-lime selection:text-onyx bg-onyx text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}
