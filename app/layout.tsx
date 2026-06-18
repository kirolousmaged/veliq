import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mattter® — Digital Design & Automation Agency",
  description:
    "A digital design practice crafting brands with substance. We merge interactive physics with strategic identity to build websites that feel real.",
  keywords: ["design agency", "web design", "framer", "branding", "UI/UX", "SEO"],
  openGraph: {
    title: "Mattter® — Digital Design & Automation Agency",
    description:
      "A digital design practice crafting brands with substance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="bg-black text-white min-h-full antialiased overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
