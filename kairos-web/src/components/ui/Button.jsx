export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    ...props
}) {
    const base = 'inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/30';

    const variants = {
        primary:
            'gradient-accent text-white font-semibold shadow-[0_2px_20px_rgba(30,64,175,0.3)] hover:shadow-[0_4px_30px_rgba(225,29,72,0.35)] hover:scale-[1.02] active:scale-[0.98]',
        outline:
            'border border-foreground/12 text-foreground bg-transparent hover:bg-accent/[0.04] hover:border-accent/30 active:scale-[0.98]',
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
