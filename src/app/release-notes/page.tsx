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
    "8B69D5317D5F3942ED0C713D4CC325EBCEF4B7B4C7AF9554D99452DF6F1D2503";

  const handleCopy = () => {
    navigator.clipboard.writeText(sha256Checksum).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const highlights = [
    {
      title: isOdia ? "Hazard Watch ସିଙ୍କ୍ରୋନାଇଜେସନ୍ ସମାଧାନ" : "Fixed Hazard Watch Synchronization",
      desc: isOdia
        ? "ଭିତ୍ତିଭୂମି ବିପଦ ରିପୋର୍ଟ ସିଙ୍କ୍ରୋନାଇଜେସନ୍ ତ୍ରୁଟିର ସମାଧାନ କରି ପ୍ରଡକ୍ସନ୍ API ସହ ସଠିକ୍ ସଂଯୋଗ ସୁନିଶ୍ଚିତ କରାଯାଇଛି।"
        : "Resolved Hazard Watch outbox synchronization so consented public infrastructure hazard reports transmit reliably to the production backend.",
    },
    {
      title: isOdia ? "Hazard Watch ପାଇଁ ସ୍ପଷ୍ଟ ଗବେଷଣା ସମ୍ମତି" : "Explicit Hazard Watch Research Exercise Consent",
      desc: isOdia
        ? "Hazard Watch ରିପୋର୍ଟ ଦାଖଲ ପୂର୍ବରୁ ସ୍ପଷ୍ଟ ଗବେଷଣା ଅଭ୍ୟାସ ସମ୍ମତି ଏବଂ DEMO_SYNTHETIC ଉତ୍ସ ଯୋଗ କରାଯାଇଛି।"
        : "Added explicit research exercise consent and DEMO_SYNTHETIC provenance on Hazard Watch submissions (dial 112 for genuine emergencies).",
    },
    {
      title: isOdia ? "ସଠିକ୍ ସଂଯୋଗ ତ୍ରୁଟି ସୂଚନା" : "Corrected Misleading Connectivity Error Messages",
      desc: isOdia
        ? "HTTP 403 ସମ୍ମତି ବା ଅନୁମତି ତ୍ରୁଟିକୁ 'ସର୍ଭିସ୍ ଅପହଞ୍ଚ' ବଦଳରେ ସଠିକ୍ ତ୍ରୁଟି ସୂଚନା ଭାବରେ ଦର୍ଶାଯାଇଛି।"
        : "Fixed outbox error classification so HTTP 403 consent/authorization responses no longer display misleading 'service unreachable' statuses.",
    },
    {
      title: isOdia ? "ପୃଥକ୍ Incident ଓ Hazard Watch ଇଣ୍ଟରଫେସ୍" : "Separated Incident Management & Hazard Watch Interfaces",
      desc: isOdia
        ? "ଜରୁରୀକାଳୀନ ଘଟଣା ପରିଚାଳନା ଏବଂ ସାର୍ବଜନୀନ ଭିତ୍ତିଭୂମି ବିପଦ ନିରୀକ୍ଷଣକୁ ପୃଥକ୍ ଧାଡ଼ି ଓ ଶବ୍ଦାବଳୀରେ ବିଭକ୍ତ କରାଯାଇଛି।"
        : "Separated Emergency Incident Management and Public Works Hazard Watch into independent queues, domain filters, and tailored assessment terminology.",
    },
    {
      title: isOdia ? "ସ୍ୱତନ୍ତ୍ର Hazard Report Details ପୃଷ୍ଠା" : "Dedicated Hazard Report Details Page",
      desc: isOdia
        ? "ଭିତ୍ତିଭୂମି ବିପଦ ରିପୋର୍ଟଗୁଡ଼ିକର ସମୀକ୍ଷା ଓ ଅଡିଟ୍ ଟ୍ରେଲ୍ ପାଇଁ ସ୍ୱତନ୍ତ୍ର /dashboard/hazard-watch/[id] ପୃଷ୍ଠା ଯୋଗ କରାଯାଇଛି।"
        : "Added a dedicated Hazard Report Details route with domain validation, infrastructure risk assessment, status history, and cryptographic audit trail.",
    },
    {
      title: isOdia ? "Incidents, SOS ଓ Hazards ପାଇଁ Research Exercises ଫିଲ୍ଟର୍" : "Research Exercises Filters Across Queues",
      desc: isOdia
        ? "Incident, Quiet Help SOS ଏବଂ Hazard Watch ଧାଡ଼ିରେ ପ୍ରକୃତ ଜରୁରୀ ଓ ଗବେଷଣା ରିପୋର୍ଟକୁ ପୃଥକ୍ ରଖିବା ପାଇଁ ଫିଲ୍ଟର୍।"
        : "Added Operational vs. Research Exercises filters and provenance badges across Incident, Quiet Help SOS, and Hazard Watch queues.",
    },
    {
      title: isOdia ? "ଭୂମିକା-ଆଧାରିତ ଅନୁମତି ନିୟନ୍ତ୍ରଣ" : "Permission-Aware Controls (Viewer, Officer, Lead)",
      desc: isOdia
        ? "PILOT_VIEWER ଆକାଉଣ୍ଟ ପାଇଁ ସଂଶୋଧନ ବଟନ୍ ନିଷ୍କ୍ରିୟ କରି PILOT_OFFICER ଓ PILOT_LEAD ପାଇଁ ଅନୁମୋଦିତ କାର୍ଯ୍ୟ ସୁରକ୍ଷିତ ରଖାଯାଇଛି।"
        : "Enforced role-aware UI controls disabling mutations for PILOT_VIEWER accounts while preserving authorized actions for PILOT_OFFICER and PILOT_LEAD.",
    },
    {
      title: isOdia ? "Google Maps ଆଶ୍ରୟସ୍ଥଳୀ ସନ୍ଧାନ ଓ ସ୍ଥିରତା" : "Preserved Google Maps Shelter Search & Functionality",
      desc: isOdia
        ? "ବ୍ୟକ୍ତିଗତ Google Maps ଆଶ୍ରୟସ୍ଥଳୀ ସନ୍ଧାନ, ଅଫଲାଇନ୍ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ, WeatherAPI ଏବଂ ନାଗରିକ ଡାଟା ବିଲୋପ ସୁରକ୍ଷିତ ରହିଛି।"
        : "Preserved individual Google Maps shelter search, offline safety guides, WeatherAPI integration, and citizen deletion controls (538/538 Flutter tests passed, 0 analyzer issues, 55 dashboard routes built, APK signature verified).",
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
              JanaKavach v1.0.10
            </h1>
            <span className="font-mono text-xs bg-[#E3A84B]/20 text-[#8B3028] font-bold px-3 py-1 rounded-full w-fit">
              Build 13 (Research Beta)
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {isOdia
              ? "ଓଡ଼ିଶା ପାଇଁ ସ୍ୱତନ୍ତ୍ର ଛାତ୍ର ଗବେଷଣା ପ୍ରକଳ୍ପ (Research Beta) ରିଲିଜ୍। ୫୩୮/୫୩୮ ଫ୍ଲଟର୍ ପରୀକ୍ଷା ଉତ୍ତୀର୍ଣ୍ଣ, ୦ ଆନାଲାଇଜର୍ ତ୍ରୁଟି, ୫୫ଟି ଡ୍ୟାସବୋର୍ଡ ରୁଟ୍ ନିର୍ମିତ ଏବଂ ଯାଞ୍ଚ ହୋଇଥିବା RSA 4096-bit ଦ୍ୱାରା ସ୍ୱାକ୍ଷରିତ।"
              : "Research Beta Android release for JanaKavach (AI for a Safer and Smarter Odisha). Verified: 538/538 Flutter tests passed, 0 analyzer issues, 55 officer dashboard routes built, and Verified RSA 4096-bit APK signature. Independent student research project — dial 112 for emergencies."}
          </p>

          {/* Quick Specs */}
          <div className="mt-8 pt-8 border-t border-[#E8DFC9] grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Size</span>
              <span className="font-semibold text-[#1E2522]">65.5 MB</span>
            </div>
            <div>
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Signing Key</span>
              <span className="font-semibold text-[#17655B]">Verified RSA 4096-bit</span>
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
              <span className="text-[#718096] uppercase font-bold text-[10px] block">Channel</span>
              <span className="font-semibold text-[#17655B]">Research Beta</span>
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
