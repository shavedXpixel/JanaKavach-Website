export type Language = "en" | "or";

export interface TranslationDictionary {
  brand: {
    name: string;
    nameOdia: string;
    tagline: string;
    taglineSub: string;
    pilotBadge: string;
    pilotNotice: string;
  };
  nav: {
    about: string;
    features: string;
    howItWorks: string;
    offline: string;
    screenshots: string;
    download: string;
    officerPortal: string;
    officerBadge: string;
    switchLang: string;
    menu: string;
    close: string;
  };
  hero: {
    headline: string;
    description: string;
    downloadCta: string;
    exploreCta: string;
    releaseLabel: string;
    platformLabel: string;
    testsPassed: string;
    verifiedSigning: string;
    heroCardTitle: string;
    heroCardStatus: string;
    heroCardWeather: string;
    heroCardDistrict: string;
    offlineBadgeTitle: string;
    offlineBadgeDesc: string;
  };
  problem: {
    tag: string;
    title: string;
    subtitle: string;
    cyclones: {
      title: string;
      desc: string;
    };
    floods: {
      title: string;
      desc: string;
    };
    lightning: {
      title: string;
      desc: string;
    };
    heatwave: {
      title: string;
      desc: string;
    };
    blackouts: {
      title: string;
      desc: string;
    };
    fragmentation: {
      title: string;
      desc: string;
    };
  };
  features: {
    tag: string;
    title: string;
    subtitle: string;
    implementedTitle: string;
    roadmapTitle: string;
    items: {
      title: string;
      desc: string;
      tag: string;
    }[];
    notImplementedNotice: string;
    roadmapItems: {
      title: string;
      desc: string;
    }[];
  };
  offline: {
    tag: string;
    title: string;
    subtitle: string;
    availableTitle: string;
    availableDesc: string;
    onlineTitle: string;
    onlineDesc: string;
    disclaimerNotice: string;
    matrix: {
      level: string;
      condition: string;
      channel: string;
      experience: string;
      isRoadmap?: boolean;
    }[];
  };
  screenshots: {
    tag: string;
    title: string;
    subtitle: string;
    realAppNotice: string;
    items: {
      id: string;
      title: string;
      screenName: string;
      caption: string;
      details: string;
      src: string;
    }[];
  };
  roles: {
    tag: string;
    title: string;
    subtitle: string;
    citizenTitle: string;
    citizenDesc: string;
    citizenPoints: string[];
    officerTitle: string;
    officerDesc: string;
    officerPoints: string[];
    readOnlyNotice: string;
    portalAction: string;
  };
  download: {
    tag: string;
    title: string;
    subtitle: string;
    version: string;
    build: string;
    size: string;
    minAndroid: string;
    targetSdk: string;
    abis: string;
    signingKey: string;
    checksumLabel: string;
    copyChecksum: string;
    copied: string;
    downloadBtn: string;
    unconfiguredBtn: string;
    unconfiguredDesc: string;
    releaseNotesLink: string;
    scanQr: string;
    qrDescription: string;
    qrUnconfigured: string;
    pilotTesterNoticeTitle: string;
    pilotTesterNoticeDesc: string;
    downloadDisclaimer: string;
  };
  install: {
    tag: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
    playProtectNoticeTitle: string;
    playProtectNoticeDesc: string;
    compatibilityNote: string;
  };
  privacy: {
    tag: string;
    title: string;
    subtitle: string;
    points: {
      title: string;
      desc: string;
    }[];
    viewFullPolicy: string;
    viewDisclaimer: string;
  };
  footer: {
    tagline: string;
    hackathonAttribution: string;
    prototypeNotice: string;
    navigationHeader: string;
    legalHeader: string;
    links: {
      about: string;
      features: string;
      download: string;
      officerPortal: string;
      privacy: string;
      disclaimer: string;
      releaseNotes: string;
    };
    allRightsReserved: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    brand: {
      name: "JanaKavach",
      nameOdia: "ଜନକବଚ",
      tagline: "AI for a Safer and Smarter Odisha",
      taglineSub: "Civic intelligence & offline-first disaster preparedness platform",
      pilotBadge: "Research Prototype • Odisha AI Hackathon",
      pilotNotice: "Independent disaster-information prototype. Not an official government emergency service.",
    },
    nav: {
      about: "About",
      features: "Features",
      howItWorks: "How It Works",
      offline: "Offline Continuity",
      screenshots: "App Tour",
      download: "Download",
      officerPortal: "Officer Portal",
      officerBadge: "Authorized",
      switchLang: "ଓଡ଼ିଆ",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      headline: "A safer Odisha starts with an informed citizen.",
      description:
        "An offline-first disaster preparedness and governance research platform designed around the needs of Odisha's coastal, riverine, and rural communities.",
      downloadCta: "Download for Android",
      exploreCta: "Explore JanaKavach",
      releaseLabel: "v1.0.3 Universal Release",
      platformLabel: "Android 7.0+ (API 24 to 36)",
      testsPassed: "381 Automated Tests Passed",
      verifiedSigning: "Permanent RSA-4096 Signed",
      heroCardTitle: "Khordha (Bhubaneswar)",
      heroCardStatus: "Service Reachable • Normal Status",
      heroCardWeather: "26.0°C • Mainly Clear",
      heroCardDistrict: "District: Khordha • 158 CMRF Shelters Sourced",
      offlineBadgeTitle: "Offline Continuity",
      offlineBadgeDesc: "Cached Shelters & Offline OSDMA Safety Guides",
    },
    problem: {
      tag: "Vulnerability Landscape",
      title: "Odisha's Multi-Hazard Reality",
      subtitle:
        "Odisha faces recurring extreme weather events that threaten lives, agriculture, and infrastructure. Preparedness requires reliable tools that survive real-world conditions.",
      cyclones: {
        title: "Bay of Bengal Cyclones",
        desc: "Severe cyclonic storms create destructive storm surges and coastal winds, frequently knocking down power lines and cellular towers across coastal districts.",
      },
      floods: {
        title: "Riverine & Flash Flooding",
        desc: "Monsoon surges across the Mahanadi, Brahmani, and Baitarani river basins submerge low-lying panchayats, cutting off physical transport routes.",
      },
      lightning: {
        title: "Lightning & Thunderstorms",
        desc: "Odisha records high vulnerability to lightning strikes during pre-monsoon and monsoon squalls, posing life-threatening risks to outdoor agricultural workers.",
      },
      heatwave: {
        title: "Extreme Summer Heatwaves",
        desc: "Prolonged dry season temperatures exceed safe physiological thresholds, impacting rural laborers and vulnerable households without adequate cooling.",
      },
      blackouts: {
        title: "Communications Blackouts",
        desc: "Severe weather routinely disrupts fiber connections and mobile base stations, interrupting access to timely safety information.",
      },
      fragmentation: {
        title: "Fragmented Safety Information",
        desc: "Critical advisories remain scattered across disparate bulletins and feeds, rarely pre-cached on device or accessible in local vernacular.",
      },
    },
    features: {
      tag: "Built Functionality",
      title: "Strictly Implemented Capabilities",
      subtitle:
        "JanaKavach does not make exaggerated promises. Every feature listed here is verified in production code and tested across 381 automated test suites.",
      implementedTitle: "Active Features in v1.0.3",
      roadmapTitle: "Explicit Boundary: What is NOT Implemented",
      items: [
        {
          title: "Localized Weather Information",
          desc: "Temperature, humidity, precipitation probability, wind velocity, and condition summaries retrieved from Open-Meteo and official IMD NWFC feeds when connected.",
          tag: "Implemented",
        },
        {
          title: "Disaster Bulletins with Freshness Checks",
          desc: "Official IMD RSMC cyclone advisories and NDMA SACHET public alerts with transparent timestamp checks and source attribution.",
          tag: "Implemented",
        },
        {
          title: "Offline Disaster Safety Guides",
          desc: "Actionable preparedness checklists for Cyclone, Flood, Lightning, and Heat Wave sourced from OSDMA literature, viewable on device without internet.",
          tag: "Implemented",
        },
        {
          title: "158 CMRF-Sourced Shelter Listings",
          desc: "Directory of 158 Chief Minister's Relief Fund disaster shelters available via the production API and cached in local encrypted storage for offline access once retrieved.",
          tag: "Implemented",
        },
        {
          title: "GPS-Based Proximity & Centroids",
          desc: "Foreground GNSS proximity calculation to administrative centroids. Straight-line sorting is disabled to avoid misleading citizens during road cuts.",
          tag: "Implemented",
        },
        {
          title: "Full Bilingual English & Odia Localization",
          desc: "Native Odia script rendering with persistent language preference, avoiding untranslated strings or broken interface keys.",
          tag: "Implemented",
        },
        {
          title: "Foreground-Only Location Access",
          desc: "Zero background tracking. Location is only requested in the foreground when actively initiated by the user for shelter proximity or local weather.",
          tag: "Implemented",
        },
        {
          title: "Encrypted At-Rest Local Storage",
          desc: "Secure on-device SQLite database storing cached shelters, user preferences, and local report drafts without unencrypted exposure.",
          tag: "Implemented",
        },
        {
          title: "Local Citizen Report Recording",
          desc: "Offline-first incident draft recording stored in the encrypted on-device database. Cloud report submission remains disabled during the research pilot.",
          tag: "Implemented",
        },
        {
          title: "Read-Only Officer Shelter Cockpit",
          desc: "Separate web dashboard deployed for emergency coordinators to view shelter status and aggregate reports with strict read-only access during the pilot.",
          tag: "Implemented",
        },
      ],
      notImplementedNotice:
        "To maintain safety and prevent misrepresentation during the research pilot, the following capabilities are explicitly NOT active:",
      roadmapItems: [
        {
          title: "No Automatic Emergency Dispatch",
          desc: "JanaKavach is not connected to Emergency 112 or police/fire dispatch. In imminent danger, citizens must dial 112 directly.",
        },
        {
          title: "No Verified Evacuation Turn-by-Turn Routing",
          desc: "Shelter coordinates represent administrative centroids, not surveyed building doors or flood-safe road navigation.",
        },
        {
          title: "No Automatic Report Sync or Cloud Submission",
          desc: "Citizen reports are stored strictly in local on-device SQLite storage. Cloud transmission is disabled in this pilot milestone.",
        },
        {
          title: "No Real-Time Live Shelter Occupancy",
          desc: "All 158 shelter listings have UNKNOWN operational readiness with zero verified live headcounts until inspected by authorized personnel.",
        },
      ],
    },
    offline: {
      tag: "Resilience Invariant",
      title: "Offline is the Baseline, Online is an Enhancement",
      subtitle:
        "When disaster strikes, internet infrastructure often collapses first. JanaKavach is designed to retain core safety utility without active connectivity.",
      availableTitle: "Available Offline (Without Network)",
      availableDesc:
        "Embedded disaster safety guides (Cyclone, Flood, Lightning, Heat Wave), locally recorded citizen report drafts, and previously cached shelter listings and weather bulletins.",
      onlineTitle: "Enhanced When Connected (Service Reachable)",
      onlineDesc:
        "Information retrieval for latest weather sensor readings, real-time IMD RSMC cyclone advisory ingestion, NDMA SACHET alert feed synchronization, and initial shelter catalogue caching.",
      disclaimerNotice:
        "Notice: JanaKavach does not guarantee emergency communication, live alert delivery, or automated dispatch during network or power failures.",
      matrix: [
        {
          level: "L0 — Online Information Retrieval",
          condition: "Service reachable via active Wi-Fi or mobile data",
          channel: "Direct HTTPS Query",
          experience: "Online information retrieval for localized weather, active IMD warning feeds, and CMRF shelter listings.",
        },
        {
          level: "L1 — Degraded Connectivity",
          condition: "Weak, intermittent, or congested network",
          channel: "HTTPS with Freshness Checks",
          experience: "App indicates degraded connectivity with appropriate availability and data freshness indicators.",
        },
        {
          level: "L2 — SMS Fallback (Roadmap)",
          condition: "No mobile data, cellular radio channel active",
          channel: "Roadmap Concept — Not Implemented",
          experience: "Future architectural concept for compact SMS relay; strictly not implemented or active in v1.0.3.",
          isRoadmap: true,
        },
        {
          level: "L3 — Total Network Disruption",
          condition: "Zero signal, airplane mode, tower offline",
          channel: "Encrypted Local Storage",
          experience: "Full offline OSDMA safety guides, previously cached shelter directory, and locally stored report drafts.",
        },
        {
          level: "L4 — Hardware / Power Depleted",
          condition: "Device battery exhausted or hardware submerged",
          channel: "External Community Protocols",
          experience: "Non-digital preparedness external to the application (printed family safety cards, local announcements); not an integrated software feature.",
          isRoadmap: true,
        },
      ],
    },
    screenshots: {
      tag: "Production UI",
      title: "Authentic Mobile Application Screens",
      subtitle:
        "Direct captures from the installed JanaKavach Android v1.0.3 build running on hardware. Precise location coordinates have been redacted for privacy. No simulated dashboards.",
      realAppNotice: "Authentic Android App Screenshots • Build 6 (Universal)",
      items: [
        {
          id: "home-weather",
          title: "Home & Localized Weather",
          screenName: "Home Dashboard",
          caption: "Live weather status for Khordha with IMD RSMC bulletin check and Odisha weather warning integration (precise coordinates redacted).",
          details:
            "Shows temperature, humidity, wind, and rain probability alongside real-time service connectivity health indicator.",
          src: "/screenshots/home-weather.jpg",
        },
        {
          id: "shelter-directory",
          title: "CMRF Shelter Directory",
          screenName: "Disaster Shelters",
          caption: "Searchable directory of Chief Minister's Relief Fund disaster shelters across coastal and inland blocks.",
          details:
            "Displays administrative centroids, facility types (Flood/Cyclone Shelter), and explicit 'Status Unknown' operational readiness.",
          src: "/screenshots/shelter-directory.jpg",
        },
        {
          id: "alerts-bulletins",
          title: "Official Bulletins & Public Alerts",
          screenName: "Warnings & Alerts",
          caption: "Synthesized alerts checked directly against official IMD RSMC and NDMA SACHET feeds.",
          details:
            "Displays warning codes (Green/Normal) and transparent timestamp freshness notices for citizen trust.",
          src: "/screenshots/alerts-bulletins.jpg",
        },
        {
          id: "settings-language-location",
          title: "Settings & Privacy Controls",
          screenName: "Preferences & Onboarding",
          caption: "Granular controls for Odia/English toggle, district selection, and foreground-only location onboarding (precise coordinates redacted).",
          details:
            "Explains privacy protections: zero continuous background GPS tracking, manual data refresh, and cached state controls.",
          src: "/screenshots/settings-language-location.jpg",
        },
        {
          id: "offline-safety-guides",
          title: "Offline Safety Guides",
          screenName: "Actionable Protocols",
          caption: "Emergency checklists for Cyclone, Flood & Saline Inundation, Lightning, and Heat Waves.",
          details:
            "Sourced from official OSDMA safety documentation, embedded locally to be instantly readable during total network blackout.",
          src: "/screenshots/offline-safety-guides.jpg",
        },
      ],
    },
    roles: {
      tag: "Operational Topology",
      title: "Citizen Companion & Officer Cockpit",
      subtitle:
        "JanaKavach bridges grassroots community preparedness with administrative situational awareness through two purpose-built interfaces.",
      citizenTitle: "Citizen Android Companion",
      citizenDesc:
        "A lightweight, battery-efficient Flutter application installed on citizen smartphones across Odisha.",
      citizenPoints: [
        "Retains core safety guides and cached listings offline without internet.",
        "Zero background location tracking for citizen privacy.",
        "Instant Odia and English language switching.",
        "Access to CMRF shelter centroids (with caching for offline use).",
        "Local on-device storage for incident observations (cloud sync disabled).",
      ],
      officerTitle: "Officer Response Cockpit",
      officerDesc:
        "A tactical Next.js web application for emergency managers, block disaster officers, and response coordinators.",
      officerPoints: [
        "GIS map visualization of shelter distribution across districts.",
        "Triage view for crowd observations.",
        "Shelter readiness and operational audit trail.",
        "Strictly read-only monitoring during the research pilot phase.",
        "Zero citizen credential exposure or public signup.",
      ],
      readOnlyNotice:
        "Pilot Safety Invariant: In the current Odisha AI Hackathon research pilot, shelter modification and emergency dispatch are strictly read-only to prevent false operational changes.",
      portalAction: "Open Officer Cockpit",
    },
    download: {
      tag: "Verified Distribution",
      title: "Download JanaKavach for Android",
      subtitle:
        "Universal APK package signed with a permanent RSA-4096 cryptographic keystore and validated against 381 automated test suites.",
      version: "1.0.3",
      build: "6",
      size: "59.8 MB",
      minAndroid: "Android 7.0 (Nougat, API 24)",
      targetSdk: "Android 16 (API 36)",
      abis: "arm64-v8a, armeabi-v7a, x86_64",
      signingKey: "Permanent RSA-4096",
      checksumLabel: "SHA-256 Checksum",
      copyChecksum: "Copy Checksum",
      copied: "Copied to Clipboard",
      downloadBtn: "Download Universal APK (v1.0.3)",
      unconfiguredBtn: "Pilot download not yet configured",
      unconfiguredDesc:
        "The direct APK download URL is not yet configured on this deployment. Authorized pilot testers should contact the hackathon administrator.",
      releaseNotesLink: "View Detailed Release Notes",
      scanQr: "Scan Deployment QR Code",
      qrDescription: "Scan this QR code with your phone camera to open this deployment page on mobile.",
      qrUnconfigured: "QR code available when NEXT_PUBLIC_SITE_URL is configured.",
      pilotTesterNoticeTitle: "Pilot Tester Access Notice",
      pilotTesterNoticeDesc:
        "During this research pilot phase, the distribution repository may require sign-in by authorized Odisha AI Hackathon testers. Ensure you are signed in to an authorized GitHub account if prompted.",
      downloadDisclaimer:
        "Research Pilot Disclaimer: JanaKavach is an independent research prototype. It does not provide emergency dispatch. For life-threatening emergencies, call 112 immediately.",
    },
    install: {
      tag: "Step-by-Step",
      title: "How to Install JanaKavach APK",
      subtitle:
        "Follow these standard Android sideloading instructions to test the universal APK package safely on your device.",
      steps: [
        {
          number: "01",
          title: "Download the APK",
          desc: "Tap the download button above to save 'JanaKavach-v1.0.3-universal.apk' to your phone's Downloads directory.",
        },
        {
          number: "02",
          title: "Locate in File Manager",
          desc: "Open your device's Files or Downloads application and tap on the downloaded JanaKavach APK file.",
        },
        {
          number: "03",
          title: "Allow Installation Source",
          desc: "If Android displays 'Install unknown apps', tap Settings and enable permission for your browser or file manager.",
        },
        {
          number: "04",
          title: "Complete Installation",
          desc: "Tap 'Install' when prompted. Android's built-in package installer will unpack and verify the cryptographic signature.",
        },
        {
          number: "05",
          title: "Launch JanaKavach",
          desc: "Tap 'Open' or locate the JanaKavach shield icon in your app drawer to begin.",
        },
        {
          number: "06",
          title: "Review Location Onboarding",
          desc: "Read the transparent location notice explaining that GPS is foreground-only and never runs in the background.",
        },
        {
          number: "07",
          title: "Select Preferred Language",
          desc: "Choose between English and ଓଡ଼ିଆ (Odia) to begin exploring weather, offline safety guides, and shelters.",
        },
      ],
      playProtectNoticeTitle: "Security Notice: Keep Google Play Protect Enabled",
      playProtectNoticeDesc:
        "Never disable Google Play Protect. JanaKavach is designed to run safely within standard Android app sandboxing. If Play Protect scans the APK, simply allow the scan to complete normally.",
      compatibilityNote:
        "Compatible with ARM64, ARMv7, and x86_64 Android devices running Android 7.0 (API 24) or newer.",
    },
    privacy: {
      tag: "Data Ethics",
      title: "Privacy and Security Grounded in Trust",
      subtitle:
        "JanaKavach implements data minimization, purpose-bound consent, and zero background location tracking.",
      points: [
        {
          title: "Foreground-Only Location Access",
          desc: "The app never tracks your location in the background. GNSS coordinates are queried only in the foreground when you explicitly tap to calculate shelter proximity or view local weather.",
        },
        {
          title: "Optional Location Permission",
          desc: "Location access is entirely optional. You can manually select your district (e.g., Khordha, Puri, Kendrapara) to receive weather bulletins and shelter listings without granting GPS access.",
        },
        {
          title: "Encrypted On-Device Database",
          desc: "Locally cached shelter records, offline disaster guides, and draft incident reports are stored locally in an encrypted SQLite database on your device.",
        },
        {
          title: "External Service Requests",
          desc: "When requesting weather updates or shelter proximity, coordinates or selected district identifiers are transmitted to the respective public weather or shelter API endpoints to retrieve data.",
        },
        {
          title: "No Biometrics or Identity Numbers",
          desc: "JanaKavach strictly avoids collecting biometric data, national identity numbers (Aadhaar), or sensitive personal financial identifiers.",
        },
        {
          title: "Research Pilot Status",
          desc: "JanaKavach is an independent research prototype developed for the Odisha AI Hackathon. It does not carry statutory emergency authority or official government agency affiliation.",
        },
      ],
      viewFullPolicy: "Read Dedicated Privacy Policy",
      viewDisclaimer: "Read Research Pilot Disclaimer",
    },
    footer: {
      tagline: "AI for a Safer and Smarter Odisha",
      hackathonAttribution:
        "Developed as an independent research prototype for the Odisha AI Hackathon. Dedicated to the resilience of Odisha's communities.",
      prototypeNotice:
        "Research Pilot Prototype. Not affiliated with, endorsed by, or operated by any government department. For life-threatening emergencies, dial 112 immediately.",
      navigationHeader: "Navigation",
      legalHeader: "Governance & Safety",
      links: {
        about: "About Platform",
        features: "Implemented Features",
        download: "Download Android APK",
        officerPortal: "Officer Cockpit",
        privacy: "Privacy Policy",
        disclaimer: "Pilot Disclaimer",
        releaseNotes: "Release Notes v1.0.3",
      },
      allRightsReserved: "JanaKavach Research Prototype • Open Source & Community Resilience",
    },
  },
  or: {
    brand: {
      name: "ଜନକବଚ",
      nameOdia: "JanaKavach",
      tagline: "ସୁରକ୍ଷିତ ଓ ସ୍ମାର୍ଟ ଓଡ଼ିଶା ପାଇଁ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା (AI)",
      taglineSub: "ନାଗରିକ ସୁରକ୍ଷା ଓ ଅଫଲାଇନ୍-ପ୍ରାଥମିକ ବିପର୍ଯ୍ୟୟ ପ୍ରସ୍ତୁତି ମଞ୍ଚ",
      pilotBadge: "ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍ • ଓଡ଼ିଶା AI ହାକାଥନ୍",
      pilotNotice: "ସ୍ୱତନ୍ତ୍ର ବିପର୍ଯ୍ୟୟ ସୂଚନା ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍। ଏହା ସରକାରୀ ଜରୁରୀକାଳୀନ ସେବା ନୁହେଁ।",
    },
    nav: {
      about: "ପରିଚୟ",
      features: "ବୈଶିଷ୍ଟ୍ୟ",
      howItWorks: "କାର୍ଯ୍ୟପ୍ରଣାଳୀ",
      offline: "ଅଫଲାଇନ୍ ସୁବିଧା",
      screenshots: "ଆପ୍ ପ୍ରଦର୍ଶନ",
      download: "ଡାଉନଲୋଡ୍",
      officerPortal: "ପ୍ରଶାସକ ପୋର୍ଟାଲ",
      officerBadge: "ଅନୁମୋଦିତ",
      switchLang: "English",
      menu: "ମେନୁ",
      close: "ବନ୍ଦ କରନ୍ତୁ",
    },
    hero: {
      headline: "ସୂଚିତ ନାଗରିକଙ୍କ ସହ ଏକ ସୁରକ୍ଷିତ ଓଡ଼ିଶାର ଆରମ୍ଭ।",
      description:
        "ଓଡ଼ିଶାର ଉପକୂଳ, ନଦୀକୂଳ ଓ ଗ୍ରାମାଞ୍ଚଳର ଜନସାଧାରଣଙ୍କ ପ୍ରକୃତ ଆବଶ୍ୟକତାକୁ ନଜରରେ ରଖି ପ୍ରସ୍ତୁତ ଏକ ଅଫଲାଇନ୍-ପ୍ରାଥମିକ ବିପର୍ଯ୍ୟୟ ପ୍ରସ୍ତୁତି ଓ ଶାସନ ଗବେଷଣା ମଞ୍ଚ।",
      downloadCta: "ଆଣ୍ଡ୍ରଏଡ୍ ପାଇଁ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
      exploreCta: "ଜନକବଚ ବିଷୟରେ ଜାଣନ୍ତୁ",
      releaseLabel: "v1.0.3 ସାର୍ବଜନୀନ ରିଲିଜ୍",
      platformLabel: "ଆଣ୍ଡ୍ରଏଡ୍ ୭.୦+ (API ୨୪ ରୁ ୩୬)",
      testsPassed: "୩୮୧ଟି ସ୍ୱୟଂଚାଳିତ ପରୀକ୍ଷା ଉତ୍ତୀର୍ଣ୍ଣ",
      verifiedSigning: "ସ୍ଥାୟୀ RSA-4096 କିଷ୍ଟୋର ସ୍ୱାକ୍ଷରିତ",
      heroCardTitle: "ଖୋର୍ଦ୍ଧା (ଭୁବନେଶ୍ୱର)",
      heroCardStatus: "ସର୍ଭିସ୍ ସକ୍ରିୟ • ସ୍ୱାଭାବିକ ସ୍ଥିତି",
      heroCardWeather: "୨୬.୦°C • ପ୍ରାୟତଃ ପରିଷ୍କାର ଆକାଶ",
      heroCardDistrict: "ଜିଲ୍ଲା: ଖୋର୍ଦ୍ଧା • ୧୫୮ଟି CMRF ଆଶ୍ରୟସ୍ଥଳୀ ସୂଚନା",
      offlineBadgeTitle: "ଅଫଲାଇନ୍ ସୁରକ୍ଷା",
      offlineBadgeDesc: "କ୍ୟାଶ୍ ହୋଇଥିବା ଆଶ୍ରୟସ୍ଥଳୀ ଓ ଅଫଲାଇନ୍ ନିର୍ଦ୍ଦେଶାବଳୀ",
    },
    problem: {
      tag: "ବିପର୍ଯ୍ୟୟ ସ୍ଥିତି",
      title: "ଓଡ଼ିଶାର ବହୁମୁଖୀ ପ୍ରାକୃତିକ ବିପର୍ଯ୍ୟୟ",
      subtitle:
        "ଓଡ଼ିଶାର ଭୌଗୋଳିକ ଅବସ୍ଥିତି ଯୋଗୁଁ ବାରମ୍ବାର ବାତ୍ୟା, ବନ୍ୟା, ବଜ୍ରପାତ ଓ ଅଂଶୁଘାତ ପରି ବିପର୍ଯ୍ୟୟ ସୃଷ୍ଟି ହୁଏ। ଏହାର ମୁକାବିଲା ପାଇଁ ଏକ ସୁଦୃଢ଼ ଓ ନିର୍ଭରଯୋଗ୍ୟ ବ୍ୟବସ୍ଥା ଆବଶ୍ୟକ।",
      cyclones: {
        title: "ବଙ୍ଗୋପସାଗରୀୟ ବାତ୍ୟା",
        desc: "ତୀବ୍ର ବାତ୍ୟା ଯୋଗୁଁ ଉପକୂଳ ଅଞ୍ଚଳରେ ପ୍ରବଳ ପବନ ବହେ, ଯାହା ବିଦ୍ୟୁତ୍ ଏବଂ ମୋବାଇଲ୍ ଟାୱାରକୁ ବିଚ୍ଛିନ୍ନ କରିଦିଏ।",
      },
      floods: {
        title: "ନଦୀବନ୍ୟା ଓ ଜଳବନ୍ଦୀ ସମସ୍ୟା",
        desc: "ମହାନଦୀ, ବ୍ରାହ୍ମଣୀ ଏବଂ ବୈତରଣୀ ନଦୀ ଅବବାହିକାରେ ମୌସୁମୀ ବନ୍ୟା ଯୋଗୁଁ ତଳିଆ ଅଞ୍ଚଳ ଜଳମଗ୍ନ ହୁଏ ଏବଂ ଯାତାୟାତ ବାଧାପ୍ରାପ୍ତ ହୁଏ।",
      },
      lightning: {
        title: "ବଜ୍ରପାତ ଓ କାଳବୈଶାଖୀ",
        desc: "ମୌସୁମୀ ପୂର୍ବ ଓ ବର୍ଷା ସମୟରେ ଓଡ଼ିଶାରେ ଘନ ଘନ ବଜ୍ରପାତ ଘଟି ଖୋଲା ପଡ଼ିଆରେ କାମ କରୁଥିବା ଲୋକଙ୍କ ପ୍ରତି ବିପଦ ସୃଷ୍ଟି କରେ।",
      },
      heatwave: {
        title: "ପ୍ରଚଣ୍ଡ ଗ୍ରୀଷ୍ମ ପ୍ରବାହ ଓ ଅଂଶୁଘାତ",
        desc: "ଖରାଦିନେ ତାପମାତ୍ରା ଅତ୍ୟଧିକ ବୃଦ୍ଧି ପାଇବା ଫଳରେ ଗ୍ରାମାଞ୍ଚଳର ଜନସାଧାରଣ ଓ ଖଟିଖିଆ ଲୋକଙ୍କ ସ୍ୱାସ୍ଥ୍ୟ ଉପରେ ଗମ୍ଭୀର ପ୍ରଭାବ ପଡ଼େ।",
      },
      blackouts: {
        title: "ସଂଯୋଗ ବିଚ୍ଛିନ୍ନତା (ନେଟୱର୍କ ବ୍ଲାକଆଉଟ୍)",
        desc: "ପ୍ରାକୃତିକ ବିପର୍ଯ୍ୟୟ ସମୟରେ ମୋବାଇଲ୍ ନେଟୱର୍କ ବାଧାପ୍ରାପ୍ତ ହୁଏ, ଯାହା ଫଳରେ ଜରୁରୀ ସୂଚନା ପାଇବାରେ ସମସ୍ୟା ଉପୁଜେ।",
      },
      fragmentation: {
        title: "ବିଭକ୍ତ ସୂଚନା ଓ ଭାଷାଗତ ବ୍ୟବଧାନ",
        desc: "ସୁରକ୍ଷା ପରାମର୍ଶ ବିଭିନ୍ନ ସ୍ଥାନରେ ବିକ୍ଷିପ୍ତ ରହିଥାଏ, ଯାହା ଗ୍ରାମାଞ୍ଚଳ ନାଗରିକଙ୍କ ପାଖରେ ଓଡ଼ିଆ ଭାଷାରେ ସଠିକ୍ ସମୟରେ ପହଞ୍ଚିପାରେ ନାହିଁ।",
      },
    },
    features: {
      tag: "କାର୍ଯ୍ୟକ୍ଷମ ସୁବିଧା",
      title: "ପ୍ରକୃତରେ ପ୍ରସ୍ତୁତ ବୈଶିଷ୍ଟ୍ୟ ସମୂହ",
      subtitle:
        "ଜନକବଚ କୌଣସି ଅବାସ୍ତବ ଦାବି କରେ ନାହିଁ। ଏଠାରେ ଉଲ୍ଲେଖ ଥିବା ପ୍ରତ୍ୟେକ ବୈଶିଷ୍ଟ୍ୟ ଆମର କୋଡ୍ ଏବଂ ୩୮୧ଟି ସ୍ୱୟଂଚାଳିତ ପରୀକ୍ଷାରେ ଯାଞ୍ଚ କରାଯାଇଛି।",
      implementedTitle: "ସଂସ୍କରଣ v1.0.3 ରେ ଉପଲବ୍ଧ ସୁବିଧା",
      roadmapTitle: "ସ୍ପଷ୍ଟ ସୀମା: କ’ଣ କାର୍ଯ୍ୟକ୍ଷମ ନୁହେଁ",
      items: [
        {
          title: "ସ୍ଥାନୀୟ ପାଣିପାଗ ସୂଚନା",
          desc: "ତାପମାତ୍ରା, ଆର୍ଦ୍ରତା, ବର୍ଷା ସମ୍ଭାବନା ଏବଂ ପବନର ବେଗ ସମ୍ପର୍କିତ ସୂଚନା ଇଣ୍ଟରନେଟ୍ ଥିବା ସମୟରେ Open-Meteo ଏବଂ IMD NWFC ମାଧ୍ୟମରେ ଆସିଥାଏ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ବିପର୍ଯ୍ୟୟ ବୁଲେଟିନ୍ ଓ ଯାଞ୍ଚ ସୂଚନା",
          desc: "IMD RSMC ବାତ୍ୟା ପରାମର୍ଶ ଏବଂ NDMA SACHET ସର୍ବସାଧାରଣ ସତର୍କତା ସଠିକ୍ ସମୟ ସହ ସ୍ୱଚ୍ଛ ଭାବରେ ପ୍ରଦର୍ଶିତ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ଅଫଲାଇନ୍ ବିପର୍ଯ୍ୟୟ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ",
          desc: "ବାତ୍ୟା, ବନ୍ୟା, ବଜ୍ରପାତ ଓ ଅଂଶୁଘାତ ପାଇଁ OSDMA ଦ୍ୱାରା ପ୍ରସ୍ତୁତ ସୁରକ୍ଷା ପଦକ୍ଷେପ ବିନା ଇଣ୍ଟରନେଟରେ ଫୋନରେ ଉପଲବ୍ଧ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "୧୫୮ଟି CMRF-ଉତ୍ସ ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା",
          desc: "ମୁଖ୍ୟମନ୍ତ୍ରୀ ରିଲିଫ୍ ପାଣ୍ଠି (CMRF) ଉତ୍ସରୁ ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା API ମାଧ୍ୟମରେ ଆସିଥାଏ ଏବଂ ଥରେ ଆସିବା ପରେ ଅଫଲାଇନ୍ ବ୍ୟବହାର ପାଇଁ ଫୋନରେ କ୍ୟାଶ୍ ହୋଇ ରହେ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ଜି.ପି.ଏସ୍. ନିକଟବର୍ତ୍ତୀ ସୂଚନା",
          desc: "ଆଶ୍ରୟସ୍ଥଳୀ ପ୍ରଶାସନିକ କେନ୍ଦ୍ରବିନ୍ଦୁର ଆନୁମାନିକ ଦୂରତା। ବିପର୍ଯ୍ୟୟ ସମୟରେ ରାସ୍ତା କଟିବା ଆଶଙ୍କା ଥିବାରୁ ଭ୍ରାନ୍ତିକର ସଳଖ ରେଖା ନେଭିଗେସନ୍ ନିଷିଦ୍ଧ କରାଯାଇଛି।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ସମ୍ପୂର୍ଣ୍ଣ ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଭାଷା ବିକଳ୍ପ",
          desc: "ଓଡ଼ିଶାର ପ୍ରତ୍ୟେକ ନାଗରିକଙ୍କ ପାଇଁ ଶୁଦ୍ଧ ଓଡ଼ିଆ ଅକ୍ଷର ଏବଂ ସହଜ ଭାଷା ପରିବର୍ତ୍ତନ ସୁବିଧା।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "କେବଳ ଆଗଭୂମି (Foreground) ଅବସ୍ଥାନ ଅନୁମତି",
          desc: "କୌଣସି ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଟ୍ରାକିଂ ନାହିଁ। କେବଳ ଉପଭୋକ୍ତା ଚାହିଁଲେ ହିଁ ଅବସ୍ଥାନ ଯାଞ୍ଚ କରାଯାଏ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ସ୍ଥାନୀୟ ଡାଟାବେସ୍",
          desc: "ଫୋନରେ ଥିବା SQLite ଡାଟାବେସରେ କ୍ୟାଶ୍ ହୋଇଥିବା ଆଶ୍ରୟସ୍ଥଳୀ ଓ ଅଫଲାଇନ୍ ରିପୋର୍ଟ ଡ୍ରାଫ୍ଟ ଏନକ୍ରିପ୍ଟ ହୋଇ ରହେ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ସ୍ଥାନୀୟ ନାଗରିକ ରିପୋର୍ଟ ଲିପିବଦ୍ଧ",
          desc: "ଇଣ୍ଟରନେଟ୍ ନଥିବା ସମୟରେ ଘଟଣା ଡ୍ରାଫ୍ଟ ଫୋନର ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ଡାଟାବେସରେ ସୁରକ୍ଷିତ ରହେ। ଗବେଷଣା ପାଇଲଟ୍ ସମୟରେ କ୍ଲାଉଡ୍ ପ୍ରେରଣ ନିଷ୍କ୍ରିୟ ରହିଛି।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
        {
          title: "ପ୍ରଶାସକ ଆଶ୍ରୟସ୍ଥଳୀ ତଦାରଖ (ରିଡ୍-ଅନଲି)",
          desc: "ଜରୁରୀକାଳୀନ ଅଧିକାରୀଙ୍କ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ୱେବ୍ କକପିଟ୍, ଯାହା ଗବେଷଣା ପାଇଲଟ୍ ସମୟରେ କେବଳ ଦେଖିବା ପାଇଁ (Read-Only) ସୀମିତ।",
          tag: "କାର୍ଯ୍ୟକ୍ଷମ",
        },
      ],
      notImplementedNotice:
        "ଜନସାଧାରଣଙ୍କ ସୁରକ୍ଷା ଓ ସ୍ୱଚ୍ଛତା ଦୃଷ୍ଟିରୁ ନିମ୍ନଲିଖିତ ସୁବିଧାଗୁଡ଼ିକ ବର୍ତ୍ତମାନ କାର୍ଯ୍ୟକ୍ଷମ ନୁହେଁ ବୋଲି ସ୍ପଷ୍ଟ କରାଯାଉଛି:",
      roadmapItems: [
        {
          title: "କୌଣସି AI ଜରୁରୀକାଳୀନ ଉଦ୍ଧାର ପ୍ରେରଣ ନାହିଁ",
          desc: "ଜନକବଚ ସରକାରୀ ୧୧୨ କିମ୍ବା ପୋଲିସ/ଅଗ୍ନିଶମ ବାହିନୀ ସହ ସିଧାସଳଖ ସଂଯୁକ୍ତ ନୁହେଁ। ଜରୁରୀ ବିପଦରେ ୧୧୨ ଡାଏଲ୍ କରନ୍ତୁ।",
        },
        {
          title: "କୌଣସି ସତ୍ୟାପିତ ନିରାପଦ ନେଭିଗେସନ୍ ନାହିଁ",
          desc: "ଆଶ୍ରୟସ୍ଥଳୀ ନିର୍ଦ୍ଦେଶାଙ୍କ ପ୍ରଶାସନିକ କେନ୍ଦ୍ରବିନ୍ଦୁ ଦର୍ଶାଏ, ଏହା ପ୍ରକୃତ କୋଠା ପ୍ରବେଶପଥ ବା ବନ୍ୟାମୁକ୍ତ ରାସ୍ତା ନୁହେଁ।",
        },
        {
          title: "କୌଣସି ସ୍ୱୟଂଚାଳିତ କ୍ଲାଉଡ୍ ରିପୋର୍ଟ ସିଙ୍କ୍ ନାହିଁ",
          desc: "ରିପୋର୍ଟଗୁଡ଼ିକ କେବଳ ଫୋନର ସ୍ଥାନୀୟ ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା SQLite ଡାଟାବେସରେ ରହେ। କ୍ଲାଉଡ୍ ପ୍ରେରଣ ନିଷ୍କ୍ରିୟ ଅଛି।",
        },
        {
          title: "କୌଣସି ପ୍ରତ୍ୟକ୍ଷ ଲାଇଭ୍ ଆଶ୍ରୟସ୍ଥଳୀ ସ୍ଥିତି ନାହିଁ",
          desc: "ଆଶ୍ରୟସ୍ଥଳୀରେ ବାସ୍ତବରେ କେତେ ଲୋକ ଅଛନ୍ତି ଓ ତାହା ଖୋଲା ଅଛି କି ନାହିଁ ତାହା ଅଧିକାରୀଙ୍କ ଭୌତିକ ଯାଞ୍ଚ ବିନା 'ଅଜ୍ଞାତ' (UNKNOWN) ଭାବେ ରହିଛି।",
        },
      ],
    },
    offline: {
      tag: "ନିରବଚ୍ଛିନ୍ନ ସେବା",
      title: "ଅଫଲାଇନ୍ ହେଉଛି ଆମର ମୂଳଦୁଆ, ଅନଲାଇନ୍ ଏକ ଅତିରିକ୍ତ ସୁବିଧା",
      subtitle:
        "ବିପର୍ଯ୍ୟୟ ସମୟରେ ଇଣ୍ଟରନେଟ୍ ବାଧାପ୍ରାପ୍ତ ହୋଇପାରେ। ତେଣୁ ମୁଖ୍ୟ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ ବିନା ନେଟୱର୍କରେ ଫୋନରେ ଉପଲବ୍ଧ ରହିବା ପାଇଁ ନିର୍ମିତ।",
      availableTitle: "ଅଫଲାଇନରେ ଉପଲବ୍ଧ (ବିନା ନେଟୱର୍କ)",
      availableDesc:
        "ଫୋନରେ ଥିବା OSDMA ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ (ବାତ୍ୟା, ବନ୍ୟା, ବଜ୍ରପାତ, ଅଂଶୁଘାତ), ସ୍ଥାନୀୟ ରିପୋର୍ଟ ଲିପିବଦ୍ଧ ଏବଂ ପୂର୍ବରୁ କ୍ୟାଶ୍ ହୋଇଥିବା ଆଶ୍ରୟସ୍ଥଳୀ ଓ ପାଣିପାଗ ସୂଚନା।",
      onlineTitle: "ଇଣ୍ଟରନେଟ୍ ଥିଲେ ଉପଲବ୍ଧ ସୂଚନା ଗ୍ରହଣ",
      onlineDesc:
        "ସର୍ଭିସ୍ ସକ୍ରିୟ ଥିବା ସମୟରେ ନୂଆ ପାଣିପାଗ ତଥ୍ୟ, IMD ବାତ୍ୟା ପରାମର୍ଶ, NDMA ସତର୍କତା ବୁଲେଟିନ୍ ଏବଂ ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା କ୍ୟାଶ୍ କରିବା ସୁବିଧା।",
      disclaimerNotice:
        "ସୂଚନା: ନେଟୱର୍କ ବା ବିଦ୍ୟୁତ୍ ବିଭ୍ରାଟ ସମୟରେ ଜନକବଚ କୌଣସି ଜରୁରୀକାଳୀନ ଯୋଗାଯୋଗ, ଲାଇଭ୍ ସତର୍କତା କିମ୍ବା ସ୍ୱୟଂଚାଳିତ ଉଦ୍ଧାରର ଗ୍ୟାରେଣ୍ଟି ଦିଏ ନାହିଁ।",
      matrix: [
        {
          level: "L0 — ଅନଲାଇନ୍ ତଥ୍ୟ ସଂଗ୍ରହ",
          condition: "ସର୍ଭିସ୍ ସକ୍ରିୟ ଥିବା ସମୟରେ (ୱାଇ-ଫାଇ ବା ମୋବାଇଲ୍ ଡାଟା)",
          channel: "ପ୍ରତ୍ୟକ୍ଷ HTTPS ସଂଯୋଗ",
          experience: "ଅନଲାଇନ୍ ପାଣିପାଗ ସୂଚନା, ସତର୍କତା ବୁଲେଟିନ୍ ଏବଂ CMRF ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା ଗ୍ରହଣ।",
        },
        {
          level: "L1 — ଦୁର୍ବଳ ନେଟୱର୍କ",
          condition: "ଅସ୍ଥିର 2G/3G କିମ୍ବା ଭିଡ଼ ଟାୱାର",
          channel: "ସତେଜତା ସୂଚକ ଯୁକ୍ତ HTTPS",
          experience: "ଆପ୍ ଦୁର୍ବଳ ସଂଯୋଗ ସୂଚାଇବା ସହ ତଥ୍ୟର ଉପଲବ୍ଧତା ଓ ସତେଜତା ସ୍ପଷ୍ଟ କରେ।",
        },
        {
          level: "L2 — SMS ଫଲବ୍ୟାକ୍ (ଭବିଷ୍ୟତ ଯୋଜନା)",
          condition: "ମୋବାଇଲ୍ ଡାଟା ନାହିଁ, କେବଳ ସେଲ୍ୟୁଲାର୍ ରେଡିଓ",
          channel: "ଭବିଷ୍ୟତ କଳ୍ପନା — କାର୍ଯ୍ୟକ୍ଷମ ନୁହେଁ",
          experience: "ଭବିଷ୍ୟତ ପାଇଁ ଏକ ପରିକଳ୍ପିତ SMS ଫର୍ମାଟ୍; v1.0.3 ରେ ଏହା କାର୍ଯ୍ୟକ୍ଷମ ନୁହେଁ।",
          isRoadmap: true,
        },
        {
          level: "L3 — ସମ୍ପୂର୍ଣ୍ଣ ନେଟୱର୍କ ବିଚ୍ଛିନ୍ନତା",
          condition: "ଶୂନ ସିଗନାଲ୍, ବିମାନ ମୋଡ୍, ଟାୱାର ଅଫଲାଇନ୍",
          channel: "ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ସ୍ଥାନୀୟ ଷ୍ଟୋରେଜ୍",
          experience: "ସମସ୍ତ ଅଫଲାଇନ୍ OSDMA ନିର୍ଦ୍ଦେଶାବଳୀ, ପୂର୍ବରୁ କ୍ୟାଶ୍ ହୋଇଥିବା ଆଶ୍ରୟସ୍ଥଳୀ ଏବଂ ସ୍ଥାନୀୟ ରିପୋର୍ଟ ଡ୍ରାଫ୍ଟ।",
        },
        {
          level: "L4 — ଫୋନ୍ ବନ୍ଦ ବା ନଷ୍ଟ",
          condition: "ବ୍ୟାଟେରୀ ଶେଷ ବା ହାର୍ଡୱେର୍ ନଷ୍ଟ",
          channel: "ବାହ୍ୟ ପାରମ୍ପରିକ ଗ୍ରାମ୍ୟ ବ୍ୟବସ୍ଥା",
          experience: "ଆପ୍ଲିକେସନ୍ ବାହାରେ ଥିବା ପାରମ୍ପରିକ ସୁରକ୍ଷା ପଦ୍ଧତି (ପାରିବାରିକ ଯୋଜନା, ସ୍ଥାନୀୟ ଡାକବାଜି ଯନ୍ତ୍ର); ଏହା କୌଣସି ସଫ୍ଟୱେର୍ ଇଣ୍ଟିଗ୍ରେସନ୍ ନୁହେଁ।",
          isRoadmap: true,
        },
      ],
    },
    screenshots: {
      tag: "ଆପ୍ ଚିତ୍ର",
      title: "ପ୍ରକୃତ ମୋବାଇଲ୍ ଆପ୍ଲିକେସନ୍ ପ୍ରଦର୍ଶନ",
      subtitle:
        "ଆଣ୍ଡ୍ରଏଡ୍ ଫୋନରେ ଚାଲୁଥିବା ଜନକବଚ v1.0.3 ର ବାସ୍ତବ ସ୍କ୍ରିନସଟ୍। ଗୋପନୀୟତା ପାଇଁ ସଠିକ୍ ଅବସ୍ଥାନ ନିର୍ଦ୍ଦେଶାଙ୍କ ଘୋଡ଼ାଇ ଦିଆଯାଇଛି (Redacted)।",
      realAppNotice: "ପ୍ରକୃତ ଆଣ୍ଡ୍ରଏଡ୍ ଆପ୍ଲିକେସନ୍ ସ୍କ୍ରିନସଟ୍ • ବିଲ୍ଡ ୬",
      items: [
        {
          id: "home-weather",
          title: "ମୂଳପୃଷ୍ଠା ଓ ସ୍ଥାନୀୟ ପାଣିପାଗ",
          screenName: "ମୂଳ ଡ୍ୟାସବୋର୍ଡ",
          caption: "ଖୋର୍ଦ୍ଧା ଜିଲ୍ଲାର ପାଣିପାଗ ସ୍ଥିତି, IMD RSMC ବାତ୍ୟା ବୁଲେଟିନ୍ ଯାଞ୍ଚ ଓ ଓଡ଼ିଶା ଚେତାବନୀ (ସଠିକ୍ କୋଡ୍ ଘୋଡ଼ାଯାଇଛି)।",
          details:
            "ତାପମାତ୍ରା, ଆର୍ଦ୍ରତା, ପବନ ଓ ବର୍ଷା ସମ୍ଭାବନା ସହିତ ସର୍ଭିସ୍ ସକ୍ରିୟତାର ସୂଚକ।",
          src: "/screenshots/home-weather.jpg",
        },
        {
          id: "shelter-directory",
          title: "CMRF ଆଶ୍ରୟସ୍ଥଳୀ ତାଲିକା",
          screenName: "ଆଶ୍ରୟସ୍ଥଳୀ ସନ୍ଧାନ",
          caption: "ମୁଖ୍ୟମନ୍ତ୍ରୀ ରିଲିଫ୍ ପାଣ୍ଠି (CMRF) ଉତ୍ସରୁ ବହୁମୁଖୀ ଆଶ୍ରୟସ୍ଥଳୀର ତାଲିକା।",
          details:
            "ପ୍ରଶାସନିକ କେନ୍ଦ୍ରବିନ୍ଦୁ, ଆଶ୍ରୟସ୍ଥଳୀ ପ୍ରକାର ଏବଂ ସ୍ପଷ୍ଟ 'ଅଜ୍ଞାତ ସ୍ଥିତି' (UNKNOWN) ସୂଚନା।",
          src: "/screenshots/shelter-directory.jpg",
        },
        {
          id: "alerts-bulletins",
          title: "ସରକାରୀ ସତର୍କତା ଓ ବୁଲେଟିନ୍",
          screenName: "ସତର୍କତା ସୂଚନା",
          caption: "IMD RSMC ଏବଂ NDMA SACHET ସର୍ଭରରୁ ଆସିଥିବା ସତର୍କତା ବୁଲେଟିନ୍।",
          details:
            "ସବୁଜ ରଙ୍ଗର ସ୍ୱାଭାବିକ ସୂଚକ ଏବଂ ତଥ୍ୟ ଯାଞ୍ଚ ସମୟ।",
          src: "/screenshots/alerts-bulletins.jpg",
        },
        {
          id: "settings-language-location",
          title: "ସେଟିଂସ୍ ଓ ଗୋପନୀୟତା ନିୟନ୍ତ୍ରଣ",
          screenName: "ପସନ୍ଦ ଓ ନିୟମାବଳୀ",
          caption: "ଓଡ଼ିଆ/ଇଂରାଜୀ ଭାଷା ଚୟନ, ଜିଲ୍ଲା ପସନ୍ଦ ଏବଂ କେବଳ-ଆଗଭୂମି ଅବସ୍ଥାନ ନିୟନ୍ତ୍ରଣ (ସଠିକ୍ କୋଡ୍ ଘୋଡ଼ାଯାଇଛି)।",
          details:
            "କୌଣସି ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଟ୍ରାକିଂ ନାହିଁ, ସ୍ଥାନୀୟ କ୍ୟାଶ୍ ସତେଜ କରିବା ସୁବିଧା।",
          src: "/screenshots/settings-language-location.jpg",
        },
        {
          id: "offline-safety-guides",
          title: "ଅଫଲାଇନ୍ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ",
          screenName: "ଜରୁରୀ ପଦକ୍ଷେପ",
          caption: "ବାତ୍ୟା, ବନ୍ୟା ଓ ଜଳମଗ୍ନତା, ବଜ୍ରପାତ ଓ ଅଂଶୁଘାତ ପାଇଁ ଜରୁରୀ ସୁରକ୍ଷା ନିୟମ।",
          details:
            "OSDMA ସୁରକ୍ଷା ପୁସ୍ତିକାରୁ ସଂଗୃହିତ, ଯାହା ବିନା ଇଣ୍ଟରନେଟରେ ଫୋନରେ ତୁରନ୍ତ ପଢ଼ିହେବ।",
          src: "/screenshots/offline-safety-guides.jpg",
        },
      ],
    },
    roles: {
      tag: "ପରିଚାଳନା ବ୍ୟବସ୍ଥା",
      title: "ନାଗରିକ ମୋବାଇଲ୍ ଆପ୍ ଓ ପ୍ରଶାସକ କକପିଟ୍",
      subtitle:
        "ଜନକବଚ ସାଧାରଣ ନାଗରିକଙ୍କ ସୁରକ୍ଷା ଏବଂ ଜରୁରୀକାଳୀନ ଅଧିକାରୀଙ୍କ ପରିଚାଳନା ମଧ୍ୟରେ ଏକ ସମନ୍ୱିତ ସେତୁ ନିର୍ମାଣ କରେ।",
      citizenTitle: "ନାଗରିକ ଆଣ୍ଡ୍ରଏଡ୍ ଆପ୍ଲିକେସନ୍",
      citizenDesc:
        "ଓଡ଼ିଶାର ପ୍ରତ୍ୟେକ ନାଗରିକଙ୍କ ସ୍ମାର୍ଟଫୋନ୍ ପାଇଁ ଏକ ସହଜ ଓ ବ୍ୟାଟେରୀ ସଞ୍ଚୟକାରୀ ଫ୍ଲଟର୍ ଆପ୍ଲିକେସନ୍।",
      citizenPoints: [
        "ଇଣ୍ଟରନେଟ୍ ନଥିଲେ ମଧ୍ୟ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ ଓ କ୍ୟାଶ୍ ହୋଇଥିବା ତଥ୍ୟ ଉପଲବ୍ଧ।",
        "ନାଗରିକଙ୍କ ଗୋପନୀୟତା ପାଇଁ ଶୂନ ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଲୋକେସନ୍ ଟ୍ରାକିଂ।",
        "ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଭାଷାରେ ତୁରନ୍ତ ପରିବର୍ତ୍ତନ।",
        "CMRF ଆଶ୍ରୟସ୍ଥଳୀର କେନ୍ଦ୍ରବିନ୍ଦୁ ତଥ୍ୟ (ଅଫଲାଇନ୍ କ୍ୟାଶ୍ ସହ)।",
        "ସ୍ଥାନୀୟ ଫୋନରେ ଘଟଣା ଲିପିବଦ୍ଧ (କ୍ଲାଉଡ୍ ପ୍ରେରଣ ନିଷ୍କ୍ରିୟ)।",
      ],
      officerTitle: "ପ୍ରଶାସକ ପ୍ରତିକ୍ରିୟା କକପିଟ୍",
      officerDesc:
        "ଜିଲ୍ଲା ଏବଂ ବ୍ଲକ୍ ଜରୁରୀକାଳୀନ ଅଧିକାରୀଙ୍କ ପାଇଁ ଏକ ଆଧୁନିକ Next.js ୱେବ୍ ଡ୍ୟାସବୋର୍ଡ।",
      officerPoints: [
        "ଜିଲ୍ଲାୱାରୀ ଆଶ୍ରୟସ୍ଥଳୀ ବଣ୍ଟନର GIS ମାନଚିତ୍ର।",
        "ନାଗରିକଙ୍କ ଆସୁଥିବା ରିପୋର୍ଟଗୁଡ଼ିକର କ୍ରମବଦ୍ଧ ସମୀକ୍ଷା।",
        "ଆଶ୍ରୟସ୍ଥଳୀ ଯାଞ୍ଚ ଏବଂ ଅପରେସନାଲ୍ ଅଡିଟ୍ ଟ୍ରେଲ୍।",
        "ଗବେଷଣା ପାଇଲଟ୍ ସମୟରେ କେବଳ-ଦେଖିବା (Read-Only) ସୁରକ୍ଷା ସୀମା।",
        "କୌଣସି ସର୍ବସାଧାରଣ ସାଇନ୍-ଅପ୍ ନାହିଁ; କେବଳ ଅନୁମୋଦିତ ଅଧିକାରୀ।",
      ],
      readOnlyNotice:
        "ପାଇଲଟ୍ ସୁରକ୍ଷା ନିୟମ: ଓଡ଼ିଶା AI ହାକାଥନ୍ ଗବେଷଣା ପାଇଲଟ୍ ସମୟରେ ଭ୍ରାନ୍ତିକର ପରିବର୍ତ୍ତନ ରୋକିବା ପାଇଁ ଆଶ୍ରୟସ୍ଥଳୀ ସମ୍ପାଦନା ଓ ଡିସପାଚ୍ କେବଳ ପଢ଼ିବା ପାଇଁ (Read-Only) ରଖାଯାଇଛି।",
      portalAction: "ପ୍ରଶାସକ କକପିଟ୍ ଖୋଲନ୍ତୁ",
    },
    download: {
      tag: "ସୁରକ୍ଷିତ ଡାଉନଲୋଡ୍",
      title: "ଆଣ୍ଡ୍ରଏଡ୍ ପାଇଁ ଜନକବଚ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
      subtitle:
        "ସ୍ଥାୟୀ RSA-4096 କ୍ରିପ୍ଟୋଗ୍ରାଫିକ୍ କିଷ୍ଟୋର ଦ୍ୱାରା ସ୍ୱାକ୍ଷରିତ ଏବଂ ୩୮୧ଟି ସ୍ୱୟଂଚାଳିତ ପରୀକ୍ଷାରେ ଯାଞ୍ଚ ହୋଇଥିବା ସାର୍ବଜନୀନ APK।",
      version: "1.0.3",
      build: "6",
      size: "୫୯.୮ MB",
      minAndroid: "ଆଣ୍ଡ୍ରଏଡ୍ ୭.୦ (Nougat, API ୨୪)",
      targetSdk: "ଆଣ୍ଡ୍ରଏଡ୍ ୧୬ (API ୩୬)",
      abis: "arm64-v8a, armeabi-v7a, x86_64",
      signingKey: "ସ୍ଥାୟୀ RSA-4096",
      checksumLabel: "SHA-256 ଚେକସମ୍",
      copyChecksum: "ଚେକସମ୍ କପି କରନ୍ତୁ",
      copied: "କ୍ଲିପବୋର୍ଡକୁ କପି ହୋଇଛି",
      downloadBtn: "ସାର୍ବଜନୀନ APK ଡାଉନଲୋଡ୍ (v1.0.3)",
      unconfiguredBtn: "ପାଇଲଟ୍ ଡାଉନଲୋଡ୍ ଲିଙ୍କ୍ ଏପର୍ଯ୍ୟନ୍ତ ସେଟ୍ ହୋଇନାହିଁ",
      unconfiguredDesc:
        "ଏହି ଡିପ୍ଲୟମେଣ୍ଟରେ ସିଧାସଳଖ APK ଲିଙ୍କ୍ ସେଟ୍ ହୋଇନାହିଁ। ଅନୁମୋଦିତ ପରୀକ୍ଷକମାନେ ଆଡମିନିଷ୍ଟ୍ରେଟରଙ୍କ ସହ ଯୋଗାଯୋଗ କରନ୍ତୁ।",
      releaseNotesLink: "ବିସ୍ତୃତ ରିଲିଜ୍ ବିବରଣୀ ଦେଖନ୍ତୁ",
      scanQr: "ମୋବାଇଲରେ ଖୋଲିବାକୁ ସ୍କାନ୍ କରନ୍ତୁ",
      qrDescription: "ଆପଣଙ୍କ ଫୋନ୍ କ୍ୟାମେରା ବା କ୍ୟୁଆର୍ ସ୍କାନର୍ ମାଧ୍ୟମରେ ଏହି କୋଡ୍ ସ୍କାନ୍ କରି ସିଧାସଳଖ ଡାଉନଲୋଡ୍ ପେଜ୍ ଖୋଲନ୍ତୁ।",
      qrUnconfigured: "NEXT_PUBLIC_SITE_URL ସେଟ୍ ହେଲେ QR କୋଡ୍ ଉପଲବ୍ଧ ହେବ।",
      pilotTesterNoticeTitle: "ପାଇଲଟ୍ ପରୀକ୍ଷକ ସୂଚନା",
      pilotTesterNoticeDesc:
        "ଏହି ଗବେଷଣା ପାଇଲଟ୍ ସମୟରେ ରିଲିଜ୍ ରିପୋଜିଟୋରୀ କେବଳ ଅନୁମୋଦିତ ଓଡ଼ିଶା AI ହାକାଥନ୍ ପରୀକ୍ଷକଙ୍କ ପାଇଁ ସୀମିତ ହୋଇପାରେ। ଆବଶ୍ୟକ ହେଲେ ଅନୁମୋଦିତ GitHub ଆକାଉଣ୍ଟରେ ଲଗ୍-ଇନ୍ କରନ୍ତୁ।",
      downloadDisclaimer:
        "ଗବେଷଣା ପାଇଲଟ୍ ଦାୟିତ୍ୱମୁକ୍ତି: ଜନକବଚ ଏକ ସ୍ୱତନ୍ତ୍ର ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍। ଏହା କୌଣସି ଜରୁରୀକାଳୀନ ଉଦ୍ଧାର ପ୍ରଦାନ କରେ ନାହିଁ। ଜରୁରୀ ବିପଦରେ ୧୧୨ ଡାଏଲ୍ କରନ୍ତୁ।",
    },
    install: {
      tag: "ସହଜ ପଦକ୍ଷେପ",
      title: "ଜନକବଚ APK କିପରି ଇନଷ୍ଟଲ୍ କରିବେ",
      subtitle:
        "ଆପଣଙ୍କ ଆଣ୍ଡ୍ରଏଡ୍ ସ୍ମାର୍ଟଫୋନରେ ସୁରକ୍ଷିତ ଭାବେ ଆପ୍ ଇନଷ୍ଟଲ୍ କରିବା ପାଇଁ ନିମ୍ନ ନିର୍ଦ୍ଦେଶାବଳୀ ଅନୁସରଣ କରନ୍ତୁ।",
      steps: [
        {
          number: "୦୧",
          title: "APK ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
          desc: "ଉପରେ ଥିବା ଡାଉନଲୋଡ୍ ବଟନ୍ କ୍ଲିକ୍ କରି 'JanaKavach-v1.0.3-universal.apk' ଫାଇଲ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ।",
        },
        {
          number: "୦୨",
          title: "ଫାଇଲ୍ ମ୍ୟାନେଜରରେ ଖୋଲନ୍ତୁ",
          desc: "ଆପଣଙ୍କ ଫୋନର Downloads ଫୋଲ୍ଡରକୁ ଯାଇ JanaKavach APK ଫାଇଲ୍ ଉପରେ ଟ୍ୟାପ୍ କରନ୍ତୁ।",
        },
        {
          number: "୦୩",
          title: "ଇନଷ୍ଟଲେସନ୍ ଅନୁମତି ଦିଅନ୍ତୁ",
          desc: "ଯଦି 'Install unknown apps' ସୂଚନା ଆସେ, ତେବେ Settings କୁ ଯାଇ ସେହି ବ୍ରାଉଜର୍ ବା ଫାଇଲ୍ ମ୍ୟାନେଜରକୁ ଅନୁମତି ଦିଅନ୍ତୁ।",
        },
        {
          number: "୦୪",
          title: "ଇନଷ୍ଟଲେସନ୍ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ",
          desc: "'Install' ବଟନ୍ ଟ୍ୟାପ୍ କରନ୍ତୁ। ଆଣ୍ଡ୍ରଏଡ୍ ପ୍ୟାକେଜ୍ ଇନଷ୍ଟଲର୍ ସ୍ୱୟଂଚାଳିତ ଭାବେ ଏହାର ସୁରକ୍ଷା ଯାଞ୍ଚ କରିବ।",
        },
        {
          number: "୦୫",
          title: "ଜନକବଚ ଖୋଲନ୍ତୁ",
          desc: "'Open' ବଟନ୍ ଦବାନ୍ତୁ କିମ୍ବା ଆପ୍ ଡ୍ରୟରରୁ ଜନକବଚ ଆଇକନ୍ ଟ୍ୟାପ୍ କରନ୍ତୁ।",
        },
        {
          number: "୦୬",
          title: "ଅବସ୍ଥାନ ନିୟମାବଳୀ ଦେଖନ୍ତୁ",
          desc: "ସ୍ୱଚ୍ଛ ସୂଚନା ପଢ଼ନ୍ତୁ ଯେଉଁଥିରେ ସ୍ପଷ୍ଟ କରାଯାଇଛି ଯେ GPS କେବଳ ଆଗଭୂମିରେ ଚାଲେ, ପଛଭୂମିରେ ନୁହେଁ।",
        },
        {
          number: "୦୭",
          title: "ପସନ୍ଦର ଭାଷା ବାଛନ୍ତୁ",
          desc: "ଓଡ଼ିଆ କିମ୍ବା English ବାଛି ପାଣିପାଗ, ଅଫଲାଇନ୍ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ ଓ ଆଶ୍ରୟସ୍ଥଳୀ ଦେଖନ୍ତୁ।",
        },
      ],
      playProtectNoticeTitle: "ସୁରକ୍ଷା ସୂଚନା: Google Play Protect କଦାପି ବନ୍ଦ କରନ୍ତୁ ନାହିଁ",
      playProtectNoticeDesc:
        "Google Play Protect କଦାପି ବନ୍ଦ କରନ୍ତୁ ନାହିଁ। ଜନକବଚ ଆଣ୍ଡ୍ରଏଡ୍ ର ସୁରକ୍ଷିତ ସ୍ୟାଣ୍ଡବକ୍ସ ମଧ୍ୟରେ କାର୍ଯ୍ୟ କରେ। ଯଦି Play Protect ସ୍କାନିଂ କରିବାକୁ ଚାହେଁ, ତେବେ ସ୍କାନ୍ କରାଇବାକୁ ଦିଅନ୍ତୁ।",
      compatibilityNote:
        "ଆଣ୍ଡ୍ରଏଡ୍ ୭.୦ (API ୨୪) ବା ତଦୁର୍ଦ୍ଧ୍ୱ ସଂସ୍କରଣ ଚାଲୁଥିବା ARM64, ARMv7 ଏବଂ x86_64 ଡିଭାଇସ୍ ପାଇଁ ଉପଯୁକ୍ତ।",
    },
    privacy: {
      tag: "ଡାଟା ସୁରକ୍ଷା",
      title: "ବିଶ୍ୱାସ ଉପରେ ଆଧାରିତ ଗୋପନୀୟତା",
      subtitle:
        "ଜନକବଚ ତଥ୍ୟ ସଂଗ୍ରହ ସୀମାବଦ୍ଧତା, ସ୍ୱଚ୍ଛ ସମ୍ମତି ଏବଂ ଶୂନ ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଟ୍ରାକିଂ ନୀତି ପାଳନ କରେ।",
      points: [
        {
          title: "କେବଳ ଆଗଭୂମି (Foreground) ଅବସ୍ଥାନ ଅନୁମତି",
          desc: "ଆପ୍ କଦାପି ଆପଣଙ୍କ ପଛଭୂମି (Background) ଲୋକେସନ୍ ଟ୍ରାକ୍ କରେ ନାହିଁ। କେବଳ ଆପଣ ଆଶ୍ରୟସ୍ଥଳୀ ଦୂରତା ବା ପାଣିପାଗ ଦେଖିବାକୁ ଟ୍ୟାପ୍ କଲେ ହିଁ ଅବସ୍ଥାନ ଯାଞ୍ଚ ହୁଏ।",
        },
        {
          title: "ଐଚ୍ଛିକ ଅବସ୍ଥାନ ଅନୁମତି",
          desc: "GPS ଅନୁମତି ସମ୍ପୂର୍ଣ୍ଣ ଐଚ୍ଛିକ। ଆପଣ ବିନା GPS ଅନୁମତିରେ ନିଜ ଜିଲ୍ଲା (ଯଥା: ଖୋର୍ଦ୍ଧା, ପୁରୀ, କେନ୍ଦ୍ରାପଡ଼ା) ବାଛି ପାଣିପାଗ ଓ ଆଶ୍ରୟସ୍ଥଳୀ ସୂଚନା ପାଇପାରିବେ।",
        },
        {
          title: "ଏନକ୍ରିପ୍ଟ ହୋଇଥିବା ସ୍ଥାନୀୟ ଡାଟାବେସ୍",
          desc: "ସମସ୍ତ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ, କ୍ୟାଶ୍ ହୋଇଥିବା ଆଶ୍ରୟସ୍ଥଳୀ ତଥ୍ୟ ଏବଂ ଲିପିବଦ୍ଧ ରିପୋର୍ଟ ଡ୍ରାଫ୍ଟ ଫୋନର SQLite ଡାଟାବେସରେ ଏନକ୍ରିପ୍ଟ ହୋଇ ରହେ।",
        },
        {
          title: "ବାହ୍ୟ ସର୍ଭିସ୍ ଅନୁରୋଧ",
          desc: "ପାଣିପାଗ ବା ଆଶ୍ରୟସ୍ଥଳୀ ଦୂରତା ଦେଖିବା ସମୟରେ, ଉପଭୋକ୍ତାଙ୍କ ଚୟନିତ ଅବସ୍ଥାନ ନିର୍ଦ୍ଦେଶାଙ୍କ ସମ୍ପୃକ୍ତ ସର୍ବସାଧାରଣ ପାଣିପାଗ ବା ଆଶ୍ରୟସ୍ଥଳୀ API କୁ ପଠାଯାଏ। ପଛଭୂମିରେ କୌଣସି ଟ୍ରାକିଂ ହୁଏ ନାହିଁ।",
        },
        {
          title: "କୌଣସି ବାୟୋମେଟ୍ରିକ୍ ବା ଆଧାର ସଂଗ୍ରହ ନାହିଁ",
          desc: "ଜନକବଚ ନାଗରିକଙ୍କ ଆଧାର ନମ୍ବର, ଫିଙ୍ଗରପ୍ରିଣ୍ଟ ବା କୌଣସି ଆର୍ଥିକ ତଥ୍ୟ କଦାପି ସଂଗ୍ରହ କରେ ନାହିଁ।",
        },
        {
          title: "ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍ ମାନ୍ୟତା",
          desc: "ଜନକବଚ ଓଡ଼ିଶା AI ହାକାଥନ୍ ପାଇଁ ପ୍ରସ୍ତୁତ ଏକ ସ୍ୱତନ୍ତ୍ର ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍। ଏହାର କୌଣସି ସରକାରୀ ମାନ୍ୟତା ବା ଜରୁରୀକାଳୀନ ୧୧୨ ଡିସପାଚ୍ କ୍ଷମତା ନାହିଁ।",
        },
      ],
      viewFullPolicy: "ସମ୍ପୂର୍ଣ୍ଣ ଗୋପନୀୟତା ନୀତି ପଢ଼ନ୍ତୁ",
      viewDisclaimer: "ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍ ଦାୟିତ୍ୱମୁକ୍ତି ପଢ଼ନ୍ତୁ",
    },
    footer: {
      tagline: "ସୁରକ୍ଷିତ ଓ ସ୍ମାର୍ଟ ଓଡ଼ିଶା ପାଇଁ କୃତ୍ରିମ ବୁଦ୍ଧିମତ୍ତା (AI)",
      hackathonAttribution:
        "ଓଡ଼ିଶା AI ହାକାଥନ୍ ପାଇଁ ପ୍ରସ୍ତୁତ ଏକ ସ୍ୱତନ୍ତ୍ର ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍। ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ସୁରକ୍ଷା ପ୍ରତି ସମର୍ପିତ।",
      prototypeNotice:
        "ଗବେଷଣା ପାଇଲଟ୍ ପ୍ରୋଟୋଟାଇପ୍। କୌଣସି ସରକାରୀ ବିଭାଗ ସହ ସଂପୃକ୍ତ ନୁହେଁ। ଜୀବନ ପ୍ରତି ବିପଦ ଥିବା ସ୍ଥିତିରେ ତୁରନ୍ତ ୧୧୨ ଡାଏଲ୍ କରନ୍ତୁ।",
      navigationHeader: "ମୁଖ୍ୟ ଲିଙ୍କ୍",
      legalHeader: "ନିୟମାବଳୀ ଓ ସୁରକ୍ଷା",
      links: {
        about: "ପ୍ଲାଟଫର୍ମ ବିଷୟରେ",
        features: "କାର୍ଯ୍ୟକ୍ଷମ ସୁବିଧା",
        download: "ଆଣ୍ଡ୍ରଏଡ୍ APK ଡାଉନଲୋଡ୍",
        officerPortal: "ପ୍ରଶାସକ କକପିଟ୍",
        privacy: "ଗୋପନୀୟତା ନୀତି",
        disclaimer: "ପାଇଲଟ୍ ଦାୟିତ୍ୱମୁକ୍ତି",
        releaseNotes: "ରିଲିଜ୍ ବିବରଣୀ v1.0.3",
      },
      allRightsReserved: "ଜନକବଚ ଗବେଷଣା ପ୍ରୋଟୋଟାଇପ୍ • ମୁକ୍ତ ଉତ୍ସ ଓ ନାଗରିକ ସୁରକ୍ଷା",
    },
  },
};
