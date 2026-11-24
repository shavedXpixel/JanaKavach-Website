"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Wifi, WifiOff, HardDrive, Signal, AlertTriangle } from "lucide-react";

export function OfflineSection() {
  const { t } = useLanguage();

  return (
    <section id="offline" className="py-24 bg-white border-y border-[#E2D9CC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17655B]/10 text-[#17655B] text-xs font-semibold mb-3">
            <WifiOff className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.offline.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.offline.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.offline.subtitle}
          </p>
        </div>

        {/* Offline vs Online Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Offline Available */}
          <div className="bg-[#FAF6EF] rounded-3xl p-6 sm:p-8 border-2 border-[#17655B]/30 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#17655B] text-white flex items-center justify-center shrink-0">
                <HardDrive className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#17655B]">
                  No Internet Required
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2522]">
                  {t.offline.availableTitle}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {t.offline.availableDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-white border border-[#E2D9CC] text-[#17655B] font-semibold px-2.5 py-1 rounded-md">
                ✓ OSDMA Safety Guides
              </span>
              <span className="bg-white border border-[#E2D9CC] text-[#17655B] font-semibold px-2.5 py-1 rounded-md">
                ✓ Local Incident Drafts
              </span>
              <span className="bg-white border border-[#E2D9CC] text-[#17655B] font-semibold px-2.5 py-1 rounded-md">
                ✓ Cached Shelters
              </span>
              <span className="bg-white border border-[#E2D9CC] text-[#17655B] font-semibold px-2.5 py-1 rounded-md">
                ✓ English & Odia UI
              </span>
            </div>
          </div>

          {/* Online Information Retrieval */}
          <div className="bg-[#FAF6EF] rounded-3xl p-6 sm:p-8 border border-[#E2D9CC] shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B3028] text-white flex items-center justify-center shrink-0">
                <Wifi className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B3028]">
                  Service Reachable
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E2522]">
                  {t.offline.onlineTitle}
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {t.offline.onlineDesc}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-white border border-[#E2D9CC] text-[#8B3028] font-semibold px-2.5 py-1 rounded-md">
                ↑ Latest Sensor Forecasts
              </span>
              <span className="bg-white border border-[#E2D9CC] text-[#8B3028] font-semibold px-2.5 py-1 rounded-md">
                ↑ IMD RSMC Alerts
              </span>
              <span className="bg-white border border-[#E2D9CC] text-[#8B3028] font-semibold px-2.5 py-1 rounded-md">
                ↑ NDMA SACHET Bulletins
              </span>
              <span className="bg-white border border-[#E2D9CC] text-[#8B3028] font-semibold px-2.5 py-1 rounded-md">
                ↑ CMRF Shelter Sync
              </span>
            </div>
          </div>
        </div>

        {/* Realistic Safety Disclaimer Callout */}
        <div className="bg-[#8B3028]/5 border border-[#8B3028]/25 rounded-2xl p-4 mb-12 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#8B3028] shrink-0 mt-0.5" />
          <p className="text-xs text-[#8B3028] font-medium leading-relaxed">
            {t.offline.disclaimerNotice}
          </p>
        </div>

        {/* L0 - L4 Degradation Hierarchy */}
        <div className="bg-[#FAF6EF] rounded-3xl p-6 sm:p-10 border border-[#E2D9CC]">
          <h3 className="font-serif text-xl font-bold text-[#1E2522] mb-6 flex items-center gap-2">
            <Signal className="w-5 h-5 text-[#17655B]" />
            <span>Communication Channel Hierarchy & Operational Status</span>
          </h3>

          <div className="space-y-3">
            {t.offline.matrix.map((row, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-4 sm:p-5 border grid grid-cols-1 md:grid-cols-12 gap-3 items-center ${
                  row.isRoadmap ? "border-[#E2D9CC] bg-[#FAFAF8]" : "border-[#E2D9CC]"
                }`}
              >
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#8B3028]">
                      {row.level}
                    </span>
                    {row.isRoadmap && (
                      <span className="bg-[#E3A84B]/20 text-[#8B3028] text-[9px] uppercase font-bold px-1.5 py-0.5 rounded">
                        Roadmap
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#718096] mt-0.5">{row.condition}</p>
                </div>
                <div className="md:col-span-3">
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded ${
                      row.isRoadmap
                        ? "bg-[#718096]/10 text-[#718096]"
                        : "bg-[#17655B]/10 text-[#17655B]"
                    }`}
                  >
                    {row.channel}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {row.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
