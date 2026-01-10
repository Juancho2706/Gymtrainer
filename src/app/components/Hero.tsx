"use client";

import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col pt-16 md:pt-20 border-b-2 border-white bg-black">
            {/* TICKER TOP */}
            <div className="w-full border-b border-white py-2 overflow-hidden bg-red-600 text-black">
                <div className="animate-marquee whitespace-nowrap">
                    <span className="text-xl md:text-2xl font-black uppercase tracking-widest px-4">
                        OLYMPUS PROTOCOL • SIN PIEDAD • ENTRENA DURO • OLYMPUS PROTOCOL • SIN PIEDAD • ENTRENA DURO • OLYMPUS PROTOCOL • SIN PIEDAD • ENTRENA DURO •
                    </span>
                    <span className="text-xl md:text-2xl font-black uppercase tracking-widest px-4">
                        OLYMPUS PROTOCOL • SIN PIEDAD • ENTRENA DURO • OLYMPUS PROTOCOL • SIN PIEDAD • ENTRENA DURO • OLYMPUS PROTOCOL • SIN PIEDAD • ENTRENA DURO •
                    </span>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* TEXT COLUMN */}
                <div className="col-span-1 md:col-span-7 border-r border-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
                    <div className="noise-bg"></div>
                    <h1 className="relative z-10 text-mega text-white mb-6">
                        DOMINA<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">TU</span><br />
                        <span className="text-red-600">REALIDAD</span>
                    </h1>
                    <p className="relative z-10 text-xl md:text-3xl font-bold uppercase tracking-widest text-gray-400 mb-12 max-w-xl">
                        No excusas. Solo resultados puros. Únete a la élite de Olympus Wolf.
                    </p>
                    <div className="relative z-10 flex gap-4">
                        <a href="#services" className="btn-brutal bg-white text-black border-2 border-white hover:bg-black hover:text-white hover:border-white inline-block text-center">
                            COMPRAR PLAN
                        </a>
                        <a href="#reviews" className="btn-outline-brutal text-white border-2 border-white hover:bg-white hover:text-black inline-block text-center">
                            VER TESTIMONIOS
                        </a>
                    </div>
                </div>

                {/* IMAGE COLUMN */}
                <div className="col-span-1 md:col-span-5 relative border-b md:border-b-0 border-white h-[50vh] md:h-auto overflow-hidden group">
                    <video
                        src="/video-biceps-opt.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-50"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-8 right-8 bg-black border-2 border-white p-4 rotator">
                        <div className="text-white font-black text-center leading-none">
                            <span className="block text-4xl">100%</span>
                            <span className="text-xs uppercase tracking-widest">Compromiso</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* TICKER BOTTOM */}
            <div className="w-full border-t border-white py-2 overflow-hidden bg-black text-white">
                <div className="animate-marquee-reverse whitespace-nowrap">
                    <span className="text-sm md:text-base font-bold uppercase tracking-[0.5em] px-4 font-mono">
                        SISTEMA LISTO // INICIANDO PROTOCOLO // OLYMPUS WOLF V3 // SISTEMA LISTO // INICIANDO PROTOCOLO // OLYMPUS WOLF V3 //
                    </span>
                    <span className="text-sm md:text-base font-bold uppercase tracking-[0.5em] px-4 font-mono">
                        SISTEMA LISTO // INICIANDO PROTOCOLO // OLYMPUS WOLF V3 // SISTEMA LISTO // INICIANDO PROTOCOLO // OLYMPUS WOLF V3 //
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
