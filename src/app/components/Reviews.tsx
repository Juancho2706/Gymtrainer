"use client";

import Image from 'next/image';
import FadeIn from './FadeIn';

const Reviews = () => {
    const reviews = [
        {
            name: "Carlos M.",
            role: "Atleta Híbrido",
            image: "/review-1.png",
            quote: "Nunca creí que pudiera ganar fuerza y resistencia al mismo tiempo. El plan de Roberto cambió mi mentalidad por completo. La disciplina es clave.",
        },
        {
            name: "Valentina R.",
            role: "Transformación",
            image: "/review-2.png",
            quote: "Perdí 10kg en 3 meses, pero lo más importante es que aprendí a comer y a disfrutar del proceso. El soporte 24/7 hace toda la diferencia.",
        },
        {
            name: "Javier S.",
            role: "Hipertrofia",
            image: "/review-3.png",
            quote: "Llevaba años estancado en el gimnasio. Con la periodización de Olympus Wolf, rompí mis marcas en semanas. Si quieres resultados reales, este es el lugar.",
        },
    ];

    return (
        <section className="section-padding bg-neutral-900 border-t border-white/5 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="heading-hero text-white mb-4">La <span className="text-red-600">Manada</span> Habla</h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light">Resultados reales. Personas reales. Historias de éxito.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <FadeIn key={idx} delay={0.2 * (idx + 1)}>
                            <div className="bg-black/50 border border-white/5 p-8 rounded-lg hover:border-red-600/30 transition-colors duration-300 relative group h-full flex flex-col">
                                <div className="absolute top-0 right-0 p-6 opacity-20 text-6xl font-serif text-red-600 leading-none">"</div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-red-600/50">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{review.name}</h4>
                                        <p className="text-red-500 text-xs uppercase tracking-widest">{review.role}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 font-light italic leading-relaxed mb-4 flex-grow">
                                    {review.quote}
                                </p>

                                <div className="flex text-yellow-500 text-xs">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star}>★</span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
