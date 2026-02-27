'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Image from 'next/image';
import { WORK } from '@/lib/constants';

/* ─── Relay logo (dots pattern — spaced out) ─────── */
function RelayLogo({ className = '' }) {
    return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="38" cy="58" r="12" fill="currentColor" />
            <circle cx="72" cy="32" r="16" fill="currentColor" />
            <circle cx="115" cy="65" r="19" fill="currentColor" />
            <circle cx="85" cy="120" r="22" fill="currentColor" />
            <circle cx="148" cy="152" r="26" fill="currentColor" />
        </svg>
    );
}

/* ─── Relay showcase images ───────────────────────── */
const relayImages = [
    { src: '/work/relay-hero.png', label: 'Landing Page' },
    { src: '/work/relay-dashboard.png', label: 'AI Dashboard' },
    { src: '/work/relay-features.png', label: 'Feature System' },
    { src: '/work/relay-templates.png', label: 'Template Engine' },
];

const relayDeliverables = [
    'Full-stack web application',
    'AI-powered email parsing & lead tracking',
    'Gmail integration with bi-directional sync',
    'Smart CRM with pipeline automation',
    'AI assistant for follow-up drafting',
    'Landing page & brand identity',
];

const relayTags = ['Full-stack App', 'AI Integration', 'Brand & Landing Page', 'CRM System'];

