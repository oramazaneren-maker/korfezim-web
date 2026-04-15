import { motion } from 'framer-motion';
import { Gauge, Wrench, Truck, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgMeter from '@/assets/bg-meter-panel.jpg';

const services = [
    {
        id: 'sayac-okuma',
        icon: Gauge,
        title: 'Sayaç Okuma, Enerji Kesme & Açma',
        subtitle: 'Sayaç Sökme & Takma Hizmetleri',
        desc: 'Doğalgaz, Elektrik ve Su sayaçlarının düzenli endeks okuma işlemlerini gerçekleştiriyoruz. Elektrik sayaçlarının enerji kesme ve açma operasyonlarını, ayrıca sayaç sökme ve takma hizmetlerini profesyonel ekiplerimizle yürütüyoruz. Yılda 2 milyonun üzerinde sayaç okuma kapasitesiyle Türkiye\'nin en büyük saha operasyonlarından birini yönetiyoruz.',
        stats: '2M+ yıllık okuma',
    },
    {
        id: 'yatirim-montaj',
        icon: Wrench,
        title: 'Yatırım & Montaj Hizmetleri',
        subtitle: 'OSOS Modem & Pano Montajı',
        desc: 'Yatırım ve tesis işlemlerini anahtar teslim olarak gerçekleştiriyoruz. Sayaç panosu montaj ve demontaj işlemlerini, OSOS (Otomatik Sayaç Okuma Sistemi) uzaktan haberleşme modem ve pano montajı hizmetlerini deneyimli teknik kadromuzla sunuyoruz. Enerji altyapısının modernizasyonunda güvenilir çözüm ortağınızız.',
        stats: '10K+ montaj',
    },
    {
        id: 'filo-kiralama',
        icon: Truck,
        title: 'Araç / Filo Kiralama Hizmetleri',
        subtitle: 'İş Makineleri & Özel Araçlar',
        desc: 'İş makineleri, vinç, hidrolik platformlu araçlar, binek, 4x4 ve özel amaçlı araç filolarının kiralanması hizmetlerini sunuyoruz. 200\'den fazla araçtan oluşan filomuzla enerji sektörü başta olmak üzere farklı sektörlere kesintisiz lojistik destek sağlıyoruz.',
        stats: '200+ araç',
    },
    {
        id: 'diger-faaliyetler',
        icon: Building2,
        title: 'Diğer Faaliyetlerimiz',
        subtitle: 'Çok Sektörlü Yaklaşım',
        desc: 'Hayvancılık faaliyetleri, toptan ve perakende elektrik malzeme satışı, inşaat faaliyetleri ile bilişim ve yazılım çözümleri sunuyoruz. Farklı sektörlerdeki deneyimimizi birleştirerek müşterilerimize kapsamlı ve entegre hizmet paketleri sağlıyoruz.',
        stats: '5+ sektör',
    },
];

export default function ServicesSection() {
    return (
        <section id="hizmetler" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={bgMeter} alt="" className="w-full h-full object-cover opacity-8" loading="lazy" width={1920} height={800} />
                <div className="absolute inset-0 bg-background/[0.97]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <p className="font-display text-sm tracking-[0.3em] text-primary mb-3 font-medium">
                        SİZE NASIL YARDIMCI OLABİLİRİZ?
                    </p>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="metallic-text">HİZMETLERİMİZ</span>
                    </h2>
                    <div className="energy-line-red w-24 mx-auto mt-6" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mt-16">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-8 rounded-lg border border-border/40 gradient-card-dark hover:border-primary/30 transition-all duration-500 box-glow-subtle hover:box-glow-red"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                    <s.icon className="w-8 h-8 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display text-2xl font-semibold text-foreground mb-1 tracking-wide group-hover:text-primary transition-colors">
                                        {s.title}
                                    </h3>
                                    <p className="font-display text-xs tracking-wider text-primary/80 mb-4">{s.subtitle}</p>
                                    <p className="text-muted-foreground font-body text-base leading-relaxed">{s.desc}</p>

                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/30">
                                        <span className="font-display text-xs tracking-wider text-muted-foreground">{s.stats}</span>
                                        <Link
                                            to={`/hizmetler/${s.id}`}
                                            className="inline-flex items-center gap-2 font-display text-xs tracking-[0.15em] text-primary hover:text-foreground transition-colors group/link"
                                        >
                                            DEVAMI
                                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
