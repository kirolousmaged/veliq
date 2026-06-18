type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 620 200"
      fill="none"
      role="img"
      aria-label="VELIQ"
      className={className}
    >
      <defs>
        <linearGradient id="veliq-grad" x1="0" y1="0" x2="620" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6D28D9" />
          <stop offset="0.35" stopColor="#4338CA" />
          <stop offset="0.7" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#7DD3FC" />
        </linearGradient>
      </defs>
      {/* V */}
      <path
        d="M 20 30 L 80 170 L 140 30"
        stroke="url(#veliq-grad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* E — three bars */}
      <path d="M 170 30 H 270" stroke="url(#veliq-grad)" strokeWidth="14" strokeLinecap="round" />
      <path d="M 170 100 H 270" stroke="url(#veliq-grad)" strokeWidth="14" strokeLinecap="round" />
      <path d="M 170 170 H 270" stroke="url(#veliq-grad)" strokeWidth="14" strokeLinecap="round" />
      {/* L */}
      <path
        d="M 300 30 V 170 H 400"
        stroke="url(#veliq-grad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* I */}
      <path d="M 430 30 V 170" stroke="url(#veliq-grad)" strokeWidth="14" strokeLinecap="round" />
      {/* Q — circle + descender */}
      <circle cx="530" cy="100" r="70" stroke="url(#veliq-grad)" strokeWidth="14" />
      <path
        d="M 560 158 V 190"
        stroke="url(#veliq-grad)"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
}
