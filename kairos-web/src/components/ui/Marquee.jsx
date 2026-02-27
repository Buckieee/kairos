'use client';

export default function Marquee({ items, speed = 30, className = '' }) {
    const content = items.join('  ·  ');
    const doubled = `${content}  ·  ${content}  ·  `;

    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <div
                className="marquee-track text-display text-foreground/[0.06] select-none"
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled}
            </div>
        </div>
    );
}
