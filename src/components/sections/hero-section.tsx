"use client";

import Image from "next/image";
import { heroContent, siteConfig } from "@/lib/content";
import { IconCall, IconSouth } from "@/components/ui/icons";

const s = {
  section: "min-h-screen flex items-center relative bg-background pt-20",

  imageBg: "absolute inset-0",
  overlay: "absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 z-10",

  container: "container mx-auto px-6 py-12 lg:py-16 relative z-20",
  content: "max-w-2xl",

  headline: "font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-4",
  headlineAccent: "text-primary",

  subtitle: "text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed",

  memorable: "border-l-4 border-primary pl-4 py-2 text-foreground/80 text-lg mb-8",

  ctaWrapper: "flex flex-col sm:flex-row gap-3 mb-10",
  ctaPrimary: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-heading text-lg tracking-wide hover:bg-primary/90 transition-colors",
  ctaSecondary: "inline-flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-6 py-4 font-heading text-lg tracking-wide hover:border-primary hover:text-primary transition-colors",

  // Stats - subtelne
  stats: "flex gap-8 pt-6 border-t border-border/50 mt-8",
  statItem: "flex flex-col",
  statValue: "font-heading text-2xl md:text-3xl text-muted-foreground",
  statLabel: "text-[10px] text-muted-foreground/70 uppercase tracking-wide",
};

export function HeroSection() {
  return (
    <section className={s.section}>
      <div className={s.imageBg}>
        <Image
          src="/malcerHero.webp"
          alt="MAL-CER realizacje"
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
              <IconCall className="w-5 h-5" />
              {heroContent.ctaPrimary.label}: {heroContent.ctaPrimary.phone}
            </a>
            <a href={heroContent.ctaSecondary.href} className={s.ctaSecondary}>
              {heroContent.ctaSecondary.label}
              <IconSouth className="w-5 h-5" />
            </a>
          </div>

          <div className={s.stats}>
            <div className={s.statItem}>
              <span className={s.statValue}>15+</span>
              <span className={s.statLabel}>lat doświadczenia</span>
            </div>
            <div className={s.statItem}>
              <span className={s.statValue}>100+</span>
              <span className={s.statLabel}>projektów</span>
            </div>
            <div className={s.statItem}>
              <span className={s.statValue}>1</span>
              <span className={s.statLabel}>wykonawca</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
