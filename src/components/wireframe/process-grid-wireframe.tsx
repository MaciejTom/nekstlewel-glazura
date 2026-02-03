import type { ProcessGridContent } from "@/types/process-grid"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed",

  // Grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto",

  // Card
  card: "border border-dashed border-border p-8",
  iconBox:
    "w-12 h-12 border border-dashed border-border flex items-center justify-center mb-6",
  iconLabel: "text-[8px] text-muted-foreground/50",
  badge:
    "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground/50 mb-4",
  stepTitle: "text-lg font-semibold text-foreground mb-2",
  stepDesc: "text-sm text-muted-foreground leading-relaxed",

  // CTA
  ctaRow: "flex justify-center mt-12",
  ctaButton:
    "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface Props {
  content: ProcessGridContent
}

export function ProcessGridWireframe({ content }: Props) {
  const { title, subtitle, steps, cta } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>{title}</h2>
          {subtitle && <p className={w.subtitle}>{subtitle}</p>}
        </div>

        {/* Grid */}
        <div className={w.grid}>
          {steps.map((step, i) => (
            <div key={i} className={w.card}>
              {step.icon && (
                <div className={w.iconBox}>
                  <span className={w.iconLabel}>icon</span>
                </div>
              )}
              <span className={w.badge}>{step.badge}</span>
              <h3 className={w.stepTitle}>{step.title}</h3>
              <p className={w.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className={w.ctaRow}>
            <span className={w.ctaButton}>{cta.text}</span>
          </div>
        )}
      </div>
    </section>
  )
}
