import {
  NavSection,
  HeroSection,
  ProblemSection,
  ServicesSection,
  ProcessSection,
  WhyUsAlternative,
  PortfolioSection,
  FaqSection,
  ContactSection,
  FooterSection,
  BackToTop,
} from "@/components/sections";
import { ThemePanel } from "@/components/theme-panel";

export default function HomePage() {
  return (
    <>
      <NavSection />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsAlternative />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
      <ThemePanel />
    </>
  );
}
