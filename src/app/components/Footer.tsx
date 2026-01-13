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
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.575 1.913.846 2.803.846 3.177 0 5.764-2.587 5.764-5.766.001-3.18-2.587-5.765-5.764-5.766zm-4.325 3.195c-.247-.417-.611-.532-.976-.532-.239 0-.583-.004-.805.213-.242.238-.649.528-.649 1.58.058 1.109 1.156 3.518 4.264 4.887 1.942.855 2.152.617 2.541.597.558-.029 1.171-.462 1.34-1.011.169-.549.169-1.045.114-1.144-.055-.099-.199-.158-.415-.267-.216-.109-1.29-.634-1.488-.702-.198-.069-.346-.109-.49.109-.144.218-.549.684-.679.833-.13.149-.258.168-.474.059-.216-.109-.912-.336-1.748-1.082-.656-.585-1.096-1.308-1.226-1.536-.13-.228-.014-.351.095-.459.098-.098.216-.257.325-.386.109-.129.144-.218.216-.366.072-.149.036-.277-.018-.386-.054-.109-.481-1.169-.66-1.602zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
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
