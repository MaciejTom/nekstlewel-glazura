import { ImageIcon, CircleDashed } from "lucide-react"
import type { HeroSplitContent } from "@/types"

const w = {
  // Layout
  section: "bg-background py-16 lg:py-24",
  container: "max-w-[1280px] mx-auto px-[5%]",
  grid: "grid lg:grid-cols-2 gap-12 items-center",

  // Content
  content: "flex flex-col gap-6 lg:max-w-xl",

  // Badge
  badge:
    "inline-block border border-dashed border-border px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground w-fit",

  // Headline
  headline:
    "text-4xl lg:text-5xl font-semibold text-foreground leading-tight",
  headlineAccent:
    "border-b-2 border-dashed border-border text-muted-foreground",

  // Subtitle
  subtitle: "text-lg text-muted-foreground leading-relaxed max-w-md",

  // CTA
  ctaWrapper: "flex flex-wrap gap-4",
  ctaButton:
    "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",

  // Stats
  statsWrapper:
    "flex items-center gap-6 pt-6 border-t border-dashed border-border mt-4",
  statBlock: "flex items-center gap-3",
  statIcon:
    "w-10 h-10 border border-dashed border-border rounded-full flex items-center justify-center",
  statValue: "text-xl font-semibold text-foreground leading-none",
  statLabel: "text-xs text-muted-foreground uppercase mt-0.5",
  statDivider: "w-px h-10 bg-border",

  // Image
  imageWrapper:
    "relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] border border-dashed border-border rounded-2xl overflow-hidden bg-muted flex flex-col items-center justify-center gap-2",
  imageIcon: "w-16 h-16 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50",

  // Image badge
  imageBadge:
    "absolute bottom-6 left-6 border border-dashed border-border px-5 py-3 bg-background flex items-center gap-3",
  imageBadgeValue: "text-lg font-semibold text-foreground leading-none",
  imageBadgeLabel: "text-xs text-muted-foreground uppercase",
}

function renderHeadline(
  headline: string,
  accent?: string,
  accentClass?: string
) {
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
  content: HeroSplitContent
}

export function HeroSplitWireframe({ content }: Props) {
  const { stats } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        <div className={w.grid}>
          {/* Left — Content */}
          <div className={w.content}>
            {/* Badge */}
            {content.badge && (
              <span className={w.badge}>{content.badge}</span>
            )}

            {/* Headline */}
            <h1 className={w.headline}>
              {renderHeadline(
                content.headline,
                content.headlineAccent,
                w.headlineAccent
              )}
            </h1>

            {/* Subtitle */}
            <p className={w.subtitle}>{content.subtitle}</p>

            {/* CTA */}
            <div className={w.ctaWrapper}>
              <span className={w.ctaButton}>{content.ctaPrimary.text}</span>
              {content.ctaSecondary && (
                <span className={w.ctaButton}>
                  {content.ctaSecondary.text}
                </span>
              )}
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className={w.statsWrapper}>
                {stats.map((stat, i) => (
                  <div key={i} className="contents">
                    {i > 0 && <div className={w.statDivider} />}
                    <div className={w.statBlock}>
                      <div className={w.statIcon}>
                        <CircleDashed className="w-5 h-5 text-muted-foreground/40" />
                      </div>
                      <div className="flex flex-col">
                        <span className={w.statValue}>{stat.value}</span>
                        <span className={w.statLabel}>{stat.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — Image */}
          <div className={w.imageWrapper}>
            <ImageIcon className={w.imageIcon} />
            <span className={w.imageLabel}>hero image</span>

            {/* Image badge */}
            {content.imageBadge && (
              <div className={w.imageBadge}>
                <CircleDashed className="w-8 h-8 text-muted-foreground/40" />
                <div className="flex flex-col">
                  <span className={w.imageBadgeValue}>
                    {content.imageBadge.value}
                  </span>
                  <span className={w.imageBadgeLabel}>
                    {content.imageBadge.label}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
