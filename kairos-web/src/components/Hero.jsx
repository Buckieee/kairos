'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { HERO } from '@/lib/constants';
import Button from './ui/Button';
import Logo from './ui/Logo';

/* ─── Icons ───────────────────────────────────────── */
const ICONS = {
    warning: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
    ),
    verified: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    check: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
    link: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    user: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
    ),
    building: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    ),
    zap: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    target: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
    ),
};

/* ─── Match Pairs ──────────────────────────────────── */
const MATCH_PAIRS = [
    {
        sme: { issue: 'Broken CRM', type: 'B2B Startup', icon: 'warning' },
        talent: { role: 'CRM Architect', skills: 'HubSpot · Salesforce', icon: 'verified' },
        result: { text: 'Revenue Pipeline Built', icon: 'check' },
    },
    {
        sme: { issue: 'Manual Workflows', type: 'Growing Agency', icon: 'warning' },
        talent: { role: 'Automation Engineer', skills: 'Zapier · Make · n8n', icon: 'verified' },
        result: { text: 'Fully Automated Ops', icon: 'zap' },
    },
    {
        sme: { issue: 'Weak Brand Identity', type: 'D2C Brand', icon: 'warning' },
        talent: { role: 'Brand Strategist', skills: 'Identity · UX · Web', icon: 'verified' },
        result: { text: 'Brand System Delivered', icon: 'target' },
    },
    {
        sme: { issue: 'Scaling Bottleneck', type: 'SaaS Company', icon: 'warning' },
        talent: { role: 'Growth Engineer', skills: 'Analytics · Funnels', icon: 'verified' },
        result: { text: 'Execution Velocity 3x', icon: 'link' },
    },
    {
        sme: { issue: 'No Tech Leadership', type: 'Early Startup', icon: 'warning' },
        talent: { role: 'Fractional CTO', skills: 'Architecture · AI', icon: 'verified' },
        result: { text: 'Technical Roadmap Set', icon: 'check' },
    },
    {
        sme: { issue: 'Data Chaos', type: 'E-commerce', icon: 'warning' },
        talent: { role: 'Data Engineer', skills: 'BigQuery · dbt', icon: 'verified' },
        result: { text: 'Unified Analytics', icon: 'target' },
    },
    {
        sme: { issue: 'Stale Leads', type: 'Marketing Agency', icon: 'warning' },
        talent: { role: 'RevOps Expert', skills: 'Apollo · Salesforce', icon: 'verified' },
        result: { text: 'Velocity Increased', icon: 'link' },
    },
    {
        sme: { issue: 'High Churn', type: 'Subscription App', icon: 'warning' },
        talent: { role: 'CX Engineer', skills: 'Zendesk · Intercom', icon: 'verified' },
        result: { text: 'Retention Optimized', icon: 'check' },
    },
    {
        sme: { issue: 'Slow Onboarding', type: 'HR Tech', icon: 'warning' },
        talent: { role: 'System Architect', skills: 'Retool · API', icon: 'verified' },
        result: { text: 'Instant Provisioning', icon: 'zap' },
    },
    {
        sme: { issue: 'Messy Financials', type: 'Finance Ops', icon: 'warning' },
        talent: { role: 'FinTech Integrator', skills: 'Stripe · QuickBooks', icon: 'verified' },
        result: { text: 'Automated Ledger', icon: 'check' },
    },
];

/* ─── Rings config ─────────────────────────────────── */
const RINGS = [
    { radius: 65, dash: false, opacity: 0.08, color: 'rgba(30,64,175,0.14)' },
    { radius: 105, dash: true, opacity: 0.10, dashArray: '4 8', color: 'rgba(30,64,175,0.10)' },
    { radius: 150, dash: false, opacity: 0.07, color: 'rgba(107,33,168,0.07)' },
];


