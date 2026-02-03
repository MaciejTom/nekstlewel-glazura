import { ImageIcon } from "lucide-react"
import type { HeroContent } from "@/types"

const w = {
  // Layout
  section: "min-h-screen flex items-center relative bg-background",
  imagePlaceholder:
    "absolute inset-0 bg-muted flex flex-col items-center justify-center gap-2",
  imageIcon: "w-16 h-16 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50",
  container: "container mx-auto px-[5%] py-32 relative z-10",
  content: "max-w-4xl",

  // Badge
  badge:
    "inline-block border border-dashed border-border px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground mb-6",

  // Headline
  headline:
    "text-5xl sm:text-6xl lg:text-8xl font-semibold text-foreground leading-none mb-6",
  headlineAccent:
    "border-b-2 border-dashed border-border text-muted-foreground",

  // Subtitle
  subtitle: "text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed",

  // CTA
  ctaWrapper: "flex flex-col sm:flex-row gap-4",
  ctaButton:
    "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",

  // Stats
  statsWrapper:
    "grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-dashed border-border max-w-2xl",
  statValue: "text-2xl sm:text-3xl font-semibold text-foreground",
  statLabel: "text-sm text-muted-foreground mt-1",

  // Scroll indicator
  scroll:
    "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
  scrollText: "text-xs tracking-widest text-muted-foreground/50 uppercase",
  scrollLine: "w-px h-12 bg-border",
}

function renderHeadline(headline: string, accent?: string, accentClass?: string) {
  const lines = headline.split("\n")
  return lines.map((line, lineIdx) => {
    const parts: React.ReactNode[] = []

    if (accent && line.includes(accent)) {
      const idx = line.indexOf(accent)
      if (idx > 0) parts.push(line.slice(0, idx))
      parts.push(
        <span key={`a-${lineIdx}`} className={accentClass}>
          {accent}
        </span>
      )
      const after = line.slice(idx + accent.length)
      if (after) parts.push(after)
    } else {
      parts.push(line)
    }

    return (
      <span key={lineIdx}>
        {lineIdx > 0 && <br />}
        {parts}
      </span>
    )
  })
}

interface Props {
  content: HeroContent
}

export function HeroWireframe({ content }: Props) {
  return (
    <section className={w.section}>
      {/* Background image placeholder */}
      <div className={w.imagePlaceholder}>
        <ImageIcon className={w.imageIcon} />
        <span className={w.imageLabel}>hero background</span>
      </div>

      <div className={w.container}>
        <div className={w.content}>
          {/* Badge */}
          {content.badge && (
            <span className={w.badge}>{content.badge}</span>
          )}

          {/* Headline */}
          <h1 className={w.headline}>
            {renderHeadline(content.headline, content.headlineAccent, w.headlineAccent)}
          </h1>

          {/* Subtitle */}
          <p className={w.subtitle}>{content.subtitle}</p>

          {/* CTA */}
          <div className={w.ctaWrapper}>
            <span className={w.ctaButton}>{content.ctaPrimary.text}</span>
            {content.ctaSecondary && (
              <span className={w.ctaButton}>{content.ctaSecondary.text}</span>
            )}
          </div>

          {/* Stats */}
          {content.stats && (
            <div className={w.statsWrapper}>
              {content.stats.map((stat, i) => (
                <div key={i}>
                  <div className={w.statValue}>{stat.value}</div>
                  <div className={w.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {content.scrollText && (
        <div className={w.scroll}>
          <span className={w.scrollText}>{content.scrollText}</span>
          <div className={w.scrollLine} />
        </div>
      )}
    </section>
  )
}
