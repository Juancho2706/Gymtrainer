import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}
