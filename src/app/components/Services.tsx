"use client";

import FadeIn from './FadeIn';

const Services = () => {
    const prices = [
        {
            title: "Asesoría Online",
            price: "99",
            features: ["Plan de Entrenamiento Personalizado", "Guía Nutricional", "Check-ins Semanales", "Análisis de Técnica por Video"],
            highlight: false,
        },
        {
            title: "Entrenamiento Elite 1:1",
            price: "299",
            features: ["Todo lo de Asesoría Online", "3 Sesiones Presenciales/Semana", "Responsabilidad Diaria", "Estrategia de Suplementación"],
            highlight: true,
        },
        {
            title: "Atleta Híbrido",
            price: "199",
            features: ["Acceso a App Personalizada", "Llamadas de Zoom Quincenales", "Acceso a Comunidad Grupal", "Guía de Preparación para Eventos"],
            highlight: false,
        },
    ];

    return (
        <section id="services" className="section-padding bg-black relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="heading-hero text-white mb-4">Elige Tu <span className="text-red-600">Camino</span></h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-gray-400 max-w-2xl mx-auto">La inversión en ti mismo paga el mejor interés. Selecciona el plan que se ajuste a tus objetivos.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {prices.map((plan, idx) => (
                        <FadeIn key={idx} delay={0.2 * (idx + 1)} className="h-full">
                            <div
                                className={`h-full p-8 border ${plan.highlight ? 'border-red-600 bg-neutral-900 scale-105 shadow-2xl shadow-red-900/20' : 'border-neutral-800 bg-neutral-950'} flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300`}
                            >
                                {plan.highlight && <div className="mb-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-full">Más Popular</div>}
                                <h3 className="text-2xl font-bold text-white mb-2 uppercase font-fitness tracking-wider">{plan.title}</h3>
                                <div className="text-5xl font-black text-white mb-6">
                                    ${plan.price}<span className="text-lg font-normal text-gray-500">/mes</span>
                                </div>
                                <ul className="space-y-4 mb-8 w-full">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center justify-center text-gray-300 text-sm">
                                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-auto w-full py-3 font-bold uppercase tracking-wider text-sm transition-colors ${plan.highlight ? 'bg-red-600 hover:bg-red-700 text-white' : 'border border-neutral-700 hover:bg-white hover:text-black text-white'}`}>
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
