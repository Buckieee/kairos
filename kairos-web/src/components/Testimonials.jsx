'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const quotes = TESTIMONIALS.quotes;

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % quotes.length);
    }, [quotes.length]);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <SectionWrapper id="testimonials">
            <div className="text-center mb-10 sm:mb-14">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    {TESTIMONIALS.title}
                </h2>
            </div>

            <div className="mx-auto max-w-2xl text-center min-h-[180px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4 }}
                    >
                        <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed font-heading font-medium mb-6">
                            &ldquo;{quotes[current].text}&rdquo;
                        </blockquote>
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                {quotes[current].author}
                            </p>
                            <p className="text-sm text-muted">{quotes[current].company}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {quotes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current
                                    ? 'w-6 gradient-accent'
                                    : 'w-2 bg-border-hover hover:bg-muted-light'
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
