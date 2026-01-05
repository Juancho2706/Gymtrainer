"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "PERFIL", href: "#about" },
        { name: "PLANES", href: "#services" },
        { name: "MANADA", href: "#reviews" },
        { name: "CONTACTO", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white text-white">
            <div className="grid grid-cols-2 md:grid-cols-12 h-16 md:h-20 items-stretch">

                {/* LOGO BOX - Spans 4 cols on desktop */}
                <div className="col-span-1 md:col-span-3 border-r border-white flex items-center px-4 md:px-6 bg-black">
                    <Link href="/" className="flex items-center gap-2 relative h-full py-2 w-full">
                        <div className="relative h-full w-auto aspect-square">
                            <Image
                                src="/olympus-logo.jpg"
                                alt="Olympus Wolf Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none hidden xl:block">
                            OLYMPUS<span className="text-red-600">WOLF</span>
                        </span>
                    </Link>
                </div>

                {/* DESKTOP MENU - Spans 6 cols */}
                <div className="hidden md:flex col-span-6 border-r border-white justify-between items-stretch">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex-1 flex items-center justify-center font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-r border-white/10 last:border-none"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA BUTTON - Spans 3 cols */}
                <div className="hidden md:flex col-span-3 items-center justify-center bg-red-600 hover:bg-white group transition-colors cursor-pointer">
                    <Link href="#services" className="w-full h-full flex items-center justify-center">
                        <span className="font-black uppercase tracking-widest text-white group-hover:text-red-600 text-lg">
                            UNIRSE AHORA
                        </span>
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <div className="md:hidden col-span-1 flex items-center justify-end px-6 border-l border-white bg-black" onClick={() => setIsOpen(!isOpen)}>
                    <button className="text-white hover:text-red-600">
                        <span className="font-black text-lg uppercase">{isOpen ? "CERRAR" : "MENU"}</span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DRAWER */}
            {isOpen && (
                <div className="md:hidden border-t border-white bg-black">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-6 px-6 border-b border-white/20 font-bold text-xl uppercase hover:bg-white hover:text-black hover:pl-10 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="py-6 px-6 bg-red-600 text-center">
                        <span className="font-black text-white text-xl uppercase">UNIRSE AHORA</span>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
