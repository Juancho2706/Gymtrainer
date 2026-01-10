"use client";

import { useRef } from 'react'; // Added useRef
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["center end", "center start"]
    });

    // Map scroll range to grayscale values: 
    // Start (entering): 1 (gray) -> Center: 0 (color) -> End (leaving): 1 (gray)
    const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"]);

    return (
        <section id="about" className="bg-white text-black border-b-2 border-black">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* LEFT: TEXT */}
                <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col justify-center">
                    <div className="inline-block border-2 border-black px-4 py-1 mb-8 self-start">
                        <span className="font-bold uppercase tracking-widest text-sm">ENTRENADOR CERTIFICADO</span>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.85] tracking-tighter">
                        ROBERTO<br /><span className="text-red-600">CARRASCO</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                        <p>
                            <strong className="bg-black text-white px-1">UVM TITULADO.</strong> No soy un influencer. Soy un profesional del deporte.
                            Mi enfoque combina la ciencia del rendimiento con la brutalidad del esfuerzo real.
                        </p>
                        <p>
                            10 años forjando atletas. Sin atajos. Sin mentiras.
                            Si buscas una palmadita en la espalda, busca otro lugar.
                            Si buscas resultados, bienvenido a la manada.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-12">
                        <div className="border border-black p-4 bg-gray-100">
                            <span className="block text-4xl font-black">10+</span>
                            <span className="text-xs uppercase tracking-widest">AÑOS EXP</span>
                        </div>
                        <div className="border border-black p-4 bg-gray-100">
                            <span className="block text-4xl font-black">PRO</span>
                            <span className="text-xs uppercase tracking-widest">UVM ALUMNI</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: IMAGE */}
                <div
                    ref={sectionRef}
                    className="relative min-h-[500px] overflow-hidden bg-black group"
                >
                    <motion.div
                        style={{ filter: grayscale }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/trainer-portrait.jpeg"
                            alt="Roberto Carrasco - Entrenador"
                            fill
                            className="object-cover transition-all duration-700 ease-out"
                        />
                    </motion.div>

                    <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                        <h3 className="text-white text-8xl font-black leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-500 select-none drop-shadow-lg">
                            LÍDER
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
