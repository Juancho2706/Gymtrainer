"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { name: "INICIO", href: "#hero" },
    { name: "FILOSOFÍA", href: "#about" },
    { name: "ARSENAL", href: "#services" },
    { name: "OFFICERS", href: "#reviews" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <>
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

                    {/* MOBILE MENU TOGGLE */}
                    <button
                        className="md:hidden text-white sm:mr-[-10px] w-8 h-8 flex flex-col justify-center items-end gap-1.5 z-50 pointer-events-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-white origin-center transition-transform"
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-neon-lime transition-opacity"
                        />
                        <motion.span
                            animate={mobileMenuOpen ? { rotate: -45, y: -6, width: "2rem" } : { rotate: 0, y: 0, width: "1rem" }}
                            className="h-0.5 bg-white origin-center transition-transform"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-onyx/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <ul className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-black italic tracking-tighter text-white hover:text-neon-lime transition-colors uppercase"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-12"
                        >
                            <Link
                                href="#contact"
                                className="btn-kinetic inline-block scale-125"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                ÚNETE A LA MANADA
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
