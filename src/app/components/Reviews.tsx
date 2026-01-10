"use client";

import Image from 'next/image';
import { useRef } from 'react';

const Reviews = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const reviews = [
        {
            name: "Carlos M.",
            role: "HÍBRIDO",
            image: "/review-1.png",
            quote: "La disciplina que enseña Roberto es otro nivel. No solo mejoré mi físico, sino mi mentalidad.",
            stars: 5,
        },
        {
            name: "Valentina R.",
            role: "CAMBIO",
            image: "/review-2.png",
            quote: "Con la guía de Olympus Wolf aprendí a comer y entrenar de verdad. 100% recomendado.",
            stars: 5,
        },
        {
            name: "Javier S.",
            role: "FUERZA",
            image: "/review-3.png",
            quote: "Rompí mis marcas de Powerlifting en 3 meses. La programación es exacta. Si quieres fuerza real, este es el lugar.",
            stars: 4,
        },
        {
            name: "Sofia L.",
            role: "CROSSFIT",
            image: "/review-4.png",
            quote: "Mis tiempos en los WODs bajaron drásticamente. La planificación me dio la resistencia que faltaba.",
            stars: 5,
        },
        {
            name: "Diego A.",
            role: "POWERLIFTING",
            image: "/review-5.png",
            quote: "Técnica depurada y kilos sumados a la barra. Roberto sabe exactamente cómo ajustar las cargas.",
            stars: 5,
        },
        {
            name: "Camila V.",
            role: "RUNNING",
            image: "/review-6.png",
            quote: "Correr ya no me duele. Fortalecí mis piernas y core con el plan complementario. Ahora vuelo.",
            stars: 4,
        },
        {
            name: "Matias P.",
            role: "CALISTENIA",
            image: "/review-7.png",
            quote: "Dominé el Muscle Up y el Front Lever gracias a la programación de fuerza específica.",
            stars: 5,
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth; // Scroll one full screen width
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            if (direction === 'left') {
                if (currentScroll <= 10) {
                    container.scrollTo({ left: maxScroll, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: -scrollAmount / 2, behavior: 'smooth' });
                }
            } else {
                if (currentScroll >= maxScroll - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: scrollAmount / 2, behavior: 'smooth' });
                }
            }
        }
    };

    // Helper for stars
    const renderStars = (count: number) => {
        return (
            <div className="flex gap-1 mb-3 text-red-600">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < count ? "currentColor" : "none"} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section id="reviews" className="bg-black text-white py-24 relative group/section">
            <div className="border-b border-t border-white py-4 bg-red-600 text-black mb-16">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        LA MANADA
                    </h2>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                            aria-label="Previous Review"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                            aria-label="Next Review"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="container mx-auto px-4">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto scrollbar-hide py-4 gap-4 scroll-smooth snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 snap-center w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                        >
                            <div className="border border-white/30 bg-neutral-900/50 p-6 h-full flex flex-col justify-between hover:border-red-600 transition-colors">

                                {/* Header: Small Photo & Name */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white flex-shrink-0">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            sizes="40px"
                                            className="object-cover grayscale"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase leading-none text-white">{review.name}</h4>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                                            {review.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Stars */}
                                {renderStars(review.stars)}

                                {/* Quote */}
                                <div className="relative flex-grow">
                                    <p className="text-gray-300 font-medium leading-relaxed text-sm">
                                        "{review.quote}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hiding scrollbar for Webkit */}
            <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
         `}</style>
        </section>
    );
};

export default Reviews;
