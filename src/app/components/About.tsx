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
                            <div className="inline-block border-l-4 border-neon-lime pl-4 mb-8">
                                <span className="font-bold uppercase tracking-[0.2em] text-sm text-gray-500">
                                    THE MIND BEHIND
                                </span>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-[0.85] tracking-tighter mix-blend-multiply">
                                ROBERTO<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-lime to-emerald-600">CARRASCO</span>
                            </h2>

                            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed max-w-xl text-gray-800">
                                <p>
                                    <strong className="bg-onyx text-white px-2 py-0.5 transform -skew-x-12 inline-block mr-2">UVM TITULADO.</strong>
                                    No soy un influencer. Soy un profesional del deporte.
                                    Mi enfoque combina la ciencia del rendimiento con la brutalidad del esfuerzo real.
                                </p>
                                <p>
                                    10 años forjando atletas. Sin atajos. Sin mentiras.
                                    Si buscas una palmadita en la espalda, busca otro lugar.
                                    Si buscas resultados, <span className="underline decoration-neon-lime decoration-4 underline-offset-4">bienvenido a la manada.</span>
                                </p>
                            </div>

                            <div className="flex gap-8 mt-12">
                                <div>
                                    <span className="block text-5xl font-black tracking-tighter">10+</span>
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
                    <div className="order-1 lg:order-2 relative h-[600px] w-full bg-onyx clip-path-polygon group overflow-hidden">
                        {/* Placeholder for trainer image */}
                        <div className="absolute inset-0 bg-neutral-900">
                            <Image
                                src="/trainer-portrait.jpeg"
                                alt="Roberto Carrasco - Entrenador"
                                fill
                                className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
                                priority
                            />
                        </div>

                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-neon-lime/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out mix-blend-overlay"></div>

                        <div className="absolute bottom-10 right-10 text-right">
                            <h3 className="text-white text-7xl font-black leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-500 select-none">
                                LÍDER
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
