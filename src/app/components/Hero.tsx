"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Updated Background with Gradient/texture feel */}
            <div className="absolute inset-0 bg-neutral-900 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-80"></div>
                {/* Optional: Add noise texture via CSS if desired in globals later */}
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center">
                <div className="mb-8 flex justify-center">
                    {/* New Logo Integration */}
                    <FadeIn delay={0.2} direction="down" className="w-40 h-40 md:w-56 md:h-56 relative rounded-full shadow-[0_0_40px_rgba(220,38,38,0.3)]">
                        <Image
                            src="/olympus-logo.jpg"
                            alt="Logo de Olympus Wolf"
                            fill
                            className="object-cover rounded-full border-2 border-white/10"
                        />
                    </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                    <h1 className="heading-hero text-white mb-6 drop-shadow-xl">
                        Bienvenido al <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Olimpo</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light tracking-wide">
                        Donde los límites se rompen y nacen las leyendas. La metodología del lobo te espera.
                    </p>
                </FadeIn>

                <FadeIn delay={0.8}>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="btn-primary shadow-red-900/40 shadow-xl">
                            Únete a la Manada
                        </button>
                        <button className="btn-secondary backdrop-blur-sm bg-white/5 border-white/20">
                            Ver Transformaciones
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
