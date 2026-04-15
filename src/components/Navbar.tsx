import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/korfezim-logo.png';

const navItems = [
    { label: 'HAKKIMIZDA', href: '#hakkimizda' },
    { label: 'HİZMETLERİMİZ', href: '#hizmetler' },
    { label: 'REFERANSLAR', href: '#referanslar' },
    { label: 'KALİTE', href: '#kalite' },
    { label: 'İLETİŞİM', href: '#iletisim' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-border/40' : ''
                }`}
            style={{
                backdropFilter: 'blur(20px)',
                background: scrolled ? 'hsl(220 15% 18% / 0.92)' : 'hsl(220 15% 18% / 0.4)',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-24">
                    <a href="#" className="flex items-center gap-3 group">
                        <img src={logo} alt="Körfezim" className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_hsl(0,75%,50%,0.3)]" />
                        <div className="flex flex-col">
                            <span className="font-display text-2xl lg:text-3xl font-bold tracking-wider text-foreground leading-none">
                                KÖRF<span className="red-accent-text text-glow-red">EZ</span>İM
                            </span>
                            <span className="text-[9px] lg:text-[10px] tracking-[0.35em] text-muted-foreground font-body font-semibold">
                                ELEKTRİK
                            </span>
                        </div>
                    </a>

                    <div className="hidden lg:flex items-center gap-0">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="relative px-5 py-2 text-[13px] font-display font-medium tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-3/4" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-5">
                        <a href="tel:+903122871477" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="font-semibold">(312) 287-1477</span>
                        </a>
                        <a
                            href="#iletisim"
                            className="px-6 py-2.5 rounded font-display font-semibold text-sm tracking-wider text-primary-foreground bg-primary hover:bg-crimson-dark transition-colors box-glow-red"
                        >
                            BİZE ULAŞIN
                        </a>
                    </div>

                    <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-border/30"
                        style={{ background: 'hsl(220 15% 18% / 0.97)' }}
                    >
                        <div className="px-6 py-6 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block px-4 py-3 font-display font-medium text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}