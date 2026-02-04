import {
  NavSection,
  HeroSection,
  ProblemSection,
  ServicesSection,
  ProcessSection,
  WhyUsIcons,
  PortfolioSection,
  FaqSection,
  ContactSection,
  FooterSection,
  BackToTop,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <NavSection />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsIcons />
        <PortfolioSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
    </>
  );
}
