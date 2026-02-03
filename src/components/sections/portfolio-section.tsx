"use client";

import Image from "next/image";
import { portfolioContent, siteConfig } from "@/lib/content";
import { IconCall } from "@/components/ui/icons";

const s = {
  section: "bg-background section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-12",
  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground h2-bar-center",

  // Grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",

  // Card
  card: "group relative overflow-hidden bg-card border border-border hover:border-primary transition-colors",
  cardImageWrapper: "relative w-full h-64 md:h-72 overflow-hidden",
  cardOverlay: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent",

  // Content
  cardContent: "absolute bottom-0 left-0 right-0 p-5",
  cardTag: "inline-flex px-2 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-2",
  cardTitle: "font-heading text-xl md:text-2xl text-foreground mb-2 leading-tight group-hover:text-primary transition-colors",
  cardDesc: "text-sm text-muted-foreground line-clamp-2 leading-relaxed",

  // Featured card (first item)
  cardFeatured: "md:col-span-2 lg:col-span-2",
  cardFeaturedImageWrapper: "relative aspect-[16/9] md:aspect-[2/1] overflow-hidden",

  // CTA
  ctaSection: "mt-12 text-center",
  ctaButton: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading text-lg tracking-wide hover:bg-primary/90 transition-colors",
  ctaIcon: "text-2xl",
};

export function PortfolioSection() {
  const items = portfolioContent.items;
  const featuredItem = items[0];
  const otherItems = items.slice(1);

  return (
    <section id="realizacje" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{portfolioContent.headline}</h2>
        </div>

        {/* Grid */}
        <div className={s.grid}>
          {/* Featured item */}
          <div className={`${s.card} ${s.cardFeatured}`}>
            <div className={s.cardFeaturedImageWrapper}>
              <Image
                src={featuredItem.image}
                alt={featuredItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                loading="lazy"
                className="transition-transform duration-500 group-hover:scale-105"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  inset: 0
                }}
              />
              <div className={s.cardOverlay} />
            </div>
            <div className={s.cardContent}>
              <div className={s.cardTag}>{featuredItem.tags[0]}</div>
              <h3 className={s.cardTitle}>{featuredItem.title}</h3>
              <p className={s.cardDesc}>{featuredItem.description}</p>
            </div>
          </div>

          {/* Other items */}
          {otherItems.map((item) => (
            <div key={item.id} className={s.card}>
              <div className={s.cardImageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectFit: "cover",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    inset: 0
                  }}
                />
                <div className={s.cardOverlay} />
              </div>
              <div className={s.cardContent}>
                <div className={s.cardTag}>{item.tags[0]}</div>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={s.ctaSection}>
          <a href={siteConfig.phoneHref} className={s.ctaButton}>
            <IconCall className="w-6 h-6" />
            {portfolioContent.cta.label}: {portfolioContent.cta.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
