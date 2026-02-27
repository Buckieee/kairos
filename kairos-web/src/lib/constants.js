/* ════════════════════════════════════════════════════
   Kairos – All content / copy / data constants
   Refined from the full strategic definition
   ════════════════════════════════════════════════════ */

export const NAV_LINKS = [
    { label: 'What We Build', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Why Kairos', href: '#why' },
    { label: 'Careers', href: '/careers' },
];

/* ── Hero ──────────────────────────────────────────── */
export const HERO = {
    headline: 'The studio that powers your business',
    subheadline:
        'Kairos designs and delivers automation, CRM, operational infrastructure and more',
    microline: 'Fast, reliable, and built for growing teams',
    cta: 'Book a Discovery',
    ctaSecondary: 'Talk to an Expert',
    fastForm: {
        cta: 'Get a Scoped Plan',
        microcopy: 'Reply within 24 hours. No spam.',
        needOptions: [
            'Automation',
            'CRM & Systems',
            'Brand & Digital',
            'Growth Infrastructure',
            'Not sure yet',
        ],
    },
};

/* ── Problems ─────────────────────────────────────── */
export const PROBLEMS = {
    titleBold: "You don't need more tools.",
    titleLight: 'You need structure.',
    bullets: [
        'Leads get lost.',
        'Manual tasks slow growth.',
        "CRM doesn't reflect reality.",
        'Reporting lacks clarity.',
        'Automation is half-built.',
        'Teams operate reactively.',
    ],
};

/* ── Pillars / Solution ──────────────────────────── */
export const PILLARS = {
    title: 'What we implement.',
    intro:
        'We design and deploy operational systems that bring clarity and control.',
    items: [
        {
            title: 'AI & Automation',
            outcome: 'Reduce manual work. Increase precision.',
            bullets: ['Workflow automation', 'AI copilots', 'Intelligent triggers'],
        },
        {
            title: 'CRM & Systems',
            outcome: 'Make revenue visible.',
            bullets: ['Architecture', 'Integrations', 'Reporting clarity'],
        },
        {
            title: 'Brand & Digital',
            outcome: 'Look credible. Convert better.',
            bullets: ['Identity systems', 'Conversion-led landing pages', 'UX refinement'],
        },
        {
            title: 'Marketing & Growth',
            outcome: 'Scale with control.',
            bullets: ['Analytics', 'Funnels', 'Lifecycle automation'],
        },
    ],
};

/* ── How It Works ─────────────────────────────────── */
export const PROCESS = {
    title: 'How it works ',
    steps: [
        { num: '01', title: 'Discovery Call', desc: 'Identify bottlenecks and map high-leverage systems' },
        { num: '02', title: 'Proposed plan within 48hrs', desc: 'Detailed fixed-scope proposal with exact deliverables' },
        { num: '03', title: 'Partnering', desc: 'Execute the build in a structured sprint for scale' },
    ],
    note: 'Single point of contact throughout',
};

/* ── Work / Proof ─────────────────────────────────── */
export const WORK = {
    title: 'Selected builds',
    cases: [
        {
            company: 'Relay',
            challenge: 'Job seekers needed a smarter way to manage their search.',
            build: [
                'Full-stack web application',
                'AI-powered email parsing & lead tracking',
                'Gmail integration with bi-directional sync',
                'Smart CRM with pipeline automation',
                'AI assistant for follow-up drafting',
                'Landing page & brand identity',
            ],
            impact: ['Live product', 'AI-first workflow', 'Full brand delivery'],
            link: 'https://relayapp-red.vercel.app/',
            featured: true,
        },
        {
            company: 'B2B Startup',
            challenge: 'Manual lead routing caused delays.',
            build: ['CRM automation', 'AI lead scoring', 'Lifecycle workflows'],
            impact: ['10h/week saved', 'Faster response time'],
        },
    ],
    note: 'More case studies available on request.',
};

/* ── Reviews ──────────────────────────────────────── */
export const REVIEWS = {
    title: 'What founders say',
    text: 'We partner with founders and operators who want to scale faster without compromising on quality or control.',
    items: [
        {
            name: 'Mahardika Prima',
            role: 'Founder, Lofin',
            text: 'Kairos completely transformed how we handle our backend infrastructure. Their approach to systems automation saved us hundreds of hours and let us focus purely on growth and our users.',
            image: '/images/reviews/mahardika.jpg',
        },
        {
            name: 'Ekaterina Galant',
            role: 'Founder, Type X',
            text: 'Working with Kairos was an absolute game-changer. They built out our CRM architecture and defined our brand identity with a precision that immediately elevated our market positioning.',
            image: '/images/reviews/ekaterina.png',
        },
        {
            name: 'Hritik Jaiswal',
            role: 'Founder, Relay',
            text: 'The full-stack web application they delivered exceeded all expectations. It was incredibly fast, beautifully designed, and the AI integration worked flawlessly right out of the box.',
            image: '/images/reviews/hritik.jpg',
            bgClass: 'bg-gradient-to-br from-[#f8dade] to-[#e4f1eb]',
            blend: true,
        },
    ],
};

/* ── Why Kairos (Trust) ──────────────────────────── */
export const WHY_KAIROS = {
    title: 'Why Kairos ',
    points: [
        'End to End Delivery ',
        'Vetted Talent ',
        'Quality Execution ',
        'Fast & Affordable ',
        'Made for Growing teams ',
    ],
};

/* ── Contact / Conversion ─────────────────────────── */
export const CONTACT = {
    title: 'Tell us what you need ',
    needOptions: [
        'Automation',
        'CRM',
        'Branding',
        'Growth',
        'Not sure',
    ],
    budgetOptions: [
        'Under £5k',
        '£5k – £15k',
        '£15k – £30k',
        '£30k+',
        'Flexible',
    ],
    timelineOptions: [
        'ASAP',
        '1–2 weeks',
        '1 month',
        '2–3 months',
        'No rush',
    ],
    nextSteps: {
        title: 'What happens next?',
        steps: [
            'We review your brief.',
            'We respond within 24 hours.',
            'You receive a scoped recommendation.',
        ],
    },
    trustLine: 'No spam. Your information stays private.',
};

/* ── Talent Funnel (Footer-only, subtle) ──────────── */
export const TALENT_FUNNEL = {
    linkText: 'Join our network.',
};
