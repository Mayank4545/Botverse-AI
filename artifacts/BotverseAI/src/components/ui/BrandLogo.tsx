export function BrandLogoFull({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="54"
      viewBox="0 0 300 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bv-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="bv-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="bv-grad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <g transform="translate(0, 5) scale(0.7)">
        <polygon points="50,15 85,35 50,55 15,35" fill="url(#bv-grad1)" />
        <polygon points="15,35 50,55 50,95 15,75" fill="url(#bv-grad2)" />
        <polygon points="85,35 50,55 50,95 85,75" fill="url(#bv-grad3)" />
        <circle cx="50" cy="55" r="10" fill="#22D3EE" opacity="0.9" />
        <circle cx="50" cy="55" r="4" fill="#FFFFFF" />
        <path d="M50 55 L50 15" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
        <path d="M50 55 L15 75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
        <path d="M50 55 L85 75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
      </g>
      <text x="75" y="52" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="34" fontWeight="800" fill="#0F172A" letterSpacing="-0.5">Botverse</text>
      <text x="218" y="52" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="34" fontWeight="300" fill="#2563EB">AI</text>
    </svg>
  );
}

export function BrandLogoFullWhite({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="54"
      viewBox="0 0 300 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bv-w-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="bv-w-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="bv-w-grad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <g transform="translate(0, 5) scale(0.7)">
        <polygon points="50,15 85,35 50,55 15,35" fill="url(#bv-w-grad1)" />
        <polygon points="15,35 50,55 50,95 15,75" fill="url(#bv-w-grad2)" />
        <polygon points="85,35 50,55 50,95 85,75" fill="url(#bv-w-grad3)" />
        <circle cx="50" cy="55" r="10" fill="#22D3EE" opacity="0.9" />
        <circle cx="50" cy="55" r="4" fill="#FFFFFF" />
        <path d="M50 55 L50 15" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
        <path d="M50 55 L15 75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
        <path d="M50 55 L85 75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
      </g>
      <text x="75" y="52" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="34" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.5">Botverse</text>
      <text x="218" y="52" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="34" fontWeight="300" fill="#60A5FA">AI</text>
    </svg>
  );
}

export function BrandIcon({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bv-i-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="bv-i-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="bv-i-grad3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <polygon points="50,15 85,35 50,55 15,35" fill="url(#bv-i-grad1)" />
      <polygon points="15,35 50,55 50,95 15,75" fill="url(#bv-i-grad2)" />
      <polygon points="85,35 50,55 50,95 85,75" fill="url(#bv-i-grad3)" />
      <circle cx="50" cy="55" r="10" fill="#22D3EE" opacity="0.9" />
      <circle cx="50" cy="55" r="4" fill="#FFFFFF" />
      <path d="M50 55 L50 15" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
      <path d="M50 55 L15 75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
      <path d="M50 55 L85 75" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}
