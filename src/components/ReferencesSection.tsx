import { motion } from 'framer-motion';

const references = [
    { name: 'MERAM ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_medas.png' },
    { name: 'OSMANGAZİ ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_oedas.png' },
    { name: 'SAKARYA ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_sedas.png' },
    { name: 'TOROSLAR ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_toroslar.png' },
    { name: 'TRAKYA ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_tredas.png' },
    { name: 'ULUDAĞ ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_uedas.png' },
    { name: 'YEŞİLIRMAK ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_yedas.png' },
    { name: 'AKEDAŞ ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_akedas.png' },
    { name: 'ARAS ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_aras.png' },
    { name: 'BAŞKENT ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_baskent.png' },
    { name: 'GDZ / ADM ELEKTRİK DAĞITIM A.Ş.', img: 'https://korfezim.com/img/referans/rsz_gdzadm.png' },
    { name: 'İSKİ', img: 'https://korfezim.com/img/referans/rsz_iski.png' },
    { name: 'KOZ ENERJİ', img: 'https://korfezim.com/img/referans/rsz_koz.png' },
    { name: 'VHS', img: 'https://korfezim.com/img/referans/rsz_vhs.png' },
    { name: 'VİKO', img: 'https://korfezim.com/img/referans/rsz_viko.png' },
    { name: 'BAŞARI MOBİL', img: 'https://korfezim.com/img/referans/rsz_basari.png' },
    { name: 'ENO', img: 'https://korfezim.com/img/referans/rsz_eno.png' },
    { name: 'ERZİNCAN BELEDİYESİ', img: 'https://korfezim.com/img/referans/rsz_erzincan.png' },
    { name: 'ERZURUM BELEDİYESİ', img: 'https://korfezim.com/img/referans/rsz_erzurumbel.png' },
    { name: 'ORHANGAZİ BELEDİYESİ', img: 'https://korfezim.com/img/referans/rsz_orhangazi.png' },
];

const tagline = ['YENİLİKÇİ', 'SINIFINDA UZMAN', 'GÜVENİLİR', 'DİNAMİK', 'GÜÇLÜ'];

export default function ReferencesSection() {
    const doubled = [...references, ...references];

    return (
        <section id="referanslar" className="relative py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <p className="font-display text-sm tracking-[0.3em] text-primary mb-3 font-medium">DENEYİMLERİMİZ</p>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="metallic-text">REFERANSLARIMIZ</span>
                    </h2>
                    <div className="energy-line-red w-24 mx-auto mt-6" />
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 mt-10"
                >
                    <p className="font-display text-xl lg:text-2xl tracking-wider text-muted-foreground">
                        SEKTÖRDE{' '}
                        {tagline.map((t, i) => (
                            <span key={t}>
                                <span className="text-foreground font-bold">{t}</span>
                                {i < tagline.length - 1 && <span className="text-primary mx-2">·</span>}
                            </span>
                        ))}
                        {' '}FİRMAYIZ...
                    </p>
                </motion.div>

                {/* Auto-scrolling logo carousel */}
                <div className="relative overflow-hidden py-4">
                    <div className="absolute left-0 top-0 w-32 h-full z-10" style={{ background: 'linear-gradient(90deg, hsl(220 25% 6%), transparent)' }} />
                    <div className="absolute right-0 top-0 w-32 h-full z-10" style={{ background: 'linear-gradient(270deg, hsl(220 25% 6%), transparent)' }} />

                    <div className="flex gap-8 animate-marquee" style={{ width: 'max-content' }}>
                        {doubled.map((r, i) => (
                            <div
                                key={`${r.name}-${i}`}
                                className="flex-shrink-0 w-36 h-24 rounded-lg border border-border/30 bg-card/50 flex items-center justify-center p-4 hover:border-primary/30 hover:box-glow-red transition-all duration-300"
                            >
                                <img
                                    src={r.img}
                                    alt={r.name}
                                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                    title={r.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
