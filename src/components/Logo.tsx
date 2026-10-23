import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface LogoProps {
  variant?: 'dark' | 'light' | 'mark-only';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-[25px]',
    lg: 'text-3xl sm:text-4xl',
  }[size];

  const isDark = variant === 'dark';
  const isMarkOnly = variant === 'mark-only';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Mark / Emblem */}
      <div 
        className={`${iconDimensions} shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs ${
          isDark 
            ? 'bg-[#FAF7F2] border border-[#7A9988]/40 ring-1 ring-[#446353]/15' 
            : 'bg-[#2E2822] border border-[#7A9988]/40 ring-1 ring-[#FAF7F2]/10'
        }`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          className="w-4/5 h-4/5"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Zen Arc */}
          <circle 
            cx="50" 
            cy="50" 
            r="44" 
            stroke={isDark ? "#C89D66" : "#E5C89F"} 
            strokeWidth="1.8" 
            strokeDasharray="4 3" 
            opacity="0.85" 
          />
          
          {/* Outer Prana Lotus Petal / Haven Silhouette */}
          <path 
            d="M50 16 C60 28 75 42 75 58 C75 72 64 80 50 82 C36 80 25 72 25 58 C25 42 40 28 50 16 Z" 
            fill={isDark ? "#E7EFEA" : "#343F38"} 
            stroke={isDark ? "#446353" : "#7A9988"} 
            strokeWidth="2.5" 
            strokeLinejoin="round"
          />

          {/* Central Awakening Spire & Botanical Heart */}
          <path 
            d="M50 24 C57 36 66 48 66 60 C66 70 59 76 50 78 C41 76 34 70 34 60 C34 48 43 36 50 24 Z" 
            fill={isDark ? "#446353" : "#E7EFEA"} 
          />

          {/* Golden Core Seed of Life / Vitality */}
          <path 
            d="M50 37 C53 45 58 53 58 60 C58 65 54 69 50 70 C46 69 42 65 42 60 C42 53 47 45 50 37 Z" 
            fill={isDark ? "#C89D66" : "#D4AF37"} 
          />

          {/* Spine of Alignment */}
          <line 
            x1="50" 
            y1="32" 
            x2="50" 
            y2="66" 
            stroke={isDark ? "#FAF7F2" : "#28231D"} 
            strokeWidth="1.8" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {!isMarkOnly && (
        <div className="flex flex-col text-left">
          <span 
            className={`font-serif font-semibold tracking-tight leading-none transition-colors ${titleSizes} ${
              isDark 
                ? 'text-[#28231D] group-hover:text-[#446353]' 
                : 'text-[#FAF7F2] group-hover:text-[#E7EFEA]'
            }`}
          >
            {BUSINESS_CONFIG.brandName}
          </span>
          {showTagline && (
            <span 
              className={`text-[10px] uppercase tracking-[0.22em] font-sans font-medium mt-1 ${
                isDark ? 'text-[#8C8275]' : 'text-[#AFA496]'
              }`}
            >
              Sanctuary · {BUSINESS_CONFIG.city}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
