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
    "95977A29F269BE082D61A30DD33EB4F3B4E5465B7E2B0565DF49FCF8603055AD";

  const handleCopy = () => {
    navigator.clipboard.writeText(sha256Checksum).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const highlights = [
    {
      title: isOdia ? "ଉନ୍ନତ ପ୍ରଡକ୍ସନ୍ ଡିଭାଇସ୍ ପଞ୍ଜୀକରଣ" : "Improved Production Device Registration",
      desc: isOdia
        ? "ଆଣ୍ଡ୍ରଏଡ୍ ଡିଭାଇସ୍ ପଞ୍ଜୀକରଣ ଏବଂ ପ୍ରଡକ୍ସନ୍ ବ୍ୟାକଏଣ୍ଡ୍ ସହ ସଂଯୋଗ ପ୍ରକ୍ରିୟାରେ ଉନ୍ନତି।"
        : "Streamlined production device registration flow for reliable onboarding and session initialization.",
    },
    {
      title: isOdia ? "ବ୍ୟକ୍ତିଗତ Google Maps ଆଶ୍ରୟସ୍ଥଳୀ ସନ୍ଧାନ" : "Individual Google Maps Shelter Search",
      desc: isOdia
        ? "ପ୍ରତ୍ୟେକ ଆଶ୍ରୟସ୍ଥଳୀକୁ ସ୍ୱତନ୍ତ୍ର ଭାବେ Google Maps ରେ ଖୋଜିବା ସୁବିଧା (ଆଶ୍ରୟସ୍ଥଳୀ ଅବସ୍ଥାନ ଆନୁମାନିକ ହୋଇପାରେ ଏବଂ ସ୍ୱତନ୍ତ୍ର ଯାଞ୍ଚ ଆବଶ୍ୟକ)।"
        : "Open and search individual shelter listings directly in Google Maps; shelter locations may be approximate and require independent verification.",
    },
    {
      title: isOdia ? "ସୁଦୃଢ଼ API ସୁରକ୍ଷା ଓ ରେଟ୍ ଲିମିଟିଂ" : "Enhanced API Security & Rate Limiting",
      desc: isOdia
        ? "ଅପବ୍ୟବହାର ରୋକିବା ଏବଂ ସେବା ସ୍ଥିରତା ବଜାୟ ରଖିବା ପାଇଁ ଉନ୍ନତ API ସୁରକ୍ଷା ଓ ରେଟ୍ ଲିମିଟିଂ।"
        : "Strengthened backend API security protections and request rate limiting across public and pilot endpoints.",
    },
    {
      title: isOdia ? "Incident Reporting ଓ Quiet Help SOS ପାଇଁ ସ୍ପଷ୍ଟ ସମ୍ମତି" : "Explicit Research Exercise Consent",
      desc: isOdia
        ? "Incident Reporting ଏବଂ Quiet Help SOS ବ୍ୟବହାର ପୂର୍ବରୁ ସ୍ପଷ୍ଟ ଗବେଷଣା ଅଭ୍ୟାସ ସମ୍ମତି। ଜରୁରୀକାଳୀନ ଦାଖଲ ସରକାରୀ ଉଦ୍ଧାରକାରୀଙ୍କ ଦ୍ୱାରା ତଦାରଖ ହୁଏ ନାହିଁ; ଜରୁରୀ ସ୍ଥିତିରେ ୧୧୨ ଡାଏଲ୍ କରନ୍ତୁ।"
        : "Explicit research exercise consent prompts for Incident Reporting and Quiet Help SOS, clarifying that submissions are not monitored by official responders (dial 112 for emergencies).",
    },
    {
      title: isOdia ? "ସର୍ଭର-ସାଇଡ୍ ଓ ସ୍ଥାନୀୟ ଡାଟା ବିଲୋପ ନିୟନ୍ତ୍ରଣ" : "Citizen Server-Side & Local Data Deletion Controls",
      desc: isOdia
        ? "ନାଗରିକମାନେ ନିଜ ଫୋନର ସ୍ଥାନୀୟ SQLite ଡାଟା ସହିତ ସର୍ଭର-ସାଇଡ୍ ଡାଟା ମଧ୍ୟ ବିଲୋପ କରିପାରିବେ।"
        : "Empowering citizens with direct controls to delete both local on-device records and server-side pilot data.",
    },
    {
      title: isOdia ? "ଉନ୍ନତ ଗୋପନୀୟତା ଓ ସୁରକ୍ଷା ବ୍ୟବସ୍ଥା" : "Improved Privacy & Security Protections",
      desc: isOdia
        ? "ଡାଟା ସୁରକ୍ଷା, ଆଗଭୂମି-ମାତ୍ର ଅବସ୍ଥାନ ନିୟନ୍ତ୍ରଣ ଏବଂ ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ଷ୍ଟୋରେଜରେ ଅଧିକ ଉନ୍ନତି।"
        : "Hardened privacy guardrails, data protection controls, and secure handling across citizen workflows.",
    },
    {
      title: isOdia ? "ନମନୀୟ ଗବେଷଣା ପରୀକ୍ଷକ ଅଂଶଗ୍ରହଣ" : "Flexible Research Tester Participation",
      desc: isOdia
        ? "ଗବେଷଣା ବିଟା ପରୀକ୍ଷକମାନଙ୍କ ପାଇଁ ସହଜ ଓ ନମନୀୟ ଅଂଶଗ୍ରହଣ ଏବଂ ପ୍ରତ୍ୟାହାର ସୁବିଧା।"
        : "More flexible participation workflows for Research Beta testers evaluating the platform.",
    },
    {
      title: isOdia ? "ଉନ୍ନତ କ୍ଲାଉଡ୍ ସଂଯୋଗ ଓ ବିଶ୍ୱସନୀୟତା" : "Improved Cloud Connectivity & Reliability",
      desc: isOdia
        ? "ପାଣିପାଗ, ବୁଲେଟିନ୍ ଓ ଆଶ୍ରୟସ୍ଥଳୀ ତଥ୍ୟ ଆଣିବାରେ ଅଧିକ ସ୍ଥିର କ୍ଲାଉଡ୍ ସଂଯୋଗ ଓ ଆପ୍ ବିଶ୍ୱସନୀୟତା।"
        : "Improved cloud API connectivity, error recovery, and overall application reliability.",
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
              JanaKavach v1.0.9
            </h1>
            <span className="font-mono text-xs bg-[#E3A84B]/20 text-[#8B3028] font-bold px-3 py-1 rounded-full w-fit">
              Build 12 (Research Beta)
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {isOdia
              ? "ଓଡ଼ିଶା ପାଇଁ ସ୍ୱତନ୍ତ୍ର ଛାତ୍ର ଗବେଷଣା ପ୍ରକଳ୍ପ (Research Beta) ରିଲିଜ୍। ଯାଞ୍ଚ ହୋଇଥିବା RSA 4096-bit କ୍ରିପ୍ଟୋଗ୍ରାଫିକ୍ କିଷ୍ଟୋର ଦ୍ୱାରା ସ୍ୱାକ୍ଷରିତ।"
              : "Research Beta Android release for JanaKavach (AI for a Safer and Smarter Odisha). Signed with Verified RSA 4096-bit release key. Independent student research project — for genuine emergencies, dial 112."}
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
