"use client";

const Footer = () => {
    return (
        <footer className="bg-onyx relative overflow-hidden">
            {/* NOISE OVERLAY */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            {/* CTA SECTION */}
            <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center text-center">
                <h2 className="text-7xl md:text-9xl font-black italic uppercase leading-[0.9] mb-8 text-white tracking-tighter">
                    <span className="block mb-2 md:mb-6">¿LISTO?</span>
                    <span className="text-neon-red">ÚNETE HOY</span>
                </h2>

                <p className="max-w-xl text-gray-400 font-mono text-sm md:text-base mb-12">
                    No hay atajos. Solo trabajo duro y resultados. Si estás listo para sufrir
                    por tu gloria, bienvenido.
                </p>

                {/* FORM BOX */}
                <div className="w-full max-w-md p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl shadow-black/50">
                    <form className="flex flex-col gap-4 p-6 bg-onyx/50 rounded-xl">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="TU WHATSAPP"
                                className="w-full bg-black border border-white/10 p-4 text-white placeholder:text-gray-600 font-mono text-sm focus:outline-none focus:border-neon-red transition-colors uppercase rounded-lg"
                            />
                        </div>
                        <button className="w-full btn-kinetic py-4 text-lg font-black tracking-widest rounded-lg">
                            EMPEZAR AHORA
                        </button>
                    </form>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="relative z-10 border-t border-white/10 bg-black/60">
                <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* LOGO & COPYRIGHT */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="text-2xl font-black italic tracking-tighter text-white">
                                OLYMPUS<span className="text-neon-red">WOLF</span>
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 font-mono">© 2026 Olympus Wolf Protocol.</p>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Sígueme en redes</span>
                        <div className="flex gap-3">
                            {/* Instagram Trainer */}
                            <a
                                href="https://www.instagram.com/the.olympus.wolf/"
                                target="_blank"
                                aria-label="Instagram Trainer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>

                            {/* Instagram Personal */}
                            <a
                                href="https://www.instagram.com/r.missa.c._/"
                                target="_blank"
                                aria-label="Instagram Personal"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://www.tiktok.com/@missa.c._"
                                target="_blank"
                                aria-label="TikTok"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/56976691584?text=Hola!%20Estoy%20interesado%20en%20contratarte%20como%20mi%20Personal%20Trainer."
                                target="_blank"
                                aria-label="WhatsApp"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16.95 7.55a6.002 6.002 0 0 0-8.5 8.5L5.2 18.8l2.75-3.25a6 6 0 0 0 8.5-8.5z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM CREDIT */}
                <div className="border-t border-white/5 bg-black py-4 text-center">
                    <p className="text-[10px] text-gray-700 font-mono uppercase tracking-widest">
                        Hecho por webdevjv
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
