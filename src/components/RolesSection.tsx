"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Smartphone, LayoutDashboard, ExternalLink, ShieldAlert, Check } from "lucide-react";

export function RolesSection() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 bg-[#F7F1E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B3028]/10 text-[#8B3028] text-xs font-semibold mb-3">
            <span>{t.roles.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.roles.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.roles.subtitle}
          </p>
        </div>

        {/* Dual Roles Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Citizen Companion */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2D9CC] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#8B3028]/10 text-[#8B3028] flex items-center justify-center">
                <Smartphone className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#8B3028]">
                  {t.roles.citizenTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5568] mt-1 leading-relaxed">
                  {t.roles.citizenDesc}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2">
                {t.roles.citizenPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#1E2522]">
                    <Check className="w-4 h-4 text-[#17655B] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E8DFC9]">
              <a
                href="#download"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8B3028] hover:underline"
              >
                <span>Download Citizen APK (v1.0.3)</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Officer Response Cockpit */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2D9CC] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#17655B]/10 text-[#17655B] flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-2xl font-bold text-[#17655B]">
                    {t.roles.officerTitle}
                  </h3>
                  <span className="bg-[#E3A84B] text-[#1E2522] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
                    Authorized
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A5568] mt-1 leading-relaxed">
                  {t.roles.officerDesc}
                </p>
              </div>

              <ul className="space-y-2.5 pt-2">
                {t.roles.officerPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#1E2522]">
                    <Check className="w-4 h-4 text-[#17655B] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E8DFC9]">
              <a
                href="https://jana-kavach-cloud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#17655B] hover:bg-[#0F4941] text-[#F7F1E5] text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                <span>{t.roles.portalAction}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Read-Only Shelter Management Guardrail Notice */}
        <div className="bg-[#FAF6EF] border border-[#E2D9CC] rounded-2xl p-5 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#8B3028] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-[#4A5568] leading-relaxed">
            {t.roles.readOnlyNotice}
          </p>
        </div>
      </div>
    </section>
  );
}
