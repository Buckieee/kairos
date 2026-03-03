'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function StickyCTA({ href = '#apply', label = 'Apply Now', className = '' }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Show after scrolling 300px and hide near bottom
            if (scrollPosition > 300 && scrollPosition < documentHeight - windowHeight - 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 ${className} ${!isVisible ? 'pointer-events-none' : ''}`}
        >
            <div
                className="bg-card border border-border shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-full px-6 py-3 flex items-center gap-4 backdrop-blur-sm"
                aria-label="Apply to Kairos"
            >
                <span className="text-sm font-medium text-foreground hidden sm:inline">
                    Ready to join?
                </span>
                <Button href={href} variant="primary" className="whitespace-nowrap">
                    {label}
                </Button>
            </div>
        </motion.div>
    );
}
