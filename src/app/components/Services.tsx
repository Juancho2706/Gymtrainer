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
            title: "Personalizado Médium",
            price: "130.000",
            features: ["Planificación de Entrenamiento", "Dieta Enfocada en Objetivo", "Coaching 24/7", "Asesoría y dudas Online"],
            details: "El equilibrio perfecto. Entrenamiento + Nutrición para maximizar resultados. Recomendado para cambios físicos evidentes.",
            highlight: true,
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
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-9.841-.471 1.158.719 1.481 1.19.323.074.743.074 1.263 7.95 2.155 1.832 5.062 1.348 5.437.124.372.248.868.248 1.487 0 1.956-6.685 2.106-9.141 1.238-.248-.099-.446-.248-6.195-.497-17.485c2.518-12.721 3.766-15.309 3.766-15.309.248.421 1.09.792 1.833.694.743-.099 1.487-.347 1.783-.496z" /></svg>
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
