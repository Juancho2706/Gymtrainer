"use client";

import FadeIn from './FadeIn';

const Services = () => {
    const prices = [
        {
            title: "Asesoría Online",
            price: "99",
            features: ["Plan Personalizado", "Guía Nutricional", "Check-ins Semanales", "Soporte 24/7"],
            highlight: false,
        },
        {
            title: "Entrenamiento Elite 1:1",
            price: "299",
            features: ["Todo lo de Asesoría Online", "Sesiones Presenciales", "Corrección de Técnica", "Suplementación"],
            highlight: true,
        },
        {
            title: "Atleta Híbrido",
            price: "199",
            features: ["App Exclusiva", "Comunidad Privada", "Webinars Mensuales", "Programa de Fuerza"],
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {prices.map((plan, idx) => (
                        <FadeIn key={idx} delay={0.2 * (idx + 1)} className="h-full">
                            <div className="relative group h-full">
                                {/* Animated Border Gradient */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${plan.highlight ? 'opacity-75' : ''}`}></div>

                                <div
                                    className={`relative h-full p-8 bg-neutral-900 rounded-lg border border-white/5 flex flex-col items-center text-center transition-transform duration-300 group-hover:-translate-y-1`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                                            Más Popular
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold text-white mb-4 uppercase font-fitness tracking-wider group-hover:text-red-500 transition-colors">{plan.title}</h3>

                                    <div className="text-5xl font-black text-white mb-8 relative">
                                        ${plan.price}<span className="text-lg font-normal text-gray-500">/mes</span>
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                                    <ul className="space-y-4 mb-10 w-full">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-300 text-sm font-light text-left">
                                                <svg className={`w-4 h-4 mr-3 flex-shrink-0 ${plan.highlight ? 'text-red-500' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`mt-auto w-full py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded-sm overflow-hidden relative group/btn ${plan.highlight
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                                            : 'border border-white/20 text-white hover:border-red-600'
                                        }`}>
                                        <span className="relative z-10 group-hover/btn:text-white">Seleccionar Plan</span>
                                        {/* Button Hover Fill Effect */}
                                        <div className={`absolute inset-0 bg-red-700 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300 ${plan.highlight ? 'hidden' : 'block'}`}></div>
                                    </button>
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
