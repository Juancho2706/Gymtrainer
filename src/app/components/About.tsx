"use client";

import FadeIn from './FadeIn';

const About = () => {
    return (
        <section id="about" className="section-padding bg-neutral-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 md:order-1 relative group">
                    <FadeIn direction="right">
                        <div className="aspect-[3/4] bg-neutral-800 rounded-lg relative overflow-hidden shadow-2xl border border-white/5 group-hover:border-red-600/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                                {/* Abstract Geometric Wolf Element or Placeholder Pattern */}
                                <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
                                <span className="relative z-10 text-neutral-600 font-bold uppercase tracking-widest text-xl">Imagen Entrenador</span>
                            </div>
                        </div>
                        {/* Achievement Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-red-800 p-8 text-white text-center shadow-[0_10px_30px_rgba(220,38,38,0.4)] z-20 rounded-sm">
                            <p className="text-5xl font-black font-fitness">10+</p>
                            <p className="text-xs uppercase tracking-widest font-bold">Años Exp.</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="order-1 md:order-2">
                    <FadeIn delay={0.2}>
                        <h2 className="heading-hero text-white mb-8">Forjado con <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Disciplina</span></h2>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed border-l-4 border-red-600 pl-6">
                            No solo enseño fitness; diseño transformaciones. Con más de una década de experiencia cultivando físicos de élite, mi metodología combina la dedicación de la vieja escuela con la ciencia deportiva moderna.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                            Ya sea que busques construir músculo, perder grasa o prepararte para competir, yo proporciono el mapa. Tú pones el sudor. La manada no espera a nadie.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-8">
                        <FadeIn delay={0.6}>
                            <div>
                                <h4 className="text-white font-bold text-3xl mb-1 flex items-baseline gap-1">500<span className="text-red-600 text-lg">+</span></h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">Clientes Transformados</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                            <div>
                                <h4 className="text-white font-bold text-3xl mb-1">NASM</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">Profesional Certificado</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
