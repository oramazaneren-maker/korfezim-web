import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImg from '@/assets/hero-towers.jpg';

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
                <div className="absolute inset-0 gradient-hero-overlay" />
            </div>

            {/* Subtle scan line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
                <div className="w-full h-px bg-primary/20 animate-scan" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-lg sm:text-xl tracking-[0.3em] text-muted-foreground mb-6 font-light"
                >
                    SEKTÖRDE KALİTENİN ADRESİ
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="font-display text-7xl sm:text-8xl lg:text-[10rem] font-bold tracking-tight leading-[0.85]">
                        <span className="metallic-text">KÖRF</span>
                        <span className="red-accent-text text-glow-red">EZ</span>
                        <span className="metallic-text">İM</span>
                    </h1>
                    <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.4em] text-steel mt-2">
                        ELEKTRİK
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-12"
                >
                    <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                        1999'dan bu yana Türkiye genelinde elektrik, su ve doğalgaz sektöründe
                        kurumsal yapı ve sektörel birikimle hizmet vermekteyiz.
                    </p>
                </motion.div>

                {/* Stats strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="mt-16 flex flex-wrap justify-center gap-12 lg:gap-20"
                >
                    {[
                        { value: '27+', label: 'YIL DENEYİM' },
                        { value: '20+', label: 'REFERANS' },
                        { value: '10+', label: 'KALİTE BELGESİ' },
                        { value: '81', label: 'İL KAPSAMA' },
                    ].map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 + i * 0.12 }}
                            className="text-center"
                        >
                            <span className="font-display text-4xl lg:text-5xl font-bold text-foreground">{s.value}</span>
                            <p className="text-[10px] font-display tracking-[0.2em] text-muted-foreground mt-1">{s.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <a href="#hakkimizda" className="block">
                    <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center animate-pulse-red">
                        <ChevronDown className="w-5 h-5 text-primary" />
                    </div>
                </a>
            </motion.div>
        </section>
    );
}
