"use client";

import { processContent, siteConfig } from "@/lib/content";
import { IconCall } from "@/components/ui/icons";

const s = {
  section: "bg-secondary section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-16",
  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground h2-bar-center",

  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",

  // Step card
  step: "group",
  stepCard: "bg-background border border-border p-6 h-full card-hover",

  // Step number
  stepNumberWrapper: "flex items-center gap-4 mb-6",
  stepNumberCircle: "w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground font-heading text-xl",
  stepNumberLine: "flex-1 h-px bg-border hidden sm:block",

  stepTitle: "font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors",
  stepDesc: "text-muted-foreground text-sm",

  // Step icon indicator
  stepIcon: "absolute top-4 right-4 text-border group-hover:text-primary/40 transition-colors",

  // Memorable section
  memorableSection: "mt-16 text-center",
  memorableBox: "inline-block bg-card border-l-4 border-primary p-6",
  memorableText: "text-xl md:text-2xl text-foreground font-heading tracking-wide",
  memorableAccent: "text-primary",

  // CTA
  ctaWrapper: "mt-12 text-center",
  ctaButton: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading text-lg tracking-wide hover:bg-primary/90 transition-colors",
  ctaIcon: "text-2xl",
};


export function ProcessSection() {
  return (
    <section id="proces" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{processContent.headline}</h2>
        </div>

        {/* Steps Grid */}
        <div className={s.grid}>
          {processContent.steps.map((step, i) => (
            <div key={i} className={s.step}>
              <div className={s.stepCard}>
                {/* Step number */}
                <div className={s.stepNumberWrapper}>
                  <div className={s.stepNumberCircle}>{step.number}</div>
                  <div className={s.stepNumberLine} />
                </div>

                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Memorable */}
        <div className={s.memorableSection}>
          <div className={s.memorableBox}>
            <p className={s.memorableText}>
              "<span className={s.memorableAccent}>Dopiero jak Ty mówisz OK</span> — zamykamy temat."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={s.ctaWrapper}>
          <a href={siteConfig.phoneHref} className={s.ctaButton}>
            <IconCall className="w-6 h-6" />
            Zadzwoń: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
