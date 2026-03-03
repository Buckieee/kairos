// SEO Metadata for Careers Page
export const metadata = {
    title: 'AI Automation Jobs & Careers | Kairos AI Studio',
    description:
        'Join the Kairos AI Studio. We hire and train AI automation builders, web developers, and data specialists to deliver real systems for UK SMEs. Apply today.',
    keywords: [
        'AI automation jobs',
        'AI implementation careers',
        'hire AI builders UK',
        'automation engineer jobs London',
        'SME AI consultant',
        'AI training programme',
        'remote AI jobs',
    ],
    openGraph: {
        title: 'Careers at Kairos — AI Automation Jobs & Training',
        description:
            'We recruit and train high-potential builders to implement AI and automation for real SMEs. Project-based. Remote-first. Apply to the Kairos AI Studio.',
        type: 'website',
        url: 'https://kairos.studio/careers',
        siteName: 'Kairos',
        images: [
            {
                url: 'https://kairos.studio/assets/og-careers.jpg',
                width: 1200,
                height: 630,
                alt: 'Kairos AI Studio Careers',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers at Kairos — AI Automation Jobs & Training',
        description: 'Join the Kairos AI Studio. Build real AI systems for real SMEs. Apply to our builder network.',
        images: ['https://kairos.studio/assets/og-careers.jpg'],
    },
    alternates: {
        canonical: 'https://kairos.studio/careers',
    },
};

export default function CareersLayout({ children }) {
    // Structured Data (JSON-LD)
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Kairos',
        url: 'https://kairos.studio',
        description:
            'Kairos connects SMEs with vetted builders who implement AI systems and automation. Real delivery, not advice.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'London',
            addressCountry: 'GB',
        },
        sameAs: [],
    };

    const jobPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: 'AI Automation Builder',
        description:
            'Build AI-powered workflows and automation systems for UK SMEs. We train you in our tools and standards, then assign you to real client projects. Remote-first, project-based contracts.',
        identifier: {
            '@type': 'PropertyValue',
            name: 'Kairos',
            value: 'AI-AUTOMATION-BUILDER-001',
        },
        datePosted: '2024-01-01',
        employmentType: 'CONTRACTOR',
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB',
            },
        },
        workHours: 'Remote',
        baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'GBP',
        },
        hiringOrganization: {
            '@type': 'Organization',
            name: 'Kairos',
            sameAs: 'https://kairos.studio',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://kairos.studio',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Careers',
                item: 'https://kairos.studio/careers',
            },
        ],
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
