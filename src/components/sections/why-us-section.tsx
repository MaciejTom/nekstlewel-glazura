"use client";

import { whyUsContent } from "@/lib/content";

const s = {
  section: "bg-card section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-12",
  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground h2-bar-center",

  grid: "grid grid-cols-1 lg:grid-cols-3 gap-6",

  // Card styles
  card: "group",
  cardInner: "h-full bg-background border border-border p-6 lg:p-8 card-hover",

  // Icon
  cardIconWrapper: "mb-6",
  cardIcon: "w-14 h-14 bg-primary flex items-center justify-center",
  cardIconInner: "text-primary-foreground text-2xl",

  cardTitle: "font-heading text-xl md:text-2xl text-foreground mb-3 group-hover:text-accent transition-colors",
  cardDesc: "text-muted-foreground text-sm mb-6",

  // Memorable quote
  cardMemorable: "pt-4 border-t border-border",
  cardMemorableText: "text-primary font-heading text-sm tracking-wide",
};

const iconMap: Record<string, string> = {
  Call: "call",
  Layers: "layers",
  LocationOn: "location_on",
};

export function WhyUsSection() {
  return (
    <section id="dlaczego" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{whyUsContent.headline}</h2>
        </div>

        {/* Features Grid */}
        <div className={s.grid}>
          {whyUsContent.features.map((feature, i) => (
            <div key={i} className={s.card}>
              <div className={s.cardInner}>
                {/* Icon */}
                <div className={s.cardIconWrapper}>
                  <div className={s.cardIcon}>
                    <span className={`material-symbols-outlined ${s.cardIconInner}`}>
                      {iconMap[feature.icon] || "check_circle"}
                    </span>
                  </div>
                </div>

                <h3 className={s.cardTitle}>{feature.title}</h3>
                <p className={s.cardDesc}>{feature.description}</p>

                {/* Memorable */}
                {feature.memorable && (
                  <div className={s.cardMemorable}>
                    <p className={s.cardMemorableText}>"{feature.memorable}"</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
