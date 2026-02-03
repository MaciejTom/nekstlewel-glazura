import type { ProcessContent } from "@/types/process"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-12",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed",

  // Steps
  steps: "max-w-3xl mx-auto space-y-6",
  card: "border border-dashed border-border p-6",
  badge: "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground/50 mb-4",
  stepTitle: "text-lg font-semibold text-foreground mb-2",
  stepDesc: "text-sm text-muted-foreground leading-relaxed",
}

interface Props {
  content: ProcessContent
}

export function ProcessWireframe({ content }: Props) {
  const { title, subtitle, steps } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        {(title || subtitle) && (
          <div className={w.header}>
            {title && <h2 className={w.title}>{title}</h2>}
            {subtitle && <p className={w.subtitle}>{subtitle}</p>}
          </div>
        )}

        {/* Step cards */}
        <div className={w.steps}>
          {steps.map((step, i) => (
            <div key={i} className={w.card}>
              <span className={w.badge}>{step.badge}</span>
              <h3 className={w.stepTitle}>{step.title}</h3>
              <p className={w.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
