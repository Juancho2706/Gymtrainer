"use client";

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-white">
            {/* SOCIAL STRIP - RED BACKGROUND FOR CONTRAST */}
            <div className="bg-red-600 text-black py-16 px-4 border-b border-white">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                            ÚNETE AL <span className="text-white">EQUIPO</span>
                        </h3>
                        <p className="font-bold uppercase tracking-widest text-sm">SÍGUEME PARA MÁS DOMINIO</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://instagram.com" className="w-16 h-16 bg-black border-2 border-black hover:bg-white hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-0">
                            {/* Instagram Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://tiktok.com" className="w-16 h-16 bg-black border-2 border-black hover:bg-white hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-0">
                            {/* TikTok Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                        </a>
                        <a href="https://wa.me/56900000000" className="w-16 h-16 bg-black border-2 border-black hover:bg-white hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-0">
                            {/* WhatsApp Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-9.667-.272-9.841-.471 1.158.719 1.481 1.19.323.074.743.074 1.263 7.95 2.155 1.832 5.062 1.348 5.437.124.372.248.868.248 1.487 0 1.956-6.685 2.106-9.141 1.238-.248-.099-.446-.248-6.195-.497-17.485c2.518-12.721 3.766-15.309 3.766-15.309.248.421 1.09.792 1.833.694.743-.099 1.487-.347 1.783-.496z" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* BOTTOM BRANDING */}
            <div className="p-4 flex justify-between items-end bg-black">
                <div>
                    <span className="block font-black text-xl uppercase leading-none">OLYMPUS WOLF</span>
                    <span className="text-[10px] font-mono text-gray-500">PROTOCOL V3.0 // 2026</span>
                </div>
                <div className="text-right">
                    <span className="block text-[10px] font-mono text-gray-600 uppercase">Designed by WebDevJV</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
