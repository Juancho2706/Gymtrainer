"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* VIDEO BACKGROUND */}
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out"
                    onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
                    preload="auto"
                >
                    <source src="/hero-optimized.mp4" type="video/mp4" />
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10 pointer-events-none mix-blend-overlay" />
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center">
                {/* Floating Logo */}
                <div className="mb-10 flex justify-center">
                    <FadeIn delay={0.2} direction="down" className="w-48 h-48 md:w-64 md:h-64 relative animate-float">
                        <div className="absolute inset-0 rounded-full bg-red-600 blur-[80px] opacity-40 animate-pulse"></div>
                        <Image
                            src="/olympus-logo.jpg"
                            alt="Logo de Olympus Wolf"
                            fill
                            className="object-cover rounded-full border-2 border-white/10 shadow-2xl relative z-10"
                        />
                    </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                    <h1 className="heading-hero text-white mb-2 drop-shadow-2xl relative">
                        <span className="block text-2xl md:text-3xl font-light tracking-[0.5em] text-red-500 mb-2 font-inter">ESTO ES</span>
                        <span className="relative z-10">EL OLIMPO</span>
                        {/* Outlined Text behind for depth */}
                        <span className="absolute top-1 left-1 md:top-2 md:left-2 text-stroke opacity-30 select-none z-[-1]" aria-hidden="true">EL OLIMPO</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light tracking-wide">
                        Entrena como un dios. Conviértete en leyenda.
                    </p>
                </FadeIn>

                <FadeIn delay={0.8}>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="btn-primary shadow-[0_0_30px_rgba(220,38,38,0.5)] animate-pulse-glow">
                            Únete a la Manada
                        </button>
                        <button className="btn-secondary backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10">
                            Ver Legado
                        </button>
                    </div>
                </FadeIn>
            </div>

            {/* MARQUEE SCROLL (Running Text) */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden z-20 opacity-50 pointer-events-none">
                <div className="whitespace-nowrap animate-marquee flex gap-8">
                    {Array(10).fill("OLYMPUS WOLF • TRAIN LIKE A GOD • NO LIMITS • ").map((text, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-black font-fitness text-stroke-red tracking-wider">
                            {text}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
