'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { REVIEWS } from '@/lib/constants';
import Image from 'next/image';

function ReviewCard({ review, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col relative group cursor-pointer"
        >
            {/* Image Section */}
            <div className={`relative aspect-[4/5] w-full overflow-hidden mb-[-20%] z-0 rounded-t-sm ${review.bgClass || 'bg-[#F2F2F2]'}`}>
                <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${review.blend ? 'mix-blend-multiply' : ''}`}
                />
            </div>

            {/* Overlapping Info Block */}
            <div className="relative z-10 w-[105%] -ml-[2.5%] bg-accent p-6 sm:p-8 rounded-sm shadow-xl transition-all duration-500 lg:group-hover:-translate-y-2 lg:group-hover:shadow-2xl">

                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
                            {review.name}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm">
                            {review.role}
                        </p>
                    </div>

                    {/* + → arrow on hover (Desktop only) */}
                    <div className="relative w-8 h-8 hidden lg:flex items-center justify-center shrink-0 mt-1">
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="text-white/80 group-hover:opacity-0 group-hover:rotate-90 transition-all duration-300 absolute">
                            <path d="M9 4V14M4 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 absolute">
                            <path d="M5 13L13 5M13 5H7M13 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Review Text - Reveal on hover for desktop, always visible on mobile */}
                <div className="overflow-hidden max-h-[400px] opacity-100 lg:max-h-0 lg:group-hover:max-h-[400px] lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className="pt-6">
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                            {review.text}
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default function Reviews() {
    return (
        <SectionWrapper id="reviews" className="bg-[#FAF9F6] py-24 sm:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                {/* Left Column: Title and Description */}
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-headline text-foreground mb-4"
                    >
                        {REVIEWS.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="text-muted text-base sm:text-lg max-w-sm leading-relaxed"
                    >
                        {REVIEWS.text}
                    </motion.p>
                </div>

                {/* Right Column: Review Cards Grid */}
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-8 sm:pt-12 lg:pt-0">
                        {REVIEWS.items.map((review, i) => (
                            <ReviewCard key={review.name} review={review} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
