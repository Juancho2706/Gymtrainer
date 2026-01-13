"use client";

import FadeIn from './FadeIn';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-black relative overflow-hidden">
            {/* Skewed Background Element */}
            <div className="absolute inset-0 bg-red-900/10 skew-y-3 transform origin-bottom-right z-0"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <FadeIn>
                    <h2 className="heading-hero mb-8"><span className="text-white font-black tracking-tighter">¿LISTO?</span> <br /><span className="text-red-600">ÚNETE HOY</span></h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-xl mb-12 max-w-2xl mx-auto font-light text-gray-400">
                        No hay atajos. Solo trabajo duro y resultados. Si estás listo para sufrir por tu gloria, bienvenido.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="max-w-md mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <form className="relative bg-neutral-900 p-8 rounded-lg border border-white/10">
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="TU WHATSAPP"
                                        className="w-full px-6 py-4 bg-black border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 font-bold uppercase tracking-wider text-sm transition-all text-center"
                                    />
                                </div>
                                <button className="w-full py-5 bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300 font-bold uppercase tracking-widest text-lg skew-x-[-10deg]">
                                    <span className="skew-x-[10deg] inline-block">Empezar Ahora</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default Contact;
