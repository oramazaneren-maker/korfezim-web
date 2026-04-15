import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Scene3D from '@/components/Scene3D';
import serviceDetailSayac from '@/assets/service-detail-sayac.jpg';
import serviceDetailYatirim from '@/assets/service-detail-yatirim.jpg';
import serviceDetailFilo from '@/assets/service-detail-filo.jpg';
import serviceDetailDiger from '@/assets/service-detail-diger.jpg';

const serviceData: Record<string, {
    title: string;
    subtitle: string;
    heroImage: string;
    galleryImages: string[];
    description: string[];
    features: string[];
    gradient: string;
}> = {
    'sayac-okuma': {
        title: 'Sayaç Okuma, Enerji Kesme & Açma',
        subtitle: 'Sayaç Sökme & Takma Hizmetleri',
        heroImage: serviceDetailSayac,
        galleryImages: [serviceDetailSayac],
        gradient: 'linear-gradient(180deg, hsl(220 28% 12%) 0%, hsl(215 25% 16%) 40%, hsl(220 22% 11%) 100%)',
        description: [
            'Doğalgaz, Elektrik, Su sayaçlarının endeks okuma hizmetlerini modern teknoloji ve deneyimli ekibimizle gerçekleştiriyoruz.',
            'Elektrik Sayaçları\'nın Enerji Kesme & Açma işlemlerini yasal prosedürlere uygun, güvenli ve hızlı bir şekilde yürütüyoruz.',
            'Elektrik Sayacı Sökme & Takma hizmetlerinde yılların tecrübesiyle sektörde lider konumdayız.',
        ],
        features: [
            'Elektrik sayacı endeks okuma',
            'Doğalgaz sayacı endeks okuma',
            'Su sayacı endeks okuma',
            'Enerji kesme & açma işlemleri',
            'Sayaç sökme & takma',
            'Dijital ve akıllı sayaç uygulamaları',
            'Saha raporlama ve veri aktarımı',
            'OSOS entegrasyon desteği',
        ],
    },
    'yatirim-montaj': {
        title: 'Yatırım & Montaj Hizmetleri',
        subtitle: 'OSOS Modem & Pano Montajı',
        heroImage: serviceDetailYatirim,
        galleryImages: [serviceDetailYatirim],
        gradient: 'linear-gradient(180deg, hsl(218 28% 13%) 0%, hsl(220 25% 17%) 40%, hsl(218 22% 11%) 100%)',
        description: [
            'Yatırım & Tesis işlemlerini anahtar teslim çözümlerle sunuyoruz.',
            'Sayaç Panosu montaj / demontaj işlemlerini uzman ekiplerimizle gerçekleştiriyoruz.',
            'OSOS (Uzaktan Haberleşme Sistemleri) Modem & Pano montajı hizmetlerinde sektörün en güvenilir çözüm ortağıyız.',
        ],
        features: [
            'Sayaç panosu montaj & demontaj',
            'OSOS modem montajı',
            'Uzaktan haberleşme sistemi kurulumu',
            'Yatırım & tesis işlemleri',
            'Enerji altyapı projeleri',
            'Teknik danışmanlık',
            'Proje yönetimi',
            'Garanti kapsamında bakım',
        ],
    },
    'filo-kiralama': {
        title: 'Araç / Filo Kiralama Hizmetleri',
        subtitle: 'İş Makineleri & Özel Amaçlı Araçlar',
        heroImage: serviceDetailFilo,
        galleryImages: [serviceDetailFilo],
        gradient: 'linear-gradient(180deg, hsl(215 28% 12%) 0%, hsl(210 25% 16%) 40%, hsl(215 22% 11%) 100%)',
        description: [
            'İş makineleri, Vinç ve Hidrolik Platformlu Araçları sektörün ihtiyaçlarına uygun olarak kiralama hizmeti sunuyoruz.',
            'Binek, 4x4 ve Özel Amaçlı araç filolarının kiralanması ile operasyonel süreçlerinizi destekliyoruz.',
            '200\'den fazla araçlık filomuz ile Türkiye genelinde hizmetinizdeyiz.',
        ],
        features: [
            'İş makineleri kiralama',
            'Vinç hizmetleri',
            'Hidrolik platformlu araçlar',
            'Binek araç kiralama',
            '4x4 araç kiralama',
            'Özel amaçlı araçlar',
            'Filo yönetimi',
            'Bakım & sigorta dahil',
        ],
    },
    'diger-faaliyetler': {
        title: 'Diğer Faaliyetlerimiz',
        subtitle: 'Çok Sektörlü Yaklaşım',
        heroImage: serviceDetailDiger,
        galleryImages: [serviceDetailDiger],
        gradient: 'linear-gradient(180deg, hsl(222 28% 13%) 0%, hsl(220 25% 17%) 40%, hsl(222 22% 12%) 100%)',
        description: [
            'Büyük ve küçük baş hayvancılık faaliyetlerimiz ile tarımsal üretime katkı sağlıyoruz.',
            'Toptan ve perakende elektrik malzeme satışı ile sektörün ihtiyaçlarını karşılıyoruz.',
            'İnşaat faaliyetleri ve Bilişim / Yazılım alanlarında da projeler geliştirmekteyiz.',
        ],
        features: [
            'Büyük baş hayvancılık',
            'Küçük baş hayvancılık',
            'Toptan elektrik malzeme satışı',
            'Perakende elektrik malzeme satışı',
            'İnşaat faaliyetleri',
            'Bilişim çözümleri',
            'Yazılım geliştirme',
            'Personel temini',
        ],
    },
};

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = id ? serviceData[id] : null;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen gradient-dark flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-4xl font-bold text-foreground mb-4">Hizmet Bulunamadı</h1>
                    <Link to="/" className="text-primary hover:underline font-display">← Ana Sayfaya Dön</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative" style={{ background: service.gradient }}>
            <Scene3D />
            <div className="relative z-10">
                <Navbar />

                {/* Hero with large image */}
                <section className="relative pt-28 pb-20 overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-25" loading="lazy" width={1200} height={800} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(220 25% 8% / 0.6) 0%, hsl(220 25% 10% / 0.85) 100%)' }} />
                    </div>
                    <div className="relative max-w-5xl mx-auto px-4">
                        <Link to="/#hizmetler" className="inline-flex items-center gap-2 text-primary font-display text-sm tracking-wider mb-8 hover:text-foreground transition-colors">
                            <ArrowLeft className="w-4 h-4" /> TÜM HİZMETLER
                        </Link>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">{service.subtitle}</p>
                            <h1 className="font-display text-4xl lg:text-6xl font-bold metallic-text tracking-tight">{service.title}</h1>
                            <div className="energy-line-red w-24 mt-6" />
                        </motion.div>
                    </div>
                </section>

                {/* Gallery Image */}
                <section className="py-8">
                    <div className="max-w-5xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="rounded-xl overflow-hidden border border-border/30 box-glow-subtle"
                        >
                            <img
                                src={service.heroImage}
                                alt={service.title}
                                className="w-full h-[300px] lg:h-[420px] object-cover"
                                loading="lazy"
                                width={1200}
                                height={800}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 tracking-wide">DETAYLI BİLGİ</h2>
                                <div className="space-y-4">
                                    {service.description.map((p, i) => (
                                        <p key={i} className="text-muted-foreground font-body leading-relaxed">{p}</p>
                                    ))}
                                </div>

                                <div className="mt-10 p-6 rounded-lg border border-primary/20 bg-primary/5">
                                    <p className="font-display text-sm tracking-wider text-primary mb-2">DETAYLI BİLGİ İÇİN</p>
                                    <p className="text-muted-foreground font-body text-sm">
                                        Bu hizmetimiz hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
                                    </p>
                                    <a href="tel:+903122871477" className="inline-block mt-4 px-6 py-2.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider rounded hover:bg-crimson-dark transition-colors box-glow-red">
                                        BİZİ ARAYIN
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 tracking-wide">HİZMET KAPSAMI</h2>
                                <div className="space-y-3">
                                    {service.features.map((f, i) => (
                                        <motion.div
                                            key={f}
                                            initial={{ opacity: 0, x: 15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + i * 0.05 }}
                                            className="flex items-center gap-3 p-3 rounded-lg border border-border/30 bg-card/30 hover:border-primary/20 transition-colors"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="text-sm text-foreground font-body">{f}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}
