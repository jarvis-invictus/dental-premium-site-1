import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ChatbotWidget from "@/components/ChatbotWidget";
import SmoothScroll from "@/components/SmoothScroll";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const SITE_URL = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.subtitle}`,
  description: siteConfig.hero.description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.subtitle}`,
    description: siteConfig.hero.description,
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: siteConfig.locale.replace("-", "_"),
    type: "website",
    images: [
      {
        url: siteConfig.images.hero,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Dental Clinic in ${siteConfig.address.locality}, ${siteConfig.address.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.subtitle}`,
    description: siteConfig.hero.description,
    images: [siteConfig.images.hero],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": `${SITE_URL}/#dentist`,
        name: siteConfig.name,
        description: siteConfig.hero.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        url: SITE_URL,
        foundingDate: siteConfig.foundingYear,
        priceRange: "₹₹",
        openingHours: "Mo-Sa 09:00-20:00",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, UPI",
        areaServed: siteConfig.address.areaServed,
        knowsAbout: [
          "Cosmetic Dentistry",
          "Dental Implants",
          "Full Mouth Rehabilitation",
          "Root Canal Treatment",
          "Orthodontic Treatment",
          "Pediatric Dentistry",
          "Oral Prophylaxis",
          "Crowns and Bridges",
          "Dentures"
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: `${siteConfig.address.line1} ${siteConfig.address.line2}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.geo.latitude,
          longitude: siteConfig.address.geo.longitude,
        },
        hasMap: siteConfig.address.googleMapsLink,
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.twitter,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        description: siteConfig.hero.description,
        inLanguage: siteConfig.locale,
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang={siteConfig.locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
        style={
          {
            "--primary": siteConfig.theme.colors.primary,
            "--secondary": siteConfig.theme.colors.secondary,
            "--accent": siteConfig.theme.colors.accent,
          } as React.CSSProperties
        }
      >
        <SmoothScroll>
          {children}
          <FloatingWhatsApp />
          <MobileStickyBar />
          <ChatbotWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
