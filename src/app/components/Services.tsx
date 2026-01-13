"use client";
import { motion } from "framer-motion";

const Services = () => {
    // Helper to build WhatsApp URL
    const getWhatsAppUrl = (planName: string) => {
        const message = `Hola Roberto, me interesa contratar el plan *${planName}*.`;
        return `https://wa.me/56976691584?text=${encodeURIComponent(message)}`;
    };

    const prices = [
        {
            title: "MEDIUM",
            price: "$130.000",
            features: ["PLAN + DIETA", "COACHING 24/7"],
            details: "PACK COMPLETO. ENTRENAMIENTO Y NUTRICIÓN.",
            highlight: true,
            special: true,
        },
        {
            title: "ONLINE",
            price: "$35.000",
            features: ["PLAN PDF", "DUDAS ONLINE"],
            details: "GUÍA ESTRUCTURADA. SIN SEGUIMIENTO.",
            highlight: false
        },
        {
            title: "BASIC",
            price: "$80.000",
            features: ["COACHING 24/7", "AJUSTES MENSUALES"],
            details: "SEGUIMIENTO WHATSAPP. SIN NUTRICIÓN.",
            highlight: false
        },
        {
            title: "FULL PRO",
            price: "$180.000",
            features: ["PRESENCIAL 1:1", "DIETA", "ELITE"],
            details: "EXPERIENCIA TOTAL. CORRECCIÓN IN SITU.",
            highlight: false,
            special: false
        },
    ];

    return (
        <section id="services" className="relative py-24 bg-onyx overflow-hidden">
            {/* DECORATIVE ELEMENTS */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* HEADER */}
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-mono text-neon-red mb-4 tracking-[0.5em]">/// SELECT YOUR WEAPON</h2>
                    <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
                        ARSENAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/10">PROTOCOL</span>
                    </h3>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {prices.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`
                                relative p-8 flex flex-col justify-between group overflow-hidden border transition-all duration-300
                                ${plan.special
                                    ? 'bg-gradient-to-br from-neon-red to-zinc-900 text-white border-neon-red'
                                    : 'bg-white/5 border-white/10 hover:border-neon-red/50 hover:bg-white/10'
                                }
                            `}
                        >
                            {/* HOVER GLOW FOR NORMAL CARDS */}
                            {!plan.special && (
                                <div className="absolute inset-0 bg-neon-red/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform translate-y-full group-hover:translate-y-0"></div>
                            )}

                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                                    Recomendado
                                </div>
                            )}

                            <div className="relative z-10">
                                <h4 className={`text-2xl font-black uppercase mb-2 text-white`}>
                                    {plan.title}
                                </h4>
                                <div className={`text-3xl font-mono mb-6 pb-6 border-b border-dashed ${plan.special ? 'border-white/20 text-white' : 'border-white/20 text-neon-red'}`}>
                                    {plan.price}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${plan.special ? 'text-white/90' : 'text-gray-400 group-hover:text-white transition-colors'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-sm ${plan.special ? 'bg-white' : 'bg-neon-red'}`}></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <p className={`text-[10px] uppercase font-mono mb-8 opacity-70 ${plan.special ? 'text-gray-300' : 'text-gray-500'}`}>
                                    {plan.details}
                                </p>
                            </div>

                            <a
                                href={getWhatsAppUrl(plan.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    relative z-10 w-full py-4 font-black uppercase tracking-widest text-center text-xs border transition-all
                                    ${plan.special
                                        ? 'border-white text-white hover:bg-white hover:text-onyx'
                                        : 'border-white/30 text-white hover:bg-neon-red hover:border-neon-red hover:text-onyx'
                                    }
                                `}
                            >
                                Iniciar Protocolo
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
