import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock, Facebook, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/korfezim-logo.png';

export default function Footer() {
    return (
        <footer id="iletisim" className="relative border-t border-border/30">
            {/* CTA Strip */}
            <div className="bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground tracking-wider">
                                Bizimle İletişime Geçin
                            </h3>
                            <p className="text-primary-foreground/80 font-body mt-1">
                                Türkiye genelinde profesyonel enerji hizmetleri için yanınızdayız.
                            </p>
                        </div>
                        <a
                            href="tel:+903122871477"
                            className="px-10 py-4 font-display font-bold text-lg tracking-wider bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded"
                        >
                            HEMEN ARAYIN
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer content */}
            <div className="bg-card/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <img src={logo} alt="Körfezim" className="h-10 w-10 object-contain" loading="lazy" width={512} height={512} />
                                <div>
                                    <span className="font-display text-xl font-bold text-foreground">
                                        KÖRF<span className="red-accent-text">EZ</span>İM
                                    </span>
                                    <p className="text-[8px] tracking-[0.3em] text-muted-foreground font-display">ELEKTRİK</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                1999'dan bu yana enerji sektöründe kaliteli ve güvenilir hizmet.
                                Sektörde kalitenin adresi.
                            </p>
                            {/* Social icons */}
                            <div className="flex items-center gap-4 mt-5">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-foreground mb-5">HİZMETLERİMİZ</h4>
                            <ul className="space-y-2.5 text-sm text-muted-foreground font-body">
                                {['Sayaç Okuma', 'Enerji Kesme & Açma', 'Sayaç Sökme & Takma', 'Yatırım & Montaj', 'Filo Kiralama'].map((l) => (
                                    <li key={l}>
                                        <a href="#hizmetler" className="hover:text-primary transition-colors flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-primary" />
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Merkez Ofis */}
                        <div>
                            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-foreground mb-5">MERKEZ OFİS</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground font-body">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>İşçi Blokları Mah. Muhsin Yazıcıoğlu Cad. No:57, 06530 Çankaya / ANKARA</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                    <a href="tel:+903122871477" className="hover:text-primary transition-colors">(312) 287-1477</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                    <a href="mailto:info@korfezim.com" className="hover:text-primary transition-colors">info@korfezim.com</a>
                                </li>
                            </ul>
                        </div>

                        {/* Şube */}
                        <div>
                            <h4 className="font-display text-sm font-semibold tracking-[0.2em] text-foreground mb-5">ŞUBE</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground font-body">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Şehit Ömer Fardalı Cad. No:63 Merkez / YALOVA</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                    <a href="tel:+902268136681" className="hover:text-primary transition-colors">(226) 813-6681</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                                    Pzt-Cum: 08:00-18:00
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-14 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-muted-foreground font-body">
                            © 2026 Körfezim Elektrik. Tüm hakları saklıdır.
                        </p>
                        <div className="flex items-center gap-6 text-xs text-muted-foreground font-body">
                            <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
                            <a href="#" className="hover:text-primary transition-colors">Kullanım Şartları</a>
                            <a href="#" className="hover:text-primary transition-colors">KVKK Aydınlatma</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Support */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5, type: 'spring' }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center box-glow-red hover:scale-110 transition-transform"
                title="Canlı Destek"
            >
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-background" style={{ backgroundColor: 'hsl(142 76% 36%)' }} />
            </motion.button>
        </footer>
    );
}
