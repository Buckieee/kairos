'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { HERO } from '@/lib/constants';
import Button from './ui/Button';
import Logo from './ui/Logo';

/* ─── Staggered word reveal ───────────────────────── */
function RevealLine({ text, delay = 0, className = "" }) {
    const words = text.split(' ');
    return (
        <span className={`block overflow-hidden ${className}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ y: '120%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                        delay: delay + i * 0.06,
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

/* ─── Abstract composition — Ecosystem Orbit ───────── */
const NODES = [
    {
        id: 1,
        text: 'Top Talent',
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
        radius: 130,
        orbitDur: 18,
        cycleDur: 7,
        angle: 0,
        dir: 1,
        isAccent: true
    },
    {
        id: 2,
        text: 'Startup Idea',
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
        radius: 170,
        orbitDur: 24,
        cycleDur: 9,
        angle: 70,
        dir: -1,
        isAccent: false
    },
    {
        id: 3,
        text: 'Capital',
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
        radius: 110,
        orbitDur: 14,
        cycleDur: 6.5,
        angle: 140,
        dir: 1,
        isAccent: true
    },
    {
        id: 4,
        text: 'Scaling SME',
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
        radius: 155,
        orbitDur: 20,
        cycleDur: 8.5,
        angle: 210,
        dir: -1,
        isAccent: false
    },
    {
        id: 5,
        text: 'Operations',
        icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
        radius: 185,
        orbitDur: 28,
        cycleDur: 11,
        angle: 280,
        dir: 1,
        isAccent: true
    }
];

function AbstractVisual() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
    const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

    // Mouse tracking for parallax of the whole container
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

    const handleLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] cursor-default"
            style={{ scale, opacity }}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
        >
            <motion.div style={{ x: containerX, y: containerY }} className="absolute inset-0 flex items-center justify-center">

                {/* Background radar/circles */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm" viewBox="0 0 400 400" fill="none">
                        <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" className="text-foreground/[0.04]" strokeDasharray="1 6" />
                        <circle cx="200" cy="200" r="155" stroke="currentColor" strokeWidth="1.5" className="text-foreground/[0.03]" />
                        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" className="text-accent/[0.06]" strokeDasharray="3 5" />
                        <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" className="text-accent/[0.12]" />
                    </svg>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                        className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border border-foreground/[0.05] border-dashed"
                    />
                </div>

                {/* Animated Ecosystem Nodes */}
                {NODES.map((node) => {
                    const nodeColor = node.isAccent ? "text-accent" : "text-foreground";
                    const nodeBg = node.isAccent ? "bg-accent" : "bg-foreground";
                    const nodeBorder = node.isAccent ? "border-accent/20" : "border-foreground/10";
                    const nodeShadow = node.isAccent ? "shadow-[0_0_20px_rgba(108,103,245,0.2)]" : "shadow-[0_0_15px_rgba(0,0,0,0.1)]";
                    const hitTime = 0.85; // % of cycle when it hits center

                    return (
                        <motion.div
                            key={node.id}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                            animate={{ rotate: [node.angle, node.angle + 360 * node.dir] }}
                            transition={{ duration: node.orbitDur, repeat: Infinity, ease: 'linear' }}
                        >
                            <motion.div
                                className="absolute flex items-center justify-center origin-left"
                                animate={{
                                    x: [node.radius, node.radius, node.radius, 0, 0],
                                    opacity: [0, 1, 1, 0, 0],
                                    scale: [0.6, 1, 1, 0.4, 0]
                                }}
                                transition={{
                                    duration: node.cycleDur,
                                    times: [0, 0.15, hitTime - 0.15, hitTime, 1],
                                    repeat: Infinity,
                                    ease: ["easeOut", "linear", "easeIn", "easeOut"]
                                }}
                            >
                                {/* Energy connection line snapping to center right before impact */}
                                <motion.div
                                    className={`absolute left-0 h-[1px] ${node.isAccent ? 'bg-gradient-to-r from-accent/0 via-accent/50 to-accent' : 'bg-gradient-to-r from-foreground/0 via-foreground/20 to-foreground'} origin-left z-0`}
                                    animate={{
                                        width: [0, 0, node.radius * 0.8, 0, 0],
                                        opacity: [0, 0, 1, 0, 0],
                                        left: [0, 0, -node.radius * 0.8, 0, 0]
                                    }}
                                    transition={{ duration: node.cycleDur, times: [0, hitTime - 0.2, hitTime - 0.05, hitTime, 1], repeat: Infinity, ease: "easeIn" }}
                                />

                                {/* The Pill itself with counter-rotation */}
                                <motion.div
                                    className={`flex flex-row items-center gap-2.5 bg-background/80 backdrop-blur-xl border ${nodeBorder} pl-2 pr-3 py-1.5 rounded-full shadow-lg ${nodeShadow} z-10 relative`}
                                    animate={{ rotate: [-node.angle, -(node.angle + 360 * node.dir)] }}
                                    transition={{ duration: node.orbitDur, repeat: Infinity, ease: 'linear' }}
                                >
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${nodeBg} text-background shadow-inner`}>
                                        {node.icon}
                                    </div>
                                    <span className={`text-[11px] font-bold tracking-wider uppercase pt-[1px] ${nodeColor}`}>
                                        {node.text}
                                    </span>
                                </motion.div>

                                {/* Micro-Shockwave that triggers right at impact */}
                                <motion.div
                                    className={`absolute w-12 h-12 rounded-full border ${nodeColor === 'text-accent' ? 'border-accent/80' : 'border-foreground/50'} z-0`}
                                    animate={{
                                        scale: [0, 0, 0, 3, 3],
                                        opacity: [0, 0, 0, 0.6, 0],
                                        borderWidth: ['1px', '1px', '1px', '3px', '0px']
                                    }}
                                    transition={{ duration: node.cycleDur, times: [0, hitTime - 0.01, hitTime, hitTime + 0.1, 1], repeat: Infinity, ease: "easeOut" }}
                                />
                                <motion.div
                                    className={`absolute w-10 h-10 rounded-full ${nodeBg} z-0 blur-lg`}
                                    animate={{
                                        scale: [0, 0, 0, 3.5, 3.5],
                                        opacity: [0, 0, 0, 0.5, 0],
                                    }}
                                    transition={{ duration: node.cycleDur, times: [0, hitTime - 0.01, hitTime, hitTime + 0.1, 1], repeat: Infinity, ease: "easeOut" }}
                                />
                            </motion.div>
                        </motion.div>
                    );
                })}

                {/* Center Core/Shield ring */}
                <motion.div
                    className="absolute w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full border border-foreground/5 bg-background/60 backdrop-blur-lg z-10"
                    animate={{
                        boxShadow: ['0px 0px 20px rgba(108,103,245,0.05)', '0px 0px 50px rgba(108,103,245,0.15)', '0px 0px 20px rgba(108,103,245,0.05)'],
                        borderColor: ['rgba(0,0,0,0.05)', 'rgba(108,103,245,0.2)', 'rgba(0,0,0,0.05)']
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo — Pulsing core */}
                <motion.div
                    style={{ x: logoX, y: logoY }}
                    className="will-change-transform z-20 flex items-center justify-center"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Logo className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-foreground drop-shadow-lg" />

                    {/* Inner glowing eye */}
                    <motion.div
                        className="absolute w-6 h-6 rounded-full bg-accent/20 blur-md -z-10"
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

            </motion.div>

            {/* Ambient Background Glow */}
            <motion.div
                style={{ x: containerX, y: containerY }}
                className="absolute rounded-full bg-gradient-to-br from-accent/[0.15] via-foreground/[0.03] to-transparent blur-[80px] -z-10"
                animate={{
                    width: ['200px', '280px', '200px'],
                    height: ['200px', '280px', '200px'],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Secondary Accent Glow */}
            <motion.div
                style={{ x: containerY, y: containerX }} // Opposite parallax for depth
                className="absolute rounded-full bg-gradient-to-tl from-warm/[0.1] via-accent/[0.05] to-transparent blur-[60px] -z-10"
                animate={{
                    width: ['150px', '220px', '150px'],
                    height: ['150px', '220px', '150px'],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
    const actionWords = ["powers", "manages", "optimizes", "builds", "scales", "markets"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % actionWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
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
                            className="w-16 h-[2px] bg-foreground origin-left mb-8"
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

                        {/* Main headline — MASSIVE */}
                        <h1 className="text-display max-w-3xl text-foreground">
                            <span className="block overflow-hidden pb-1">
                                <motion.span
                                    initial={{ y: '120%', opacity: 0 }}
                                    animate={{ y: '0%', opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block mr-[0.3em]"
                                >
                                    The studio that
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
                                {/* Invisible placeholder for exact line height */}
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

                    {/* Right — Logo Orb (bigger) */}
                    <div className="hidden lg:flex items-center justify-center">
                        <AbstractVisual />
                    </div>
                </div>
            </div>

            {/* Scroll indicator — bottom center */}
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
