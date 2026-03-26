import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        </SmoothScroll>
      </body>
    </html>
  );
}
