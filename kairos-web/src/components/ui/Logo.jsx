export default function Logo({ className = '' }) {
    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="kairos-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
            </defs>

            {/* 
        Concept 5: The Dual-Bar Minimalist 'K'
        
        As simple as it gets. Just two abstract, detached strokes that 
        imply a 'K' through negative space. 
        - The left vertical bar = Foundation/Structure
        - The right angled bar = Action/Timeline ("Kairos")
        
        This is the kind of extremely reduced, confident logo you see on 
        high-end boutique studio sites or luxury tech brands. 
      */}

            {/* The Foundation (Left Pillar) */}
            <rect
                x="14"
                y="12"
                width="6"
                height="24"
                rx="1"
                fill="currentColor" /* Adapts to text color (dark gray/white depending on mode) */
            />

            {/* The Action (Right Angle forming the 'K') */}
            <path
                d="M 26 12 L 36 24 L 26 36"
                stroke="url(#kairos-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
