import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const viewport: Viewport = {
  themeColor: "#8B3028",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "JanaKavach (ଜନକବଚ) — AI for a Safer and Smarter Odisha",
  description:
    "An offline-first disaster preparedness and governance research platform designed around the needs of Odisha's communities. Research prototype developed for the Odisha AI Hackathon.",
  keywords: [
    "JanaKavach",
    "ଜନକବଚ",
    "Odisha Disaster Management",
    "Offline-first safety",
    "Odisha AI Hackathon",
    "Cyclone safety Odisha",
    "CMRF Shelters",
    "Khordha weather",
    "Odia disaster guides",
    "OSDMA",
  ],
  authors: [{ name: "JanaKavach Research Pilot" }],
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "JanaKavach (ଜନକବଚ) — AI for a Safer and Smarter Odisha",
    description:
      "Offline-first disaster preparedness, localized weather, 158 CMRF shelter listings, and bilingual OSDMA safety guides for Odisha.",
    url: siteUrl || "/",
    siteName: "JanaKavach",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JanaKavach Cultural Shield and Disaster Safety Platform for Odisha",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JanaKavach (ଜନକବଚ) — AI for a Safer and Smarter Odisha",
    description:
      "Offline-first disaster preparedness & governance research platform for Odisha communities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F7F1E5] text-[#1E2522] antialiased selection:bg-[#8B3028] selection:text-[#F7F1E5]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
