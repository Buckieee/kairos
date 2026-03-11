import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy | Kairos',
    description:
        'Learn how Kairos collects, uses, and protects your personal data. Read our full privacy policy.',
};

export default function PrivacyPolicy() {
    const lastUpdated = '11 March 2025';

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24">
                <div className="max-w-3xl mx-auto px-5 sm:px-8">
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
                                Privacy Policy
                            </li>
                        </ol>
                    </nav>

                    {/* Header */}
                    <div className="mb-16">
                        <div className="w-16 h-[2px] bg-accent mb-8" />
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted text-sm">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose-legal space-y-12">

                        {/* 1. Introduction */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                1. Introduction
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Kairos (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a UK-based managed execution studio that matches vetted talent with startups and SMEs. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website at <strong>itskairos.uk</strong> (the &quot;Website&quot;) and use our services.
                            </p>
                            <p className="text-muted leading-relaxed">
                                By using our Website, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the Website.
                            </p>
                        </section>

                        {/* 2. Who We Are */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                2. Who We Are
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Kairos is a managed execution studio based in London, United Kingdom. We design and implement operational systems including AI automation, CRM architecture, brand execution, and growth infrastructure for startups and SMEs.
                            </p>
                            <p className="text-muted leading-relaxed">
                                For any questions regarding this Privacy Policy or your personal data, please contact us at:{' '}
                                <a href="mailto:team@itskairos.uk" className="text-accent hover:underline">
                                    team@itskairos.uk
                                </a>
                            </p>
                        </section>

                        {/* 3. Information We Collect */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                3. Information We Collect
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                We collect information in the following ways:
                            </p>

                            <h3 className="font-heading text-base font-bold text-foreground mb-3 mt-6">
                                3.1 Information You Provide Directly
                            </h3>
                            <p className="text-muted leading-relaxed mb-3">
                                When you use our contact form or career application form, we collect:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Contact Form:</strong> Name, email address, phone number (optional), service need, and project description.</li>
                                <li><strong>Career Application Form:</strong> Name, email address, chosen track, portfolio or LinkedIn URL, resume/CV (PDF), and a message describing your experience.</li>
                            </ul>

                            <h3 className="font-heading text-base font-bold text-foreground mb-3 mt-6">
                                3.2 Information Collected Automatically
                            </h3>
                            <p className="text-muted leading-relaxed mb-3">
                                When you visit our Website, we automatically collect certain information through:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Google Analytics (GA4):</strong> We use Google Analytics to understand how visitors interact with our Website. This may include your IP address (anonymised), browser type, device type, pages visited, time spent on pages, referring URLs, and general geographic location.</li>
                                <li><strong>Cookies and Similar Technologies:</strong> We use cookies to enhance your experience and gather analytics data. See Section 7 for more details.</li>
                            </ul>
                        </section>

                        {/* 4. How We Use Your Information */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                4. How We Use Your Information
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                We use the personal data we collect for the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>To respond to enquiries:</strong> When you submit a contact form, we use your details to review your request and respond within 24 hours.</li>
                                <li><strong>To process applications:</strong> When you apply through our careers page, we use your information to assess your suitability for available roles within our builder network.</li>
                                <li><strong>To schedule consultations:</strong> After form submission, you may be redirected to our scheduling tool (Calendly) to book a discovery call.</li>
                                <li><strong>To improve our Website:</strong> We use analytics data to understand how visitors use our Website, identify areas for improvement, and optimise the user experience.</li>
                                <li><strong>To comply with legal obligations:</strong> We may process your data where necessary to comply with applicable laws and regulations.</li>
                            </ul>
                        </section>

                        {/* 5. Legal Basis for Processing */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                5. Legal Basis for Processing (UK GDPR)
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Under the UK General Data Protection Regulation (UK GDPR), we rely on the following legal bases:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Consent:</strong> When you submit a form on our Website, you consent to us processing your data for the stated purpose. You may withdraw consent at any time by contacting us.</li>
                                <li><strong>Legitimate Interests:</strong> We process analytics data based on our legitimate interest in understanding how our Website is used and improving our services, provided this does not override your fundamental rights and freedoms.</li>
                                <li><strong>Contractual Necessity:</strong> Where processing is necessary to take steps at your request prior to entering into a contract (e.g., assessing a career application).</li>
                            </ul>
                        </section>

                        {/* 6. Data Storage and Security */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                6. Data Storage and Security
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Your data is stored securely using the following infrastructure:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Supabase:</strong> Contact form submissions and career applications are stored in a Supabase database with row-level security enabled. Supabase provides encryption at rest and in transit.</li>
                                <li><strong>Supabase Storage:</strong> Resume/CV files uploaded via the careers form are stored in Supabase Storage with secure access controls.</li>
                                <li><strong>Vercel:</strong> Our Website is hosted on Vercel, which provides SSL/TLS encryption for all data in transit.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                        </section>

                        {/* 7. Cookies */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                7. Cookies and Tracking Technologies
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Our Website uses cookies and similar technologies to enhance your experience and collect analytics data. We use the iubenda Consent Solution to manage your cookie preferences in compliance with applicable laws.
                            </p>

                            <h3 className="font-heading text-base font-bold text-foreground mb-3 mt-6">
                                7.1 Types of Cookies We Use
                            </h3>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Strictly Necessary Cookies:</strong> Required for the Website to function properly. These cannot be disabled.</li>
                                <li><strong>Analytics Cookies (Google Analytics):</strong> Help us understand how visitors interact with our Website. These cookies collect information anonymously and report Website trends without identifying individual visitors.</li>
                                <li><strong>Preference Cookies (iubenda):</strong> Store your cookie consent preferences.</li>
                            </ul>

                            <h3 className="font-heading text-base font-bold text-foreground mb-3 mt-6">
                                7.2 Managing Cookies
                            </h3>
                            <p className="text-muted leading-relaxed">
                                You can manage your cookie preferences at any time via the cookie consent banner provided by iubenda. You may also configure your browser to refuse cookies or alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of certain parts of the Website.
                            </p>
                        </section>

                        {/* 8. Third-Party Services */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                8. Third-Party Services
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                We use the following third-party services that may process your personal data:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-muted border-collapse">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="text-left py-3 pr-4 font-bold text-foreground">Service</th>
                                            <th className="text-left py-3 pr-4 font-bold text-foreground">Purpose</th>
                                            <th className="text-left py-3 font-bold text-foreground">Privacy Policy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-border/50">
                                            <td className="py-3 pr-4">Google Analytics</td>
                                            <td className="py-3 pr-4">Website analytics and traffic analysis</td>
                                            <td className="py-3">
                                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Privacy Policy</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-border/50">
                                            <td className="py-3 pr-4">Supabase</td>
                                            <td className="py-3 pr-4">Data storage and file storage</td>
                                            <td className="py-3">
                                                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Supabase Privacy Policy</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-border/50">
                                            <td className="py-3 pr-4">Vercel</td>
                                            <td className="py-3 pr-4">Website hosting</td>
                                            <td className="py-3">
                                                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vercel Privacy Policy</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-border/50">
                                            <td className="py-3 pr-4">Calendly</td>
                                            <td className="py-3 pr-4">Scheduling discovery calls</td>
                                            <td className="py-3">
                                                <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Calendly Privacy Policy</a>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-border/50">
                                            <td className="py-3 pr-4">iubenda</td>
                                            <td className="py-3 pr-4">Cookie consent management</td>
                                            <td className="py-3">
                                                <a href="https://www.iubenda.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">iubenda Privacy Policy</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* 9. Data Sharing */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                9. Data Sharing and Disclosure
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal data to third parties. We may share your information in the following limited circumstances:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Service Providers:</strong> With trusted third-party services (listed above) that assist us in operating our Website and conducting our business, subject to confidentiality obligations.</li>
                                <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental regulation, or where disclosure is necessary to protect our rights, property, or safety.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you of any such change.</li>
                            </ul>
                        </section>

                        {/* 10. Data Retention */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                10. Data Retention
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Contact form submissions:</strong> Retained for up to 24 months from the date of submission, unless an ongoing business relationship is established.</li>
                                <li><strong>Career applications:</strong> Retained for up to 12 months from the date of submission. If your application is unsuccessful, we may retain your details to consider you for future opportunities, unless you request deletion.</li>
                                <li><strong>Analytics data:</strong> Google Analytics data is retained in accordance with Google&apos;s data retention policies (typically 14 months).</li>
                            </ul>
                        </section>

                        {/* 11. Your Rights */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                11. Your Rights
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Under the UK GDPR, you have the following rights regarding your personal data:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal data.</li>
                                <li><strong>Right to Erasure:</strong> Request deletion of your personal data where there is no compelling reason for its continued processing.</li>
                                <li><strong>Right to Restrict Processing:</strong> Request that we limit the processing of your personal data in certain circumstances.</li>
                                <li><strong>Right to Data Portability:</strong> Request your personal data in a structured, commonly used, machine-readable format.</li>
                                <li><strong>Right to Object:</strong> Object to our processing of your personal data where we are relying on legitimate interests.</li>
                                <li><strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process data, you may withdraw that consent at any time.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                To exercise any of these rights, please contact us at{' '}
                                <a href="mailto:team@itskairos.uk" className="text-accent hover:underline">
                                    team@itskairos.uk
                                </a>
                                . We will respond to your request within 30 days.
                            </p>
                        </section>

                        {/* 12. International Transfers */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                12. International Data Transfers
                            </h2>
                            <p className="text-muted leading-relaxed">
                                Some of our third-party service providers (such as Google, Supabase, and Vercel) may process your data outside of the United Kingdom. Where this occurs, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) or adequacy decisions, to protect your personal data in accordance with UK data protection law.
                            </p>
                        </section>

                        {/* 13. Children's Privacy */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                13. Children&apos;s Privacy
                            </h2>
                            <p className="text-muted leading-relaxed">
                                Our Website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you become aware that a child has provided us with personal data, please contact us at{' '}
                                <a href="mailto:team@itskairos.uk" className="text-accent hover:underline">
                                    team@itskairos.uk
                                </a>
                                {' '}and we will take steps to delete such information.
                            </p>
                        </section>

                        {/* 14. Changes */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                14. Changes to This Privacy Policy
                            </h2>
                            <p className="text-muted leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will post the updated policy on this page with a revised &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically. Your continued use of the Website after any changes constitutes your acceptance of the updated policy.
                            </p>
                        </section>

                        {/* 15. Contact */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                15. Contact Us
                            </h2>
                            <p className="text-muted leading-relaxed">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="mt-4 p-6 rounded-2xl bg-[#F5F3F0] border border-foreground/5">
                                <p className="text-foreground font-bold mb-1">Kairos</p>
                                <p className="text-muted text-sm">
                                    Email:{' '}
                                    <a href="mailto:team@itskairos.uk" className="text-accent hover:underline">
                                        team@itskairos.uk
                                    </a>
                                </p>
                                <p className="text-muted text-sm">London, United Kingdom</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
