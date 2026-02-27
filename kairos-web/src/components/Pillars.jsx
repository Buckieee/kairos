'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { PILLARS } from '@/lib/constants';

/* ─── Card colors + icons per pillar ──────────────── */
const pillarStyles = [
    {
        bg: '#F5F3F0',
        hoverBg: '#EDEBE7',
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 8L38 16V32L24 40L10 32V16L24 8Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M24 8V24M24 24L38 16M24 24L10 16M24 24V40M24 24L38 32M24 24L10 32" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.6" />
            </svg>
        ),
    },
    {
        bg: '#F5F3F0',
        hoverBg: '#EDEBE7',
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="24" y="8" width="16" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="12" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <line x1="12" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <line x1="28" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <line x1="28" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <line x1="28" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            </svg>
        ),
    },
    {
        bg: '#F5F3F0',
        hoverBg: '#EDEBE7',
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 24C18 20 20 16 24 16C28 16 30 20 30 24C30 28 28 32 24 32" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
                <line x1="24" y1="10" x2="24" y2="14" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                <line x1="24" y1="34" x2="24" y2="38" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            </svg>
        ),
    },
    {
        bg: '#F5F3F0',
        hoverBg: '#EDEBE7',
        icon: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 32L20 20L28 26L36 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="36" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" />
                <line x1="12" y1="36" x2="38" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
                <line x1="12" y1="14" x2="12" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
            </svg>
        ),
    },
];

/* ─── Rotating placeholder ─────────────────────────── */
const placeholders = [
    'I need a CRM that actually works…',
    'Automate our onboarding emails…',
    'Build us a landing page that converts…',
    'Set up analytics and tracking…',
    'Create an AI chatbot for support…',
    'Redesign our brand identity…',
];

/* ─── Pillar card — bento style ───────────────────── */
function PillarCard({ pillar, style, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-3xl overflow-hidden cursor-default group relative transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] border border-transparent hover:border-accent/20 ${index === 0 ? 'sm:row-span-2' : ''}`}
            style={{ backgroundColor: style.bg }}
        >
            {/* Hover bg change */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: style.hoverBg }}
            />

            <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                {/* Icon — floating, with scale and glow on hover */}
                <div className="flex-1 flex items-center justify-center py-8 sm:py-12">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        className="text-foreground/30 group-hover:text-accent group-hover:scale-150 group-hover:-rotate-3 transition-all duration-700 ease-out group-hover:drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                    >
                        {style.icon}
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-end justify-between mt-auto">
                    <div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                            {pillar.title}
                        </h3>
                        {/* Outcome — slides up on hover */}
                        <p className="text-[11px] sm:text-xs text-foreground/40 group-hover:text-foreground/70 mt-1 max-w-[180px] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            {pillar.outcome}
                        </p>
                    </div>

                    {/* + → arrow on hover */}
                    <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-foreground/25 group-hover:opacity-0 group-hover:rotate-90 transition-all duration-300 absolute">
                            <path d="M9 4V14M4 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-foreground/50 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute">
                            <path d="M5 13L13 5M13 5H7M13 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Bullets — reveal on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-[160px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100">
                    <div className="pt-5 flex flex-wrap gap-2 relative z-20">
                        {pillar.bullets.map((b, i) => (
                            <span
                                key={b}
                                className="text-[10px] tracking-widest uppercase text-foreground/50 bg-foreground/[0.03] border border-foreground/[0.05] group-hover:border-foreground/[0.1] rounded-full px-3 py-1.5 font-semibold transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                                style={{ transitionDelay: `${150 + i * 75}ms` }}
                            >
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── CTA Card — redirects to contact section ─────── */
function CTACard() {
    const [placeholderIdx, setPlaceholderIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIdx((i) => (i + 1) % placeholders.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl overflow-hidden relative group cursor-pointer transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] border border-transparent hover:border-accent/20"
            style={{ backgroundColor: '#F5F3F0' }}
        >
            <div className="h-full flex flex-col p-6 sm:p-8">
                <div className="mb-4">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-foreground/80 group-hover:text-accent transition-all duration-500 group-hover:scale-[1.03] origin-left">
                        Tell us what you need
                    </h3>
                </div>

                {/* Rotating example text */}
                <div className="flex-1 relative min-h-[60px]">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={placeholderIdx}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 0.3, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 text-sm text-foreground pointer-events-none"
                        >
                            {placeholders[placeholderIdx]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                {/* Bottom arrow */}
                <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-[10px] text-foreground/25 group-hover:text-accent font-medium tracking-wider uppercase transition-colors duration-500">
                        Get in touch
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent/10 group-hover:bg-accent group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center transition-all duration-500">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                            <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.a>
    );
}

export default function Pillars() {
    return (
        <SectionWrapper id="services">
            <div className="mb-12 sm:mb-16">
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
                    className="text-headline text-foreground"
                >
                    {PILLARS.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="mt-4 text-muted text-lg max-w-xl leading-relaxed"
                >
                    {PILLARS.intro}
                </motion.p>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(220px,auto)]">
                {PILLARS.items.map((pillar, i) => (
                    <PillarCard
                        key={pillar.title}
                        pillar={pillar}
                        style={pillarStyles[i]}
                        index={i}
                    />
                ))}

                {/* CTA card — redirects to contact */}
                <CTACard />
            </div>
        </SectionWrapper>
    );
}
