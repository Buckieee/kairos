'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrackSelector from '@/components/ui/TrackSelector';
import Accordion from '@/components/ui/Accordion';
import StickyCTA from '@/components/ui/StickyCTA';
import Button from '@/components/ui/Button';
import './careers.css';

// ─── SEO Metadata ──────────────────────────────────────
// Meta title: "AI Automation Jobs UK | Join Kairos Studio"
// Meta description: "Join Kairos as a builder. We train you in AI automation, CRM systems, and brand execution. Contract roles, remote, continuous projects. Apply now."
// Primary keyword: "AI automation jobs UK"
// Secondary keywords: "automation engineer jobs", "AI implementation jobs", "remote AI jobs UK", "SME automation jobs", "contract automation jobs", "AI training jobs"
// URL slug: /careers
// Note: Metadata exported via metadata export below (Next.js 13+)

// ─── Role Tracks ────────────────────────────────────────
const tracks = [
    {
        id: 'brand-systems',
        title: 'Brand Systems & Visual Identity',
        summary: 'Design and implement cohesive brand systems that SMEs can scale across all touchpoints.',
        youllDo: [
            'Create visual identity systems from scratch or evolve existing brands',
            'Build design systems and component libraries for web and print',
            'Design marketing assets, landing pages, and digital campaigns',
            'Establish brand guidelines and train client teams',
            'Work directly with founders to define brand positioning',
        ],
        youShouldKnow: [
            'Figma, Adobe Creative Suite, or similar design tools',
            'Design systems thinking and component architecture',
            'Brand strategy and visual identity development',
            'Web design fundamentals (HTML/CSS awareness helps)',
            'Experience shipping real brand projects',
        ],
        tools: ['Figma', 'Adobe CC', 'Webflow/Framer', 'Notion', 'Loom'],
        sampleProject:
            'A UK fintech startup needs a complete brand refresh. You design the logo, color palette, typography system, and component library. Then you build their new landing page in Webflow, create pitch deck templates, and deliver a brand guide their team can use independently.',
    },
    {
        id: 'web-development',
        title: 'Web Development',
        summary: 'Build production-grade web applications and sites that SMEs rely on daily.',
        youllDo: [
            'Develop responsive web apps using Next.js, React, and modern frameworks',
            'Build custom CRM interfaces and admin dashboards',
            'Integrate third-party APIs and automation tools',
            'Optimize performance, SEO, and accessibility',
            'Deploy and maintain production applications',
        ],
        youShouldKnow: [
            'Next.js, React, or similar modern frameworks',
            'TypeScript or JavaScript (ES6+)',
            'API design and database fundamentals',
            'Git workflow and deployment practices',
            'Experience shipping production apps',
        ],
        tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Supabase'],
        sampleProject:
            'An e-commerce SME needs a custom admin dashboard to manage orders, inventory, and customer data. You build it in Next.js with real-time updates, integrate their payment provider, and deploy it to production. The client uses it daily to run their business.',
    },
    {
        id: 'ai-automation',
        title: 'AI Process Automation',
        summary: 'Design and implement AI-powered workflows that automate real business processes.',
        youllDo: [
            'Build LLM-powered workflows for customer support, content generation, and data processing',
            'Create RAG systems and knowledge bases for SMEs',
            'Integrate AI tools with existing business systems (CRM, email, databases)',
            'Design automation pipelines for repetitive tasks',
            'Train client teams on AI tool usage and best practices',
        ],
        youShouldKnow: [
            'Python or Node.js for API development',
            'LLM APIs (OpenAI, Anthropic, Groq) and prompt engineering',
            'RAG, embeddings, and vector databases',
            'API integrations and webhook handling',
            'Understanding of business processes and automation',
        ],
        tools: ['Python', 'Node.js', 'OpenAI API', 'LangChain', 'Supabase', 'Zapier/Make'],
        sampleProject:
            'A property management SME processes 200+ tenant inquiries weekly. You build an AI assistant that answers common questions using their knowledge base, routes complex issues to human agents, and logs everything in their CRM. Response time drops from 24 hours to minutes.',
    },
    {
        id: 'data-analytics',
        title: 'Data Analytics & BI',
        summary: 'Transform SME data into actionable insights and automated reporting systems.',
        youllDo: [
            'Build custom dashboards and reporting tools',
            'Set up data pipelines and ETL processes',
            'Create automated reports for stakeholders',
            'Design analytics systems for marketing, sales, and operations',
            'Train teams on data-driven decision making',
        ],
        youShouldKnow: [
            'SQL and database querying',
            'Python (Pandas, NumPy) or similar data tools',
            'BI tools (Tableau, Power BI, Metabase) or custom dashboards',
            'Data visualization and storytelling',
            'Understanding of business metrics and KPIs',
        ],
        tools: ['Python', 'SQL', 'Metabase', 'Supabase', 'Google Analytics', 'Airtable'],
        sampleProject:
            'A B2B SaaS SME needs visibility into their sales pipeline and customer health. You build a custom dashboard that pulls data from their CRM, payment system, and support tools. It shows real-time metrics, forecasts revenue, and alerts the team when accounts need attention.',
    },
    {
        id: 'revops-automation',
        title: 'Revenue Operations Automation',
        summary: 'Automate sales, marketing, and customer success workflows to accelerate revenue.',
        youllDo: [
            'Design and implement CRM workflows and automation',
            'Build lead scoring and qualification systems',
            'Create email sequences and nurture campaigns',
            'Integrate sales, marketing, and support tools',
            'Set up attribution tracking and revenue reporting',
        ],
        youShouldKnow: [
            'CRM platforms (HubSpot, Salesforce, Pipedrive)',
            'Marketing automation tools and email platforms',
            'Sales process and funnel optimization',
            'API integrations and workflow builders',
            'Understanding of B2B sales and marketing',
        ],
        tools: ['HubSpot', 'Make/Zapier', 'Postmark', 'Stripe', 'Google Analytics', 'Notion'],
        sampleProject:
            'A B2B consultancy manually tracks leads across spreadsheets and email. You set up HubSpot CRM, build automated lead scoring, create email sequences for different segments, and integrate their calendar booking tool. Lead-to-close time drops by 40%.',
    },
];

