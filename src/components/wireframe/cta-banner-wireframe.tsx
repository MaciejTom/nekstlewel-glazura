import type { CtaBannerContent } from "@/types/cta-banner"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8",

  // Icon
  iconBox:
    "w-14 h-14 border border-dashed border-border flex items-center justify-center",
  iconLabel: "text-[10px] text-muted-foreground/50",

  // Text
  title: "text-4xl md:text-5xl font-semibold text-foreground leading-tight",
  subtitle: "text-lg text-muted-foreground max-w-2xl leading-relaxed",

  // Buttons
  buttons: "flex flex-col sm:flex-row gap-4 mt-4",
  ctaPrimary: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
  ctaSecondary: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface Props {
  content: CtaBannerContent
}

export function CtaBannerWireframe({ content }: Props) {
  const { icon, title, subtitle, ctaPrimary, ctaSecondary } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Icon */}
        {icon && (
          <div className={w.iconBox}>
            <span className={w.iconLabel}>{icon}</span>
          </div>
        )}

        {/* Headline */}
        <h2 className={w.title}>
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <p className={w.subtitle}>{subtitle}</p>

        {/* Buttons */}
        <div className={w.buttons}>
          <span className={w.ctaPrimary}>{ctaPrimary.text}</span>
          {ctaSecondary && (
            <span className={w.ctaSecondary}>{ctaSecondary.text}</span>
          )}
        </div>
      </div>
    </section>
  )
}
