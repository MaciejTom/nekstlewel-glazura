import { ImageIcon, CircleDashed } from "lucide-react"
import type { FeaturesSplitContent } from "@/types"

const w = {
  // Layout
  section: "bg-background py-16 lg:py-24 border-y border-dashed border-border",
  container: "max-w-[1280px] mx-auto px-[5%]",
  grid: "flex flex-col lg:flex-row gap-16 items-center",

  // Left content
  content: "flex-1 flex flex-col gap-8",
  header: "flex flex-col gap-4",
  tagline: "text-xs tracking-widest uppercase text-muted-foreground",
  title: "text-3xl md:text-4xl font-semibold text-foreground leading-tight",
  description: "text-lg text-muted-foreground leading-relaxed",

  // Features grid
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  featureItem: "flex items-center gap-3",
  featureIcon:
    "w-5 h-5 border border-dashed border-border rounded-full flex items-center justify-center shrink-0",
  featureText: "text-sm text-foreground font-medium",

  // CTA
  ctaButton:
    "inline-block border border-dashed border-border px-8 py-3 text-sm text-muted-foreground uppercase tracking-widest w-fit",

  // Right image
  imageWrapper:
    "flex-1 w-full min-h-[400px] border border-dashed border-border bg-muted flex flex-col items-center justify-center gap-2",
  imageIcon: "w-16 h-16 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50",
}

interface Props {
  content: FeaturesSplitContent
}

export function FeaturesSplitWireframe({ content }: Props) {
  const { tagline, title, description, features, cta } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        <div className={w.grid}>
          {/* Left — Content */}
          <div className={w.content}>
            <div className={w.header}>
              <span className={w.tagline}>{tagline}</span>
              <h2 className={w.title}>{title}</h2>
              <p className={w.description}>{description}</p>
            </div>

            {/* Features checklist */}
            <div className={w.featuresGrid}>
              {features.map((feature, i) => (
                <div key={i} className={w.featureItem}>
                  <div className={w.featureIcon}>
                    <CircleDashed className="w-3 h-3 text-muted-foreground/40" />
                  </div>
                  <span className={w.featureText}>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <span className={w.ctaButton}>{cta.text}</span>
          </div>

          {/* Right — Image */}
          <div className={w.imageWrapper}>
            <ImageIcon className={w.imageIcon} />
            <span className={w.imageLabel}>feature image</span>
          </div>
        </div>
      </div>
    </section>
  )
}
