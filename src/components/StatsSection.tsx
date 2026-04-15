import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, Gauge, MapPin, Award, Calendar, Truck } from 'lucide-react';
import bgInvestment from '@/assets/bg-investment.jpg';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 2000;
                    const steps = 60;
                    const increment = target / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            {count.toLocaleString('tr-TR')}{suffix}
        </div>
    );
}

const stats = [
    { icon: Calendar, value: 27, suffix: '+', label: 'YILLIK DENEYİM', desc: '1999\'dan bu yana' },
    { icon: Users, value: 500, suffix: '+', label: 'SAHA PERSONELİ', desc: 'Tüm bölgelerde' },
    { icon: Gauge, value: 2000000, suffix: '+', label: 'YILLIK SAYAÇ OKUMA', desc: 'Elektrik & Doğalgaz' },
    { icon: MapPin, value: 40, suffix: '+', label: 'HİZMET VERİLEN İL', desc: 'Türkiye geneli' },
    { icon: Award, value: 10, suffix: '+', label: 'KALİTE BELGESİ', desc: 'ISO & TSE sertifikalı' },
    { icon: Truck, value: 200, suffix: '+', label: 'ARAÇ FİLOSU', desc: 'İş makineleri dahil' },
];

export default function StatsSection() {
    return (
        <section className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={bgInvestment} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
                <div className="absolute inset-0 bg-background/[0.92]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="font-display text-sm tracking-[0.3em] text-primary mb-3 font-medium">RAKAMLARLA KÖRFEZİM</p>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="metallic-text">SEKTÖRDE </span>
                        <span className="red-accent-text text-glow-red">GÜCÜMÜZ</span>
                    </h2>
                    <div className="energy-line-red w-24 mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="text-center p-8 rounded-lg border border-border/30 gradient-card-dark box-glow-subtle group hover:border-primary/20 hover:box-glow-red transition-all duration-500"
                        >
                            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <s.icon className="w-6 h-6 text-primary" />
                            </div>
                            <AnimatedCounter target={s.value} suffix={s.suffix} />
                            <p className="font-display text-[11px] tracking-[0.2em] text-muted-foreground mt-2 font-medium">{s.label}</p>
                            <p className="text-[11px] text-muted-foreground/60 font-body mt-1">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
