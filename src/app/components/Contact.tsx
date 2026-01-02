"use client";

import FadeIn from './FadeIn';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-red-600 text-white text-center">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="heading-hero mb-6">¿Listo para <span className="text-black">Comprometerte?</span></h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">
                        Las plazas son limitadas. Solo trabajo con aquellos serios sobre el cambio.
                    </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                    <form className="max-w-md mx-auto space-y-4">
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            className="w-full px-6 py-4 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-black font-bold uppercase tracking-wider"
                        />
                        <button className="w-full py-4 bg-black text-white hover:bg-neutral-800 transition-colors font-bold uppercase tracking-widest text-lg">
                            Empezar
                        </button>
                    </form>
                </FadeIn>
            </div>
        </section>
    );
};

export default Contact;
