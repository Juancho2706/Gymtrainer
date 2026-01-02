"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Background - placeholder color for now, image later */}
            <div className="absolute inset-0 bg-neutral-900 z-0 opacity-50">
                {/* We will add an image here later */}
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center">
                <div className="mb-6 flex justify-center">
                    {/* Logo placeholder */}
                    <FadeIn delay={0.2} direction="down" className="w-24 h-24 md:w-32 md:h-32 relative">
                        <Image
                            src="/wolf-logo.png"
                            alt="Logo de Apex Trainer"
                            fill
                            className="object-contain"
                        />
                    </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                    <h1 className="heading-hero text-white mb-4">
                        Libera Tu <span className="text-red-600">Bestia Interior</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                        Entrenamiento personal de élite diseñado para transformar tu físico y mentalidad.
                    </p>
                </FadeIn>

                <FadeIn delay={0.8}>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="btn-primary">
                            Comienza Tu Viaje
                        </button>
                        <button className="btn-secondary">
                            Historias de Éxito
                        </button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Hero;
