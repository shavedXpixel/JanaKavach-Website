"use client";

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Download,
  Copy,
  Check,
  QrCode,
  ShieldAlert,
  ShieldCheck,
  Cpu,
  FileCheck2,
  HardDrive,
  Info,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

export function DownloadSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [qrSvg, setQrSvg] = useState<string>("");

  const apkUrl = process.env.NEXT_PUBLIC_APK_DOWNLOAD_URL || "";
  const releaseNotesUrl =
    process.env.NEXT_PUBLIC_RELEASE_NOTES_URL || "/release-notes";
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const sha256Checksum =
    "CFAF580987FB3927CA12E62B18E5293CA529A79CA5C39469C244FB8F577D1048";

  // Generate QR Code ONLY from the configured deployment URL or verified window origin
  useEffect(() => {
    let targetUrl = configuredSiteUrl;
    if (!targetUrl && typeof window !== "undefined" && window.location.origin.startsWith("http")) {
      targetUrl = window.location.origin;
    }

    if (targetUrl) {
      QRCode.toString(targetUrl, {
        type: "svg",
        margin: 1,
        width: 110,
        color: {
          dark: "#1E2522",
          light: "#FFFFFF",
        },
      })
        .then((svgString) => setQrSvg(svgString))
        .catch((err) => console.error("QR Code error:", err));
    } else {
      setQrSvg("");
    }
  }, [configuredSiteUrl]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sha256Checksum).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section id="download" className="py-24 bg-[#F7F1E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B3028]/10 text-[#8B3028] text-xs font-semibold mb-3">
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.download.tag}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B3028] tracking-tight mb-4">
            {t.download.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
            {t.download.subtitle}
          </p>
        </div>

        {/* Download Main Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E2D9CC] shadow-md mb-16 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#E8DFC9]">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-serif font-bold text-[#1E2522]">
                  JanaKavach Universal APK
                </span>
                <span className="bg-[#17655B] text-white text-xs font-mono font-bold px-2 py-0.5 rounded">
                  v{t.download.version}
                </span>
                <span className="bg-[#E3A84B]/20 text-[#8B3028] text-xs font-mono font-bold px-2 py-0.5 rounded">
                  Build {t.download.build}
                </span>
              </div>
              <p className="text-xs text-[#718096] mt-1 font-mono">
                Filename: JanaKavach-v1.0.3-universal.apk (~{t.download.size})
              </p>
            </div>

            {/* Action CTA */}
            <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-2">
              {apkUrl ? (
                <a
                  href={apkUrl}
                  download="JanaKavach-v1.0.3-universal.apk"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#8B3028] hover:bg-[#6E221B] text-[#F7F1E5] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3028]"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>{t.download.downloadBtn}</span>
                </a>
              ) : (
                <div className="w-full md:w-auto space-y-1">
                  <button
                    type="button"
                    disabled
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#A0AEC0] cursor-not-allowed text-[#F7F1E5] font-medium text-xs px-5 py-3 rounded-xl"
                    aria-disabled="true"
                  >
                    <Info className="w-4 h-4" aria-hidden="true" />
                    <span>{t.download.unconfiguredBtn}</span>
                  </button>
                  <p className="text-[11px] text-[#718096] max-w-xs text-left md:text-right">
                    {t.download.unconfiguredDesc}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Research Pilot Disclaimer Prominently Displayed Near Download Action */}
          <div className="bg-[#8B3028]/10 border border-[#8B3028]/30 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-[#8B3028]">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed font-medium">
              {t.download.downloadDisclaimer}
            </p>
          </div>

          {/* Release Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E2D9CC]">
              <span className="text-[11px] font-bold text-[#718096] uppercase tracking-wider block">
                Target Architecture
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-[#1E2522]">
                <Cpu className="w-3.5 h-3.5 text-[#17655B]" />
                <span className="truncate">arm64, armv7, x86_64</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E2D9CC]">
              <span className="text-[11px] font-bold text-[#718096] uppercase tracking-wider block">
                Android Requirement
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-[#1E2522]">
                <HardDrive className="w-3.5 h-3.5 text-[#17655B]" />
                <span>Android 7.0+ (API 24-36)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E2D9CC]">
              <span className="text-[11px] font-bold text-[#718096] uppercase tracking-wider block">
                Automated Verification
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-[#1E2522]">
                <FileCheck2 className="w-3.5 h-3.5 text-[#17655B]" />
                <span>381 Tests Passed</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E2D9CC]">
              <span className="text-[11px] font-bold text-[#718096] uppercase tracking-wider block">
                Release Keystore
              </span>
              <div className="flex items-center gap-1.5 mt-1 text-xs font-semibold text-[#1E2522]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#17655B]" />
                <span>{t.download.signingKey}</span>
              </div>
            </div>
          </div>

          {/* Cryptographic SHA-256 Checksum Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6EF] border border-[#E8DFC9] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B3028]">
                {t.download.checksumLabel}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? t.download.copied : t.download.copyChecksum}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17655B] hover:text-[#0F4941] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17655B] rounded px-2 py-1 bg-white border border-[#E2D9CC]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600">{t.download.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.download.copyChecksum}</span>
                  </>
                )}
              </button>
            </div>
            <p className="font-mono text-xs sm:text-xs break-all text-[#1E2522] bg-white p-3 rounded-lg border border-[#E2D9CC] select-all">
              {sha256Checksum}
            </p>
          </div>

          {/* Pilot Tester Notice & QR Code Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 items-center">
            <div className="md:col-span-2 bg-[#8B3028]/5 border border-[#8B3028]/20 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8B3028]">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{t.download.pilotTesterNoticeTitle}</span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed">
                {t.download.pilotTesterNoticeDesc}
              </p>
              <div className="pt-2">
                <Link
                  href={releaseNotesUrl}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B3028] hover:underline"
                >
                  <span>{t.download.releaseNotesLink}</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Offline QR Code generated ONLY from configured URL */}
            <div className="bg-[#FAF6EF] rounded-2xl p-4 border border-[#E2D9CC] flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E2522] mb-2">
                <QrCode className="w-4 h-4 text-[#17655B]" />
                <span>{t.download.scanQr}</span>
              </div>
              {qrSvg ? (
                <div
                  className="p-1 bg-white rounded-lg shadow-2xs border border-[#E2D9CC] [&>svg]:w-[110px] [&>svg]:h-[110px]"
                  dangerouslySetInnerHTML={{ __html: qrSvg }}
                  aria-label="QR Code to open JanaKavach website on mobile"
                />
              ) : (
                <div className="w-[110px] h-[110px] rounded-lg border border-dashed border-[#CBD5E0] bg-white flex items-center justify-center p-2">
                  <span className="text-[10px] text-[#A0AEC0] leading-tight text-center">
                    {t.download.qrUnconfigured}
                  </span>
                </div>
              )}
              <span className="text-[10px] text-[#718096] mt-2">
                {t.download.qrDescription}
              </span>
            </div>
          </div>
        </div>

        {/* Installation Instructions */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-[#8B3028]">
              {t.install.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] mt-1">
              {t.install.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.install.steps.map((s) => (
              <div
                key={s.number}
                className="bg-white rounded-2xl p-5 border border-[#E2D9CC] shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-full bg-[#8B3028]/10 text-[#8B3028] font-mono font-bold text-xs flex items-center justify-center mb-3">
                    {s.number}
                  </div>
                  <h4 className="text-sm font-bold text-[#1E2522] mb-1.5">
                    {s.title}
                  </h4>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Play Protect Safety Notice Box */}
            <div className="sm:col-span-2 lg:col-span-2 bg-[#17655B]/5 border-2 border-[#17655B]/30 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#17655B] mb-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{t.install.playProtectNoticeTitle}</span>
                </div>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  {t.install.playProtectNoticeDesc}
                </p>
              </div>
              <p className="text-[11px] text-[#718096] mt-3 border-t border-[#17655B]/20 pt-2 font-mono">
                {t.install.compatibilityNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
