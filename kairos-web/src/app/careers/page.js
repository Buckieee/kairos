'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roles = [
    {
        title: 'Full-stack Developer',
        description: 'Build production-grade web apps using Next.js, Node, and modern databases. You ship fast and care about UX.',
        skills: ['Next.js / React', 'Node.js + databases', 'API design', 'Git workflow'],
    },
    {
        title: 'AI / Automation Engineer',
        description: 'Design AI-powered workflows, LLM integrations, and automation pipelines for real business problems.',
        skills: ['LLMs (OpenAI, Groq)', 'Python or Node.js', 'RAG & embeddings', 'API integrations'],
    },
    {
        title: 'UI/UX Designer',
        description: 'Craft clean, conversion-driven interfaces for web apps and landing pages. You think in systems, not screens.',
        skills: ['Figma', 'Visual & interaction design', 'Design systems', 'Shipped products'],
    },
    {
        title: 'Brand & Creative Strategist',
        description: 'Help startups define their visual identity, messaging, and creative direction across digital.',
        skills: ['Brand identity', 'Copywriting', 'Creative direction', 'Agency experience'],
    },
];

const howItWorks = [
    { num: '01', title: 'You apply', desc: 'Send us your portfolio and a short note. No cover letters.' },
    { num: '02', title: 'We train you', desc: 'You get onboarded into our tools, workflow, and standards. We invest in you.' },
    { num: '03', title: 'You build', desc: 'Get assigned to a real client project. Ship work that matters.' },
    { num: '04', title: 'You grow', desc: 'Finish a project, get the next one. Continuous work, continuous learning.' },
];

function RoleCard({ role, index }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="rounded-2xl bg-[#F5F3F0] hover:bg-[#EDEBE7] transition-colors duration-500 overflow-hidden cursor-pointer group"
            onClick={() => setOpen(!open)}
        >
            <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground/90 group-hover:text-foreground transition-colors">
                            {role.title}
                        </h3>
                        <span className="text-[10px] tracking-wider uppercase text-foreground/40 font-medium mt-1 inline-block">
                            Contract · Remote · Ongoing
                        </span>
                    </div>
                    <div className="relative w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                        <svg
                            width="18" height="18" viewBox="0 0 18 18" fill="none"
                            className={`text-foreground/30 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                        >
                            <path d="M9 4V14M4 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'max-h-[400px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                        {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                        {role.skills.map((s) => (
                            <span key={s} className="text-[10px] tracking-wider uppercase text-foreground/50 bg-foreground/[0.04] rounded-full px-3 py-1 font-medium">
                                {s}
                            </span>
                        ))}
                    </div>
                    <a
                        href="mailto:careers@kairos.studio"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-bright transition-colors font-medium group/apply"
                    >
                        Apply now
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover/apply:translate-x-0.5 transition-transform">
                            <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

const inputClass = 'w-full bg-transparent border-b border-foreground/10 focus:border-foreground/30 outline-none py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors duration-200';

function ApplicationForm() {
    const [form, setForm] = useState({ name: '', email: '', role: '', portfolio: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const payload = { ...form };
            if (!payload.role) delete payload.role;
            if (!payload.portfolio) delete payload.portfolio;

            const res = await fetch(`${API_URL}/careers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed');
            setStatus('success');
            setForm({ name: '', email: '', role: '', portfolio: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-[#F5F3F0] p-8 sm:p-10 mb-12"
        >
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                Tell us what you want to do
            </h2>
            <p className="text-sm text-foreground/50 mb-8">
                No cover letters. Just your info and a short note about what you&apos;re good at.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                        type="text"
                        placeholder="Your name *"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                    />
                    <input
                        type="email"
                        placeholder="Email *"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className={`${inputClass} appearance-none cursor-pointer ${!form.role ? 'text-foreground/30' : ''}`}
                    >
                        <option value="">Role you&apos;re interested in</option>
                        {roles.map((r) => (
                            <option key={r.title} value={r.title}>{r.title}</option>
                        ))}
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="url"
                        placeholder="Portfolio / LinkedIn URL"
                        value={form.portfolio}
                        onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                        className={inputClass}
                    />
                </div>

                <textarea
                    placeholder="What do you want to build with us? *"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                />

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200 disabled:opacity-50"
                    >
                        {status === 'loading' ? 'Submitting…' : 'Submit Application'}
                    </button>

                    {status === 'success' && (
                        <span className="text-sm text-green-600 font-medium">
                            Thanks! We&apos;ll review and get back to you soon.
                        </span>
                    )}
                    {status === 'error' && (
                        <span className="text-sm text-red-500 font-medium">
                            Something went wrong. Try again.
                        </span>
                    )}
                </div>
            </form>
        </motion.div>
    );
}

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-5 sm:px-8">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <div className="w-16 h-[2px] bg-accent mb-8" />
                        <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">
                            Careers
                        </p>
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                            Join the studio.
                        </h1>
                        <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
                            We hire on contract, train you into our system, and keep you building.
                            Project after project. No gaps.
                        </p>
                    </motion.div>

                    {/* How it works */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            How it works
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {howItWorks.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    className="rounded-2xl bg-[#F5F3F0] p-6 sm:p-8"
                                >
                                    <span className="text-xs font-mono text-accent font-medium">{step.num}</span>
                                    <h3 className="font-heading text-base font-bold text-foreground mt-2 mb-1.5">{step.title}</h3>
                                    <p className="text-sm text-foreground/50 leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* What you get */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl bg-[#F5F3F0] p-8 sm:p-10 mb-16"
                    >
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-6">
                            What you get
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: 'Training & onboarding', desc: 'We bring you up to speed on our tools, standards, and workflow. You don\'t figure it out alone.' },
                                { title: 'Continuous projects', desc: 'Finish one project, start the next. No hunting for work — we keep you busy.' },
                                { title: 'Real-world portfolio', desc: 'Every project ships to production for real clients. Build a portfolio that matters.' },
                                { title: 'Remote & flexible', desc: 'Work from anywhere. We care about output, not hours. Async-first communication.' },
                                { title: 'Growth path', desc: 'Top performers get expanded roles, higher rates, and leadership on bigger projects.' },
                                { title: 'Small team, big impact', desc: 'No bureaucracy. Direct access to founders. Your work is visible and valued.' },
                            ].map((perk) => (
                                <div key={perk.title}>
                                    <h3 className="text-sm font-semibold text-foreground/80 mb-1">{perk.title}</h3>
                                    <p className="text-sm text-foreground/50 leading-relaxed">{perk.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Open roles */}
                    <div className="mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8"
                        >
                            Open roles
                        </motion.h2>
                        <div className="space-y-4">
                            {roles.map((role, i) => (
                                <RoleCard key={role.title} role={role} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Application Form */}
                    <ApplicationForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
