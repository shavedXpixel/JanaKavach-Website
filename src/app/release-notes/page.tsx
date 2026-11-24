"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, CheckCircle2, Copy, Check, ArrowLeft, Download } from "lucide-react";

export default function ReleaseNotesPage() {
  const { language } = useLanguage();
  const isOdia = language === "or";
  const [copied, setCopied] = useState(false);

  const sha256Checksum =
    "CFAF580987FB3927CA12E62B18E5293CA529A79CA5C39469C244FB8F577D1048";

  const handleCopy = () => {
    navigator.clipboard.writeText(sha256Checksum).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const highlights = [
    {
      title: isOdia ? "୧୫୮ଟି CMRF ଆଶ୍ରୟସ୍ଥଳୀ API ଓ ଅଫଲାଇନ୍ କ୍ୟାଶିଂ" : "158 CMRF Shelter Directory with Offline Caching",
      desc: isOdia
        ? "ମୁଖ୍ୟମନ୍ତ୍ରୀ ରିଲିଫ୍ ପାଣ୍ଠି ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା ପ୍ରଡକ୍ସନ୍ API ରୁ ଡାଉନଲୋଡ୍ ହୋଇ ସ୍ଥାନୀୟ ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା SQLite ଡାଟାବେସରେ କ୍ୟାଶ୍ ରହେ (ପ୍ରଶାସନିକ କେନ୍ଦ୍ରବିନ୍ଦୁ, Status Unknown)।"
        : "Chief Minister's Relief Fund disaster shelters fetched from the production API and cached in local encrypted storage. Displays administrative centroid coordinates with UNKNOWN operational readiness (not pre-bundled on a fresh offline install).",
    },
    {
      title: isOdia ? "ସମ୍ପୂର୍ଣ୍ଣ ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଭାଷା ବିକଳ୍ପ" : "Bilingual Odia & English Persistence",
      desc: isOdia
        ? "ଶୁଦ୍ଧ ଓଡ଼ିଆ ଅକ୍ଷର (Noto Sans Oriya) ଏବଂ ସ୍ଥାୟୀ ଭାଷା ପସନ୍ଦ ନିୟନ୍ତ୍ରଣ।"
        : "Full bilingual localization across all screens with instant toggling and persistent local preference storage.",
    },
    {
      title: isOdia ? "କେବଳ ଆଗଭୂମି ଅବସ୍ଥାନ ନିୟନ୍ତ୍ରଣ" : "Foreground-Only Location Onboarding",
      desc: isOdia
        ? "ନାଗରିକଙ୍କ ସୁରକ୍ଷା ପାଇଁ ଶୂନ ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଟ୍ରାକିଂ ସହ ସ୍ପଷ୍ଟ ସୂଚନା।"
        : "Transparent privacy onboarding clarifying that GPS access is strictly foreground and never runs continuously in the background.",
    },
    {
      title: isOdia ? "ଅଫଲାଇନ୍ ବିପର୍ଯ୍ୟୟ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ" : "Offline OSDMA Disaster Safety Guides",
      desc: isOdia
        ? "ବାତ୍ୟା, ବନ୍ୟା, ବଜ୍ରପାତ ଓ ଅଂଶୁଘାତ ପାଇଁ OSDMA ସୁରକ୍ଷା ନିୟମାବଳୀ ବିନା ଇଣ୍ଟରନେଟରେ ଉପଲବ୍ଧ।"
        : "Emergency checklists for Cyclone, Flood, Lightning, and Heat Waves embedded locally for instant readability during zero-connectivity blackouts.",
    },
    {
      title: isOdia ? "ସ୍ଥାନୀୟ ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ରିପୋର୍ଟ ଷ୍ଟୋରେଜ୍" : "Encrypted Local Report Storage",
      desc: isOdia
        ? "ନାଗରିକଙ୍କ ନିରୀକ୍ଷଣ କେବଳ ଫୋନର ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା SQLite ଡାଟାବେସରେ ସୁରକ୍ଷିତ ରହେ। ଗବେଷଣା ପାଇଲଟରେ କ୍ଲାଉଡ୍ ପ୍ରେରଣ ନିଷ୍କ୍ରିୟ ରହିଛି।"
        : "Store-and-record capability allowing citizens to log observations safely on-device in an encrypted SQLite database. Cloud submission and background sync remain disabled during this research pilot.",
    },
    {
      title: isOdia ? "IMD RSMC ଓ NDMA ସତର୍କତା ବୁଲେଟିନ୍" : "IMD RSMC & NDMA Alert Feed Parser",
      desc: isOdia
        ? "ପାଣିପାଗ ବିଭାଗରୁ ପ୍ରତ୍ୟକ୍ଷ ସତର୍କତା ଓ ସ୍ୱଚ୍ଛ ସମୟ ଯାଞ୍ଚ।"
        : "Automated ingestion and verification timestamps for official IMD weather warnings and NDMA SACHET public bulletins.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F1E5]">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B3028] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isOdia ? "ମୂଳପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ" : "Return to Homepage"}</span>
          </Link>
        </div>

        {/* Release Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2D9CC] shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17655B]/10 text-[#17655B] text-xs font-semibold mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Production Release Dossier</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight">
              JanaKavach v1.0.3
            </h1>
            <span className="font-mono text-xs bg-[#E3A84B]/20 text-[#8B3028] font-bold px-3 py-1 rounded-full w-fit">
              Build 6 (Universal)
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {isOdia
              ? "ଓଡ଼ିଶା AI ହାକାଥନ୍ ପାଇଁ ସ୍ଥାୟୀ RSA-4096 କ୍ରିପ୍ଟୋଗ୍ରାଫିକ୍ କିଷ୍ଟୋର ଦ୍ୱାରା ସ୍ୱାକ୍ଷରିତ ଏବଂ ୩୮୧ଟି ସ୍ୱୟଂଚାଳିତ ପରୀକ୍ଷାରେ ଯାଞ୍ଚ ହୋଇଥିବା ସାର୍ବଜନୀନ ରିଲିଜ୍।"
              : "Official universal release for the Odisha AI Hackathon research pilot. Permanent RSA-4096 release signing verified, validated against 381 automated Flutter tests."}
          </p>

          {/* Quick Specs */}
          <div className="mt-8 pt-8 border-t border-[#E8DFC9] grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Size</span>
              <span className="font-semibold text-[#1E2522]">59.8 MB</span>
            </div>
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Signing Key</span>
              <span className="font-semibold text-[#17655B]">Permanent RSA-4096</span>
            </div>
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Min Android</span>
              <span className="font-semibold text-[#1E2522]">Android 7.0 (API 24)</span>
            </div>
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Target SDK</span>
              <span className="font-semibold text-[#1E2522]">Android 16 (API 36)</span>
            </div>
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Test Suite</span>
              <span className="font-semibold text-[#17655B]">381 Tests Passed</span>
            </div>
          </div>
        </div>

        {/* SHA-256 Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] mb-10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B3028]">
              SHA-256 Release Checksum
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17655B] bg-[#FAF6EF] border border-[#E2D9CC] px-2.5 py-1 rounded-md"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Checksum</span>
                </>
              )}
            </button>
          </div>
          <p className="font-mono text-xs break-all text-[#1E2522] bg-[#FAF6EF] p-3 rounded-lg border border-[#E2D9CC] select-all">
            {sha256Checksum}
          </p>
        </div>

        {/* Release Highlights */}
        <div className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl font-bold text-[#8B3028]">
            {isOdia ? "ପ୍ରମୁଖ ପରିବର୍ତ୍ତନ ଓ ବୈଶିଷ୍ଟ୍ୟ" : "Release Highlights & Verified Changes"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#E2D9CC] space-y-2 shadow-2xs"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-[#1E2522]">
                  <CheckCircle2 className="w-4 h-4 text-[#17655B] shrink-0" />
                  <h3>{h.title}</h3>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Link Footer */}
        <div className="text-center pt-6">
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 bg-[#8B3028] hover:bg-[#6E221B] text-[#F7F1E5] font-semibold text-xs px-6 py-3.5 rounded-xl shadow-xs transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Go to Download Section</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