// ─── Training Sprint Content ─────────────────────────────
const trainingSprint = {
    title: 'Kairos Training Sprint',
    intro: 'We invest in your success. Every builder goes through our Training Sprint to learn our tools, standards, and delivery process.',
    duration: '2-4 weeks (varies by track and experience level)',
    tracks: [
        {
            name: 'AI Process Automation',
            timeline: [
                'Days 1-3: Tool setup, API keys, environment config. Review our automation patterns and prompt library.',
                'Week 1: Build a practice automation (e.g., customer support bot) using our standards. Code review and feedback.',
                'Week 2: Work on a real client project under supervision. Deploy to staging, test, iterate.',
                'Week 3-4: Independent project delivery. Full code review, documentation, and handoff training.',
            ],
        },
    ],
    assessment: {
        title: 'Training Assessment Example',
        scenario:
            'An SME runs a subscription box service. They receive 50+ customer emails daily asking about shipping, product details, and subscription changes. Their support team is overwhelmed.',
        task: 'Design and build an AI-powered customer support system that:',
        requirements: [
            'Answers common questions using a knowledge base',
            'Handles subscription changes (pause, cancel, update address)',
            'Escalates complex issues to human agents',
            'Logs all interactions in their CRM',
            'Sends follow-up emails when needed',
        ],
        deliverable: 'Working prototype deployed to staging, documentation, and a 5-minute demo video.',
        rubric: [
            'Functionality: System works end-to-end, handles edge cases, integrates with CRM',
            'Code quality: Clean, documented, follows our standards, error handling',
            'User experience: Clear responses, natural language, helpful error messages',
            'Business impact: Reduces support load, improves response time, scalable',
            'Documentation: Setup guide, API docs, handoff notes for client team',
        ],
    },
};

// ─── How It Works ───────────────────────────────────────
const howItWorks = [
    {
        num: '01',
        title: 'Apply',
        desc: 'Send your portfolio and a short note about what you want to build. No cover letters. We review within 5 business days.',
    },
    {
        num: '02',
        title: 'Assessment',
        desc: 'If we see a fit, we schedule a brief call to discuss your experience and our process. Then a small technical assessment (2-3 hours).',
    },
    {
        num: '03',
        title: 'Training Sprint',
        desc: 'Accepted builders join our Training Sprint. You learn our tools, standards, and delivery process. Typically 2-4 weeks, paid at your project rate.',
    },
    {
        num: '04',
        title: 'Deploy',
        desc: 'After training, you get assigned to a real client project. Ship work that matters. Finish one project, start the next. Continuous flow.',
    },
];

