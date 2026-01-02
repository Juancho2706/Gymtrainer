"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    const navLinks = [
        { name: "Perfil", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-fitness text-2xl md:text-3xl font-bold tracking-widest text-white">
                        APEX<span className="text-red-600">TRAINER</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:text-red-500 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="px-6 py-2 bg-red-600 text-white font-bold uppercase text-sm hover:bg-red-700 transition-colors">
                        Únete Ahora
                    </button>
                </div>

                {/* Mobile Menu Button - Simplified for Prototype */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
