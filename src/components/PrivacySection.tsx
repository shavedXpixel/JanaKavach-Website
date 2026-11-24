"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Lock, Shield, CheckCircle2, ArrowRight } from "lucide-react";

export function PrivacySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white border-y border-[#E2D9CC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17655B]/10 text-[#17655B] text-xs font-semibold mb-3">
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.privacy.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.privacy.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.privacy.subtitle}
          </p>
        </div>

        {/* 6 Key Privacy Guardrails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.privacy.points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6EF] rounded-2xl p-6 border border-[#E2D9CC] space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2522] mb-1 font-serif">
                  <CheckCircle2 className="w-4 h-4 text-[#17655B] shrink-0" />
                  <span>{pt.title}</span>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Links CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-[#8B3028] hover:text-[#6E221B] font-bold border border-[#8B3028]/30 px-4 py-2.5 rounded-lg bg-white hover:bg-[#FAF6EF] transition-colors"
          >
            <span>{t.privacy.viewFullPolicy}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/disclaimer"
            className="inline-flex items-center gap-2 text-[#17655B] hover:text-[#0F4941] font-bold border border-[#17655B]/30 px-4 py-2.5 rounded-lg bg-white hover:bg-[#FAF6EF] transition-colors"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{t.privacy.viewDisclaimer}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
