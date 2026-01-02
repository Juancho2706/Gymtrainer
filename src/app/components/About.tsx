"use client";

import FadeIn from './FadeIn';

const About = () => {
    return (
        <section id="about" className="section-padding bg-neutral-900 border-t border-b border-neutral-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <FadeIn direction="right">
                        <div className="aspect-[3/4] bg-neutral-800 rounded-sm relative overflow-hidden">
                            {/* Placeholder for Trainer Image */}
                            <div className="absolute inset-0 bg-neutral-700 animate-pulse flex items-center justify-center text-neutral-600 font-bold uppercase tracking-widest">
                                Trainer Image
                            </div>
                        </div>
                        {/* Achievement Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 text-white text-center shadow-xl z-20">
                            <p className="text-4xl font-black">10+</p>
                            <p className="text-xs uppercase tracking-widest">Años Exp.</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="order-1 md:order-2">
                    <FadeIn delay={0.2}>
                        <h2 className="heading-hero text-white mb-6">Forjado con <span className="text-red-600">Disciplina</span></h2>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            No solo enseño fitness; diseño transformaciones. Con más de una década de experiencia cultivando físicos de élite, mi metodología combina la dedicación de la vieja escuela con la ciencia deportiva moderna.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Ya sea que busques construir músculo, perder grasa o prepararte para competir, yo proporciono el mapa. Tú pones el sudor.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-6">
                        <FadeIn delay={0.6}>
                            <h4 className="text-red-600 font-bold text-xl mb-1">500+</h4>
                            <p className="text-gray-400 text-sm uppercase">Clientes Transformados</p>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                            <h4 className="text-red-600 font-bold text-xl mb-1">NASM</h4>
                            <p className="text-gray-400 text-sm uppercase">Profesional Certificado</p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
