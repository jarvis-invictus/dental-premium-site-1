import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ChatbotWidget from "@/components/ChatbotWidget";
import SmoothScroll from "@/components/SmoothScroll";
import { clinicConfig } from "@/lib/clinic-config";

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

const SITE_URL = `https://${clinicConfig.domain}`;

export const metadata: Metadata = {
  title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
  description: 'Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    description: 'Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof.',
    url: SITE_URL,
    siteName: clinicConfig.name,
    locale: 'en-IN'.replace("-", "_"),
    type: "website",
    images: [
      {
        url: "/images/hero.avif",
        width: 1200,
        height: 630,
        alt: `${clinicConfig.name} - Dental Clinic in ${''}, ${''}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicConfig.name} - ${clinicConfig.tagline}`,
    description: 'Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof.',
    images: ["/images/hero.avif"],
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
        name: clinicConfig.name,
        description: 'Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof.',
        telephone: clinicConfig.contact.phone_primary,
        email: clinicConfig.contact.email,
        url: SITE_URL,
        foundingDate: clinicConfig.established.toString(),
        priceRange: "₹₹",
        openingHours: "Mo-Sa 09:00-20:00",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, UPI",
        areaServed: [],
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
          streetAddress: `${clinicConfig.contact.address_full} ${clinicConfig.contact.address_full}`,
          addressLocality: '',
          addressRegion: '',
          postalCode: '',
          addressCountry: '',
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.6514,
          longitude: 73.7431,
        },
        hasMap: clinicConfig.contact.google_maps_url,
        sameAs: [
          clinicConfig.social.facebook,
          clinicConfig.social.instagram,
          '',
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: clinicConfig.name,
        description: 'Comprehensive dental care for your entire family. From routine checkups and cleanings to cosmetic procedures and implants — all under one roof.',
        inLanguage: 'en-IN',
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{question: 'How often should I visit the dentist?', answer: 'We recommend a check-up and cleaning every 6 months. Early detection of issues saves time, money, and discomfort in the long run.'}, {question: 'Does a root canal treatment hurt?', answer: 'With modern anesthesia, root canal treatment is no more uncomfortable than a standard filling. Most of our patients are surprised by how comfortable the procedure is.'}, {question: 'What are your clinic hours?', answer: 'We are open Monday to Saturday, 9:00 AM to 8:00 PM. Sunday emergency care is available from 10 AM to 2 PM.'}, {question: 'Do you offer teeth whitening?', answer: 'Yes — we offer professional in-clinic whitening with visible results in a single 45-minute session, as well as custom take-home whitening kits.'}, {question: 'How long do dental implants last?', answer: 'With proper care, dental implants can last a lifetime. They are the most durable and natural-feeling solution for missing teeth.'}].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang={'en-IN'}>
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
            "--primary": clinicConfig.theme.primary_color,
            "--secondary": clinicConfig.theme.primary_color,
            "--accent": clinicConfig.theme.accent_color,
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
