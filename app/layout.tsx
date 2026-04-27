import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import ChatbotWidget from "@/components/ChatbotWidget";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/lib/site-config";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.subtitle}`,
  description: siteConfig.hero.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description: siteConfig.hero.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1} ${siteConfig.address.line2}`,
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411045",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.6514,
      longitude: 73.7431,
    },
    openingHours: "Mo-Sa 09:00-20:00",
    priceRange: "₹₹",
    url: "https://dental-standard.vercel.app",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I visit the dentist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend a dental check-up and cleaning every 6 months. If you have gum disease or other ongoing issues, your dentist may suggest more frequent visits."
        }
      },
      {
        "@type": "Question",
        name: "Does a root canal hurt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern root canal treatment is essentially painless. We use advanced anesthesia techniques. Most patients say the procedure itself was less uncomfortable than the toothache that brought them in."
        }
      },
      {
        "@type": "Question",
        name: "What are your clinic hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "City Dental Clinic is open Monday to Saturday, 9:00 AM to 8:00 PM. We are closed on Sundays and public holidays."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer teeth whitening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer both in-clinic professional whitening and take-home whitening kits. In-clinic treatment takes about 45-60 minutes with visible results in a single sitting."
        }
      }
    ]
  };

  return (
    <html lang="en">
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
        className={`${outfit.variable} antialiased`}
        style={
          {
            "--primary": siteConfig.theme.colors.primary,
            "--secondary": siteConfig.theme.colors.secondary,
            "--accent": siteConfig.theme.colors.accent,
          } as React.CSSProperties
        }
      >
        <SmoothScroll>
          <CustomCursor />
          {children}
          <FloatingWhatsApp />
          <MobileStickyBar />
          <ChatbotWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
