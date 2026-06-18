import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LayoutShell from "./components/layout-shell";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://veliq.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VELIQ — Software & Marketing Solutions",
    template: "%s — VELIQ",
  },
  description:
    "VELIQ delivers cutting-edge software development and data-driven marketing solutions to accelerate your business growth.",
  keywords: [
    "software development",
    "digital marketing",
    "web development",
    "mobile app development",
    "SEO",
    "brand strategy",
    "data analytics",
    "digital agency",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "VELIQ" }],
  creator: "VELIQ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "VELIQ",
    title: "VELIQ — Your Dedicated Backbone Team",
    description:
      "We engineer seamless brand experiences across web, app, design, and marketing. Every channel. One direction.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "VELIQ — Your Dedicated Backbone Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELIQ — Software & Marketing Solutions",
    description:
      "We design, build, and market digital products that help businesses scale.",
    creator: "@veliq",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VELIQ",
  url: SITE_URL,
  description:
    "Full-service digital agency delivering software development and marketing solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+20-155-116-4671",
    contactType: "customer service",
    email: "admin@veliq.co",
  },
  sameAs: [
    "https://www.linkedin.com/company/veliq",
    "https://twitter.com/veliq",
    "https://www.instagram.com/veliq",
    "https://www.facebook.com/veliq",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
