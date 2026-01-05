"use client";

const Footer = () => {
    return (
        <footer className="bg-onyx border-t border-white/10 text-white pt-20 pb-10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    {/* CTA SECTION */}
                    <div>
                        <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                            ÚNETE<br />
                            <span className="text-neon-lime">AHORA</span>
                        </h3>
                        <p className="max-w-md text-gray-400 font-mono text-sm mb-8">
                            No esperes el momento perfecto. Toma el control de tu realidad hoy.
                            Únete al protocolo Olympus Wolf y transfórmate.
                        </p>
                        <a href="https://instagram.com" className="btn-kinetic inline-block hover:scale-105 transition-transform">
                            INSTAGRAM
                        </a>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-neon-lime font-bold uppercase tracking-widest mb-6 text-xs">Navegación</h4>
                                <ul className="space-y-4 text-sm font-bold text-gray-300">
                                    <li><a href="#hero" className="hover:text-white transition-colors">INICIO</a></li>
                                    <li><a href="#about" className="hover:text-white transition-colors">FILOSOFÍA</a></li>
                                    <li><a href="#services" className="hover:text-white transition-colors">ARSENAL</a></li>
                                    <li><a href="#reviews" className="hover:text-white transition-colors">OFFICERS</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-neon-lime font-bold uppercase tracking-widest mb-6 text-xs">Legal</h4>
                                <ul className="space-y-4 text-sm font-bold text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">TERMINOS</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">PRIVACIDAD</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* SOCIALS */}
                        <div className="flex gap-4 mt-12 md:mt-0">
                            {['INSTAGRAM', 'TIKTOK', 'WHATSAPP'].map((social) => (
                                <a key={social} href="#" className="text-xs font-mono border border-white/20 px-4 py-2 hover:bg-neon-lime hover:text-onyx hover:border-neon-lime transition-all">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BIG BRANDING */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h1 className="text-[12vw] leading-[0.8] font-black italic text-white/5 select-none pointer-events-none">
                            OLYMPUS
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-mono text-gray-600 uppercase">
                            © 2026 OLYMPUS WOLF. ALL RIGHTS RESERVED.<br />
                            SYSTEM V3.0
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
