"use client";

import Image from 'next/image';
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
                            <div className="relative w-full h-full">
                                <Image
                                    src="/trainer-portrait.jpeg"
                                    alt="Roberto Carrasco N. - Entrenador Deportivo"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                {/* Overlay for text readability if needed, though usually better without if image is good */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                <div className="absolute bottom-0 left-0 w-full p-6 z-10 max-w-[75%] md:max-w-full">
                                    <span className="text-white font-bold uppercase tracking-widest text-xl block text-shadow-sm leading-tight">
                                        Roberto <br className="block md:hidden" /> Carrasco N.
                                    </span>
                                    <span className="text-sm font-normal text-red-400 mt-1 block">
                                        Entrenador Deportivo
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Achievement Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-red-800 p-8 text-white text-center shadow-[0_10px_30px_rgba(220,38,38,0.4)] z-20 rounded-sm">
                            <p className="text-4xl font-black font-fitness">UVM</p>
                            <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Universidad Viña del Mar</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="order-1 md:order-2">
                    <FadeIn delay={0.2}>
                        <h2 className="heading-hero text-white mb-2">Roberto <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Carrasco</span></h2>
                        <h3 className="text-xl text-gray-400 font-light mb-8 uppercase tracking-widest">Entrenador Deportivo</h3>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <p className="text-gray-400 text-base mb-6 leading-relaxed border-l-4 border-red-600 pl-6 text-justify">
                            Soy Roberto Carrasco, Entrenador Personal con un enfoque en hipertrofia muscular y certificado en Entrenamiento para Mujeres. Mi método va más allá de la estética, busco una transformación integral.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.5}>
                        <div className="space-y-4 text-gray-400 text-base leading-relaxed font-light text-justify">
                            <p>
                                No solo te guiaré para esculpir el cuerpo que sueñas, sino que trabajaremos juntos para instaurar hábitos saludables y fortalecer tu mentalidad. Como tu coach, mi compromiso es ayudarte a romper tus barreras, confiar en tu verdadero potencial y llevarte por el camino de la evolución personal.
                            </p>
                            <p className="font-medium text-white">
                                Deja de ponerte límites. Es hora de entrenar con propósito y conseguir resultados reales.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                        <FadeIn delay={0.6}>
                            <div>
                                <h4 className="text-white font-bold text-3xl mb-1 flex items-baseline gap-1">2.5</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">Años de Experiencia</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                            <div>
                                <h4 className="text-white font-bold text-3xl mb-1">Pro</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">Certificado UVM</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
