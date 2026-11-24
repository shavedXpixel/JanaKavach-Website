"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  CloudSun,
  Radio,
  BookOpen,
  Building2,
  Navigation,
  Languages,
  Shield,
  Database,
  Inbox,
  LayoutDashboard,
  AlertOctagon,
  Check,
} from "lucide-react";

export function FeaturesSection() {
  const { t } = useLanguage();

  const featureIcons = [
    CloudSun,
    Radio,
    BookOpen,
    Building2,
    Navigation,
    Languages,
    Shield,
    Database,
    Inbox,
    LayoutDashboard,
  ];

  return (
    <section id="features" className="py-24 bg-[#F7F1E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17655B]/10 text-[#17655B] text-xs font-semibold mb-3">
            <span>{t.features.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 10 Strictly Implemented Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-green-600" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E2522]">
              {t.features.implementedTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {t.features.items.map((item, idx) => {
              const Icon = featureIcons[idx] || Check;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2D9CC] shadow-2xs hover:shadow-xs transition-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#17655B]/10 text-[#17655B] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-[#1E2522]">
                        {item.title}
                      </h4>
                      <span className="bg-[#17655B]/15 text-[#17655B] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explicit Research Pilot Boundary: What is NOT Implemented */}
        <div className="bg-[#8B3028]/5 rounded-3xl p-6 sm:p-10 border-2 border-[#8B3028]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-[#8B3028] text-white flex items-center justify-center shrink-0">
              <AlertOctagon className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#8B3028]">
                {t.features.roadmapTitle}
              </h3>
              <p className="text-xs text-[#4A5568] mt-0.5">
                {t.features.notImplementedNotice}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {t.features.roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 border border-[#8B3028]/20 shadow-2xs"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#8B3028] mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B3028]" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
