import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type CityDefinition = {
    name: string;
    region: string;
    company?: string;
    isHQ?: boolean;
    isBranch?: boolean;
    labelDx?: number;
    labelDy?: number;
    labelAnchor?: 'start' | 'middle' | 'end';
    markerSize?: number;
};

type PositionedCity = CityDefinition & { x: number; y: number };

// All cities from original korfezim.com with their reference companies
const cityDefinitions: CityDefinition[] = [
    // Trakya
    { name: 'Edirne', region: 'Trakya', company: 'Trakya EDAŞ', labelDx: -8, labelDy: -8, labelAnchor: 'end', markerSize: 3 },
    { name: 'Kırklareli', region: 'Trakya', company: 'Trakya EDAŞ', labelDx: 0, labelDy: -8, markerSize: 3 },
    { name: 'Tekirdağ', region: 'Trakya', company: 'Trakya EDAŞ', labelDx: 10, labelDy: 6, labelAnchor: 'start', markerSize: 3 },
    // Marmara
    { name: 'İstanbul', region: 'Marmara', company: 'İSKİ / BEDAŞ', labelDx: -14, labelDy: -8, labelAnchor: 'end', markerSize: 4 },
    { name: 'Kocaeli', region: 'Marmara', company: 'SEDAŞ', labelDx: 12, labelDy: -6, labelAnchor: 'start', markerSize: 3.5 },
    { name: 'Sakarya', region: 'Marmara', company: 'SEDAŞ', labelDx: 14, labelDy: 0, labelAnchor: 'start', markerSize: 3.5 },
    { name: 'Yalova', region: 'Marmara', isBranch: true, company: 'UEDAŞ', labelDx: -12, labelDy: 12, labelAnchor: 'end', markerSize: 4.5 },
    { name: 'Bursa', region: 'Marmara', company: 'UEDAŞ', labelDy: 14, markerSize: 3.5 },
    { name: 'Bilecik', region: 'Marmara', company: 'SEDAŞ', labelDx: 10, labelDy: -6, labelAnchor: 'start', markerSize: 3 },
    { name: 'Balıkesir', region: 'Marmara', company: 'UEDAŞ', labelDy: 12, markerSize: 3 },
    // Ege
    { name: 'İzmir', region: 'Ege', company: 'GDZ EDAŞ', labelDx: -10, labelDy: 0, labelAnchor: 'end' },
    { name: 'Manisa', region: 'Ege', company: 'GDZ EDAŞ', labelDx: 10, labelDy: -6, labelAnchor: 'start', markerSize: 3 },
    { name: 'Aydın', region: 'Ege', company: 'ADM EDAŞ', labelDy: 12, markerSize: 3 },
    { name: 'Muğla', region: 'Ege', company: 'ADM EDAŞ', labelDy: 12, markerSize: 3 },
    { name: 'Denizli', region: 'Ege', company: 'ADM EDAŞ', labelDy: 12, markerSize: 3 },
    // İç Anadolu
    { name: 'Ankara', region: 'İç Anadolu', isHQ: true, company: 'Başkent EDAŞ' },
    { name: 'Eskişehir', region: 'İç Anadolu', company: 'OEDAŞ' },
    { name: 'Konya', region: 'İç Anadolu', company: 'MEDAŞ' },
    { name: 'Kayseri', region: 'İç Anadolu', company: 'MEDAŞ' },
    { name: 'Kırıkkale', region: 'İç Anadolu', company: 'Başkent EDAŞ', markerSize: 3 },
    { name: 'Aksaray', region: 'İç Anadolu', company: 'MEDAŞ', markerSize: 3 },
    { name: 'Nevşehir', region: 'İç Anadolu', company: 'MEDAŞ', markerSize: 3 },
    // Akdeniz
    { name: 'Antalya', region: 'Akdeniz', company: 'AKEDAŞ' },
    { name: 'Mersin', region: 'Akdeniz', company: 'Toroslar EDAŞ' },
    { name: 'Adana', region: 'Akdeniz', company: 'Toroslar EDAŞ', markerSize: 3 },
    { name: 'Hatay', region: 'Akdeniz', company: 'Toroslar EDAŞ', markerSize: 3 },
    // Karadeniz
    { name: 'Samsun', region: 'Karadeniz', company: 'YEDAŞ' },
    { name: 'Trabzon', region: 'Karadeniz', company: 'YEDAŞ' },
    { name: 'Ordu', region: 'Karadeniz', company: 'YEDAŞ', markerSize: 3 },
    { name: 'Tokat', region: 'Karadeniz', company: 'YEDAŞ', markerSize: 3 },
    { name: 'Amasya', region: 'Karadeniz', company: 'YEDAŞ', markerSize: 3 },
    { name: 'Çorum', region: 'Karadeniz', company: 'YEDAŞ', markerSize: 3 },
    { name: 'Kastamonu', region: 'Karadeniz', company: 'YEDAŞ', markerSize: 3 },
    // Doğu Anadolu
    { name: 'Erzincan', region: 'Doğu Anadolu', company: 'Erzincan Belediyesi' },
    { name: 'Erzurum', region: 'Doğu Anadolu', company: 'Aras EDAŞ' },
    { name: 'Ağrı', region: 'Doğu Anadolu', company: 'Aras EDAŞ', markerSize: 3 },
    { name: 'Van', region: 'Doğu Anadolu', company: 'Aras EDAŞ', markerSize: 3 },
    { name: 'Kars', region: 'Doğu Anadolu', company: 'Aras EDAŞ', markerSize: 3 },
    // Güneydoğu
    { name: 'Diyarbakır', region: 'Güneydoğu', company: 'Dicle EDAŞ' },
    { name: 'Şanlıurfa', region: 'Güneydoğu', company: 'Dicle EDAŞ' },
    { name: 'Gaziantep', region: 'Güneydoğu', company: 'Toroslar EDAŞ', markerSize: 3 },
    { name: 'Malatya', region: 'Doğu Anadolu', company: 'Fırat EDAŞ', markerSize: 3 },
    { name: 'Elazığ', region: 'Doğu Anadolu', company: 'Fırat EDAŞ', markerSize: 3 },
    { name: 'Sivas', region: 'İç Anadolu', company: 'YEDAŞ', markerSize: 3 },
];

