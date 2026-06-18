import HeroSection from "@/components/sections/HeroSection";
import HeaderBar from "@/components/ui/HeaderBar";
import IntroSection from "@/components/sections/IntroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import AwardsSection from "@/components/sections/AwardsSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import FaqSection from "@/components/sections/FaqSection";
import BlogSection from "@/components/sections/BlogSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero — full-bleed, fills the entire viewport */}
      <HeroSection />

      {/* Everything below keeps the inset rounded-card stack look */}
      <div className="flex flex-col gap-[10px] p-2">
        <HeaderBar label="About Us" />
        <IntroSection />

        <HeaderBar label="Portfolio" />
        <ProjectsSection />

        <HeaderBar label="Services" />
        <ServicesSection />

        <HeaderBar label="Pricing" />
        <PricingSection />

        <AwardsSection />

        <StatsSection />

        <HeaderBar label="Team" />
        <TeamSection />

        <HeaderBar label="FAQ" />
        <FaqSection />

        <HeaderBar label="Blogs" />
        <BlogSection />

        <CtaSection />

        <Footer />
      </div>
    </main>
  );
}
