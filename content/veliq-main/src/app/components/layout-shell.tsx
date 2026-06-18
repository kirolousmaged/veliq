"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import LoadingScreen from "./loading-screen";
import WhatsAppButton from "./whatsapp-button";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingScreen />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
