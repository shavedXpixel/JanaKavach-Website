"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Wind, Waves, Zap, SunMedium, WifiOff, Layers } from "lucide-react";
import { OdishaPattern } from "./OdishaPattern";

export function ProblemSection() {
  const { t } = useLanguage();

  const hazards = [
    {
      icon: Wind,
      title: t.problem.cyclones.title,
      desc: t.problem.cyclones.desc,
      color: "text-[#8B3028]",
      bg: "bg-[#8B3028]/10",
      border: "border-[#8B3028]/20",
    },
    {
      icon: Waves,
      title: t.problem.floods.title,
      desc: t.problem.floods.desc,
      color: "text-[#17655B]",
      bg: "bg-[#17655B]/10",
      border: "border-[#17655B]/20",
    },
    {
      icon: Zap,
      title: t.problem.lightning.title,
      desc: t.problem.lightning.desc,
      color: "text-[#C6892E]",
      bg: "bg-[#E3A84B]/15",
      border: "border-[#E3A84B]/30",
    },
    {
      icon: SunMedium,
      title: t.problem.heatwave.title,
      desc: t.problem.heatwave.desc,
      color: "text-[#8B3028]",
      bg: "bg-[#8B3028]/10",
      border: "border-[#8B3028]/20",
    },
    {
      icon: WifiOff,
      title: t.problem.blackouts.title,
      desc: t.problem.blackouts.desc,
      color: "text-[#1E2522]",
      bg: "bg-[#1E2522]/10",
      border: "border-[#1E2522]/20",
    },
    {
      icon: Layers,
      title: t.problem.fragmentation.title,
      desc: t.problem.fragmentation.desc,
      color: "text-[#17655B]",
      bg: "bg-[#17655B]/10",
      border: "border-[#17655B]/20",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-[#E2D9CC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B3028]/10 text-[#8B3028] text-xs font-semibold mb-3">
            <span>{t.problem.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.problem.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.problem.subtitle}
          </p>
          <OdishaPattern variant="temple" />
        </div>

        {/* 6 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hazards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF6EF] rounded-2xl p-6 sm:p-7 border border-[#E2D9CC] transition-all hover:shadow-sm hover:border-[#8B3028]/30 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E2522] mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
