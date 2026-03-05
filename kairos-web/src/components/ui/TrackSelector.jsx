'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SegmentToggle from './SegmentToggle';

export default function TrackSelector({ tracks, onTrackChange, className = '' }) {
    const [activeTrack, setActiveTrack] = useState(tracks[0]?.id || null);

    const handleChange = (trackId) => {
        setActiveTrack(trackId);
        if (onTrackChange) onTrackChange(trackId);
    };

    const currentTrack = tracks.find((t) => t.id === activeTrack) || tracks[0];

    const segments = tracks.map((track) => ({
        id: track.id,
        label: track.title,
    }));

    return (
        <div className={className}>
            <div className="mb-8 w-full max-w-[100vw] overflow-x-auto scrollbar-none smooth-scroll">
                <div className="min-w-max pb-2">
                    <SegmentToggle
                        segments={segments}
                        active={activeTrack}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <motion.div
                key={activeTrack}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                role="tabpanel"
                id={`track-panel-${activeTrack}`}
                aria-labelledby={`track-tab-${activeTrack}`}
                className="rounded-2xl bg-[#F5F3F0] p-8 sm:p-10"
            >
                <div className="mb-6">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                        {currentTrack.title}
                    </h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                        {currentTrack.summary}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
                            You&apos;ll Do
                        </h4>
                        <ul className="space-y-2">
                            {currentTrack.youllDo.map((item, i) => (
                                <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
                            You Should Know
                        </h4>
                        <ul className="space-y-2">
                            {currentTrack.youShouldKnow.map((item, i) => (
                                <li key={i} className="text-sm text-foreground/60 flex items-start gap-2">
                                    <span className="text-accent mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
                        Tool Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {currentTrack.tools.map((tool, i) => (
                            <span
                                key={i}
                                className="text-xs tracking-wider uppercase text-foreground/50 bg-foreground/[0.04] rounded-full px-3 py-1.5 font-medium"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {currentTrack.sampleProject && (
                    <div className="rounded-xl bg-card border border-border/20 p-6">
                        <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-3">
                            Sample Project
                        </h4>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                            {currentTrack.sampleProject}
                        </p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
