import { NAV_LINKS, TALENT_FUNNEL } from '@/lib/constants';
import Logo from './ui/Logo';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
                {/* Top — large logo & tagline */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-16">
                    <div>
                        <a href="#" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80">
                            <Logo className="h-8 w-8" />
                            Kairos
                        </a>
                        <p className="mt-4 text-sm text-muted max-w-xs leading-relaxed">
                            Managed execution studio for Startups and Businesses.
                        </p>
                    </div>

                    {/* Nav columns */}
                    <div className="flex flex-wrap gap-x-16 gap-y-8">
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-light mb-4">Navigate</h4>
                            <div className="flex flex-col gap-3">
                                {NAV_LINKS.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm text-muted transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-light mb-4">Legal</h4>
                            <div className="flex flex-col gap-3">
                                <a href="/privacy" className="text-sm text-muted transition-colors hover:text-foreground">Privacy</a>
                                <a href="/terms" className="text-sm text-muted transition-colors hover:text-foreground">Terms</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-light mb-4">Contact</h4>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:fede@itskairos.uk" className="text-sm text-muted transition-colors hover:text-foreground">
                                    fede@itskairos.uk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-light">
                        © {year} Kairos. All rights reserved.
                    </p>
                    <a href="#apply" className="text-xs text-muted-light hover:text-accent transition-colors">
                        {TALENT_FUNNEL.linkText}
                    </a>
                </div>
            </div>
        </footer>
    );
}
