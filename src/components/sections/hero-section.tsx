"use client";

import Image from "next/image";
import { heroContent, siteConfig } from "@/lib/content";
import { Phone, ArrowDown } from "lucide-react";

const s = {
  section: "min-h-screen flex items-center relative bg-background pt-20",

  imageBg: "absolute inset-0",
  overlay: "absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 z-10",

  container: "container mx-auto px-6 py-12 lg:py-16 relative z-20",
  content: "max-w-2xl",

  headline: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4",
  headlineAccent: "text-accent",

  subtitle: "text-base md:text-lg text-white/80 max-w-lg mb-6 leading-relaxed",

  memorable: "border-l-4 border-accent pl-4 py-2 text-white/90 text-lg mb-8",

  ctaWrapper: "flex flex-col sm:flex-row gap-3",
  ctaPrimary: "inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-4 font-semibold text-lg rounded-md hover:bg-accent/90 transition-colors",
  ctaSecondary: "inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-4 font-semibold text-lg rounded-md hover:border-accent hover:text-accent transition-colors",
};

export function HeroSection() {
  return (
    <section className={s.section}>
      <div className={s.imageBg}>
        <Image
          src="/glazura-hero.jpg"
          alt="Posadzka przemysłowa - hala"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className={s.overlay} />

      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.headline}>
            {heroContent.headline} <span className={s.headlineAccent}>{heroContent.headlineAccent}</span>
          </h1>

          <p className={s.subtitle}>{heroContent.subheadline}</p>

          <p className={s.memorable}>{heroContent.memorable}</p>

          <div className={s.ctaWrapper}>
            <a href={siteConfig.phoneHref} className={s.ctaPrimary}>
              <Phone className="w-5 h-5" />
              {heroContent.ctaPrimary.label}: {heroContent.ctaPrimary.phone}
            </a>
            <a href={heroContent.ctaSecondary.href} className={s.ctaSecondary}>
              {heroContent.ctaSecondary.label}
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