/* ─── Hemisphere Label ─────────────────────────────── */
function HemisphereLabel({ text, side, color }) {
    const isLeft = side === 'left';
    return (
        <motion.div
            className="absolute z-30 pointer-events-none"
            style={{
                [isLeft ? 'left' : 'right']: '-8%',
                top: '8%',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
        >
            <div className="flex items-center gap-2">
                <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <span
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ color }}
                >
                    {text}
                </span>
            </div>
            <motion.div
                className="mt-1.5 h-[1px] origin-left"
                style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 1.2 }}
            />
        </motion.div>
    );
}

/* ─── Stacked Business Cards (Left) ──────────────── */
function BusinessCardStack({ pairs, activeIndex, phase }) {
    return (
        <div
            className="absolute z-20"
            style={{ left: '-2%', top: '50%', transform: 'translateY(-50%)' }}
        >
            {/* Stacked background cards for depth */}
            {[2, 1].map((offset) => {
                const idx = (activeIndex + offset) % pairs.length;
                return (
                    <motion.div
                        key={`bg-biz-${offset}-${idx}`}
                        className="absolute"
                        style={{
                            top: offset * 6,
                            left: offset * 4,
                            zIndex: 10 - offset,
                        }}
                        animate={{
                            opacity: phase === 'idle' ? 0 : 0.3 + (0.2 * (2 - offset)),
                            scale: 1 - offset * 0.05,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white/60 backdrop-blur-sm border border-red-100/30 rounded-2xl shadow-sm min-w-[185px] h-[82px]" />
                    </motion.div>
                );
            })}

            {/* Active card */}
            <motion.div
                key={`biz-active-${activeIndex}`}
                className="relative z-20"
                initial={{ x: -140, opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={
                    phase === 'entering'
                        ? { x: 0, opacity: 1, scale: 1, rotateY: 0 }
                        : phase === 'connecting'
                            ? { x: 30, opacity: 1, scale: 0.98, rotateY: 0 }
                            : phase === 'merging'
                                ? { x: 120, opacity: 0, scale: 0.3, rotateY: 10 }
                                : { x: -140, opacity: 0, scale: 0.8, rotateY: -15 }
                }
                transition={{
                    duration: phase === 'merging' ? 0.8 : 0.7,
                    ease: phase === 'merging' ? 'anticipate' : [0.16, 1, 0.3, 1],
                }}
            >
                <div className="relative overflow-hidden bg-white/98 backdrop-blur-2xl border border-red-200/50 rounded-2xl shadow-[0_16px_48px_rgba(220,38,38,0.12),0_4px_16px_rgba(0,0,0,0.05)] min-w-[185px]">
                    <div className="h-[3px] w-full bg-gradient-to-r from-red-500 via-orange-400 to-red-400" />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/40 to-transparent pointer-events-none"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <div className="px-4 py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 flex items-center justify-center text-red-500 flex-shrink-0 shadow-sm">
                                {ICONS.warning}
                            </div>
                            <span className="text-[12px] font-extrabold uppercase tracking-wider text-foreground leading-tight">
                                {pairs[activeIndex].sme.issue}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 pl-[2px]">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                            <span className="text-[9px] uppercase tracking-widest text-muted font-semibold">
                                {pairs[activeIndex].sme.type}
                            </span>
                            <span className="ml-auto text-[9px] font-bold text-red-400 uppercase tracking-wider">Issue</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

/* ─── Stacked Talent Cards (Right) ───────────────── */
function TalentCardStack({ pairs, activeIndex, phase }) {
    return (
        <div
            className="absolute z-20"
            style={{ right: '-2%', top: '50%', transform: 'translateY(-50%)' }}
        >
            {/* Stacked background cards for depth */}
            {[2, 1].map((offset) => {
                const idx = (activeIndex + offset) % pairs.length;
                return (
                    <motion.div
                        key={`bg-tal-${offset}-${idx}`}
                        className="absolute"
                        style={{
                            top: offset * 6,
                            right: offset * 4,
                            zIndex: 10 - offset,
                        }}
                        animate={{
                            opacity: phase === 'idle' ? 0 : 0.3 + (0.2 * (2 - offset)),
                            scale: 1 - offset * 0.05,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white/60 backdrop-blur-sm border border-emerald-100/30 rounded-2xl shadow-sm min-w-[185px] h-[95px]" />
                    </motion.div>
                );
            })}

            {/* Active card */}
            <motion.div
                key={`tal-active-${activeIndex}`}
                className="relative z-20"
                initial={{ x: 140, opacity: 0, scale: 0.8, rotateY: 15 }}
                animate={
                    phase === 'entering'
                        ? { x: 0, opacity: 1, scale: 1, rotateY: 0 }
                        : phase === 'connecting'
                            ? { x: -30, opacity: 1, scale: 0.98, rotateY: 0 }
                            : phase === 'merging'
                                ? { x: -120, opacity: 0, scale: 0.3, rotateY: -10 }
                                : { x: 140, opacity: 0, scale: 0.8, rotateY: 15 }
                }
                transition={{
                    duration: phase === 'merging' ? 0.8 : 0.7,
                    ease: phase === 'merging' ? 'anticipate' : [0.16, 1, 0.3, 1],
                }}
            >
                <div className="relative overflow-hidden bg-white/98 backdrop-blur-2xl border border-emerald-200/50 rounded-2xl shadow-[0_16px_48px_rgba(16,185,129,0.12),0_4px_16px_rgba(0,0,0,0.05)] min-w-[185px]">
                    <div className="h-[3px] w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400" />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/40 to-transparent pointer-events-none"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
                    />
                    <div className="px-4 py-3 flex flex-col gap-2">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
                                {ICONS.user}
                            </div>
                            <span className="text-[12px] font-extrabold uppercase tracking-wider text-foreground leading-tight">
                                {pairs[activeIndex].talent.role}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 pl-[2px]">
                            <span className="text-[9px] uppercase tracking-widest text-muted font-medium">
                                {pairs[activeIndex].talent.skills}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 pl-[2px]">
                            <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-200/60 rounded-full px-2 py-0.5">
                                <div className="text-emerald-500">{ICONS.verified}</div>
                                <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-600">Vetted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

/* ─── Curved Connection Bridge (SVG) ─────────────── */
function CurvedBridge({ phase }) {
    const showBridge = phase === 'connecting' || phase === 'merging';
    return (
        <svg className="absolute inset-0 w-full h-full z-15 pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient id="leftCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="rightCurveGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Left curved path — Business to center */}
            <motion.path
                d="M 60,200 C 140,200 160,200 200,200"
                stroke="url(#leftCurveGrad)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 4"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                    showBridge
                        ? { pathLength: 1, opacity: [0, 0.9, 0.7] }
                        : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.9, ease: 'easeOut' }}
            />
            {/* Right curved path — Talent to center */}
            <motion.path
                d="M 340,200 C 260,200 240,200 200,200"
                stroke="url(#rightCurveGrad)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6 4"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                    showBridge
                        ? { pathLength: 1, opacity: [0, 0.9, 0.7] }
                        : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            />

            {/* Animated energy particles along paths */}
            {showBridge && (
                <>
                    {/* Red particles — left to center */}
                    <motion.circle
                        r="4" fill="#DC2626" filter="url(#glow)"
                        initial={{ cx: '8%', cy: '50%', opacity: 0 }}
                        animate={{ cx: '48%', cy: '50%', opacity: [0, 1, 0.8, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.2 }}
                    />
                    <motion.circle
                        r="2.5" fill="#F87171" opacity={0.6}
                        initial={{ cx: '15%', cy: '50%' }}
                        animate={{ cx: '46%', cy: '50%', opacity: [0, 0.7, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.4, delay: 0.3 }}
                    />
                    <motion.circle
                        r="1.5" fill="#FCA5A5" opacity={0.4}
                        initial={{ cx: '22%', cy: '50%' }}
                        animate={{ cx: '44%', cy: '50%', opacity: [0, 0.5, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.6, delay: 0.6 }}
                    />

                    {/* Green particles — right to center */}
                    <motion.circle
                        r="4" fill="#10B981" filter="url(#glow)"
                        initial={{ cx: '92%', cy: '50%', opacity: 0 }}
                        animate={{ cx: '52%', cy: '50%', opacity: [0, 1, 0.8, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.2, delay: 0.15 }}
                    />
                    <motion.circle
                        r="2.5" fill="#34D399" opacity={0.6}
                        initial={{ cx: '85%', cy: '50%' }}
                        animate={{ cx: '54%', cy: '50%', opacity: [0, 0.7, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.4, delay: 0.45 }}
                    />
                    <motion.circle
                        r="1.5" fill="#6EE7B7" opacity={0.4}
                        initial={{ cx: '78%', cy: '50%' }}
                        animate={{ cx: '56%', cy: '50%', opacity: [0, 0.5, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 0.6, delay: 0.7 }}
                    />
                </>
            )}
        </svg>
    );
}

/* ─── Match Result Card ───────────────────────────── */
function MatchResultCard({ data, visible }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="absolute z-30 left-1/2 -translate-x-1/2"
                    style={{ top: '5%' }}
                    initial={{ y: 60, opacity: 0, scale: 0.3 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -50, opacity: 0, scale: 0.7 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-xl scale-125 -z-10" />
                        <div className="flex items-center gap-3 bg-white/98 backdrop-blur-2xl border border-accent/25 px-5 py-3.5 rounded-2xl shadow-[0_20px_60px_rgba(30,64,175,0.2),0_4px_16px_rgba(0,0,0,0.06)] relative">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-purple-500 to-accent rounded-t-2xl" />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/6 to-transparent pointer-events-none"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.8 }}
                            />
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent/15 to-purple-500/15 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                <motion.div
                                    animate={{ scale: [1, 1.25, 1], rotate: [0, 5, 0] }}
                                    transition={{ duration: 1.8, repeat: Infinity }}
                                >
                                    {ICONS[data.icon] || ICONS.check}
                                </motion.div>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-accent/70">✦ Matched</span>
                                <span className="text-[13px] font-extrabold uppercase tracking-wide text-foreground whitespace-nowrap">
                                    {data.text}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ─── Side Floating Tags ──────────────────────────── */
function SideFloatingTag({ text, icon, x, y, delay = 0, color }) {
    return (
        <motion.div
            className="absolute z-10 pointer-events-none"
            style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0.4, 0.75, 0.4],
                scale: [0.95, 1.03, 0.95],
                y: [0, -5, 0],
            }}
            transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        >
            <div className="flex items-center gap-2 bg-white/85 backdrop-blur-md border border-foreground/5 px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${color}15`, color }}
                >
                    {icon}
                </div>
                <span className="text-[9px] font-bold tracking-wider uppercase" style={{ color }}>
                    {text}
                </span>
            </div>
        </motion.div>
    );
}
/* ─── Abstract Matching Visual ─────────────────────── */
function AbstractVisual() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
    const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 50, damping: 20 };
    const containerX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
    const containerY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);
    const logoX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
    const logoY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

    const handleMouse = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleLeave = () => { mouseX.set(0); mouseY.set(0); };

    const isInView = useInView(ref, { once: false, margin: '0px' });
    const [phase, setPhase] = useState('idle');
    const [cycleIndex, setCycleIndex] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const logoControls = useAnimation();

    useEffect(() => {
        if (!isInView) return;
        let isMounted = true;

        const runSequence = async () => {
            while (isMounted) {
                setPhase('idle');
                setShowResult(false);
                await new Promise(r => setTimeout(r, 900));
                if (!isMounted) break;

                setPhase('entering');
                await new Promise(r => setTimeout(r, 1300));
                if (!isMounted) break;

                setPhase('connecting');
                await new Promise(r => setTimeout(r, 1500));
                if (!isMounted) break;

                setPhase('merging');
                await logoControls.start({
                    scale: [1, 1.3, 0.9, 1.18],
                    rotate: [0, 0, 0, 0],
                    filter: ['brightness(1)', 'brightness(1.5)', 'brightness(2)', 'brightness(1)'],
                    transition: { duration: 1.3, times: [0, 0.4, 0.7, 1], ease: 'easeInOut' },
                });
                if (!isMounted) break;

                setPhase('result');
                setShowResult(true);
                await new Promise(r => setTimeout(r, 3000));
                if (!isMounted) break;

                setShowResult(false);
                await new Promise(r => setTimeout(r, 500));
                if (!isMounted) break;

                setCycleIndex(prev => (prev + 1) % MATCH_PAIRS.length);
            }
        };

        runSequence();
        return () => { isMounted = false; };
    }, [isInView, logoControls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[620px] lg:h-[620px] xl:w-[680px] xl:h-[680px] cursor-default"
            style={{ scale, opacity }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
        >
            <motion.div
                style={{ x: containerX, y: containerY }}
                className="absolute inset-0 flex items-center justify-center scale-[0.55] sm:scale-[0.7] lg:scale-100 xl:scale-105"
            >
                {/* ── Hemisphere Labels ── */}
                <HemisphereLabel text="Businesses" side="left" color="#DC2626" />
                <HemisphereLabel text="Talent" side="right" color="#10B981" />

                {/* ── Left Side Ambient Glow ── */}
                <motion.div
                    className="absolute rounded-full pointer-events-none -z-5"
                    style={{ left: '5%', top: '30%' }}
                    animate={{
                        width: ['140px', '200px', '140px'],
                        height: ['140px', '200px', '140px'],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400/15 via-orange-300/10 to-transparent blur-[60px]" />
                </motion.div>

                {/* ── Right Side Ambient Glow ── */}
                <motion.div
                    className="absolute rounded-full pointer-events-none -z-5"
                    style={{ right: '5%', top: '30%' }}
                    animate={{
                        width: ['140px', '200px', '140px'],
                        height: ['140px', '200px', '140px'],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                >
                    <div className="w-full h-full rounded-full bg-gradient-to-bl from-emerald-400/15 via-teal-300/10 to-transparent blur-[60px]" />
                </motion.div>

                {/* ── Vertical Divider (subtle center line) ── */}
                <motion.div
                    className="absolute w-[1px] h-[70%] pointer-events-none z-0"
                    style={{
                        left: '50%',
                        top: '15%',
                        background: 'linear-gradient(180deg, transparent, rgba(30,64,175,0.08), transparent)',
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* ── Concentric Rings (center) ── */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {RINGS.map((ring, i) => (
                        <motion.div
                            key={`ring-${i}`}
                            className="absolute rounded-full"
                            style={{
                                width: ring.radius * 2,
                                height: ring.radius * 2,
                                border: `1.5px ${ring.dash ? 'dashed' : 'solid'} ${ring.color || 'rgba(0,0,0,0.08)'}`,
                                opacity: ring.opacity,
                            }}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 35 + i * 14, repeat: Infinity, ease: 'linear' }}
                        />
                    ))}

                    {/* Shockwave ripples during merge */}
                    <AnimatePresence>
                        {(phase === 'merging' || phase === 'result') && (
                            <>
                                <motion.div
                                    className="absolute rounded-full border-2 border-accent/50"
                                    style={{ width: 140, height: 140 }}
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: [0.6, 2.5, 3.5], opacity: [0.8, 0.3, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: 'easeOut' }}
                                />
                                <motion.div
                                    className="absolute rounded-full border border-purple-400/30"
                                    style={{ width: 140, height: 140 }}
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: [0.6, 3.5], opacity: [0.5, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.8, ease: 'easeOut', delay: 0.2 }}
                                />
                                <motion.div
                                    className="absolute rounded-full border border-red-300/20"
                                    style={{ width: 140, height: 140 }}
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: [0.6, 4.0], opacity: [0.3, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2.2, ease: 'easeOut', delay: 0.4 }}
                                />
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── Curved Connection Bridge ── */}
                <CurvedBridge phase={phase} />

                {/* ── Business Card Stack (left) ── */}
                <BusinessCardStack pairs={MATCH_PAIRS} activeIndex={cycleIndex} phase={phase} />

                {/* ── Talent Card Stack (right) ── */}
                <TalentCardStack pairs={MATCH_PAIRS} activeIndex={cycleIndex} phase={phase} />

                {/* ── Match Result Card (top center) ── */}
                <MatchResultCard data={MATCH_PAIRS[cycleIndex].result} visible={showResult} />

                {/* ── Side Floating Tags ── */}
                {/* Business side tags */}
                <SideFloatingTag
                    text="Operations"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>}
                    x={-180}
                    y={-100}
                    delay={0}
                    color="#DC2626"
                />
                <SideFloatingTag
                    text="Growth"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
                    x={-200}
                    y={100}
                    delay={1.5}
                    color="#DC2626"
                />

                {/* Talent side tags */}
                <SideFloatingTag
                    text="Capital"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                    x={180}
                    y={-100}
                    delay={0.8}
                    color="#10B981"
                />
                <SideFloatingTag
                    text="Expertise"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>}
                    x={200}
                    y={100}
                    delay={2}
                    color="#10B981"
                />

                {/* ── Center Core Ring ── */}
                <motion.div
                    className="absolute w-[110px] h-[110px] rounded-full border border-foreground/5 bg-background/70 backdrop-blur-xl z-10"
                    animate={{
                        boxShadow:
                            phase === 'merging' || phase === 'result'
                                ? ['0px 0px 40px rgba(30,64,175,0.15)', '0px 0px 100px rgba(107,33,168,0.35)', '0px 0px 40px rgba(30,64,175,0.15)']
                                : ['0px 0px 20px rgba(30,64,175,0.05)', '0px 0px 50px rgba(30,64,175,0.14)', '0px 0px 20px rgba(30,64,175,0.05)'],
                        borderColor:
                            phase === 'merging'
                                ? ['rgba(0,0,0,0.05)', 'rgba(107,33,168,0.5)', 'rgba(0,0,0,0.05)']
                                : ['rgba(0,0,0,0.05)', 'rgba(30,64,175,0.18)', 'rgba(0,0,0,0.05)'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Spinning inner ring */}
                <motion.div
                    className="absolute w-[92px] h-[92px] rounded-full z-10 pointer-events-none"
                    style={{ border: '1px dashed rgba(30,64,175,0.18)' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />

                {/* ── Logo Core ── */}
                <motion.div
                    style={{ x: logoX, y: logoY }}
                    className="will-change-transform z-20 flex items-center justify-center bg-white rounded-full w-[90px] h-[90px] shadow-[0_8px_40px_rgba(0,0,0,0.12),0_0_40px_rgba(30,64,175,0.08)] border border-foreground/5"
                    animate={logoControls}
                >
                    <Logo className="h-10 w-10 text-foreground" />

                    {/* Inner glow */}
                    <motion.div
                        className="absolute w-10 h-10 rounded-full bg-accent/20 blur-md -z-10"
                        animate={{
                            scale: phase === 'merging' ? [1, 3, 1] : [1, 1.5, 1],
                            opacity: phase === 'merging' ? [0.5, 1, 0.5] : [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Merge ring flash */}
                    <AnimatePresence>
                        {phase === 'merging' && (
                            <>
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-accent pointer-events-none"
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={{ scale: [1, 2.0], opacity: [0.9, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, repeat: 3, ease: 'easeOut' }}
                                />
                                <motion.div
                                    className="absolute inset-0 rounded-full border border-red-400/50 pointer-events-none"
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, repeat: 2, ease: 'easeOut', delay: 0.15 }}
                                />
                            </>
                        )}
                    </AnimatePresence>

                    {/* Matched badge */}
                    <AnimatePresence>
                        {phase === 'result' && (
                            <motion.div
                                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white shadow-lg"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            >
                                {ICONS.check}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            {/* ── Background ambient glows ── */}
            <motion.div
                style={{ x: containerX, y: containerY }}
                className="absolute rounded-full bg-gradient-to-br from-accent/[0.10] via-purple-500/[0.05] to-transparent blur-[120px] -z-10"
                animate={{
                    width: ['280px', '420px', '280px'],
                    height: ['280px', '420px', '280px'],
                    opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute rounded-full bg-gradient-to-tl from-red-500/[0.05] via-transparent to-transparent blur-[100px] -z-10"
                style={{ left: '5%', bottom: '20%' }}
                animate={{
                    width: ['120px', '200px', '120px'],
                    height: ['120px', '200px', '120px'],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
                className="absolute rounded-full bg-gradient-to-tr from-emerald-500/[0.05] via-transparent to-transparent blur-[100px] -z-10"
                style={{ right: '5%', bottom: '20%' }}
                animate={{
                    width: ['120px', '200px', '120px'],
                    height: ['120px', '200px', '120px'],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
            />
        </motion.div>
    );
}


/* ─── Hero Section ────────────────────────────────── */
export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    // Changing action words
    const actionWords = ['powers', 'manages', 'optimizes', 'builds', 'scales', 'markets'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % actionWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Massive watermark K */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="pointer-events-none absolute -right-[10%] top-[5%] select-none"
            >
                <span className="text-[40vw] font-heading font-bold text-foreground/[0.015] leading-none block">
                    K
                </span>
            </motion.div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center min-h-screen py-24">
                    {/* Left — Copy */}
                    <motion.div style={{ y: textY }}>
                        {/* Animated line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-16 h-[2px] bg-[#E11D48] origin-left mb-8"
                        />

                        {/* Overline */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-xs uppercase tracking-[0.35em] text-muted font-medium mb-10"
                        >
                            Kairos Studio
                        </motion.p>

                        {/* Main headline */}
                        <h1 className="text-display max-w-3xl text-foreground">
                            <span className="block overflow-hidden pb-1">
                                <motion.span
                                    initial={{ y: '120%', opacity: 0 }}
                                    animate={{ y: '0%', opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block mr-[0.3em]"
                                >
                                    The talent that
                                </motion.span>
                            </span>

                            <span className="block overflow-hidden relative h-[1.1em] mb-1">
                                <AnimatePresence>
                                    <motion.span
                                        key={actionWords[currentWordIndex]}
                                        initial={{ y: '100%', opacity: 0 }}
                                        animate={{ y: '0%', opacity: 1 }}
                                        exit={{ y: '-100%', opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute left-0 top-0 text-accent font-bold"
                                    >
                                        {actionWords[currentWordIndex]}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="opacity-0 pointer-events-none select-none font-bold">
                                    optimizes
                                </span>
                            </span>

                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: '120%', opacity: 0 }}
                                    animate={{ y: '0%', opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block text-foreground"
                                >
                                    your business
                                </motion.span>
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.7 }}
                            className="mt-10 text-lg sm:text-xl text-muted max-w-lg leading-relaxed"
                        >
                            {HERO.subheadline}
                        </motion.p>

                        {/* Third Heading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.7 }}
                            className="mt-4 text-base sm:text-lg text-muted-light max-w-lg font-medium"
                        >
                            {HERO.microline}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7, duration: 0.6 }}
                            className="mt-12 flex flex-wrap gap-4"
                        >
                            <Button href="#contact" variant="primary">
                                Book a Discovery Call
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right — Matching Visual */}
                    <div className="flex items-center justify-center mt-12 lg:mt-0 opacity-80 sm:opacity-100 scale-90 sm:scale-100">
                        <AbstractVisual />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2 text-muted"
                >
                    <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
                    <div className="w-px h-8 bg-foreground/20" />
                </motion.div>
            </motion.div>
        </section>
    );
}
