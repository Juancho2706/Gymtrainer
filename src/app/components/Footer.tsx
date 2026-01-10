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
                        <a href="https://www.instagram.com/the.olympus.wolf/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-black border-2 border-black hover:bg-white hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-0" title="Instagram Entrenador">
                            {/* Instagram Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://www.instagram.com/r.missa.c._/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-black border-2 border-black hover:bg-white hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-0" title="Instagram Personal">
                            {/* Instagram Icon (Personal) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </a>
                        <a href="https://wa.me/56976691584" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-black border-2 border-black hover:bg-white hover:border-white text-white hover:text-black flex items-center justify-center transition-all duration-0">
                            {/* WhatsApp Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-8.625-1.932-9.617-.225-1.288 1.401-2.152 2.308-2.152.33 0 .736.03.736.03s2.15-.094 3.036 2.016c.928 2.21 1.096 4.39.058 6.476-1.168 2.35-3.328 3.092-4.206 3.247zM12 0C5.373 0 0 5.373 0 12c0 2.157.575 4.192 1.587 5.946L-.057 24l6.305-1.654C8.049 23.5 10.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.822c-1.802 0-3.535-.482-5.06-1.387l-.363-.215-3.767.988.995-3.673-.232-.376A9.794 9.794 0 012.111 12c0-5.46 4.437-9.889 9.889-9.889 5.452 0 9.889 4.429 9.889 9.889 0 5.46-4.437 9.889-9.889 9.822z" /></svg>
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