/* ─── Relay expandable card ───────────────────────── */
function RelayCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden cursor-pointer group rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Card face — filled square */}
            <div className="aspect-square relative overflow-hidden bg-[#F0EDE8] transition-colors duration-500 group-hover:bg-[#E8E4DD]">
                {/* Logo — always visible, effect on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <RelayLogo className="w-14 h-14 sm:w-16 sm:h-16 text-foreground/70 group-hover:text-foreground transition-colors duration-500" />
                    </div>
                </div>

                {/* Bottom bar — always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between">
                    {/* Left: name + tags (tags appear on hover) */}
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground/90 mb-1">
                            Relay
                        </h3>
                        {/* Tags — reveal on hover */}
                        <div className="flex flex-wrap gap-1.5 max-w-[200px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">Full-stack</span>
                            <span className="text-[9px] text-foreground/30">·</span>
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">AI</span>
                            <span className="text-[9px] text-foreground/30">·</span>
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">CRM</span>
                        </div>
                    </div>

                    {/* Right: + icon → arrow on hover */}
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        {/* Plus — default */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/40 group-hover:opacity-0 group-hover:rotate-90 transition-all duration-300 absolute">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {/* Arrow — on hover */}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/60 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute">
                            <path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="bg-[#F0EDE8] border-t border-foreground/[0.06]">
                            {/* Tags */}
                            <div className="px-6 sm:px-8 pt-5 pb-4 flex flex-wrap gap-2">
                                {relayTags.map((tag) => (
                                    <span key={tag} className="text-[10px] tracking-wider uppercase text-accent bg-accent/[0.06] border border-accent/10 rounded-full px-3 py-1 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Screenshots grid */}
                            <div className="px-4 sm:px-6 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {relayImages.map((img, i) => (
                                    <motion.a
                                        key={img.src}
                                        href="https://relayapp-red.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.5 }}
                                        className="group/img relative block overflow-hidden rounded-xl border border-border hover:border-accent/20 transition-all duration-500"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            width={600}
                                            height={350}
                                            className="w-full h-auto object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                            <span className="text-[10px] tracking-wider uppercase text-accent font-medium">{img.label}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Deliverables */}
                            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-light mb-4">
                                    What we built
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                    {relayDeliverables.map((b) => (
                                        <div key={b} className="flex items-center gap-3 text-sm text-foreground/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                                            {b}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://relayapp-red.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 mt-6 text-sm text-accent hover:text-accent-bright transition-colors font-medium group/link"
                                >
                                    View live project
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover/link:translate-x-0.5 transition-transform">
                                        <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Lofin logo (wordmark) ───────────────────────── */
function LofinLogo({ className = '' }) {
    return (
        <svg viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <text x="0" y="50" fontSize="55" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" fill="currentColor" letterSpacing="-2">Lofin</text>
        </svg>
    );
}

/* ─── Lofin showcase data ─────────────────────────── */
const lofinImages = [
    { src: '/work/lofin-hero.png', label: 'Landing Page' },
    { src: '/work/lofin-features.png', label: 'Features' },
];

const lofinDeliverables = [
    'AI-powered bookkeeping engine',
    'Natural language financial chat',
    'Receipt & invoice scanning (OCR)',
    'Bank statement import & parsing',
    'Automated expense categorisation',
    'Landing page & brand identity',
];

const lofinTags = ['AI Fintech', 'Chat Interface', 'OCR', 'Brand & Landing'];

/* ─── Lofin expandable card ───────────────────────── */
function LofinCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden cursor-pointer group rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Card face — filled square, blue-tinted */}
            <div className="aspect-square relative overflow-hidden bg-[#E8EFF8] transition-colors duration-500 group-hover:bg-[#DCE6F3]">
                {/* Logo — always visible, scale + glow on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group-hover:scale-[1.15] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:drop-shadow-[0_0_20px_rgba(0,124,255,0.3)]">
                        <img src="/work/download.svg" alt="Lofin" className="w-28 sm:w-36 h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between">
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground/90 mb-1">
                            Lofin
                        </h3>
                        <div className="flex flex-wrap gap-1.5 max-w-[200px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">AI</span>
                            <span className="text-[9px] text-foreground/30">·</span>
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">Fintech</span>
                            <span className="text-[9px] text-foreground/30">·</span>
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">SaaS</span>
                        </div>
                    </div>

                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/40 group-hover:opacity-0 group-hover:rotate-90 transition-all duration-300 absolute">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/60 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute">
                            <path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="bg-[#E8EFF8] border-t border-foreground/[0.06]">
                            {/* Tags */}
                            <div className="px-6 sm:px-8 pt-5 pb-4 flex flex-wrap gap-2">
                                {lofinTags.map((tag) => (
                                    <span key={tag} className="text-[10px] tracking-wider uppercase text-[#1A8CFF] bg-[#1A8CFF]/[0.06] border border-[#1A8CFF]/10 rounded-full px-3 py-1 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Screenshots */}
                            <div className="px-4 sm:px-6 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {lofinImages.map((img, i) => (
                                    <motion.a
                                        key={img.src}
                                        href="https://www.lofin.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.5 }}
                                        className="group/img relative block overflow-hidden rounded-xl border border-foreground/[0.06] hover:border-[#1A8CFF]/20 transition-all duration-500"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            width={600}
                                            height={350}
                                            className="w-full h-auto object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                            <span className="text-[10px] tracking-wider uppercase text-[#1A8CFF] font-medium">{img.label}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Deliverables */}
                            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-light mb-4">
                                    What we built
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                    {lofinDeliverables.map((b) => (
                                        <div key={b} className="flex items-center gap-3 text-sm text-foreground/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#1A8CFF]/40 shrink-0" />
                                            {b}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://www.lofin.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 mt-6 text-sm text-[#1A8CFF] hover:text-[#1470CC] transition-colors font-medium group/link"
                                >
                                    View live project
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover/link:translate-x-0.5 transition-transform">
                                        <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── TypeX showcase data ─────────────────────────── */
const typexImages = [
    { src: '/work/typex-hero.png', label: 'Landing Page' },
    { src: '/work/typex-features.png', label: 'Capabilities' },
];

const typexDeliverables = [
    'Creative tech lab branding',
    'Minimalist landing page design',
    'Full-stack website build',
    'Subscription service model',
    'WhatsApp-first client workflow',
    'Calendly booking integration',
];

const typexTags = ['Brand Identity', 'Web Design', 'Creative Agency', 'Full-stack'];

/* ─── TypeX expandable card ───────────────────────── */
function TypeXCard() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden cursor-pointer group rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Card face — warm neutral fill */}
            <div className="aspect-square relative overflow-hidden bg-[#F5F3F0] transition-colors duration-500 group-hover:bg-[#EDEBE7]">
                {/* Logo — serif "Type X" text, scale + slight lift on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group-hover:scale-[1.08] group-hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <span className="text-3xl sm:text-4xl font-serif tracking-tight text-foreground/60 group-hover:text-foreground transition-colors duration-500 select-none">
                            Type X
                        </span>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between">
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground/90 mb-1">
                            TypeX Lab
                        </h3>
                        <div className="flex flex-wrap gap-1.5 max-w-[200px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">Creative</span>
                            <span className="text-[9px] text-foreground/30">·</span>
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">Tech</span>
                            <span className="text-[9px] text-foreground/30">·</span>
                            <span className="text-[9px] tracking-wider uppercase text-foreground/50 font-medium">Lab</span>
                        </div>
                    </div>

                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/40 group-hover:opacity-0 group-hover:rotate-90 transition-all duration-300 absolute">
                            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-foreground/60 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute">
                            <path d="M6 14L14 6M14 6H8M14 6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="bg-[#F5F3F0] border-t border-foreground/[0.06]">
                            {/* Tags */}
                            <div className="px-6 sm:px-8 pt-5 pb-4 flex flex-wrap gap-2">
                                {typexTags.map((tag) => (
                                    <span key={tag} className="text-[10px] tracking-wider uppercase text-foreground/60 bg-foreground/[0.04] border border-foreground/[0.06] rounded-full px-3 py-1 font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Screenshots */}
                            <div className="px-4 sm:px-6 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {typexImages.map((img, i) => (
                                    <motion.a
                                        key={img.src}
                                        href="https://typexlab.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.5 }}
                                        className="group/img relative block overflow-hidden rounded-xl border border-foreground/[0.06] hover:border-foreground/[0.12] transition-all duration-500"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.label}
                                            width={600}
                                            height={350}
                                            className="w-full h-auto object-cover group-hover/img:scale-[1.02] transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                            <span className="text-[10px] tracking-wider uppercase text-foreground/60 font-medium">{img.label}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Deliverables */}
                            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-light mb-4">
                                    What we built
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                    {typexDeliverables.map((b) => (
                                        <div key={b} className="flex items-center gap-3 text-sm text-foreground/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                                            {b}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://typexlab.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-2 mt-6 text-sm text-foreground/70 hover:text-foreground transition-colors font-medium group/link"
                                >
                                    View live project
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover/link:translate-x-0.5 transition-transform">
                                        <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Simple card (bento style) ───────────────────── */
function SimpleCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="rounded-2xl overflow-hidden cursor-default group relative bg-[#F5F3F0] hover:bg-[#EDEBE7] transition-colors duration-500"
        >
            <div className="h-full flex flex-col p-6 sm:p-8">
                {/* Content area */}
                <div className="flex-1 flex flex-col justify-center py-4">
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-foreground/35 mb-3">
                        {project.company}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-foreground/80 group-hover:text-foreground leading-snug transition-colors duration-300">
                        {project.challenge}
                    </h3>

                    {/* Bullets — reveal on hover */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <ul className="space-y-2 mt-4">
                            {project.build.map((b) => (
                                <li key={b} className="flex items-center gap-3 text-sm text-foreground/50">
                                    <div className="w-1 h-1 rounded-full bg-foreground/20 shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-end justify-between mt-auto pt-4">
                    <div className="flex flex-wrap gap-1.5 max-w-[200px] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
                        {project.impact.map((imp) => (
                            <span key={imp} className="text-[9px] tracking-wider uppercase text-foreground/40 bg-foreground/[0.04] rounded-full px-2.5 py-1 font-medium">
                                {imp}
                            </span>
                        ))}
                    </div>

                    <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-foreground/25 group-hover:opacity-0 group-hover:rotate-90 transition-all duration-300 absolute">
                            <path d="M9 4V14M4 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-foreground/50 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute">
                            <path d="M5 13L13 5M13 5H7M13 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Work Section ────────────────────────────────── */
export default function Work() {
    const others = WORK.cases.filter((c) => !c.featured);

    return (
        <SectionWrapper id="work">
            {/* Section header */}
            <div className="mb-12 sm:mb-16">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-16 h-[2px] bg-accent origin-left mb-8"
                />
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4"
                >
                    Work
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-headline text-foreground"
                >
                    {WORK.title}
                </motion.h2>
            </div>

            {/* Grid — featured cards + others */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <RelayCard />
                <LofinCard />
                <TypeXCard />

                {/* Other project cards */}
                {others.map((c, i) => (
                    <SimpleCard key={c.company} project={c} index={i} />
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10 text-sm text-muted-light italic"
            >
                {WORK.note}
            </motion.p>
        </SectionWrapper>
    );
}
