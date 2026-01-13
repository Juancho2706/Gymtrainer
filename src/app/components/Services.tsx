"use client";

import FadeIn from './FadeIn';

const Services = () => {
    // Helper to build WhatsApp URL
    const getWhatsAppUrl = (planName: string) => {
        const message = `Hola Roberto, me interesa contratar el plan *${planName}*. ¿Podrías darme más información?`;
        return `https://wa.me/56900000000?text=${encodeURIComponent(message)}`;
    };

    const prices = [
        {
            title: "Personalizado Médium",
            price: "130.000",
            features: ["Planificación de Entrenamiento", "Dieta Enfocada en Objetivo", "Coaching 24/7", "Asesoría y dudas Online"],
            details: "El equilibrio perfecto. Entrenamiento + Nutrición para maximizar resultados. Recomendado para cambios físicos evidentes.",
            highlight: true,
        },
        {
            title: "Planificación Online",
            price: "35.000",
            features: ["Planificación de Entrenamiento", "Enfocada en tu Objetivo", "Resolución de dudas Online"],
            details: "Ideal para quienes ya tienen experiencia entrenando y solo necesitan una guía estructurada. Se entrega rutina en PDF.",
            highlight: false,
        },
        {
            title: "Personalizado Básico",
            price: "80.000",
            features: ["Planificación de Entrenamiento", "Coaching 24/7", "Asesoría y dudas Online"],
            details: "Seguimiento constante vía WhatsApp. Ajustes mensuales según progreso. No incluye pauta nutricional.",
            highlight: false,
        },
        {
            title: "Personalizado Full",
            price: "180.000",
            features: ["Planificación de Entrenamiento", "Dieta Enfocada en Objetivo", "Entrenamiento 1:1 Presencial", "Coaching 24/7", "Asesoría y dudas Online"],
            details: "Experiencia premium total. Incluye sesiones presenciales (Viña del Mar/Valpo) para corrección técnica in situ.",
            highlight: false,
        },
    ];

    return (
        <section id="services" className="section-padding bg-black relative overflow-hidden">
            {/* Subtle background glow with pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <FadeIn>
                        <h2 className="heading-hero text-white mb-6 relative inline-block">
                            Elige Tu <span className="text-red-600">Camino</span>
                            {/* Underline decoration */}
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 skew-x-12"></span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light text-xl">Invierte en ti mismo. Únete a la élite.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {prices.map((plan, idx) => (
                        <FadeIn key={idx} delay={0.2 * (idx + 1)} className="h-full">
                            <div className="relative group h-full">
                                {/* Animated Border Gradient */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${plan.highlight ? 'opacity-75' : ''}`}></div>

                                <div
                                    className={`relative h-full p-6 bg-neutral-900 rounded-lg border border-white/5 flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-1`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                            Recomendado
                                        </div>
                                    )}

                                    <h3 className="text-xl font-bold text-white mb-4 uppercase font-fitness tracking-wider group-hover:text-red-500 transition-colors h-12 flex items-center justify-center">{plan.title}</h3>

                                    <div className="text-3xl font-black text-white mb-6 relative">
                                        ${plan.price}
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

                                    <ul className="space-y-4 mb-8 w-full">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-300 text-xs font-light text-left">
                                                <svg className={`w-3 h-3 mr-2 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-red-500' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Fine Print Details */}
                                    <div className="mb-8 p-4 bg-black/20 rounded border border-white/5 w-full">
                                        <p className="text-[10px] text-gray-500 leading-relaxed text-justify">
                                            {plan.details}
                                        </p>
                                    </div>

                                    <a
                                        href={getWhatsAppUrl(plan.title)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-auto w-full py-3 font-bold uppercase tracking-widest text-[10px] transition-all duration-300 rounded-sm overflow-hidden relative group/btn flex items-center justify-center ${plan.highlight
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                                            : 'border border-white/20 text-white hover:border-red-600'
                                            }`}>
                                        <span className="relative z-10 group-hover/btn:text-white flex items-center gap-2">
                                            Contratar vía WhatsApp
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        </span>
                                        {/* Button Hover Fill Effect */}
                                        <div className={`absolute inset-0 bg-red-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300 ${plan.highlight ? 'hidden' : 'block'}`}></div>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
