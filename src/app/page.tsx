import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { OfflineSection } from "@/components/OfflineSection";
import { ScreenshotsGallery } from "@/components/ScreenshotsGallery";
import { RolesSection } from "@/components/RolesSection";
import { DownloadSection } from "@/components/DownloadSection";
import { PrivacySection } from "@/components/PrivacySection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1" id="main-content">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <OfflineSection />
        <ScreenshotsGallery />
        <RolesSection />
        <DownloadSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
}