const connections = [
    ['Ankara', 'İstanbul'], ['Ankara', 'Kocaeli'], ['Ankara', 'Sakarya'], ['Ankara', 'Bursa'],
    ['Ankara', 'Eskişehir'], ['Ankara', 'Konya'], ['Ankara', 'Samsun'], ['Ankara', 'Kayseri'],
    ['Ankara', 'İzmir'], ['Ankara', 'Erzincan'], ['Ankara', 'Diyarbakır'], ['Ankara', 'Antalya'],
    ['Ankara', 'Mersin'], ['Ankara', 'Yalova'],
    ['Samsun', 'Trabzon'], ['Erzincan', 'Erzurum'],
    ['Diyarbakır', 'Şanlıurfa'], ['İstanbul', 'Edirne'], ['İstanbul', 'Tekirdağ'],
];

const normalizeProvinceName = (value: string) =>
    value.toLocaleLowerCase('tr-TR').replace(/\s+/g, '').replace(/\(.*?\)/g, '').trim().normalize('NFKD');

const getProvinceVisualCenter = (group: SVGGElement) => {
    const bbox = group.getBBox();
    const centerX = bbox.x + bbox.width / 2;
    const centerY = bbox.y + bbox.height / 2;
    const svgRoot = group.ownerSVGElement;
    const paths = Array.from(group.querySelectorAll('path')) as SVGPathElement[];

    if (!svgRoot || paths.length === 0 || typeof paths[0].isPointInFill !== 'function') {
        return { x: centerX, y: centerY };
    }

    let bestPoint = { x: centerX, y: centerY };
    let bestDistance = Number.POSITIVE_INFINITY;
    const stepX = Math.max(2, bbox.width / 14);
    const stepY = Math.max(2, bbox.height / 14);

    for (let y = bbox.y + stepY / 2; y <= bbox.y + bbox.height; y += stepY) {
        for (let x = bbox.x + stepX / 2; x <= bbox.x + bbox.width; x += stepX) {
            const point = svgRoot.createSVGPoint();
            point.x = x;
            point.y = y;

            if (paths.some((path) => path.isPointInFill(point))) {
                const distance = (x - centerX) ** 2 + (y - centerY) ** 2;
                if (distance < bestDistance) {
                    bestDistance = distance;
                    bestPoint = { x, y };
                }
            }
        }
    }

    return bestDistance === Number.POSITIVE_INFINITY ? { x: centerX, y: centerY } : bestPoint;
};

