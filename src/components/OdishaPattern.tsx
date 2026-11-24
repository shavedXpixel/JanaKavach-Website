import React from "react";

interface OdishaPatternProps {
  className?: string;
  variant?: "strip" | "temple" | "subtle";
}

export function OdishaPattern({ className = "", variant = "strip" }: OdishaPatternProps) {
  if (variant === "subtle") {
    return (
      <div className={`h-[2px] w-full bg-gradient-to-r from-transparent via-[#8B3028]/30 via-[#E3A84B]/40 to-transparent ${className}`} />
    );
  }

  if (variant === "temple") {
    return (
      <div className={`flex items-center justify-center gap-2 py-4 select-none ${className}`} aria-hidden="true">
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#8B3028]/40" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#8B3028]">
          <path
            d="M12 2L4 10V21H20V10L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M12 2V8" stroke="#E3A84B" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 14H15V21H9V14Z" fill="#8B3028" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#8B3028]/40" />
      </div>
    );
  }

  return (
    <div className={`odisha-border-strip ${className}`} aria-hidden="true" />
  );
}
