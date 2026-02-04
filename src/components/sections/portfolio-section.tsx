"use client";

import Image from "next/image";
import { portfolioContent, siteConfig } from "@/lib/content";
import { Phone } from "lucide-react";

const s = {
  section: "bg-secondary section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-12",
  headline: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground h2-bar-center",
  description: "mt-4 text-muted-foreground",

  // Bento Grid - 3 items
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[350px] md:auto-rows-[400px]",

  // Card
  card: "group relative overflow-hidden bg-card border border-border rounded-lg hover:border-accent transition-colors",
  cardImageWrapper: "absolute inset-0 overflow-hidden",
  cardOverlay: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent",

  // Content
  cardContent: "absolute bottom-0 left-0 right-0 p-5",
  cardTags: "flex gap-2 mb-2",
  cardTag: "inline-flex px-2 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded",
  cardTitle: "text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-accent transition-colors",
  cardDesc: "text-sm text-white/80 line-clamp-2 leading-relaxed",

  // CTA
  ctaSection: "mt-12 text-center",
  ctaButton: "inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-semibold text-lg rounded-md hover:bg-accent/90 transition-colors",
};

export function PortfolioSection() {
  const items = portfolioContent.items;

  return (
    <section id="realizacje" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{portfolioContent.headline}</h2>
          <p className={s.description}>{portfolioContent.description}</p>
        </div>

        {/* Mosaic Grid */}
        <div className={s.grid}>
          {items.map((item, index) => {
            // Layout for 3 items: first one full width, two below side by side
            const sizeClass =
              index === 0 ? "md:col-span-2" : "";

            return (
              <div key={item.id} className={`${s.card} ${sizeClass}`}>
                <div className={s.cardImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-110"
                  />
                  <div className={s.cardOverlay} />
                </div>
                <div className={s.cardContent}>
                  <div className={s.cardTags}>
                    {item.tags.map((tag, i) => (
                      <span key={i} className={s.cardTag}>{tag}</span>
                    ))}
                  </div>
                  <h3 className={s.cardTitle}>{item.title}</h3>
                  <p className={s.cardDesc}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={s.ctaSection}>
          <a href={siteConfig.phoneHref} className={s.ctaButton}>
            <Phone className="w-6 h-6" />
            {portfolioContent.cta.label}: {portfolioContent.cta.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