const getCityPositionsFromSvg = (svgRoot: SVGSVGElement) => {
    const provinceGroups = Array.from(svgRoot.querySelectorAll('g[data-iladi]')) as SVGGElement[];

    return cityDefinitions.reduce<Record<string, { x: number; y: number }>>((acc, city) => {
        // İstanbul has two groups (Asya & Avrupa), merge them
        const matchingGroups = provinceGroups.filter(
            (group) => normalizeProvinceName(group.getAttribute('data-iladi') ?? '') === normalizeProvinceName(city.name),
        );

        if (matchingGroups.length === 0) return acc;

        if (matchingGroups.length > 1) {
            // Average the centers of all matching groups (e.g. İstanbul)
            const centers = matchingGroups.map((g) => getProvinceVisualCenter(g));
            const avgX = centers.reduce((s, c) => s + c.x, 0) / centers.length;
            const avgY = centers.reduce((s, c) => s + c.y, 0) / centers.length;
            acc[city.name] = { x: avgX, y: avgY };
        } else {
            acc[city.name] = getProvinceVisualCenter(matchingGroups[0]);
        }

        return acc;
    }, {});
};

export default function TurkeyMap() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
    const [cityPositions, setCityPositions] = useState<Record<string, { x: number; y: number }>>({});
    const svgContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = svgContainerRef.current;
        if (!container) return;

        let cancelled = false;

        fetch('/turkey-map.svg')
            .then((r) => r.text())
            .then((svgText) => {
                if (cancelled) return;

                const parser = new DOMParser();
                const doc = parser.parseFromString(svgText, 'image/svg+xml');
                const svgEl = doc.querySelector('svg');
                if (!svgEl) return;

                svgEl.setAttribute('width', '100%');
                svgEl.setAttribute('height', '100%');
                svgEl.style.display = 'block';

                const paths = svgEl.querySelectorAll('path');
                paths.forEach((path) => {
                    path.setAttribute('fill', 'hsl(220, 15%, 15%)');
                    path.setAttribute('stroke', 'hsl(0, 60%, 40%)');
                    path.setAttribute('stroke-width', '0.8');
                    path.style.transition = 'fill 0.3s, stroke 0.3s';
                    path.style.cursor = 'pointer';

                    path.addEventListener('mouseenter', () => {
                        path.setAttribute('fill', 'hsl(0, 70%, 25%)');
                        path.setAttribute('stroke', 'hsl(0, 75%, 50%)');
                        path.setAttribute('stroke-width', '1.2');
                        const g = path.closest('g[data-iladi]');
                        if (g) {
                            const rawName = g.getAttribute('data-iladi') ?? '';
                            const normalizedHovered = normalizeProvinceName(rawName);
                            const city = cityDefinitions.find(
                                (c) => normalizeProvinceName(c.name) === normalizedHovered
                            );
                            setHovered(city?.name ?? rawName);
                            setHoveredCompany(city?.company ?? null);
                        }
                    });

                    path.addEventListener('mouseleave', () => {
                        path.setAttribute('fill', 'hsl(220, 15%, 15%)');
                        path.setAttribute('stroke', 'hsl(0, 60%, 40%)');
                        path.setAttribute('stroke-width', '0.8');
                        setHovered(null);
                        setHoveredCompany(null);
                    });
                });

                container.replaceChildren(svgEl);

                requestAnimationFrame(() => {
                    if (cancelled) return;
                    const renderedSvg = container.querySelector('svg');
                    if (!renderedSvg) return;
                    setCityPositions(getCityPositionsFromSvg(renderedSvg as SVGSVGElement));
                });
            });

        return () => {
            cancelled = true;
        };
    }, []);

    const positionedCities: PositionedCity[] = cityDefinitions
        .map((city) => {
            const position = cityPositions[city.name];
            return position ? { ...city, ...position } : null;
        })
        .filter((city): city is PositionedCity => city !== null);

    const getCity = (name: string) => positionedCities.find((city) => city.name === name);

    return (
        <section className="relative py-28 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 75% 50% / 0.4) 1px, transparent 0)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="font-display text-sm tracking-[0.3em] text-primary mb-3 font-medium">TÜRKİYE GENELİ</p>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="metallic-text">FAALİYET </span>
                        <span className="red-accent-text text-glow-red">HARİTAMIZ</span>
                    </h2>
                    <div className="energy-line-red w-24 mx-auto mt-6" />
                    <p className="text-muted-foreground font-body mt-6 max-w-2xl mx-auto">
                        Türkiye'nin dört bir yanında 20'den fazla elektrik dağıtım şirketi, belediye ve kurum ile çalışarak enerji
                        altyapısına katkıda bulunuyoruz.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="flex flex-wrap items-center justify-between mb-4 px-2 gap-3">
                        <div>
                            <span className="font-display text-xs tracking-[0.25em] text-primary font-medium">KÖRFEZİM ELEKTRİK</span>
                            <p className="font-display text-[10px] tracking-wider text-muted-foreground mt-0.5">
                                FAALİYET BÖLGELERİ & TESİSLERİMİZ
                            </p>
                        </div>
                        <div className="flex items-center gap-5 flex-wrap">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-red" />
                                <span className="text-[10px] font-display text-muted-foreground tracking-wider">AKTİF BÖLGE</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full border-2 border-primary" style={{ backgroundColor: 'hsl(0 75% 50% / 0.4)' }} />
                                <span className="text-[10px] font-display text-muted-foreground tracking-wider">GENEL MERKEZ</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(200 70% 40%)' }} />
                                <span className="text-[10px] font-display text-muted-foreground tracking-wider">ŞUBE</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl border border-border/30 gradient-card-dark box-glow-subtle overflow-hidden p-6 lg:p-8">
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-5 py-2.5 rounded border border-primary/30"
                                style={{ background: 'hsl(220 22% 8% / 0.95)' }}
                            >
                                <span className="font-display text-lg font-bold text-primary tracking-wider">{hovered}</span>
                                {hoveredCompany && (
                                    <p className="text-[11px] font-display text-muted-foreground tracking-wider text-center mt-0.5">
                                        {hoveredCompany}
                                    </p>
                                )}
                            </motion.div>
                        )}

                        <div className="relative">
                            <div ref={svgContainerRef} className="w-full" style={{ filter: 'drop-shadow(0 0 30px hsl(0 75% 50% / 0.06))' }} />

                            <svg
                                viewBox="0 0 1007.478 527.323"
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                {connections.map(([fromName, toName], i) => {
                                    const from = getCity(fromName);
                                    const to = getCity(toName);
                                    if (!from || !to) return null;

                                    return (
                                        <line
                                            key={i}
                                            x1={from.x}
                                            y1={from.y}
                                            x2={to.x}
                                            y2={to.y}
                                            stroke="hsl(0, 75%, 50%)"
                                            strokeWidth="1"
                                            opacity={0.2}
                                            strokeDasharray="6,4"
                                        />
                                    );
                                })}

                                {positionedCities.map((city) => (
                                    <g key={city.name}>
                                        {city.isHQ && (
                                            <>
                                                <circle cx={city.x} cy={city.y} r="20" fill="none" stroke="hsl(0, 75%, 50%)" strokeWidth="0.8" opacity={0.3}>
                                                    <animate attributeName="r" values="12;22;12" dur="3s" repeatCount="indefinite" />
                                                    <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
                                                </circle>
                                                <circle cx={city.x} cy={city.y} r="14" fill="none" stroke="hsl(0, 75%, 50%)" strokeWidth="0.5" opacity={0.2}>
                                                    <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
                                                    <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2.5s" repeatCount="indefinite" />
                                                </circle>
                                            </>
                                        )}

                                        {city.isBranch && (
                                            <circle cx={city.x} cy={city.y} r="12" fill="none" stroke="hsl(200, 70%, 50%)" strokeWidth="0.6" opacity={0.3}>
                                                <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite" />
                                                <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
                                            </circle>
                                        )}

                                        <circle
                                            cx={city.x}
                                            cy={city.y}
                                            r={city.markerSize ?? (city.isHQ ? 6 : city.isBranch ? 5 : 4)}
                                            fill={city.isHQ ? 'hsl(0, 75%, 50%)' : city.isBranch ? 'hsl(200, 70%, 50%)' : 'hsl(0, 70%, 45%)'}
                                            stroke={city.isHQ ? 'hsl(0, 75%, 60%)' : city.isBranch ? 'hsl(200, 70%, 60%)' : 'hsl(0, 75%, 60%)'}
                                            strokeWidth={city.isHQ ? 1.5 : 0.8}
                                            opacity={0.95}
                                        >
                                            {!city.isHQ && !city.isBranch && (
                                                <animate attributeName="opacity" values="0.65;1;0.65" dur="3s" begin={`${Math.random() * 2}s`} repeatCount="indefinite" />
                                            )}
                                        </circle>

                                        <text
                                            x={city.x + (city.labelDx ?? 0)}
                                            y={city.y + (city.labelDy ?? (city.isHQ ? -16 : -10))}
                                            textAnchor={city.labelAnchor ?? 'middle'}
                                            fill={city.isHQ ? 'hsl(0, 75%, 60%)' : city.isBranch ? 'hsl(200, 70%, 65%)' : 'hsl(215, 15%, 65%)'}
                                            fontSize={city.isHQ ? 11 : city.isBranch ? 8.5 : 7}
                                            fontFamily="Oswald, sans-serif"
                                            fontWeight={city.isHQ || city.isBranch ? 700 : 500}
                                            letterSpacing="1"
                                        >
                                            {city.name.toUpperCase()}
                                        </text>

                                        {city.isHQ && (
                                            <text x={city.x} y={city.y + 18} textAnchor="middle" fill="hsl(0, 75%, 50%)" fontSize="6" fontFamily="Oswald, sans-serif" fontWeight={400} letterSpacing="2">
                                                GENEL MERKEZ
                                            </text>
                                        )}

                                        {city.isBranch && (
                                            <text x={city.x} y={city.y + 16} textAnchor="middle" fill="hsl(200, 70%, 55%)" fontSize="5" fontFamily="Oswald, sans-serif" fontWeight={400} letterSpacing="2">
                                                ŞUBE
                                            </text>
                                        )}
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-4 mt-8"
                    >
                        <div className="p-5 rounded-lg border border-border/30 gradient-card-dark hover:border-primary/20 transition-all duration-500">
                            <p className="font-display text-xs tracking-[0.2em] text-primary font-semibold mb-3">MERKEZ OFİS — ANKARA</p>
                            <p className="text-sm text-muted-foreground font-body mb-2">
                                İşçi Blokları Mahallesi, Muhsin Yazıcıoğlu Caddesi, No: 57, 06530 Çankaya - Ankara
                            </p>
                            <p className="text-sm text-muted-foreground font-body mb-3">
                                <span className="text-foreground font-medium">Tel:</span> (312) 287-1477
                            </p>
                            <a
                                href="https://maps.google.com/?q=İşçi+Blokları+Mahallesi+Muhsin+Yazıcıoğlu+Caddesi+No:57+Çankaya+Ankara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/40 text-primary text-xs font-display tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <ExternalLink className="w-3 h-3" />
                                HARİTADA GÖSTER
                            </a>
                        </div>

                        <div className="p-5 rounded-lg border border-border/30 gradient-card-dark hover:border-primary/20 transition-all duration-500">
                            <p className="font-display text-xs tracking-[0.2em] text-primary font-semibold mb-3">ŞUBE — YALOVA</p>
                            <p className="text-sm text-muted-foreground font-body mb-2">
                                Şehit Ömer Fardalı Cad. No:63 Merkez / YALOVA
                            </p>
                            <p className="text-sm text-muted-foreground font-body mb-3">
                                <span className="text-foreground font-medium">Tel:</span> (226) 813-6681
                            </p>
                            <a
                                href="https://maps.google.com/?q=Şehit+Ömer+Fardalı+Cad+No:63+Merkez+Yalova"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/40 text-primary text-xs font-display tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <ExternalLink className="w-3 h-3" />
                                HARİTADA GÖSTER
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
                    >
                        {[
                            { label: 'Hizmet Verilen İl', value: '40+' },
                            { label: 'Aktif Referans', value: '20+' },
                            { label: 'Saha Personeli', value: '500+' },
                            { label: 'Yıllık Sayaç Okuma', value: '2M+' },
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="text-center p-5 rounded-lg border border-border/30 gradient-card-dark hover:border-primary/20 hover:box-glow-red transition-all duration-500"
                            >
                                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                                <p className="text-[10px] font-display tracking-[0.15em] text-muted-foreground mt-1">{s.label.toUpperCase()}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
