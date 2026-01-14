"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const reviews = [
    {
        name: "Carlos M.",
        role: "HÍBRIDO",
        image: "/segundapagina/review-new-1.png",
        quote: "Llevaba años estancado. Roberto no te regala nada, pero si haces caso, cambias. Bajé 8kg de grasa y subí mis básicos.",
        stars: 5,
    },
    {
        name: "Valentina R.",
        role: "CAMBIO",
        image: "/segundapagina/review-new-2.png",
        quote: "Me daba miedo ponerme 'grande' con las pesas. Nada que ver. Me veo más tonificada que nunca. La dieta es súper llevadera.",
        stars: 5,
    },
    {
        name: "Javier S.",
        role: "FUERZA",
        image: "/segundapagina/review-new-3.png",
        quote: "El ambiente del team es otra cosa. No es solo ir a levantar fierros, es la mentalidad. Mis sentadillas subieron 20kg en un mes.",
        stars: 4,
    },
    {
        name: "Sofia L.",
        role: "CROSSFIT",
        image: "/segundapagina/review-new-4.png",
        quote: "Sufrí en cada entreno, no voy a mentir jajaja. Pero ver los abs por primera vez vale cada gota de sudor. Recomendadísimo.",
        stars: 5,
    },
    {
        name: "Diego A.",
        role: "POWERLIFTING",
        image: "/segundapagina/review-new-5.png",
        quote: "Buscaba algo serio, sin tonterías de influencers. Aquí se viene a entrenar de verdad. La técnica que enseña es impecable.",
        stars: 5,
    },
    {
        name: "Camila V.",
        role: "RUNNING",
        image: "/segundapagina/review-new-6.png",
        quote: "Empecé de cero, literal no podía hacer una flexión. Ahora hago dominadas. Me siento poderosa. Gracias coach!",
        stars: 4,
    },
    {
        name: "Matias P.",
        role: "CALISTENIA",
        image: "/segundapagina/review-new-7.png",
        quote: "La periodización es clave. Siempre llegaba quemado al gym, ahora entreno inteligente. Los resultados hablan solos.",
        stars: 5,
    }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 mx-4 p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:bg-white/10 hover:border-neon-red/50 transition-all shadow-lg shadow-black/50 group">
        <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-neon-red transition-colors">
                <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
            <div>
                <h4 className="text-lg font-bold uppercase text-white leading-none mb-1">{review.name}</h4>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-neon-red font-mono uppercase tracking-widest">{review.role}</span>
                    <div className="flex gap-0.5">
                        {[...Array(review.stars)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-neon-red rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <p className="text-gray-400 font-medium italic leading-relaxed group-hover:text-white transition-colors">
            {review.quote}
        </p>
    </div>
);

const Reviews = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section id="reviews" className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black pb-32 pt-48 overflow-hidden relative">
            {/* SVG SEPARATOR - Full Width Slant */}
            <div className="absolute top-0 left-0 w-full overflow-hidden line-height-0">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
                    <path d="M1200 0L0 0 0 120 1200 0z" className="fill-onyx"></path>
                </svg>
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 mb-20 flex flex-col items-center text-center relative z-10">
                <div className="md:hidden w-56 h-56 mb-6 relative opacity-100">
                    <Image src="/segundapagina/tow-logo.png" alt="Olympus Wolf Logo" fill className="object-contain" />
                </div>

                {/* DESKTOP LOGO IN WHITESPACE */}
                <div className="hidden md:flex justify-center items-center w-72 h-72 mb-8 relative">
                    <div className="relative w-full h-full z-10">
                        <Image src="/segundapagina/tow-logo.png" alt="Olympus Wolf Logo" fill className="object-contain" />
                    </div>
                </div>

                <span className="text-neon-red font-mono text-sm tracking-[0.3em] uppercase mb-4">/ Officers & Elite</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
                    LA MANADA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-red-900">HABLA</span>
                </h2>
                <p className="mt-4 text-gray-400 text-sm font-mono flex items-center gap-2">
                    <span className="animate-pulse text-neon-red">●</span> ARRASTRA PARA VER MÁS
                </p>
            </div>

            {/* DRAGGABLE CAROUSEL */}
            <motion.div ref={carousel} className="cursor-grab active:cursor-grabbing overflow-hidden relative w-full z-20 pl-6 md:pl-0" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex pb-10"
                >
                    {[...reviews, ...reviews].map((review, idx) => (
                        <ReviewCard key={`r-${idx}`} review={review} />
                    ))}
                </motion.div>
            </motion.div>

            <div className="mt-8 border-t border-white/10 py-2 bg-black transform -rotate-1">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-xs font-mono text-gray-500 uppercase tracking-[0.5em] px-8">
                            /// RESULTADOS REALES /// SIN EXCUSAS /// OLYMPUS PROTOCOL ///
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
