'use client';

import { motion } from 'framer-motion';

export default function SegmentToggle({ segments, active, onChange }) {
    return (
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
            {segments.map((seg) => (
                <button
                    key={seg.id}
                    onClick={() => onChange(seg.id)}
                    className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                    {active === seg.id && (
                        <motion.span
                            layoutId="segment-bg"
                            className="absolute inset-0 rounded-full gradient-accent"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span
                        className={`relative z-10 ${active === seg.id ? 'text-white' : 'text-muted hover:text-foreground'
                            }`}
                    >
                        {seg.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
