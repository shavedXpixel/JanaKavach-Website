"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { KonarkChakra } from "./KonarkChakra";
import { Download, Compass, Shield, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#F7F1E5]">
      {/* Subtle Konark Chakra Background Watermark */}
      <div className="absolute -right-32 -top-20 hidden md:block">
        <KonarkChakra size={580} opacity={0.06} color="#8B3028" />
      </div>
      <div className="absolute -left-48 bottom-0 hidden lg:block">
        <KonarkChakra size={480} opacity={0.04} color="#17655B" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Research Pilot Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B3028]/10 border border-[#8B3028]/25 text-[#8B3028] text-xs font-semibold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#8B3028] animate-pulse" />
              <span>{t.brand.pilotBadge}</span>
              <span className="text-[#8B3028]/40">|</span>
              <span className="font-mono">{t.hero.releaseLabel}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#8B3028] tracking-tight leading-[1.15]">
              {t.hero.headline}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#1E2522] leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/#download"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8B3028] hover:bg-[#6E221B] text-[#F7F1E5] font-semibold text-sm px-6 py-4 rounded-xl shadow-md transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>{t.hero.downloadCta}</span>
              </Link>

              <Link
                href="/#features"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF6EF] text-[#1E2522] border border-[#E2D9CC] font-semibold text-sm px-6 py-4 rounded-xl transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2522]"
              >
                <Compass className="w-4 h-4 text-[#17655B]" aria-hidden="true" />
                <span>{t.hero.exploreCta}</span>
              </Link>
            </div>

            {/* Trust and Verification Specs */}
            <div className="pt-6 border-t border-[#E8DFC9] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#4A5568]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#17655B] shrink-0" />
                <span>{t.hero.testsPassed}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#17655B] shrink-0" />
                <span>{t.hero.verifiedSigning}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-green-600 shrink-0" />
                <span>{t.hero.platformLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Mobile App Preview */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Glow & Border Accents */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#8B3028]/15 via-[#E3A84B]/20 to-[#17655B]/15 rounded-[48px] blur-xl" />

              {/* Mobile Phone Mockup */}
              <div className="relative w-[285px] sm:w-[315px] rounded-[42px] p-3 bg-[#1E2522] shadow-2xl border-4 border-[#3A4540]">
                {/* Speaker & Sensor */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1E2522] rounded-full z-20 flex items-center justify-center">
                  <div className="w-10 h-1 bg-[#3A4540] rounded-full" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#121715] ml-2" />
                </div>

                {/* Real Screen Image (Redacted coordinates) */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#F7F1E5] aspect-[9/19.5]">
                  <Image
                    src="/screenshots/home-weather.jpg"
                    alt="JanaKavach Android App Home Dashboard"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) 285px, 315px"
                  />
                </div>

                {/* Bottom Bar */}
                <div className="w-28 h-1 bg-[#F7F1E5]/30 rounded-full mx-auto mt-2" />
              </div>

              {/* Floating Verified Feature Badge */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E2D9CC] shadow-xl max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[11px] font-bold text-[#17655B] uppercase tracking-wider">
                    {t.hero.offlineBadgeTitle}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#1E2522]">
                  {t.hero.offlineBadgeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
