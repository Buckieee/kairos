'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({ items, className = '' }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className={`faq-card ${isOpen ? 'open' : ''}`}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4 group focus:outline-none focus-visible:outline-2 focus-visible:outline-[#2D4EFF] focus-visible:outline-offset-2"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                            id={`faq-question-${index}`}
                        >
                            <h3 className="font-heading text-lg sm:text-xl font-medium text-foreground group-hover:text-foreground/90 transition-colors pr-4">
                                {item.question}
                            </h3>
                            <div className="relative w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className={`faq-icon text-foreground/30 ${isOpen ? 'rotate-45' : ''}`}
                                >
                                    <path
                                        d="M10 4V16M4 10H16"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </button>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                    role="region"
                                    aria-labelledby={`faq-question-${index}`}
                                    id={`faq-answer-${index}`}
                                >
                                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                                        <div className="faq-answer text-sm sm:text-base text-foreground/70 leading-relaxed whitespace-pre-line">
                                            {item.answer}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
