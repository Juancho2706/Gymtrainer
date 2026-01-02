import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <span className="font-fitness text-3xl font-bold tracking-widest text-white block mb-2 italic">
                        OLYMPUS<span className="text-red-600">WOLF</span>
                    </span>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">
                        © {new Date().getFullYear()} Olympus Wolf. Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex gap-8">
                    <Link href="#" className="text-neutral-500 hover:text-white transition-colors uppercase text-xs tracking-widest">Instagram</Link>
                    <Link href="#" className="text-neutral-500 hover:text-white transition-colors uppercase text-xs tracking-widest">Twitter</Link>
                    <Link href="#" className="text-neutral-500 hover:text-white transition-colors uppercase text-xs tracking-widest">YouTube</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
