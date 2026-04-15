import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const certificates = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    img: `https://korfezim.com/img/documents/b${i + 1}.png`,
}));

export default function QualitySection() {
    const [selectedCert, setSelectedCert] = useState<number | null>(null);

    return (
        <section id="kalite" className="relative py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6"
                >
                    <p className="font-display text-sm tracking-[0.3em] text-primary mb-3 font-medium">
                        TECRÜBE, BİRİKİM, EMEK…
                    </p>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="metallic-text">KALİTE </span>
                        <span className="red-accent-text text-glow-red">BELGELERİMİZ</span>
                    </h2>
                    <div className="energy-line-red w-24 mx-auto mt-6" />
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-16">
                    {certificates.map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            onClick={() => setSelectedCert(c.id)}
                            className="group relative rounded-lg border border-border/30 bg-card/40 p-3 hover:border-primary/30 hover:box-glow-red transition-all duration-300 cursor-pointer"
                        >
                            <div className="aspect-[3/4] flex items-center justify-center overflow-hidden rounded">
                                <img
                                    src={c.img}
                                    alt={`Kalite Belgesi ${c.id}`}
                                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Award className="w-4 h-4 text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
                <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-2 bg-background/95 backdrop-blur-sm border-border/50">
                    {selectedCert && (
                        <img
                            src={`https://korfezim.com/img/documents/b${selectedCert}.png`}
                            alt={`Kalite Belgesi ${selectedCert}`}
                            className="w-full h-auto max-h-[85vh] object-contain rounded"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
