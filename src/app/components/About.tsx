"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {

    return (
        <section id="about" className="bg-white text-onyx relative overflow-hidden">
            {/* Diagonal Slice */}
            <div className="absolute top-0 left-0 w-full h-32 bg-onyx clip-path-slant-down z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 py-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* TEXT CONTENT */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block border-l-4 border-neon-red pl-4 mb-8">
                                <span className="font-bold uppercase tracking-[0.2em] text-sm text-gray-500">
                                    THE MIND BEHIND
                                </span>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.85] tracking-tighter mix-blend-multiply">
                                ROBERTO<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-gray-600">CARRASCO</span>
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed max-w-xl text-gray-800">
                                <p>
                                    Soy <strong className="text-onyx transform inline-block">Roberto Carrasco</strong>, Entrenador Personal con un enfoque en <span className="text-neon-red font-bold">hipertrofia muscular</span> y certificado en Entrenamiento para Mujeres.
                                </p>
                                <p>
                                    Mi método va más allá de la estética, busco una <strong>transformación integral</strong>. No solo te guiaré para esculpir el cuerpo que sueñas, sino que trabajaremos juntos para instaurar hábitos saludables y fortalecer tu mentalidad.
                                </p>
                                <p>
                                    Como tu coach, mi compromiso es ayudarte a romper tus barreras, confiar en tu verdadero potencial y llevarte por el camino de la evolución personal.
                                </p>
                                <p className="border-l-4 border-neon-red pl-4 italic text-gray-600">
                                    Deja de ponerte límites. Es hora de entrenar con propósito y <strong className="text-onyx uppercase not-italic">conseguir resultados reales.</strong>
                                </p>
                            </div>

                            <div className="flex gap-8 mt-12">
                                <div>
                                    <span className="block text-5xl font-black tracking-tighter">+2.5</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">AÑOS EXP</span>
                                </div>
                                <div>
                                    <span className="block text-5xl font-black tracking-tighter">PRO</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">UVM ALUMNI</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* IMAGE / VISUAL */}
                    <div className="order-1 lg:order-2 relative h-[600px] w-full bg-onyx clip-path-polygon overflow-hidden">
                        <div className="absolute inset-0 bg-neutral-900">
                            <motion.div className="w-full h-full relative">
                                <Image
                                    src="/trainer-portrait.jpeg"
                                    alt="Roberto Carrasco - Entrenador"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
