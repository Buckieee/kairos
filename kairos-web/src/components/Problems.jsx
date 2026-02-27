'use client';

import { motion } from 'framer-motion';
import { PROBLEMS } from '@/lib/constants';

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

            <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 section-padding">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 sm:mb-20"
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-16 h-[2px] bg-accent origin-left mb-8"
                    />
                    <h2 className="text-headline text-foreground mb-4">
                        {PROBLEMS.titleBold}
                    </h2>
                    <p className="text-headline gradient-text">
                        {PROBLEMS.titleLight}
                    </p>
                </motion.div>

                {/* Stacked lines */}
                <div className="space-y-0">
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
        </section>
    );
}
