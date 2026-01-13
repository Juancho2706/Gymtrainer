"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Perfil", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-2xl border-b border-white/5" : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center relative z-50">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Brand Logo Text */}
                        <span className="font-fitness text-2xl md:text-3xl font-bold tracking-widest text-white italic">
                            OLYMPUS<span className="text-red-600">WOLF</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-white hover:text-red-500 transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="px-6 py-2 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold uppercase text-sm hover:from-red-600 hover:to-red-500 transition-all shadow-lg shadow-red-900/20 rounded-sm">
                            Únete Ahora
                        </button>
                    </div>

                    {/* Mobile Menu Button (Hamburger) - Only visible when menu is CLOSED */}
                    {!isOpen && (
                        <button
                            className="md:hidden text-white p-2 focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Open Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    )}
                </div>
            </nav>

            {/* Full Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100dvh', zIndex: 9999 }}
                    >
                        {/* Granular Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                        {/* Close Button Inside Overlay */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-6 right-6 text-white p-2 focus:outline-none z-[70]"
                            aria-label="Close Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <nav className="flex flex-col items-center gap-10 relative z-10 w-full px-6">
                            {navLinks.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4, type: "spring" }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={toggleMenu}
                                        className="text-4xl xs:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-400 hover:to-red-600 transition-all duration-500 block py-2"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <button className="px-10 py-5 bg-red-600 text-white font-bold uppercase tracking-widest text-lg hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.6)] w-full">
                                    Únete a la Manada
                                </button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
