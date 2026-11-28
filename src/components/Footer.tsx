"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Shield, ExternalLink, FileText, Lock, AlertTriangle } from "lucide-react";
import { OdishaPattern } from "./OdishaPattern";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1E2522] text-[#F7F1E5] pt-16 pb-12 border-t border-[#8B3028]/40 relative overflow-hidden">
      <OdishaPattern variant="strip" className="absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#F7F1E5]/10">
          {/* Brand & Attribution Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-[#E3A84B]">
                <Image
                  src="/janakavach_icon.png"
                  alt="JanaKavach Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#F7F1E5]">
                  JanaKavach
                </span>
                <span className="ml-2 text-sm font-semibold text-[#E3A84B] font-odia">
                  (ଜନକବଚ)
                </span>
                <p className="text-xs text-[#E3A84B] font-medium tracking-wide">
                  {t.footer.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#FAF6EF]/80 leading-relaxed max-w-xl">
              {t.footer.hackathonAttribution}
            </p>

            <div className="bg-[#8B3028]/30 border border-[#8B3028]/60 rounded-md p-3 text-xs text-[#FAF6EF]/90 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-[#E3A84B] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{t.footer.prototypeNotice}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E3A84B]">
              {t.footer.navigationHeader}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/#about"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors"
                >
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors"
                >
                  {t.footer.links.features}
                </Link>
              </li>
              <li>
                <Link
                  href="/#offline"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors"
                >
                  {t.nav.offline}
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors flex items-center gap-1"
                >
                  <span>{t.footer.links.download}</span>
                  <span className="text-[10px] bg-[#8B3028] text-white px-1.5 py-0.2 rounded font-mono">
                    v1.0.10
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="https://jana-kavach-cloud.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors inline-flex items-center gap-1"
                >
                  <span>{t.footer.links.officerPortal}</span>
                  <ExternalLink className="w-3 h-3 text-[#E3A84B]" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Governance & Privacy Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E3A84B]">
              {t.footer.legalHeader}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-[#E3A84B]" aria-hidden="true" />
                  <span>{t.footer.links.privacy}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3 h-3 text-[#E3A84B]" aria-hidden="true" />
                  <span>{t.footer.links.disclaimer}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/release-notes"
                  className="text-[#FAF6EF]/80 hover:text-[#E3A84B] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-[#E3A84B]" aria-hidden="true" />
                  <span>{t.footer.links.releaseNotes}</span>
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-[#FAF6EF]/60 leading-normal">
              Built with Next.js, TypeScript & Tailwind CSS. Free & open-source stack. Mandatory budget: ₹0.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6EF]/60 gap-4">
          <p>{t.footer.allRightsReserved}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Release Keystore Verified</span>
            <span>•</span>
            <span>381 Automated Tests Passed</span>
            <span>•</span>
            <span>Offline-First Invariant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
