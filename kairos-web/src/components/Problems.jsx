'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROBLEMS } from '@/lib/constants';

/* ─── Animated Quotes Carousel ────────────────────── */
function QuoteCarousel({ quotes }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [quotes.length]);

    return (
        <div className="relative h-56 sm:h-48 mt-12 mb-12 lg:mb-0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                >
                    <div className="flex flex-col h-full justify-center space-y-5">
                        <p className="text-xl sm:text-2xl lg:text-[1.35rem] xl:text-2xl font-body text-foreground/80 leading-relaxed font-semibold">
                            "{quotes[index].text}"
                        </p>
                        <p className="text-sm font-bold uppercase tracking-widest text-[#E11D48]">
                            — {quotes[index].author}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute -bottom-4 left-0 flex gap-2">
                {quotes.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-700 ${i === index ? 'w-10 bg-[#E11D48]' : 'w-2 bg-foreground/10'}`}
                    />
                ))}
            </div>
        </div>
    );
}

/* ─── Problems — White with dramatic typography ───── */
export default function Problems() {
    return (
        <section id="problems" className="relative overflow-hidden bg-background">
            {/* Giant watermark */}
            <div className="pointer-events-none absolute -right-[5%] top-[5%] select-none">
                <span className="text-[30vw] font-heading font-bold text-foreground/[0.02] leading-none block">
                    ?!
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
                    {/* Left Column: Header + Quotes */}
                    <div className="flex flex-col justify-center max-w-xl">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="w-16 h-[2px] bg-[#E11D48] origin-left mb-8"
                            />
                            <h2 className="text-headline text-foreground mb-4">
                                {PROBLEMS.titleBold}
                            </h2>
                            <p className="text-headline gradient-text">
                                {PROBLEMS.titleLight}
                            </p>
                        </motion.div>

                        <QuoteCarousel quotes={PROBLEMS.quotes} />
                    </div>

                    {/* Right Column: Stacked lines */}
                    <div className="space-y-0 relative">
                        {/* Subtle left border line to separate columns visually on desktop */}
                        <div className="hidden lg:block absolute left-[-3rem] top-0 bottom-0 w-[1px] bg-foreground/5" />

                        {PROBLEMS.bullets.map((bullet, i) => (
                            <motion.div
                                key={bullet}
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="group border-b border-border py-7 sm:py-10 flex items-center gap-6 cursor-default"
                            >
                                <span className="text-4xl sm:text-6xl font-heading font-bold text-foreground/[0.04] group-hover:text-accent/20 transition-colors duration-500 tabular-nums w-20 shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-foreground/50 group-hover:text-foreground group-hover:translate-x-3 transition-all duration-500">
                                    {bullet}
                                </p>
                                <div className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-4">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                                        <path d="M7 17L17 7M17 7H10M17 7V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
