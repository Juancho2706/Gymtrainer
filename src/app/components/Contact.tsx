"use client";

import FadeIn from './FadeIn';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-bl from-red-900 via-neutral-900 to-black text-white text-center relative overflow-hidden">
            {/* Background texture/glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <h2 className="heading-hero mb-6">¿Listo para <span className="text-red-500">Comprometerte?</span></h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-xl mb-12 max-w-2xl mx-auto font-light text-gray-300">
                        Las plazas son limitadas. Solo trabajo con aquellos dispuestos a dejarlo todo en el entrenamiento.
                    </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <form className="max-w-md mx-auto space-y-4">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="w-full px-6 py-4 bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 font-bold uppercase tracking-wider transition-all"
                        />
                        <button className="w-full py-4 bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 font-bold uppercase tracking-widest text-lg transform hover:-translate-y-1">
                            Empezar Ahora
                        </button>
                    </form>
                </FadeIn>
            </div>
        </section>
    );
};

export default Contact;
