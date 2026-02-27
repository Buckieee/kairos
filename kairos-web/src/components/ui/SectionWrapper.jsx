'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionWrapper({
    children,
    id,
    className = '',
    delay = 0,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

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