// ─── Standards & Benefits ────────────────────────────────
const standards = [
    {
        title: 'Our Standards',
        items: [
            {
                heading: 'Production-ready code',
                text: 'Everything ships to production. No prototypes or demos. Code is clean, documented, and maintainable.',
            },
            {
                heading: 'Client-first delivery',
                text: 'You work directly with SME founders and teams. Clear communication, realistic timelines, no surprises.',
            },
            {
                heading: 'Continuous improvement',
                text: 'We review every project. You get feedback, learn from the team, and level up with each delivery.',
            },
            {
                heading: 'Remote-first, async',
                text: 'Work from anywhere. We use Notion, Loom, and Slack. Meetings are rare and purposeful.',
            },
        ],
    },
    {
        title: 'What You Get',
        items: [
            {
                heading: 'Training & onboarding',
                text: 'We bring you up to speed on our tools, standards, and workflow. You don\'t figure it out alone.',
            },
            {
                heading: 'Continuous projects',
                text: 'Finish one project, start the next. No hunting for work. We keep you busy with real client work.',
            },
            {
                heading: 'Real-world portfolio',
                text: 'Every project ships to production for real clients. Build a portfolio that matters.',
            },
            {
                heading: 'Growth path',
                text: 'Top performers get expanded roles, higher rates, and leadership on bigger projects.',
            },
        ],
    },
];

// ─── Who This Is For ────────────────────────────────────
const fit = {
    for: [
        'Builders who want to ship real products, not just code',
        'Self-directed professionals who thrive in remote, async environments',
        'People who enjoy working directly with clients and solving business problems',
        'Those who want continuous project flow without job hunting',
        'Builders ready to learn new tools and adapt to our standards',
    ],
    notFor: [
        'People who need constant supervision or micromanagement',
        'Those who prefer large teams and corporate structure',
        'Anyone looking for a traditional 9-5 employee role',
        'People who want to work on internal products only (we do client work)',
        'Those who aren\'t comfortable with client communication',
    ],
};

// ─── FAQ ────────────────────────────────────────────────
const faqs = [
    {
        question: 'What is the application process?',
        answer:
            'Apply with your portfolio and a short note. We review within 5 business days. If there\'s a fit, we schedule a brief call and a small technical assessment (2-3 hours). Accepted builders join our Training Sprint, then start on real client projects. This is how we hire AI builders UK-wide.',
    },
    {
        question: 'How long does the Training Sprint take?',
        answer:
            'Typically 2-4 weeks, depending on your track and experience level. You learn our tools, standards, and delivery process through our structured AI training programme. The sprint is paid at your project rate, so you\'re earning while learning.',
    },
    {
        question: 'Is this remote?',
        answer:
            'Yes, fully remote. We\'re UK-based but work with builders globally. These are remote AI jobs London and beyond. We use Notion, Loom, and Slack for async communication. Meetings are rare and purposeful.',
    },
    {
        question: 'What are the contract terms?',
        answer:
            'Project-based contracts for automation builder roles. You work on specific client projects with clear scope and timelines. Finish one project, start the next. No gaps. Rates vary by track and experience.',
    },
    {
        question: 'Do I need prior experience with your specific tools?',
        answer:
            'Not necessarily. We train you on our tool stack during the Training Sprint. What matters more is your ability to learn quickly, ship production code, and work directly with clients. Our AI training programme covers everything you need.',
    },
];

// ─── Application Form ───────────────────────────────────
const inputClass =
    'w-full bg-transparent border-b border-foreground/10 focus:border-foreground/30 outline-none py-3 text-sm text-foreground placeholder:text-foreground/30 transition-colors duration-200';

function ApplicationForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        track: '',
        portfolio: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const payload = { ...form };
            if (!payload.track) delete payload.track;
            if (!payload.portfolio) delete payload.portfolio;

            const res = await fetch(`${API_URL}/careers`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed');
            setStatus('success');
            setForm({ name: '', email: '', track: '', portfolio: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    return (
        <motion.div
                id="apply"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
                className="rounded-2xl bg-[#F5F3F0] p-8 sm:p-10 fade-up"
        >
                <span className="section-label">// APPLY</span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
                    Apply to the Studio
            </h2>
            <p className="text-sm text-foreground/50 mb-8">
                No cover letters. Just your info and a short note about what you&apos;re good at.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Application form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Your name
                        </label>
                    <input
                            id="name"
                        type="text"
                        placeholder="Your name *"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={`${inputClass} focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
                    />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                    <input
                            id="email"
                        type="email"
                        placeholder="Email *"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={`${inputClass} focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="track" className="sr-only">
                            Choose your track
                        </label>
                    <select
                            id="track"
                            value={form.track}
                            onChange={(e) => setForm({ ...form, track: e.target.value })}
                            className={`${inputClass} appearance-none cursor-pointer ${!form.track ? 'text-foreground/30' : ''} focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
                        >
                            <option value="">Choose your track</option>
                            {tracks.map((t) => (
                                <option key={t.id} value={t.title}>
                                    {t.title}
                                </option>
                            ))}
                            <option value="Not sure">Not sure</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="portfolio" className="sr-only">
                            Portfolio or LinkedIn URL
                        </label>
                    <input
                            id="portfolio"
                        type="url"
                        placeholder="Portfolio / LinkedIn URL"
                        value={form.portfolio}
                        onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                            className={`${inputClass} focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="sr-only">
                        What do you want to build with us?
                    </label>
                <textarea
                        id="message"
                    placeholder="What do you want to build with us? *"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2`}
                />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                        aria-label={status === 'loading' ? 'Submitting application' : 'Submit application'}
                    >
                        {status === 'loading' ? 'Submitting…' : 'Submit Application'}
                    </button>

                    {status === 'success' && (
                        <span className="text-sm text-green-600 font-medium" role="status" aria-live="polite">
                            Thanks — we&apos;ll be in touch.
                        </span>
                    )}
                    {status === 'error' && (
                        <span className="text-sm text-red-500 font-medium">
                            Something went wrong. Try again or email careers@kairos.studio.
                        </span>
                    )}
                </div>
            </form>
        </motion.div>
    );
}

// ─── IntersectionObserver Hook for Scroll Animations ────
function useIntersectionObserver() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach((el) => observer.observe(el));

        const stepperNodes = document.querySelectorAll('.stepper-node');
        stepperNodes.forEach((el) => observer.observe(el));

        return () => {
            fadeElements.forEach((el) => observer.unobserve(el));
            stepperNodes.forEach((el) => observer.unobserve(el));
        };
    }, []);
}

// ─── Main Page Component ────────────────────────────────
export default function CareersPage() {
    useIntersectionObserver();

    // FAQ Schema for structured data
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            {/* Skip Link */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar />
            <main id="main-content" className="min-h-screen pt-32 pb-24">
                <div className="max-w-5xl mx-auto px-5 sm:px-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-sm text-muted">
                            <li>
                                <a href="/" className="hover:text-foreground transition-colors">
                                    Home
                                </a>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page" className="text-foreground">
                                Careers
                            </li>
                        </ol>
                    </nav>

                    {/* SECTION: Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-20"
                    >
                        <div className="w-16 h-[2px] bg-accent mb-8" />
                        <span className="section-label">// CAREERS</span>
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                            Build AI Systems For Real Businesses.
                        </h1>
                        <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-8">
                            Join the Kairos AI Studio. We hire and train AI automation builders, web developers, and data specialists to deliver real AI implementation for UK SMEs. Work from London or remote. Project-based contracts. Continuous flow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button href="#apply" variant="primary">
                                Apply Now
                            </Button>
                            <Button href="#tracks" variant="outline">
                                Explore Tracks
                            </Button>
                        </div>
                    </motion.div>

                    {/* SECTION: How It Works */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// PROCESS</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            How It Works
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
                                    <span className="text-xs font-mono text-accent font-medium">
                                        {step.num}
                                    </span>
                                    <h3 className="font-heading text-base font-bold text-foreground mt-2 mb-1.5">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-foreground/50 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* SECTION: Role Tracks */}
                    <motion.div
                        id="tracks"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// TRACKS</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            Choose Your Track
                        </h2>
                        <p className="text-muted mb-8 max-w-2xl">
                            We hire builders for AI automation jobs and AI implementation roles across five tracks. Each track has specific skills, tools, and project types. Pick the one that fits you best.
                        </p>
                        <TrackSelector tracks={tracks} />
                    </motion.div>

                    {/* SECTION: Training Sprint */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// TRAINING</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                            The Kairos Training Sprint
                        </h2>
                        <p className="text-muted mb-8 max-w-2xl">
                            We invest in your success. Every builder goes through our structured AI training programme to learn our tools, standards, and delivery process.
                        </p>

                        {/* Training Timeline Stepper */}
                        <div className="rounded-2xl bg-[#F5F3F0] p-8 sm:p-10 mb-8">
                            <h3 className="font-heading text-xl font-bold text-foreground mb-8">
                                Duration: {trainingSprint.duration}
                            </h3>
                            <div className="training-stepper fade-up">
                                {trainingSprint.tracks[0].timeline.map((item, i) => {
                                    const colonIndex = item.indexOf(':');
                                    const title = colonIndex > 0 ? item.substring(0, colonIndex).trim() : '';
                                    const description = colonIndex > 0 ? item.substring(colonIndex + 1).trim() : item;
                                    return (
                                        <div key={i} className={`stepper-node fade-up stagger-${i + 1}`}>
                                            <div className="stepper-circle">{String(i + 1).padStart(2, '0')}</div>
                                            <div className="stepper-content">
                                                {title && <div className="stepper-title">{title}</div>}
                                                <div className="stepper-description">{description}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Training Example Card */}
                        <div className="assessment-brief fade-up">
                            <h3 className="font-heading text-lg font-bold mb-6">
                                Training Example: AI Automation Builder
                            </h3>
                            <div className="space-y-6 text-sm">
                                <div>
                                    <span className="assessment-badge">TRACK</span>
                                    <p className="leading-relaxed">AI Process Automation</p>
                                </div>
                                <div>
                                    <span className="assessment-badge">WEEK 1</span>
                                    <p className="leading-relaxed">You get access to the Kairos tool stack. Set up your environment — n8n, Make, OpenAI API, Airtable. Complete 3 guided micro-builds: a webhook listener, an AI email classifier, and a lead capture flow. You get annotated examples and a short video walkthrough for each.</p>
                                </div>
                                <div>
                                    <span className="assessment-badge">WEEK 2</span>
                                    <p className="leading-relaxed">You receive a real SME brief (anonymised). Map the client&apos;s process, choose your tools, and build a working automation. Daily async check-ins. Code review at the end of the week with written feedback.</p>
                                </div>
                                <div>
                                    <span className="assessment-badge">WEEK 3-4</span>
                                    <p className="leading-relaxed">Independent delivery. You own a live client project end-to-end. Build, test, document, and hand off. This becomes your first Kairos portfolio case study.</p>
                                </div>
                                <div>
                                    <span className="assessment-badge">WHAT YOU LEAVE WITH</span>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="pill-tag pill-tag-for">A shipped automation in production</span>
                                        <span className="pill-tag pill-tag-for">A documented case study</span>
                                        <span className="pill-tag pill-tag-for">Code review feedback report</span>
                                        <span className="pill-tag pill-tag-for">Access to the next client project</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* SECTION: Our Standards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// STANDARDS</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            Our Standards
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {standards[0].items.map((item, i) => (
                                <div key={i} className={`standards-card card-lift fade-up stagger-${i + 1}`}>
                                    <div className="standards-card-number">{String(i + 1).padStart(2, '0')}</div>
                                    <h3 className="font-heading text-lg font-bold mb-2">
                                        {item.heading}
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* SECTION: What You Get */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// BENEFITS</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            What You Get
                        </h2>
                        <div className="bento-grid">
                            {standards[1].items.map((item, i) => {
                                const isFeatured = item.heading === 'Continuous projects' || item.heading === 'Growth path';
                                return (
                                    <div
                                        key={i}
                                        className={`bento-card card-lift fade-up stagger-${i + 1} ${isFeatured ? 'bento-item-featured' : ''}`}
                                    >
                                        <h3 className="font-heading text-lg font-bold mb-2">
                                            {item.heading}
                                        </h3>
                                        <p className="text-sm text-foreground/60 leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* SECTION: Who This Is For */}
                    <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// FIT</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            Who This Is For
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fit-split">
                            <div className="fade-up">
                                <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
                                    For
                                </h3>
                                <div className="flex flex-wrap">
                                    {fit.for.map((item, i) => (
                                        <span key={i} className={`pill-tag pill-tag-for fade-up stagger-${i + 1}`}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="fade-up">
                                <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-4">
                                    Not For
                                </h3>
                                <div className="flex flex-wrap">
                                    {fit.notFor.map((item, i) => (
                                        <span key={i} className={`pill-tag pill-tag-not-for fade-up stagger-${i + 1}`}>
                                            {item}
                                        </span>
                            ))}
                        </div>
                    </div>
                        </div>
                    </motion.div>

                    {/* SECTION: FAQ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 fade-up"
                    >
                        <span className="section-label">// FAQ</span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            Frequently Asked Questions
                        </h2>
                        <Accordion items={faqs} />
                    </motion.div>

                    {/* Application Form */}
                    <ApplicationForm />
                </div>
            </main>
            <Footer />
            <StickyCTA href="#apply" label="Apply Now" />
        </>
    );
}
