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
    { radius: 75, dash: false, opacity: 0.06, color: 'rgba(30,64,175,0.12)' },
    { radius: 130, dash: true, opacity: 0.10, dashArray: '4 8', color: 'rgba(30,64,175,0.08)' },
    { radius: 190, dash: false, opacity: 0.07, color: 'rgba(107,33,168,0.07)' },
    { radius: 255, dash: true, opacity: 0.06, dashArray: '3 10', color: 'rgba(225,29,72,0.06)' },
    { radius: 320, dash: false, opacity: 0.04, color: 'rgba(30,64,175,0.04)' },
];

/* ─── Orbital Particle ─────────────────────────────── */
function OrbitalParticle({ radius, speed, angle, color, size = 4 }) {
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none z-10"
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 3}px ${color}`,
                top: '50%',
                left: '50%',
                marginLeft: -size / 2,
                marginTop: -size / 2,
            }}
            animate={{
                x: Array.from({ length: 60 }, (_, i) => Math.cos(((angle + i * 6) * Math.PI) / 180) * radius),
                y: Array.from({ length: 60 }, (_, i) => Math.sin(((angle + i * 6) * Math.PI) / 180) * radius),
            }}
            transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        />
    );
}

/* ─── SME Issue Card ──────────────────────────────── */
function SMECard({ data, phase }) {
    return (
        <motion.div
            className="absolute z-20"
            style={{ left: '3%', top: '50%', translateY: '-50%' }}
            initial={{ x: -160, opacity: 0, scale: 0.75 }}
            animate={
                phase === 'entering'
                    ? { x: 0, opacity: 1, scale: 1 }
                    : phase === 'connecting'
                        ? { x: 50, opacity: 1, scale: 0.97 }
                        : phase === 'merging'
                            ? { x: 150, opacity: 0, scale: 0.2 }
                            : { x: -160, opacity: 0, scale: 0.75 }
            }
            transition={{
                duration: phase === 'merging' ? 0.7 : phase === 'connecting' ? 0.6 : 0.7,
                ease: phase === 'merging' ? 'anticipate' : [0.16, 1, 0.3, 1],
            }}
        >
            <div className="relative overflow-hidden bg-white/98 backdrop-blur-2xl border border-red-200/50 rounded-2xl shadow-[0_16px_48px_rgba(220,38,38,0.12),0_4px_16px_rgba(0,0,0,0.05)] min-w-[190px]">
                {/* Header strip */}
                <div className="h-[3px] w-full bg-gradient-to-r from-red-500 via-orange-400 to-red-400" />
                {/* Subtle shimmer sweep */}
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
                            {data.issue}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 pl-[2px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        <span className="text-[9px] uppercase tracking-widest text-muted font-semibold">
                            {data.type}
                        </span>
                        <span className="ml-auto text-[9px] font-bold text-red-400 uppercase tracking-wider">Issue</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Vetted Talent Card ──────────────────────────── */
function TalentCard({ data, phase }) {
    return (
        <motion.div
            className="absolute z-20"
            style={{ right: '3%', top: '50%', translateY: '-50%' }}
            initial={{ x: 160, opacity: 0, scale: 0.75 }}
            animate={
                phase === 'entering'
                    ? { x: 0, opacity: 1, scale: 1 }
                    : phase === 'connecting'
                        ? { x: -50, opacity: 1, scale: 0.97 }
                        : phase === 'merging'
                            ? { x: -150, opacity: 0, scale: 0.2 }
                            : { x: 160, opacity: 0, scale: 0.75 }
            }
            transition={{
                duration: phase === 'merging' ? 0.7 : phase === 'connecting' ? 0.6 : 0.7,
                ease: phase === 'merging' ? 'anticipate' : [0.16, 1, 0.3, 1],
            }}
        >
            <div className="relative overflow-hidden bg-white/98 backdrop-blur-2xl border border-emerald-200/50 rounded-2xl shadow-[0_16px_48px_rgba(16,185,129,0.12),0_4px_16px_rgba(0,0,0,0.05)] min-w-[190px]">
                {/* Header strip */}
                <div className="h-[3px] w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400" />
                {/* Subtle shimmer sweep */}
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
                            {data.role}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 pl-[2px]">
                        <span className="text-[9px] uppercase tracking-widest text-muted font-medium">
                            {data.skills}
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
    );
}

/* ─── Connection Lines (SVG) ──────────────────────── */
function ConnectionLines({ phase }) {
    return (
        <svg className="absolute inset-0 w-full h-full z-15 pointer-events-none" style={{ overflow: 'visible' }}>
            {/* Left connection — SME to center */}
            <motion.line
                x1="0" y1="50%" x2="50%" y2="50%"
                stroke="url(#leftGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                    phase === 'connecting' || phase === 'merging'
                        ? { pathLength: 1, opacity: [0, 0.8, 0.6] }
                        : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            {/* Right connection — Talent to center */}
            <motion.line
                x1="100%" y1="50%" x2="50%" y2="50%"
                stroke="url(#rightGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                    phase === 'connecting' || phase === 'merging'
                        ? { pathLength: 1, opacity: [0, 0.8, 0.6] }
                        : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            />

            {/* Energy particles along left line */}
            {(phase === 'connecting' || phase === 'merging') && (
                <>
                    <motion.circle
                        r="3" fill="#DC2626"
                        initial={{ cx: '10%', cy: '50%', opacity: 0 }}
                        animate={{ cx: '48%', cy: '50%', opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.3 }}
                    />
                    <motion.circle
                        r="3" fill="#10B981"
                        initial={{ cx: '90%', cy: '50%', opacity: 0 }}
                        animate={{ cx: '52%', cy: '50%', opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.3, delay: 0.15 }}
                    />
                    <motion.circle
                        r="2" fill="#DC2626" opacity={0.4}
                        initial={{ cx: '20%', cy: '50%' }}
                        animate={{ cx: '45%', cy: '50%', opacity: [0, 0.6, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5, delay: 0.4 }}
                    />
                    <motion.circle
                        r="2" fill="#10B981" opacity={0.4}
                        initial={{ cx: '80%', cy: '50%' }}
                        animate={{ cx: '55%', cy: '50%', opacity: [0, 0.6, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5, delay: 0.5 }}
                    />
                </>
            )}

            <defs>
                <linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="rightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.8" />
                </linearGradient>
            </defs>
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
                    style={{ top: '8%' }}
                    initial={{ y: 50, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -40, opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                    <div className="relative overflow-hidden rounded-2xl">
                        {/* Glow behind card */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-xl scale-110 -z-10" />
                        <div className="flex items-center gap-3 bg-white/98 backdrop-blur-2xl border border-accent/25 px-5 py-3.5 rounded-2xl shadow-[0_20px_60px_rgba(30,64,175,0.2),0_4px_16px_rgba(0,0,0,0.06)] relative">
                            {/* Top border gradient */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-purple-500 to-accent rounded-t-2xl" />
                            {/* Shimmer */}
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

/* ─── Floating Label Tags ─────────────────────────── */
function FloatingTag({ text, icon, angle, radius, delay = 0 }) {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

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
                opacity: [0.4, 0.7, 0.4],
                scale: [0.95, 1.02, 0.95],
                y: [0, -4, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-foreground/5 px-3 py-1.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="w-5 h-5 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50">
                    {icon}
                </div>
                <span className="text-[9px] font-bold tracking-wider uppercase text-foreground/50">
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

    // Parallax mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 50, damping: 20 };
    const containerX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
    const containerY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
    const logoX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
    const logoY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

    const handleMouse = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleLeave = () => { mouseX.set(0); mouseY.set(0); };

    // Animation state
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
                // Phase 1: Idle — just rings and ambient
                setPhase('idle');
                setShowResult(false);
                await new Promise(r => setTimeout(r, 800));
                if (!isMounted) break;

                // Phase 2: Cards enter
                setPhase('entering');
                await new Promise(r => setTimeout(r, 1200));
                if (!isMounted) break;

                // Phase 3: Connection lines draw
                setPhase('connecting');
                await new Promise(r => setTimeout(r, 1400));
                if (!isMounted) break;

                // Phase 4: Merge into center
                setPhase('merging');
                await logoControls.start({
                    scale: [1, 1.25, 0.95, 1.15],
                    rotate: [0, 0, 0, 0],
                    filter: ['brightness(1)', 'brightness(1.4)', 'brightness(1.8)', 'brightness(1)'],
                    transition: { duration: 1.2, times: [0, 0.4, 0.7, 1], ease: 'easeInOut' },
                });
                if (!isMounted) break;

                // Phase 5: Show result
                setPhase('result');
                setShowResult(true);
                await new Promise(r => setTimeout(r, 2800));
                if (!isMounted) break;

                // Hide result and cycle
                setShowResult(false);
                await new Promise(r => setTimeout(r, 400));
                if (!isMounted) break;

                setCycleIndex(prev => (prev + 1) % MATCH_PAIRS.length);
            }
        };

        runSequence();
        return () => { isMounted = false; };
    }, [isInView, logoControls]);

    const currentPair = MATCH_PAIRS[cycleIndex];

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
                {/* Concentric Rings */}
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
                            transition={{ duration: 45 + i * 14, repeat: Infinity, ease: 'linear' }}
                        />
                    ))}

                    {/* Pulsing accent ring during merge — multiple waves */}
                    <AnimatePresence>
                        {(phase === 'merging' || phase === 'result') && (
                            <>
                                <motion.div
                                    className="absolute rounded-full border-2 border-accent/40"
                                    style={{ width: 200, height: 200 }}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: [0.8, 2.2, 2.8], opacity: [0.7, 0.3, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.4, ease: 'easeOut' }}
                                />
                                <motion.div
                                    className="absolute rounded-full border border-purple-400/30"
                                    style={{ width: 200, height: 200 }}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: [0.8, 3.0], opacity: [0.5, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
                                />
                            </>
                        )}
                    </AnimatePresence>

                    {/* Orbital particles */}
                    <OrbitalParticle radius={130} speed={8} angle={0} color="rgba(30,64,175,0.7)" size={5} />
                    <OrbitalParticle radius={190} speed={13} angle={120} color="rgba(107,33,168,0.6)" size={4} />
                    <OrbitalParticle radius={255} speed={18} angle={240} color="rgba(225,29,72,0.6)" size={4} />
                    <OrbitalParticle radius={130} speed={8} angle={180} color="rgba(30,64,175,0.4)" size={3} />
                </div>

                {/* Connection Lines */}
                <ConnectionLines phase={phase} />

                {/* SME Issue Card (left) */}
                <SMECard data={currentPair.sme} phase={phase} />

                {/* Talent Card (right) */}
                <TalentCard data={currentPair.talent} phase={phase} />

                {/* Match Result Card (top center) */}
                <MatchResultCard data={currentPair.result} visible={showResult} />

                {/* Floating context tags */}
                <FloatingTag
                    text="Operations"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>}
                    angle={-60}
                    radius={220}
                    delay={0}
                />
                <FloatingTag
                    text="Capital"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
                    angle={45}
                    radius={235}
                    delay={1}
                />
                <FloatingTag
                    text="Growth"
                    icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
                    angle={150}
                    radius={250}
                    delay={2}
                />

                {/* Center Core Ring */}
                <motion.div
                    className="absolute w-[130px] h-[130px] rounded-full border border-foreground/5 bg-background/70 backdrop-blur-xl z-10"
                    animate={{
                        boxShadow:
                            phase === 'merging' || phase === 'result'
                                ? ['0px 0px 40px rgba(30,64,175,0.15)', '0px 0px 80px rgba(107,33,168,0.3)', '0px 0px 40px rgba(30,64,175,0.15)']
                                : ['0px 0px 20px rgba(30,64,175,0.05)', '0px 0px 50px rgba(30,64,175,0.14)', '0px 0px 20px rgba(30,64,175,0.05)'],
                        borderColor:
                            phase === 'merging'
                                ? ['rgba(0,0,0,0.05)', 'rgba(107,33,168,0.4)', 'rgba(0,0,0,0.05)']
                                : ['rgba(0,0,0,0.05)', 'rgba(30,64,175,0.18)', 'rgba(0,0,0,0.05)'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Spinning inner ring */}
                <motion.div
                    className="absolute w-[110px] h-[110px] rounded-full z-10 pointer-events-none"
                    style={{ border: '1px dashed rgba(30,64,175,0.18)' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />

                {/* Logo Core */}
                <motion.div
                    style={{ x: logoX, y: logoY }}
                    className="will-change-transform z-20 flex items-center justify-center bg-white rounded-full w-[108px] h-[108px] shadow-[0_8px_40px_rgba(0,0,0,0.12),0_0_40px_rgba(30,64,175,0.08)] border border-foreground/5"
                    animate={logoControls}
                >
                    <Logo className="h-12 w-12 text-foreground" />

                    {/* Inner glow */}
                    <motion.div
                        className="absolute w-12 h-12 rounded-full bg-accent/20 blur-md -z-10"
                        animate={{
                            scale: phase === 'merging' ? [1, 2.5, 1] : [1, 1.5, 1],
                            opacity: phase === 'merging' ? [0.5, 1, 0.5] : [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Merge ring flash */}
                    <AnimatePresence>
                        {phase === 'merging' && (
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-accent pointer-events-none"
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, repeat: 2, ease: 'easeOut' }}
                            />
                        )}
                    </AnimatePresence>

                    {/* Matched checkmark overlay */}
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

            {/* Ambient Background Glow — multi-color */}
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
                style={{ right: '10%', bottom: '15%' }}
                animate={{
                    width: ['180px', '280px', '180px'],
                    height: ['180px', '280px', '180px'],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
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
                    <div className="hidden lg:flex items-center justify-center">
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
