"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldAlert, ArrowLeft, Building2, PhoneCall, Navigation2 } from "lucide-react";

export default function DisclaimerPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B3028]/10 text-[#8B3028] text-xs font-semibold mb-4">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{isOdia ? "ସୁରକ୍ଷା ଓ ସୀମାବଦ୍ଧତା ସୂଚନା" : "Safety & Research Pilot Boundaries"}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {isOdia ? "ଜନକବଚ ଦାୟିତ୍ୱମୁକ୍ତି ଓ ସୁରକ୍ଷା ଘୋଷଣା" : "JanaKavach Disclaimer & Safety Guardrails"}
          </h1>

          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {isOdia
              ? "ଜନକବଚ ଏକ ସ୍ୱତନ୍ତ୍ର ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍। ନାଗରିକଙ୍କ ସୁରକ୍ଷା ଦୃଷ୍ଟିରୁ ଏହାର ବାସ୍ତବ ସୀମାବଦ୍ଧତା ଏବଂ ସରକାରୀ ଜରୁରୀକାଳୀନ ସେବା ସହ ପାର୍ଥକ୍ୟ ବୁଝିବା ଅତ୍ୟନ୍ତ ଆବଶ୍ୟକ।"
              : "JanaKavach is an independent civic intelligence and disaster preparedness research platform built for the Odisha AI Hackathon. To ensure public safety, please review these operational boundaries."}
          </p>
        </div>

        {/* Core Guardrail Cards */}
        <div className="space-y-6 text-[#1E2522]">
          {/* 1. No Emergency 112 Dispatch */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#8B3028]/30 space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#8B3028]">
              <PhoneCall className="w-5 h-5 text-[#8B3028]" />
              <h2>{isOdia ? "୧. କୌଣସି ଜରୁରୀକାଳୀନ ୧୧୨ ଡିସପାଚ୍ ନାହିଁ" : "1. No Emergency 112 Dispatch Integration"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଜନକବଚ ଏକ ସ୍ୱତନ୍ତ୍ର ଛାତ୍ର ଗବେଷଣା ପ୍ରକଳ୍ପ, କୌଣସି ସରକାରୀ ଜରୁରୀକାଳୀନ ପ୍ରତିକ୍ରିୟା ସେବା ନୁହେଁ। ଜରୁରୀକାଳୀନ ଦାଖଲଗୁଡ଼ିକ ସରକାରୀ ଉଦ୍ଧାରକାରୀଙ୍କ ଦ୍ୱାରା ତଦାରଖ କରାଯାଏ ନାହିଁ। ପ୍ରକୃତ ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତିରେ ୧୧୨ ଡାଏଲ୍ କରନ୍ତୁ।"
                : "JanaKavach is an independent student research project, not an official government emergency response service. Emergency submissions are not monitored by official responders. For genuine emergencies, dial 112."}
            </p>
          </div>

          {/* 2. Shelter Centroids & Operational Readiness */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#17655B]">
              <Building2 className="w-5 h-5 text-[#17655B]" />
              <h2>{isOdia ? "୨. ଆଶ୍ରୟସ୍ଥଳୀ ନିର୍ଦ୍ଦେଶାଙ୍କ ଓ କାର୍ଯ୍ୟକ୍ଷମ ସ୍ଥିତି (Status Unknown)" : "2. Shelter Coordinates & Operational Readiness"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଏହି ଆପ୍ଲିକେସନରେ ଥିବା ୧୫୮ଟି CMRF ଆଶ୍ରୟସ୍ଥଳୀ ତଥ୍ୟ ପ୍ରଡକ୍ସନ୍ API ରୁ ପ୍ରାପ୍ତ ହୋଇ ଫୋନରେ କ୍ୟାଶ୍ ହୋଇଥାଏ (ନୂତନ ଅଫଲାଇନ୍ ଇନଷ୍ଟଲେସନରେ ଏହା ପ୍ରଥମରୁ ବଣ୍ଡଲ୍ ହୋଇନଥାଏ)। ଆଶ୍ରୟସ୍ଥଳୀର ଅବସ୍ଥାନ ଆନୁମାନିକ ହୋଇପାରେ ଏବଂ ଏହାର ସ୍ୱତନ୍ତ୍ର ଯାଞ୍ଚ ଆବଶ୍ୟକ। ବିପର୍ଯ୍ୟୟ ସମୟରେ ଏହାର କାର୍ଯ୍ୟକ୍ଷମ ସ୍ଥିତି ଅଧିକାରୀଙ୍କ ଭୌତିକ ଯାଞ୍ଚ ବିନା 'ଅଜ୍ଞାତ' (Status Unknown) ଭାବେ ଚିହ୍ନିତ।"
                : "The 158 Chief Minister's Relief Fund (CMRF) shelter listings are retrieved from the production API and cached in local encrypted storage upon loading (they are not pre-bundled on a fresh offline APK install). Shelter locations may be approximate and require independent verification. Structural readiness and live operational status remain 'Status Unknown' until physically inspected by authorized ground officers."}
            </p>
          </div>

          {/* 3. No Evacuation Routing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-3">
            <div className="flex items-center gap-2.5 text-base font-bold text-[#17655B]">
              <Navigation2 className="w-5 h-5 text-[#17655B]" />
              <h2>{isOdia ? "୩. କୌଣସି ସଳଖ ରେଖା ନେଭିଗେସନ୍ ନାହିଁ" : "3. No Straight-Line Turn-by-Turn Evacuation Routing"}</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ବନ୍ୟା କିମ୍ବା ବାତ୍ୟା ସମୟରେ ରାସ୍ତା କଟିବା, ପୋଲ ଭାଙ୍ଗିବା ବା ଜଳମଗ୍ନ ହେବା ସାଧାରଣ କଥା। ତେଣୁ ନାଗରିକଙ୍କୁ ଭ୍ରାନ୍ତ ନକରିବା ପାଇଁ ଆପରେ କୌଣସି ସଳଖ ରେଖା ନେଭିଗେସନ୍ କିମ୍ବା ସ୍ୱୟଂଚାଳିତ ଇଭାକ୍ୟୁଏସନ୍ ରୁଟ୍ ପ୍ରଦାନ କରାଯାଇ ନାହିଁ।"
                : "During floods and cyclonic surges, roadways and causeways are frequently breached or submerged. JanaKavach deliberately disables straight-line distance sorting to prevent citizens from attempting impassable routes. Follow local administration announcements for verified evacuation paths."}
            </p>
          </div>

          {/* 4. Independent Prototype Notice */}
          <div className="bg-[#FAF6EF] rounded-2xl p-6 sm:p-8 border border-[#E2D9CC] space-y-2">
            <h2 className="text-sm font-bold text-[#8B3028]">
              {isOdia ? "୪. ସରକାରୀ ସମ୍ପର୍କହୀନତା ଘୋଷଣା" : "4. Independence & Non-Governmental Attribution"}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {isOdia
                ? "ଜନକବଚ ଓଡ଼ିଶା ସରକାର, OSDMA, କିମ୍ବା କୌଣସି ସରକାରୀ ବିଭାଗ ଦ୍ୱାରା ପରିଚାଳିତ ନୁହେଁ। ଏହା ଓଡ଼ିଶା AI ହାକାଥନ୍ ପାଇଁ ପ୍ରସ୍ତୁତ ଏକ ସ୍ୱତନ୍ତ୍ର ଗବେଷଣା ପ୍ରକଳ୍ପ।"
                : "JanaKavach is not an official portal of the Government of Odisha, the Odisha State Disaster Management Authority (OSDMA), or the National Disaster Management Authority (NDMA). It is an independent research prototype developed solely for technical evaluation in the Odisha AI Hackathon."}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
