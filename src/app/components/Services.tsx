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
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="heading-hero text-white mb-4">Elige Tu <span className="text-red-600">Camino</span></h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto font-light">Invierte en ti mismo. Únete a la élite.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {prices.map((plan, idx) => (
                        <FadeIn key={idx} delay={0.2 * (idx + 1)} className="h-full">
                            <div
                                className={`h-full p-8 border backdrop-blur-sm flex flex-col items-center text-center transition-all duration-300 hover:border-red-600/50 group ${plan.highlight
                                        ? 'bg-neutral-900/80 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.1)] scale-105'
                                        : 'bg-neutral-900/40 border-white/5 hover:bg-neutral-900/60'
                                    }`}
                            >
                                {plan.highlight && <div className="mb-6 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg">Más Popular</div>}
                                <h3 className="text-2xl font-bold text-white mb-2 uppercase font-fitness tracking-wider group-hover:text-red-500 transition-colors">{plan.title}</h3>
                                <div className="text-5xl font-black text-white mb-6">
                                    ${plan.price}<span className="text-lg font-normal text-gray-500">/mes</span>
                                </div>
                                <ul className="space-y-4 mb-10 w-full">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center justify-center text-gray-300 text-sm font-light">
                                            <span className={`w-1.5 h-1.5 rounded-full mr-3 ${plan.highlight ? 'bg-red-500' : 'bg-neutral-600'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-auto w-full py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 ${plan.highlight
                                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30'
                                        : 'border border-white/20 hover:bg-white hover:text-black text-white'
                                    }`}>
                                    Seleccionar Plan
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
