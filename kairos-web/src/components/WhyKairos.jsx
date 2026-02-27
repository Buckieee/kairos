'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { WHY_KAIROS } from '@/lib/constants';

/* ─── Ticker strip — runs across full width ───────── */
function TickerStrip() {
    const words = ['AUTOMATION', 'CRM', 'BRAND', 'GROWTH', 'SYSTEMS', 'STRATEGY', 'AI', 'EXECUTION'];
    const row = words.map((w) => (
        <span key={w} className="flex items-center gap-6 mx-6">
            <span className="text-6xl sm:text-8xl md:text-[10rem] font-heading font-bold text-foreground/[0.03] whitespace-nowrap leading-none select-none">
                {w}
            </span>
            <span className="w-3 h-3 rounded-full bg-accent/20 shrink-0" />
        </span>
    ));

    return (
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
            <div className="ticker-track">
                {row}
                {row}
            </div>
        </div>
    );
}

export default function WhyKairos() {
    return (
        <section id="why" className="relative overflow-hidden">
            <TickerStrip />

            <SectionWrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="w-12 h-[2px] bg-foreground mb-8" />
                        <h2 className="text-headline text-foreground mb-8">
                            {WHY_KAIROS.title}
                        </h2>
                        <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed font-heading font-light">
                            {WHY_KAIROS.pitch}
                        </p>
                    </motion.div>

                    {/* Right — Trust points */}
                    <div className="space-y-0">
                        {WHY_KAIROS.points.map((point, i) => (
                            <motion.div
                                key={point}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="flex items-center gap-5 py-6 border-b border-border group cursor-default"
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-foreground/10 group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(124,58,237,0.3)] transition-all duration-500 shrink-0" />
                                <p className="text-base sm:text-lg text-foreground/70 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-500">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
