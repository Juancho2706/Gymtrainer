"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "INICIO", href: "#hero" },
    { name: "FILOSOFÍA", href: "#about" },
    { name: "ARSENAL", href: "#services" },
    { name: "OFFICERS", href: "#reviews" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 pointer-events-none`}
        >
            <div
                className={`bg-onyx/80 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full flex items-center justify-between gap-12 pointer-events-auto transition-all duration-500 hover:border-neon-lime/50 shadow-2xl shadow-black/50 ${scrolled ? "w-[90%] md:w-auto scale-95" : "w-[95%] md:w-[800px]"
                    }`}
            >
                <Link href="/" className="group flex items-center gap-2">
                    <span className="text-2xl font-black italic tracking-tighter text-white group-hover:text-neon-lime transition-colors">
                        OLYMPUS<span className="text-neon-lime">WOLF</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-bold tracking-widest text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="hidden md:block bg-neon-lime text-onyx px-5 py-2 font-bold text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all w-[140px] text-center clip-path-slant"
                    style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
                >
                    Únete Ahora
                </Link>

                <div className="md:hidden text-white">
                    Menu
                </div>
            </div>
        </motion.nav>
    );
}
