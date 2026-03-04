'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { CONTACT } from '@/lib/constants';

export default function Contact() {
    const [formData, setFormData] = useState({
        need: '',
        description: '',
        name: '',
        email: '',
        phone: '',
    });

    const [focusedField, setFocusedField] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errors, setErrors] = useState({});

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

    const handleFocus = (field) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.need) newErrors.need = "Please select what you need.";
        if (!formData.description.trim()) newErrors.description = "Tell us a bit about your project.";
        if (!formData.name.trim()) newErrors.name = "We need your name.";
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('loading');
        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.need,
                    message: formData.description,
                    phone: formData.phone || undefined,
                    source: 'grid-form',
                }),
            });
            if (!res.ok) throw new Error('Failed');
            window.location.href = 'https://calendly.com/hritikjaiswal412/new-meeting';
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative bg-background">
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Title & Intro */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6"
                        >
                            {CONTACT.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-lg text-muted mb-8 max-w-sm"
                        >
                            Complete the form with your details to give us an idea of what we are working with, and we&apos;ll reply within 24 hours.
                        </motion.p>
                    </div>

                    {/* Right Column: Interactive Grid Form */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="bg-accent text-white p-10 sm:p-14 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center min-h-[400px]"
                                >
                                    <svg width="64" height="64" viewBox="0 0 28 28" fill="none" className="mb-6">
                                        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
                                        <motion.path
                                            d="M8 14.5L12 18L20 10"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        />
                                    </svg>
                                    <h3 className="font-heading text-3xl font-bold mb-3">We&apos;ve got it.</h3>
                                    <p className="text-white/80 text-lg">Thanks for reaching out. We will review your details and be in touch within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.7 }}
                                    onSubmit={handleSubmit}
                                    className="bg-[#FAF9F6] p-6 sm:p-10 rounded-3xl shadow-sm border border-foreground/5 relative overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                        {/* Row 1: Needs (Full width) */}
                                        <div className="sm:col-span-2">
                                            <div className="flex items-center justify-between mb-3">
                                                <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">What do you need?</label>
                                                {errors.need && <span className="text-xs text-red-500 font-medium">{errors.need}</span>}
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {CONTACT.needOptions.map((opt) => (
                                                    <button
                                                        type="button"
                                                        key={opt}
                                                        onClick={() => { setFormData(prev => ({ ...prev, need: opt })); setErrors(prev => ({ ...prev, need: null })); }}
                                                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${formData.need === opt
                                                            ? 'bg-accent border-accent text-white shadow-md scale-[1.02]'
                                                            : 'bg-white border-foreground/10 text-foreground/60 hover:border-foreground/30 hover:bg-foreground/[0.02]'
                                                            }`}
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Row 2: Description (Full width) */}
                                        <div className="sm:col-span-2 mt-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Project Details</label>
                                                {errors.description && <span className="text-xs text-red-500 font-medium">{errors.description}</span>}
                                            </div>
                                            <div className={`relative bg-white rounded-2xl border transition-all duration-500 ${focusedField === 'description' ? 'border-accent shadow-[0_0_20px_rgba(37,99,235,0.1)]' : errors.description ? 'border-red-300' : 'border-foreground/10 hover:border-foreground/25'}`}>
                                                <textarea
                                                    name="description"
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('description')}
                                                    onBlur={handleBlur}
                                                    placeholder="What problem are you trying to solve?"
                                                    rows={4}
                                                    className="w-full bg-transparent outline-none p-5 text-foreground placeholder:text-foreground/30 resize-none"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 3: Name & Email */}
                                        <div className="mt-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Name</label>
                                                {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                                            </div>
                                            <div className={`relative bg-white rounded-2xl border transition-all duration-500 flex items-center px-5 ${focusedField === 'name' ? 'border-accent shadow-[0_0_20px_rgba(37,99,235,0.1)]' : errors.name ? 'border-red-300' : 'border-foreground/10 hover:border-foreground/25'}`}>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('name')}
                                                    onBlur={handleBlur}
                                                    placeholder="John Doe"
                                                    className="w-full bg-transparent outline-none py-4 text-foreground placeholder:text-foreground/30"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Email</label>
                                                {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                                            </div>
                                            <div className={`relative bg-white rounded-2xl border transition-all duration-500 flex items-center px-5 ${focusedField === 'email' ? 'border-accent shadow-[0_0_20px_rgba(37,99,235,0.1)]' : errors.email ? 'border-red-300' : 'border-foreground/10 hover:border-foreground/25'}`}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('email')}
                                                    onBlur={handleBlur}
                                                    placeholder="john@company.com"
                                                    className="w-full bg-transparent outline-none py-4 text-foreground placeholder:text-foreground/30"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 4: Phone (Full width or single) & Submit */}
                                        <div className="sm:col-span-2 mt-2">
                                            <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Phone (Optional)</label>
                                            <div className={`relative bg-white rounded-2xl border transition-all duration-500 flex items-center px-5 ${focusedField === 'phone' ? 'border-accent shadow-[0_0_20px_rgba(37,99,235,0.1)]' : 'border-foreground/10 hover:border-foreground/25'}`}>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('phone')}
                                                    onBlur={handleBlur}
                                                    placeholder="+44 7XXX XXXXXX"
                                                    className="w-full bg-transparent outline-none py-4 text-foreground placeholder:text-foreground/30"
                                                />
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="sm:col-span-2 mt-6">
                                            {status === 'error' && (
                                                <p className="text-red-500 text-sm mb-3 font-medium text-center">Something went wrong. Please try submitting again.</p>
                                            )}
                                            <button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${status === 'loading' ? 'bg-accent/80 text-white cursor-not-allowed' : 'bg-accent text-white hover:bg-[#E11D48] hover:shadow-[0_10px_30px_-10px_rgba(225,29,72,0.4)] hover:-translate-y-1'}`}
                                            >
                                                {status === 'loading' ? (
                                                    <>
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                        />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        Confirm your free call
                                                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                                            <path d="M2 14L14 2M14 2H6M14 2V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </SectionWrapper>
        </section>
    );
}
