import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-neutral-900">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <span className="font-fitness text-2xl font-bold tracking-widest text-white block mb-2">
                        APEX<span className="text-red-600">TRAINER</span>
                    </span>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">
                        © {new Date().getFullYear()} Todos los derechos reservados.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</Link>
                    <Link href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</Link>
                    <Link href="#" className="text-neutral-400 hover:text-white transition-colors">YouTube</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
