import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Terms & Conditions | Kairos',
    description:
        'Read the Terms and Conditions governing your use of the Kairos website and services.',
};

export default function TermsAndConditions() {
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
                                Terms &amp; Conditions
                            </li>
                        </ol>
                    </nav>

                    {/* Header */}
                    <div className="mb-16">
                        <div className="w-16 h-[2px] bg-accent mb-8" />
                        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
                            Terms &amp; Conditions
                        </h1>
                        <p className="text-muted text-sm">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose-legal space-y-12">

                        {/* 1. Agreement */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                1. Agreement to Terms
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website operated by Kairos (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), available at <strong>itskairos.uk</strong> (the &quot;Website&quot;), including any content, functionality, and services offered on or through the Website.
                            </p>
                            <p className="text-muted leading-relaxed">
                                By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Website.
                            </p>
                        </section>

                        {/* 2. About Kairos */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                2. About Kairos
                            </h2>
                            <p className="text-muted leading-relaxed">
                                Kairos is a managed execution studio based in London, United Kingdom. We match vetted talent — including AI automation engineers, CRM architects, brand strategists, data analysts, and growth specialists — with startups and SMEs to design and implement operational systems. Our services include AI and workflow automation, CRM architecture, brand and digital execution, and marketing and growth infrastructure.
                            </p>
                        </section>

                        {/* 3. Services */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                3. Services
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                Through this Website, we provide:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Information about our services:</strong> Details about the systems and solutions we build for businesses, including AI automation, CRM systems, brand execution, and growth infrastructure.</li>
                                <li><strong>Contact and enquiry forms:</strong> A way for prospective clients to submit their details and project needs for our review.</li>
                                <li><strong>Career applications:</strong> A portal for prospective builders to apply to join our talent network across various tracks.</li>
                                <li><strong>Consultation booking:</strong> The ability to schedule discovery calls via our integrated scheduling tool (Calendly).</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                The Website serves as an informational and lead-generation platform. Specific project engagements, deliverables, timelines, and fees are agreed upon separately through individual project contracts between Kairos and its clients.
                            </p>
                        </section>

                        {/* 4. User Conduct */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                4. Acceptable Use
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li>Use the Website in any way that violates any applicable local, national, or international law or regulation.</li>
                                <li>Submit false, misleading, or inaccurate information through any form on the Website.</li>
                                <li>Attempt to gain unauthorised access to any part of the Website, server, or any database connected to the Website.</li>
                                <li>Use the Website to transmit or send unsolicited commercial communications (spam).</li>
                                <li>Engage in any conduct that restricts or inhibits any other user from using or enjoying the Website.</li>
                                <li>Introduce any viruses, trojans, worms, or other malicious or technologically harmful material.</li>
                                <li>Scrape, data mine, or use automated tools to collect information from the Website without our prior written consent.</li>
                            </ul>
                        </section>

                        {/* 5. Intellectual Property */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                5. Intellectual Property Rights
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                The Website and its entire contents, features, and functionality — including but not limited to all information, text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the design, selection, and arrangement thereof — are owned by Kairos, its licensors, or other providers of such material and are protected by United Kingdom and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                The Kairos name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Kairos. You must not use such marks without our prior written permission.
                            </p>
                            <p className="text-muted leading-relaxed">
                                You are permitted to view, download, and print pages from the Website for your own personal, non-commercial use, provided that you do not modify the content and you retain all copyright and proprietary notices.
                            </p>
                        </section>

                        {/* 6. User Submissions */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                6. User Submissions
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                When you submit information through our contact form or career application form (including your name, email, project details, portfolio links, resumes, and messages), you acknowledge that:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li>You are solely responsible for the accuracy and completeness of all information you provide.</li>
                                <li>You grant us a non-exclusive, royalty-free right to use, store, and process the information for the purposes stated in our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.</li>
                                <li>You will not submit any information that infringes on the rights of any third party, including intellectual property rights, privacy rights, or any other proprietary rights.</li>
                                <li>Resume/CV files submitted through the careers form will be stored securely and used solely for the purpose of evaluating your application.</li>
                            </ul>
                        </section>

                        {/* 7. Third-Party Links */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                7. Third-Party Links and Services
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                The Website may contain links to third-party websites, services, or resources, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li><strong>Calendly:</strong> For scheduling discovery calls and meetings.</li>
                                <li><strong>Client project links:</strong> Links to live projects we have built for clients (e.g., case studies).</li>
                                <li><strong>Social media platforms:</strong> Links to external social media profiles.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                These third-party sites have their own terms and privacy policies, which we encourage you to read. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. Linking to a third-party site does not imply our endorsement of that site.
                            </p>
                        </section>

                        {/* 8. Disclaimers */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                8. Disclaimers
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                The Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
                                <li>Warranties that the Website will be uninterrupted, timely, secure, or error-free.</li>
                                <li>Warranties that the information provided on the Website is accurate, reliable, or complete.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                While we strive to keep the Website updated, we do not guarantee that any information on the Website is accurate, complete, or current. The content on the Website is provided for general information purposes and should not be relied upon as a basis for making business decisions without consulting professional, qualified advice.
                            </p>
                        </section>

                        {/* 9. Limitation of Liability */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                9. Limitation of Liability
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                To the fullest extent permitted by applicable law, Kairos, its directors, employees, partners, agents, suppliers, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li>Loss of profits, data, use, goodwill, or other intangible losses.</li>
                                <li>Damages resulting from your access to or use of (or inability to access or use) the Website.</li>
                                <li>Damages resulting from any conduct or content of any third party on the Website.</li>
                                <li>Damages resulting from unauthorised access, use, or alteration of your transmissions or content.</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
                            </p>
                        </section>

                        {/* 10. Indemnification */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                10. Indemnification
                            </h2>
                            <p className="text-muted leading-relaxed">
                                You agree to defend, indemnify, and hold harmless Kairos and its directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Website, your violation of these Terms, or your violation of any rights of a third party.
                            </p>
                        </section>

                        {/* 11. Project Engagements */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                11. Project Engagements
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                These Terms govern only your use of the Website. Any project work, consulting engagements, or service agreements between you and Kairos are subject to separate project contracts, which will include specific terms regarding:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li>Scope of work and deliverables</li>
                                <li>Timelines and milestones</li>
                                <li>Fees and payment terms</li>
                                <li>Intellectual property ownership</li>
                                <li>Confidentiality obligations</li>
                                <li>Termination and cancellation</li>
                            </ul>
                            <p className="text-muted leading-relaxed mt-4">
                                Submitting a contact form or having a discovery call does not constitute a binding agreement for services. A formal engagement begins only when a separate project contract is executed by both parties.
                            </p>
                        </section>

                        {/* 12. Builder/Talent Applications */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                12. Builder &amp; Talent Applications
                            </h2>
                            <p className="text-muted leading-relaxed mb-4">
                                By submitting an application through our careers page, you acknowledge that:
                            </p>
                            <ul className="list-disc list-inside text-muted leading-relaxed space-y-1.5 ml-2">
                                <li>Submission of an application does not guarantee acceptance into our builder network.</li>
                                <li>Kairos reserves the right to accept or reject any application at its sole discretion.</li>
                                <li>If accepted, your engagement will be governed by a separate contractor agreement, not these Terms.</li>
                                <li>The Training Sprint and any subsequent project work are subject to separate terms agreed upon between you and Kairos.</li>
                                <li>All information provided in your application must be truthful and accurate. Providing false information may result in immediate disqualification or termination.</li>
                            </ul>
                        </section>

                        {/* 13. Termination */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                13. Termination
                            </h2>
                            <p className="text-muted leading-relaxed">
                                We may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Website will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                            </p>
                        </section>

                        {/* 14. Governing Law */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                14. Governing Law and Jurisdiction
                            </h2>
                            <p className="text-muted leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law provisions. Any disputes arising out of or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                            </p>
                        </section>

                        {/* 15. Changes */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                15. Changes to These Terms
                            </h2>
                            <p className="text-muted leading-relaxed">
                                We reserve the right to modify or replace these Terms at any time at our sole discretion. We will post the updated Terms on this page with a revised &quot;Last updated&quot; date. Your continued use of the Website after any changes to these Terms constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically for changes.
                            </p>
                        </section>

                        {/* 16. Severability */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                16. Severability
                            </h2>
                            <p className="text-muted leading-relaxed">
                                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions of these Terms shall remain in full force and effect.
                            </p>
                        </section>

                        {/* 17. Entire Agreement */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                17. Entire Agreement
                            </h2>
                            <p className="text-muted leading-relaxed">
                                These Terms, together with our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>, constitute the entire agreement between you and Kairos regarding your use of the Website and supersede all prior and contemporaneous agreements, communications, and proposals, whether oral or written, between you and Kairos.
                            </p>
                        </section>

                        {/* 18. Contact */}
                        <section>
                            <h2 className="font-heading text-xl font-bold text-foreground mb-4">
                                18. Contact Us
                            </h2>
                            <p className="text-muted leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="mt-4 p-6 rounded-2xl bg-[#F5F3F0] border border-foreground/5">
                                <p className="text-foreground font-bold mb-1">Kairos</p>
                                <p className="text-muted text-sm">
                                    Email:{' '}
                                    <a href="mailto:fede@itskairos.uk" className="text-accent hover:underline">
                                        fede@itskairos.uk
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
