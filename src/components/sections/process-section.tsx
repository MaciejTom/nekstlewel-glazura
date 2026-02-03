"use client";

import { processContent, siteConfig } from "@/lib/content";
import { Phone } from "lucide-react";

const s = {
  section: "bg-secondary section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-16",
  headline: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground h2-bar-center",

  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",

  // Step card
  step: "group",
  stepCard: "bg-card border border-border p-6 h-full rounded-lg card-hover",

  // Step number
  stepNumberWrapper: "flex items-center gap-4 mb-6",
  stepNumberCircle: "w-12 h-12 flex items-center justify-center bg-accent text-accent-foreground font-bold text-xl rounded-md",
  stepNumberLine: "flex-1 h-px bg-border hidden sm:block",

  stepTitle: "text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors",
  stepDesc: "text-muted-foreground text-sm",

  // Memorable section
  memorableSection: "mt-16 text-center",
  memorableBox: "inline-block bg-card border-l-4 border-accent p-6 rounded-r-md shadow-sm",
  memorableText: "text-xl md:text-2xl text-foreground font-semibold",
  memorableAccent: "text-accent",

  // CTA
  ctaWrapper: "mt-12 text-center",
  ctaButton: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg rounded-md hover:bg-primary/90 transition-colors",
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
              "{processContent.memorable}"
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={s.ctaWrapper}>
          <a href={siteConfig.phoneHref} className={s.ctaButton}>
            <Phone className="w-6 h-6" />
            Zadzwoń: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
