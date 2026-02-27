'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import Button from './ui/Button';
import Logo from './ui/Logo';


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [logoRotation, setLogoRotation] = useState(0);
    const pathname = usePathname();
    const isCareerPage = pathname === '/careers';
    const ctaLabel = 'Get in Touch';
    const ctaHref = isCareerPage ? '/' : '#contact';

    const careerLinks = [
        { label: 'Home', href: '/' },
    ];
    const links = isCareerPage ? careerLinks : NAV_LINKS;

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setScrolled(latest > 20);
        setLogoRotation(latest * 0.18);
    });

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-background/90 backdrop-blur-xl border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 py-4">
                {/* Logo — rotates on scroll */}
                <a href="/" className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-70">
                    <motion.div
                        style={{ rotate: logoRotation }}
                        className="will-change-transform"
                    >
                        <Logo className="h-7 w-7" />
                    </motion.div>
                    Kairos
                </a>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button href={ctaHref} variant="primary" className="text-xs px-5 py-2.5">
                        {ctaLabel}
                    </Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex flex-col gap-[5px] md:hidden p-2 cursor-pointer z-50"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-[2px] w-5 bg-foreground transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block h-[2px] w-5 bg-foreground transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-[2px] w-5 bg-foreground transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </nav>

            {/* Full-screen mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center z-40"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {links.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    className="text-3xl font-heading font-bold text-foreground hover:text-accent transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: links.length * 0.06, duration: 0.4 }}
                            >
                                <Button href={ctaHref} variant="primary" className="mt-4 text-lg px-8 py-4" onClick={() => setMobileOpen(false)}>
                                    {ctaLabel}
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
