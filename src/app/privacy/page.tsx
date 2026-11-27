"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Lock, ShieldCheck, ArrowLeft, CheckCircle2, AlertTriangle, EyeOff } from "lucide-react";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const isOdia = language === "or";

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

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2D9CC] shadow-sm mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17655B]/10 text-[#17655B] text-xs font-semibold mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>{isOdia ? "ଡାଟା ସୁରକ୍ଷା ନୀତି" : "Data Privacy Architecture"}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {isOdia ? "ଜନକବଚ ଗୋପନୀୟତା ନୀତି" : "JanaKavach Privacy Policy"}
          </h1>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {isOdia
              ? "ଜନକବଚ ନାଗରିକଙ୍କ ଗୋପନୀୟତା ଏବଂ ଡାଟା ସୁରକ୍ଷାକୁ ସର୍ବାଧିକ ଗୁରୁତ୍ୱ ଦିଏ। ଏହି ଦସ୍ତାବିଜରେ ଆମର ତଥ୍ୟ ସଂଗ୍ରହ ସୀମା ଓ ସୁରକ୍ଷା ପଦକ୍ଷେପ ସ୍ପଷ୍ଟ କରାଯାଇଛି।"
              : "JanaKavach is engineered around strict data minimization and user trust. This document outlines how citizen data is handled, stored, and protected within the research pilot application."}
          </p>

          <div className="mt-6 pt-6 border-t border-[#E8DFC9] flex flex-wrap items-center gap-4 text-xs text-[#718096]">
            <span>Version: 1.0.9 (Research Beta)</span>
            <span>•</span>
            <span>Effective: November 2026</span>
            <span>•</span>
            <span>Independent Student Research Project</span>
          </div>
        </div>

        {/* Detailed Policy Sections */}
        <div className="space-y-8 text-[#1E2522]">
          {/* Section 1: Location Access */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#8B3028]">
              <EyeOff className="w-5 h-5 text-[#17655B]" />
              <h2>{isOdia ? "୧. କେବଳ ଆଗଭୂମି ଅବସ୍ଥାନ (Foreground-Only GPS)" : "1. Foreground-Only Location Access"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଜନକବଚ କଦାପି ପଛଭୂମିରେ (Background) ଲୋକେସନ୍ ଟ୍ରାକ୍ କରେ ନାହିଁ। ଆପଣ ଯେତେବେଳେ ସ୍ୱଇଚ୍ଛାରେ 'Use GPS' କିମ୍ବା ଆଶ୍ରୟସ୍ଥଳୀ ଦୂରତା ଗଣନା ବଟନ୍ ଦବାନ୍ତି, କେବଳ ସେହି ମୁହୂର୍ତ୍ତରେ ହିଁ ଫୋନରୁ ଆନୁମାନିକ ଜି.ପି.ଏସ୍. ତଥ୍ୟ ନିଆଯାଏ। ଏହି ତଥ୍ୟ ବ୍ୟକ୍ତିଗତ ଭାବେ ସର୍ଭରରେ ସ୍ଥାୟୀ ଭାବରେ ସଂରକ୍ଷିତ ହୁଏ ନାହିଁ।"
                : "JanaKavach does not perform background location tracking. Coordinates are queried strictly in the foreground when the user explicitly triggers an action, such as viewing shelter proximity or requesting local weather forecasts. Location coordinates are not persistently logged or tied to user identity."}
            </p>
            <div className="bg-[#FAF6EF] p-4 rounded-xl border border-[#E2D9CC] text-xs text-[#1E2522] space-y-1">
              <p className="font-semibold text-[#8B3028]">
                {isOdia ? "ଐଚ୍ଛିକ ଅନୁମତି ନିଶ୍ଚିତତା:" : "Optional Permission Guarantee:"}
              </p>
              <p className="text-[#4A5568]">
                {isOdia
                  ? "ନାଗରିକ ଚାହିଁଲେ GPS ଅନୁମତି ଅସ୍ୱୀକାର କରିପାରିବେ। ଆପ୍ କୌଣସି ଅନୁମତି ବିନା ମଧ୍ୟ ଜିଲ୍ଲା ଚୟନ ମାଧ୍ୟମରେ ସମ୍ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟକ୍ଷମ ରହେ।"
                  : "Citizens may decline location permissions entirely without losing app utility. Users can select their district manually from a dropdown to view all shelters, weather warnings, and safety guides."}
              </p>
            </div>
          </div>

          {/* Section 2: On-Device Storage */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#8B3028]">
              <ShieldCheck className="w-5 h-5 text-[#17655B]" />
              <h2>{isOdia ? "୨. ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ସ୍ଥାନୀୟ ଡାଟାବେସ୍" : "2. Local Encrypted Storage & Caching"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଅଫଲାଇନ୍ OSDMA ବିପର୍ଯ୍ୟୟ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ ଆପରେ ସଂଲଗ୍ନ ଥିବାବେଳେ, ପ୍ରଡକ୍ସନ୍ API ରୁ ଡାଉନଲୋଡ୍ ହୋଇଥିବା ୧୫୮ଟି CMRF ଆଶ୍ରୟସ୍ଥଳୀ ତଥ୍ୟ ଏବଂ ସ୍ଥାନୀୟ ଘଟଣା ଡ୍ରାଫ୍ଟ ଫୋନର ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା SQLite ଡାଟାବେସରେ ସଂରକ୍ଷିତ ରହେ। ଇନସିଡେଣ୍ଟ ରିପୋର୍ଟିଂ ଏବଂ Quiet Help SOS ପାଇଁ ସ୍ପଷ୍ଟ ଗବେଷଣା ସମ୍ମତି (Research Exercise Consent) ସହିତ ନାଗରିକମାନେ ଉଭୟ ସ୍ଥାନୀୟ ଏବଂ ସର୍ଭର-ସାଇଡ୍ ଡାଟା ବିଲୋପ (Deletion) ନିୟନ୍ତ୍ରଣ କରିପାରିବେ।"
                : "Offline OSDMA safety guides are embedded locally within the application. The 158 CMRF shelter listings are retrieved from the production API and cached in an encrypted on-device SQLite database for subsequent offline access. Incident Reporting and Quiet Help SOS require explicit research exercise consent, and citizens have both local and server-side data deletion controls."}
            </p>
          </div>

          {/* Section 3: Data Minimization */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#8B3028]">
              <CheckCircle2 className="w-5 h-5 text-[#17655B]" />
              <h2>{isOdia ? "୩. ତଥ୍ୟ ସଂଗ୍ରହ ସୀମାବଦ୍ଧତା (Data Minimization)" : "3. Strict Data Minimization"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଜନକବଚ କୌଣସି ଆଧାର ନମ୍ବର, ବାୟୋମେଟ୍ରିକ୍ ତଥ୍ୟ, ବ୍ୟାଙ୍କ ସୂଚନା, କିମ୍ବା ଅନାବଶ୍ୟକ ବ୍ୟକ୍ତିଗତ ପରିଚୟ ସଂଗ୍ରହ କରେ ନାହିଁ।"
                : "JanaKavach does not collect national identification numbers (Aadhaar), biometric identifiers, financial credentials, or contact book records. It operates purely as a public civic safety utility."}
            </p>
          </div>

          {/* Section 4: External Services */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#8B3028]">
              <AlertTriangle className="w-5 h-5 text-[#C6892E]" />
              <h2>{isOdia ? "୪. ବାହ୍ୟ ଅନୁରୋଧ ଓ ସର୍ବସାଧାରଣ ଡାଟା ଉତ୍ସ" : "4. External Requests & Public Scientific Sources"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଇଣ୍ଟରନେଟ୍ ଉପଲବ୍ଧ ଥିବାବେଳେ, ପାଣିପାଗ ଏବଂ ସତର୍କତା ପାଇଁ ଓପନ୍-ମେଟିଓ (Open-Meteo API), IMD RSMC, NDMA SACHET ଏବଂ ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା ପାଇଁ ଜନକବଚ କ୍ଲାଉଡ୍ API କୁ ଅନୁସନ୍ଧାନ ଅନୁରୋଧ (ଜିଲ୍ଲା କିମ୍ବା କୋର୍ଡିନେଟ୍ସ ସହ) ପଠାଯାଏ। ଏହି ଅନୁରୋଧଗୁଡ଼ିକ କୌଣସି ତୃତୀୟ ପକ୍ଷ ଆଡ୍ ନେଟୱର୍କ ବା ୟୁଜର ପ୍ରୋଫାଇଲିଂ ସିଷ୍ଟମ୍ ସହ ସେୟାର୍ କରାଯାଏ ନାହିଁ।"
                : "When internet connectivity is available, the application transmits query coordinates or selected district identifiers to public scientific and civic endpoints: Open-Meteo API for localized meteorological data, IMD RSMC and NDMA SACHET feeds for disaster bulletins, and the JanaKavach Cloud API for CMRF shelter catalogue retrieval. Requests are unauthenticated and strictly functional; they are never shared with advertising trackers, analytics SDKs, or third-party profilers."}
            </p>
          </div>

          {/* Section 5: Research Prototype Disclaimer */}
          <div className="bg-[#8B3028]/5 rounded-2xl p-6 sm:p-8 border border-[#8B3028]/20 space-y-2">
            <h2 className="text-sm font-bold text-[#8B3028]">
              {isOdia ? "୫. ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍ ସ୍ଥିତି" : "5. Independent Research Prototype Status"}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଜନକବଚ ଓଡ଼ିଶା AI ହାକାଥନ୍ ପାଇଁ ଏକ ସ୍ୱତନ୍ତ୍ର ନାଗରିକ ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍ ଭାବରେ ବିକଶିତ ହୋଇଛି। ଏହା କୌଣସି ସରକାରୀ ବିଭାଗର ପ୍ରତ୍ୟକ୍ଷ ସେବା ନୁହେଁ। ଜରୁରୀ ବିପଦ ସମୟରେ ସରକାରୀ ୧୧୨ ଡାଏଲ୍ କରନ୍ତୁ।"
                : "JanaKavach is an independent research prototype created for the Odisha AI Hackathon. It does not carry official government affiliation, statutory disaster management authority, or automated emergency dispatch integration."}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
