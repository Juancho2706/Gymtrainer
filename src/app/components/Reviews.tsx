"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
    {
        name: "Carlos M.",
        role: "HÍBRIDO",
        image: "/segundapagina/review-1.png",
        quote: "La disciplina que enseña Roberto es otro nivel. No solo mejoré mi físico, sino mi mentalidad.",
        stars: 5,
    },
    {
        name: "Valentina R.",
        role: "CAMBIO",
        image: "/segundapagina/review-2.png",
        quote: "Con la guía de Olympus Wolf aprendí a comer y entrenar de verdad. 100% recomendado.",
        stars: 5,
    },
    {
        name: "Javier S.",
        role: "FUERZA",
        image: "/segundapagina/review-3.png",
        quote: "Rompí mis marcas de Powerlifting en 3 meses. La programación es exacta.",
        stars: 4,
    },
    {
        name: "Sofia L.",
        role: "CROSSFIT",
        image: "/segundapagina/review-4.png",
        quote: "Mis tiempos en los WODs bajaron drásticamente. La resistencia que gané es brutal.",
        stars: 5,
    },
    {
        name: "Diego A.",
        role: "POWERLIFTING",
        image: "/segundapagina/review-5.png",
        quote: "Técnica depurada y kilos sumados a la barra. Roberto sabe ajustar las cargas.",
        stars: 5,
    },
    {
        name: "Camila V.",
        role: "RUNNING",
        image: "/segundapagina/review-6.png",
        quote: "Correr ya no me duele. Fortalecí mis piernas y core. Ahora vuelo.",
        stars: 4,
    },
    {
        name: "Matias P.",
        role: "CALISTENIA",
        image: "/segundapagina/review-7.png",
        quote: "Dominé el Muscle Up y el Front Lever gracias a la programación de fuerza.",
        stars: 5,
    }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="w-[350px] md:w-[450px] flex-shrink-0 mx-4 p-8 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:border-neon-lime/50 transition-colors group">
        <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 group-hover:border-neon-lime transition-colors">
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
                    <span className="text-xs text-neon-lime font-mono uppercase tracking-widest">{review.role}</span>
                    <div className="flex gap-0.5">
                        {[...Array(review.stars)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-neon-lime rounded-full" />
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
    return (
        <section id="reviews" className="bg-onyx py-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 mb-20 flex flex-col items-center text-center relative z-10">
                <span className="text-neon-lime font-mono text-sm tracking-[0.3em] uppercase mb-4">/ Officers & Elite</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
                    LA MANADA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-transparent">HABLA</span>
                </h2>
            </div>

            <div className="relative w-full flex overflow-hidden">
                <div className="flex animate-marquee hover:[animation-play-state:paused]">
                    {[...reviews, ...reviews].map((review, idx) => (
                        <ReviewCard key={`r1-${idx}`} review={review} />
                    ))}
                </div>
                <div className="flex animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
                    {[...reviews, ...reviews].map((review, idx) => (
                        <ReviewCard key={`r2-${idx}`} review={review} />
                    ))}
                </div>
            </div>

            <div className="mt-8 border-t border-white/10 py-2 bg-neon-lime/5 transform -rotate-1">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-xs font-mono text-neon-lime/50 uppercase tracking-[0.5em] px-8">
                            /// RESULTADOS REALES /// SIN EXCUSAS /// OLYMPUS PROTOCOL ///
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
