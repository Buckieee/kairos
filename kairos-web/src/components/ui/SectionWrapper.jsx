'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { trackSectionTime } from '@/lib/analytics';

export default function SectionWrapper({
    children,
    id,
    className = '',
    delay = 0,
}) {
    const ref = useRef(null);
    // For original reveal animation (only once)
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    // For tracking ongoing visibility
    const isCurrentlyInView = useInView(ref, { margin: '-80px' });

    useEffect(() => {
        if (!id) return; // Only track sections with an ID

        let startTime;
        if (isCurrentlyInView) {
            startTime = Date.now();
        }

        return () => {
            if (startTime) {
                const duration = Math.round((Date.now() - startTime) / 1000);
                if (duration > 1) { // Only track if viewed for more than 1 second
                    trackSectionTime(id, duration);
                }
            }
        };
    }, [isCurrentlyInView, id]);

    return (
        <section
            id={id}
            ref={ref}
            className={`section-padding ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                    duration: 0.7,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="mx-auto max-w-6xl px-5 sm:px-8"
            >
                {children}
            </motion.div>
        </section>
    );
}
