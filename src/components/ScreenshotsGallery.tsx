"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, CheckCircle2, ShieldCheck, Info } from "lucide-react";

export function ScreenshotsGallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = t.screenshots.items;
  const current = items[activeIndex];

  return (
    <section id="screenshots" className="py-24 bg-[#FAF6EF] border-y border-[#E2D9CC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17655B]/10 text-[#17655B] text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.screenshots.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.screenshots.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.screenshots.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#8B3028]/10 text-[#8B3028] text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-[#8B3028]" aria-hidden="true" />
            <span>{t.screenshots.realAppNotice}</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {items.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${item.id}`}
                id={`tab-${item.id}`}
                onClick={() => setActiveIndex(idx)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028] ${
                  isSelected
                    ? "bg-[#8B3028] text-[#F7F1E5] shadow-xs"
                    : "bg-white text-[#4A5568] hover:text-[#8B3028] hover:bg-[#F7F1E5] border border-[#E2D9CC]"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Phone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] rounded-[42px] p-3 bg-[#1E2522] shadow-2xl border-4 border-[#3A4540]">
              {/* Top Speaker & Camera Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#1E2522] rounded-full z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-[#3A4540] rounded-full" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#121715] ml-2" />
              </div>

              {/* Inner Screen Container */}
              <div
                id={`panel-${current.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.id}`}
                className="relative rounded-[32px] overflow-hidden bg-[#F7F1E5] aspect-[9/19.5] shadow-inner"
              >
                <Image
                  src={current.src}
                  alt={current.caption}
                  fill
                  className="object-cover object-top transition-opacity duration-300"
                  sizes="(max-width: 640px) 280px, 310px"
                  priority
                />
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-28 h-1 bg-[#F7F1E5]/30 rounded-full mx-auto mt-2" />
            </div>
          </div>

          {/* Screenshot Details & Breakdown Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#E8DFC9] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#17655B]">
                    {current.screenName}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#8B3028] mt-1">
                    {current.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8B3028]/10 text-[#8B3028] flex items-center justify-center font-mono font-bold text-sm">
                  0{activeIndex + 1}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1E2522] font-medium leading-relaxed">
                {current.caption}
              </p>

              <div className="bg-[#FAF6EF] rounded-xl p-4 border border-[#E2D9CC] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8B3028]">
                  <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Verified Screen Evidence</span>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {current.details}
                </p>
              </div>

              {/* Quick Screen Indicators */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-[#17655B] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Real App Rendered</span>
                </div>
                <div className="flex items-center gap-2 text-[#17655B] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Tested on Android</span>
                </div>
                <div className="flex items-center gap-2 text-[#17655B] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Bilingual Support</span>
                </div>
                <div className="flex items-center gap-2 text-[#17655B] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Zero Fabrication</span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8DFC9]">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))
                  }
                  className="text-xs font-semibold text-[#8B3028] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028] py-1 px-2 rounded"
                >
                  ← Previous Screen
                </button>
                <span className="text-xs text-[#718096]">
                  {activeIndex + 1} of {items.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))
                  }
                  className="text-xs font-semibold text-[#8B3028] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028] py-1 px-2 rounded"
                >
                  Next Screen →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
