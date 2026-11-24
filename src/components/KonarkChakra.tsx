import React from "react";

interface KonarkChakraProps {
  className?: string;
  size?: number;
  opacity?: number;
  color?: string;
}

export function KonarkChakra({
  className = "",
  size = 400,
  opacity = 0.08,
  color = "#8B3028",
}: KonarkChakraProps) {
  // Konark Sun Temple Wheel: 24 spokes (8 major carved spokes with medallions, 16 minor spokes)
  const totalSpokes = 24;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-opacity duration-700 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Outer Rim Bands */}
      <circle cx="250" cy="250" r="236" stroke={color} strokeWidth="6" />
      <circle cx="250" cy="250" r="224" stroke={color} strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="250" cy="250" r="212" stroke={color} strokeWidth="4" />
      <circle cx="250" cy="250" r="198" stroke={color} strokeWidth="2" />

      {/* Decorative Beaded Outer Rim */}
      {Array.from({ length: 48 }).map((_, i) => {
        const angle = (i * 360) / 48;
        const rad = (angle * Math.PI) / 180;
        const cx = 250 + 205 * Math.cos(rad);
        const cy = 250 + 205 * Math.sin(rad);
        return <circle key={`bead-${i}`} cx={cx} cy={cy} r="3" fill={color} />;
      })}

      {/* 24 Spokes: 8 Major with Medallions, 16 Minor */}
      {Array.from({ length: totalSpokes }).map((_, i) => {
        const angle = (i * 360) / totalSpokes;
        const isMajor = i % 3 === 0;
        const strokeWidth = isMajor ? 5 : 2.5;

        return (
          <g key={`spoke-${i}`} transform={`rotate(${angle} 250 250)`}>
            <line
              x1="250"
              y1="250"
              x2="250"
              y2="52"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {isMajor && (
              <>
                {/* Major Spoke Circular Medallion */}
                <circle cx="250" cy="140" r="14" fill="#F7F1E5" stroke={color} strokeWidth="3" />
                <circle cx="250" cy="140" r="6" fill={color} />
                <circle cx="250" cy="90" r="6" fill={color} />
              </>
            )}
            {!isMajor && (
              <circle cx="250" cy="150" r="4" fill={color} />
            )}
          </g>
        );
      })}

      {/* Inner Hub Rings */}
      <circle cx="250" cy="250" r="62" stroke={color} strokeWidth="4" />
      <circle cx="250" cy="250" r="50" stroke={color} strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="250" cy="250" r="38" stroke={color} strokeWidth="5" />

      {/* Central Axle Hub */}
      <circle cx="250" cy="250" r="22" fill={color} />
      <circle cx="250" cy="250" r="10" fill="#F7F1E5" />
    </svg>
  );
}
