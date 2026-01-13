"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 3) {
            setVideoLoaded(true);
        }
    }, []);

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-onyx">

            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    onCanPlay={() => setVideoLoaded(true)}
                    onLoadedData={() => setVideoLoaded(true)}
                    className={`absolute w-full h-full object-cover grayscale contrast-125 transition-opacity duration-1000 ${videoLoaded ? 'opacity-40' : 'opacity-0'}`}
                >
                    <source src="/segundapagina/VIDEO FINAL.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent"></div>
                <div className="text-neon-bg absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pt-20">

                {/* KINETIC TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, staggerChildren: 0.1 }}
                    className="mb-6 font-black italic tracking-tighter uppercase text-6xl md:text-8xl lg:text-[9rem] leading-[0.8] text-white mix-blend-exclusion"
                >
                    <motion.div className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                        DOMINA
                    </motion.div>
                    <br className="hidden md:block" />
                    <motion.div
                        className="inline-flex gap-6 text-neon-red drop-shadow-[0_0_15px_rgba(229,57,53,0.6)]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        <span className="text-white">TU</span>
                        <span>REALIDAD</span>
                    </motion.div>
                </motion.div>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="max-w-xl text-lg md:text-2xl text-gray-300 font-medium tracking-widest uppercase mb-12 border-l-4 border-neon-red pl-6 text-left"
                >
                    No excusas. Solo resultados puros.
                    <br />
                    <span className="text-white font-bold">Únete a la élite de Olympus Wolf.</span>
                </motion.p>

                {/* ACTION BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <Link
                        href="#services"
                        className="btn-kinetic hover:scale-110 transition-transform"
                    >
                        EMPEZAR AHORA
                    </Link>
                    <Link
                        href="#reviews"
                        className="px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-onyx transition-colors backdrop-blur-sm"
                    >
                        VER TESTIMONIOS
                    </Link>
                </motion.div>
            </div>

            {/* FLOATING DATA WIDGETS */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 right-10 hidden lg:block"
            >
                <div className="glass-panel p-6 max-w-xs transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <h4 className="text-neon-red font-mono text-xs mb-2">/ SYSTEM STATUS</h4>
                    <div className="text-4xl font-black text-white mb-1">100%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">COMPROMISO REQUERIDO</div>
                </div>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.3em] animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                SCROLL TO EXPLORE
            </motion.div>

        </section>
    );
};

export default Hero;
