import type { ServiceIconGridContent } from "@/types"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header (centered)
  header: "text-center mb-16 max-w-3xl mx-auto",
  tagline: "text-xs tracking-widest uppercase text-muted-foreground mb-3",
  title: "text-4xl font-semibold text-foreground mb-6",
  subtitle: "text-sm text-muted-foreground leading-relaxed",

  // Grid — flex-wrap with justify-center
  grid: "flex flex-wrap justify-center gap-6",

  // Card base
  cardBase: "border border-dashed border-border p-8 flex flex-col gap-6",
  // Width variants
  cardW3: "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]",
  cardW2: "w-full md:w-[calc(50%-0.75rem)]",
  cardW4: "w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]",

  // Icon placeholder
  iconBox:
    "w-14 h-14 border border-dashed border-border flex items-center justify-center",
  iconLabel: "text-[10px] text-muted-foreground/50",

  // Card text
  cardTitle: "text-lg font-semibold text-foreground mb-3",
  cardDesc: "text-sm text-muted-foreground leading-relaxed",

  // CTA Card (in-grid)
  ctaCardBase: "border border-dashed border-border p-8 flex flex-col items-center justify-center text-center bg-muted/50",
  ctaCardLabel: "text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-4",
  ctaCardTitle: "text-xl font-semibold text-foreground mb-3",
  ctaCardDesc: "text-sm text-muted-foreground mb-6 max-w-xs",
  ctaCardButton: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface Props {
  content: ServiceIconGridContent
}

export function ServicesIconGridWireframe({ content }: Props) {
  const { tagline, title, subtitle, services, ctaCard } = content

  // Total grid items (services + optional CTA card)
  const total = services.length + (ctaCard ? 1 : 0)
  // Width: 4-col for 4/8, 2-col for 2, 3-col otherwise
  const widthClass = total === 2 ? w.cardW2
    : total === 4 || total === 8 ? w.cardW4
    : w.cardW3

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <p className={w.tagline}>{tagline}</p>
          <h2 className={w.title}>{title}</h2>
          <p className={w.subtitle}>{subtitle}</p>
        </div>

        {/* Cards */}
        <div className={w.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${w.cardBase} ${widthClass}`}>
              {/* Icon placeholder */}
              <div className={w.iconBox}>
                <span className={w.iconLabel}>icon</span>
              </div>

              {/* Text */}
              <div>
                <h4 className={w.cardTitle}>{service.title}</h4>
                <p className={w.cardDesc}>{service.description}</p>
              </div>
            </div>
          ))}

          {/* CTA Card (optional, in-grid) */}
          {ctaCard && (
            <div className={`${w.ctaCardBase} ${widthClass}`}>
              <span className={w.ctaCardLabel}>cta card</span>
              <h3 className={w.ctaCardTitle}>{ctaCard.title}</h3>
              {ctaCard.description && (
                <p className={w.ctaCardDesc}>{ctaCard.description}</p>
              )}
              <span className={w.ctaCardButton}>{ctaCard.buttonText}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
