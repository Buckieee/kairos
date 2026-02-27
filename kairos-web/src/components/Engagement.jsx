'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import { ENGAGEMENT } from '@/lib/constants';

function ModelCard({ title, bestFor, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="card p-7 sm:p-9 flex flex-col justify-center text-center min-h-[200px]"
        >
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {title}
            </h3>
            <p className="text-sm font-medium text-muted-light max-w-[200px] mx-auto leading-relaxed">
                {bestFor}
            </p>
        </motion.div>
    );
}

export default function Engagement() {
    return (
        <SectionWrapper id="pricing">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                    {ENGAGEMENT.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {ENGAGEMENT.models.map((model, i) => (
                    <ModelCard key={model.title} {...model} index={i} />
                ))}
            </div>

            <div className="text-center mt-10 space-y-4">
                <Button href="/careers" variant="primary">
                    Get Hired by Us
                </Button>
                <p className="text-sm text-muted">{ENGAGEMENT.microcopy}</p>
            </div>
        </SectionWrapper>
    );
}
