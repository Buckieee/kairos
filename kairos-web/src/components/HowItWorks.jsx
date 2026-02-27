'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { PROCESS } from '@/lib/constants';

export default function HowItWorks() {
    return (
        <SectionWrapper id="process">
            <div className="mb-16 sm:mb-20">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-16 h-[2px] bg-foreground origin-left mb-8"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-headline text-foreground mb-6"
                >
                    {PROCESS.title}
                </motion.h2>

                {PROCESS.subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed"
                    >
                        {PROCESS.subtitle}
                    </motion.p>
                )}
            </div>

            <div className="relative">
                {/* Vertical line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-7 sm:left-9 top-0 bottom-0 w-px bg-foreground/10 origin-top"
                />

                <div className="space-y-0">
                    {PROCESS.steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="relative pl-24 sm:pl-28 py-12 sm:py-16 border-b border-border group"
                        >
                            {/* Number circle */}
                            <div className="absolute left-0 top-12 sm:top-16 flex items-center justify-center w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 border-foreground/10 bg-background z-10 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500">
                                <span className="text-lg sm:text-xl font-heading font-bold text-foreground/40 group-hover:text-accent transition-colors duration-500">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground group-hover:translate-x-2 transition-transform duration-500">
                                {step.title}
                            </h3>
                            {step.desc && (
                                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg mt-3 group-hover:translate-x-1 transition-transform duration-500">
                                    {step.desc}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {PROCESS.note && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-10 pl-24 sm:pl-28 text-sm text-muted-light italic"
                    >
                        {PROCESS.note}
                    </motion.p>
                )}
            </div>
        </SectionWrapper>
    );
}
