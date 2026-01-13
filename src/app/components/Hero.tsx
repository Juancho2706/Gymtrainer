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
                {/* Centered Logo */}
                <div className="mb-8 flex justify-center">
                    <FadeIn
                        delay={0.2}
                        direction="down"
                        className="w-72 h-72 md:w-[28rem] md:h-[28rem] relative animate-float"
                    >
                        <Image
                            src="/hero-logo-v2.png"
                            alt="Logo de Olympus Wolf"
                            fill
                            className="object-contain relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                            priority
                        />
                    </FadeIn>
                </div>



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
