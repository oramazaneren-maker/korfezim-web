import { motion } from 'framer-motion';
import serviceMeter from '@/assets/service-meter.jpg';

export default function AboutSection() {
    return (
        <section id="hakkimizda" className="relative py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="font-display text-sm tracking-[0.3em] text-primary mb-3 font-medium">BİZ KİMİZ?</p>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="metallic-text">HAKKIMIZDA</span>
                    </h2>
                    <div className="energy-line-red w-24 mx-auto mt-6" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-lg overflow-hidden box-glow-subtle">
                            <img src={serviceMeter} alt="Körfezim Elektrik saha ekibi" className="w-full h-[400px] object-cover" loading="lazy" width={1200} height={800} />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-primary flex items-center justify-center box-glow-red">
                            <div className="text-center">
                                <span className="font-display text-3xl font-bold text-primary-foreground">27+</span>
                                <p className="text-[9px] font-display tracking-wider text-primary-foreground/80">YILLIK<br />DENEYİM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2 tracking-wide">
                            YEREL TECRÜBE, SEKTÖREL BİRİKİM,
                        </h3>
                        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-primary mb-8 tracking-wide">
                            KURUMSAL YAPI…
                        </h3>

                        <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-[15px]">
                            <p>
                                16.11.1999 tarihinde <strong className="text-foreground">Yılmaz SAĞIR</strong> tarafından kurulan şirketimiz;
                                Elektrik-Su-Doğalgaz sayaçlarının endeks okuması, enerji kesme & açma, elektrik sayaç değişimi ve
                                çeşitli personel temini işlerini yapmaktadır.
                            </p>
                            <p>
                                Pazardaki rekabetçi konumu güçlendirmek ve bunu sürekli kılmak için süreç ve sistemlerin sürekli
                                olarak geliştirilmesi ve bulunduğu bölgede sistemi kurarak buna uygun insan kaynağı oluşturmak
                                şirketimizin ana hedefleri arasındadır.
                            </p>
                            <p>
                                Hizmet sektöründe kalitenin önemini savunan şirketimiz sağlam temellere sahip yüksek rekabet
                                gücüne erişebilmesi için <strong className="text-foreground">Ulusal Kalite Hareketi</strong>'ne 2012 yılında katılmış olup
                                kalitesinin sürekli zenginleştirilmesi yükseltilmesi ve yenilenmesini amaçlamıştır.
                            </p>
                        </div>

                        <a
                            href="#kalite"
                            className="inline-block mt-8 px-8 py-3 font-display font-semibold text-sm tracking-wider border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                            KALİTE BELGELERİMİZ →
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
