'use client'

interface LogoProps {
  className?: string;
  size?: number;
  color?: string;
  showText?: boolean;
}

export default function Logo({
  className = '',
  size = 48,
  color = 'currentColor',
  showText = false,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        <polygon
          points="50,4 92,28 92,72 50,96 8,72 8,28"
          stroke={color}
          strokeWidth="10"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M 28 50 L 72 50" stroke={color} strokeWidth="10" strokeLinecap="round" />
        <path
          d="M 70 50 C 70 34, 30 34, 30 50 C 30 66, 72 66, 72 56"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black tracking-tighter text-2xl uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Coach Eddy
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#FF5A1F]">
            Personal Trainer
          </span>
        </div>
      )}
    </div>
  );
}
