"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ExternalLink, Globe, Shield } from "lucide-react";
import { OdishaPattern } from "./OdishaPattern";

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#features", label: t.nav.features },
    { href: "/#how-it-works", label: t.nav.howItWorks },
    { href: "/#offline", label: t.nav.offline },
    { href: "/#screenshots", label: t.nav.screenshots },
    { href: "/#download", label: t.nav.download },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F1E5]/95 backdrop-blur-md shadow-sm border-b border-[#E2D9CC]"
            : "bg-[#F7F1E5] border-b border-[#E8DFC9]/60"
        }`}
      >
        <OdishaPattern variant="strip" />

        {/* Research Pilot Banner */}
        <div className="bg-[#8B3028] text-[#F7F1E5] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#E3A84B] shrink-0" aria-hidden="true" />
          <span>{t.brand.pilotBadge}</span>
          <span className="hidden md:inline text-[#E3A84B]">•</span>
          <span className="hidden md:inline text-xs text-[#F7F1E5]/80 font-normal">
            {t.brand.pilotNotice}
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028] rounded-lg p-1"
            >
              <div className="relative w-11 h-11 shrink-0 rounded-lg overflow-hidden shadow-xs border border-[#8B3028]/20 bg-white p-0.5 group-hover:scale-105 transition-transform">
                <Image
                  src="/janakavach_icon.png"
                  alt="JanaKavach Shield Emblem"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#8B3028] group-hover:text-[#6E221B] transition-colors">
                    JanaKavach
                  </span>
                  <span className="text-sm font-semibold text-[#17655B] font-odia">
                    (ଜନକବଚ)
                  </span>
                </div>
                <span className="text-xs text-[#4A5568] hidden sm:block tracking-normal font-medium">
                  {t.brand.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#1E2522] hover:text-[#8B3028] hover:bg-[#8B3028]/5 px-3.5 py-2 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028]"
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Switcher */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={`Switch language to ${language === "en" ? "Odia" : "English"}`}
                className="ml-2 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-[#8B3028]/30 bg-white/80 text-[#8B3028] hover:bg-[#8B3028] hover:text-[#F7F1E5] transition-all shadow-2xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028]"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.nav.switchLang}</span>
              </button>

              {/* Officer Portal Link */}
              <a
                href="https://jana-kavach-cloud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-1.5 bg-[#17655B] hover:bg-[#0F4941] text-[#F7F1E5] text-xs font-semibold px-4 py-2 rounded-md transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17655B]"
              >
                <span>{t.nav.officerPortal}</span>
                <span className="bg-[#E3A84B] text-[#1E2522] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-wide">
                  {t.nav.officerBadge}
                </span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" aria-hidden="true" />
              </a>
            </nav>

            {/* Mobile Header Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={`Switch language to ${language === "en" ? "Odia" : "English"}`}
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-[#8B3028]/30 bg-white text-[#8B3028]"
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.nav.switchLang}</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
                className="p-2 rounded-md text-[#8B3028] hover:bg-[#8B3028]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-[110px] bottom-0 bg-[#F7F1E5] z-50 overflow-y-auto border-t border-[#E2D9CC] px-6 py-8 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1E2522] hover:text-[#8B3028] hover:bg-[#8B3028]/5 py-3 px-4 rounded-lg transition-colors border-b border-[#E8DFC9]/40"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://jana-kavach-cloud.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-between bg-[#17655B] text-[#F7F1E5] py-3.5 px-4 rounded-lg font-semibold shadow-xs"
              >
                <span className="flex items-center gap-2">
                  <span>{t.nav.officerPortal}</span>
                  <span className="bg-[#E3A84B] text-[#1E2522] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">
                    {t.nav.officerBadge}
                  </span>
                </span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#E2D9CC] text-xs text-[#718096] text-center space-y-2">
              <p className="font-medium text-[#8B3028]">{t.brand.pilotBadge}</p>
              <p>{t.brand.pilotNotice}</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
