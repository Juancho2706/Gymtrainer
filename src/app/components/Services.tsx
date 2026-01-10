"use client";

const Services = () => {
    // Helper to build WhatsApp URL
    const getWhatsAppUrl = (planName: string) => {
        const message = `Hola Roberto, me interesa contratar el plan *${planName}*.`;
        return `https://wa.me/56900000000?text=${encodeURIComponent(message)}`;
    };

    const prices = [
        {
            title: "MEDIUM",
            price: "$130.000",
            features: ["PLAN + DIETA", "COACHING 24/7"],
            details: "PACK COMPLETO. ENTRENAMIENTO Y NUTRICIÓN.",
            highlight: true,
        },
        {
            title: "ONLINE",
            price: "$35.000",
            features: ["PLAN PDF", "DUDAS ONLINE"],
            details: "GUÍA ESTRUCTURADA. SIN SEGUIMIENTO.",
        },
        {
            title: "BASIC",
            price: "$80.000",
            features: ["COACHING 24/7", "AJUSTES MENSUALES"],
            details: "SEGUIMIENTO WHATSAPP. SIN NUTRICIÓN.",
        },
        {
            title: "FULL PRO",
            price: "$180.000",
            features: ["PRESENCIAL 1:1", "DIETA", "ELITE"],
            details: "EXPERIENCIA TOTAL. CORRECCIÓN IN SITU.",
        },
    ];

    return (
        <section id="services" className="bg-black text-white relative pb-24">
            <div className="border-b border-t border-white py-4 bg-red-600 text-black mb-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">ELIGE TU ARMA</h2>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {prices.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`
                            relative p-12 flex flex-col justify-between group transition-all duration-300 group
                            ${plan.highlight
                                    ? 'bg-neutral-900 border-2 border-red-600 z-10 scale-[1.02] shadow-[0_0_30px_rgba(220,38,38,0.2)]'
                                    : 'border border-white hover:bg-neutral-900'
                                }
                            ${plan.bg ? 'bg-white text-black hover:border-white' : ''}
                        `}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest translate-y-[-50%] border border-black shadow-lg">
                                    RECOMENDADO
                                </div>
                            )}

                            <div>
                                <h3 className={`text-4xl font-black uppercase mb-2 ${plan.bg ? 'text-black group-hover:text-white' : 'text-white'}`}>{plan.title}</h3>
                                <div className={`text-2xl font-mono mb-6 ${plan.bg ? 'text-red-600' : 'text-red-500'}`}>{plan.price}</div>

                                <ul className="mb-8 space-y-2">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className={`text-sm font-bold uppercase tracking-wider flex items-center gap-2 ${plan.bg ? 'text-gray-800 group-hover:text-gray-300' : 'text-gray-400'}`}>
                                            <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <p className={`text-[10px] uppercase font-mono mb-8 border-t border-dashed pt-4 opacity-70 ${plan.bg ? 'border-black group-hover:border-white group-hover:text-white' : 'border-white'}`}>
                                    {plan.details}
                                </p>
                            </div>

                            <a
                                href={getWhatsAppUrl(plan.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                w-full py-4 font-black uppercase tracking-widest text-center border-2 transition-all
                                ${plan.bg
                                        ? 'border-black text-black hover:bg-white hover:text-black group-hover:border-white group-hover:text-white group-hover:hover:text-black'
                                        : 'border-white text-white hover:bg-white hover:text-black'
                                    }
                            `}
                            >
                                CONTRATAR
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
