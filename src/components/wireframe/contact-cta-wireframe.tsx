import type { ContactCtaContent } from "@/types/contact-cta"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6 max-w-3xl text-center",

  // Header
  badge:
    "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-widest mb-6",
  title: "text-4xl font-semibold text-foreground mb-4",
  description: "text-sm text-muted-foreground leading-relaxed mb-10",

  // Details row
  detailsRow: "flex flex-wrap justify-center gap-8 mb-10",
  detailItem: "flex items-center gap-3",
  detailIcon:
    "w-10 h-10 border border-dashed border-border flex items-center justify-center shrink-0",
  detailIconLabel: "text-[8px] text-muted-foreground/50",
  detailText: "text-left",
  detailLabel: "text-[10px] text-muted-foreground uppercase tracking-widest",
  detailValue: "text-sm font-semibold text-foreground",

  // CTA
  cta: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface Props {
  content: ContactCtaContent
}

export function ContactCtaWireframe({ content }: Props) {
  const { badge, title, description, details, cta } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {badge && <span className={w.badge}>{badge}</span>}
        <h2 className={w.title}>{title}</h2>
        {description && <p className={w.description}>{description}</p>}

        {/* Details row */}
        <div className={w.detailsRow}>
          {details.map((item, i) => (
            <div key={i} className={w.detailItem}>
              <div className={w.detailIcon}>
                <span className={w.detailIconLabel}>icon</span>
              </div>
              <div className={w.detailText}>
                <span className={w.detailLabel}>{item.label}</span>
                <div className={w.detailValue}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && <span className={w.cta}>{cta.text}</span>}
      </div>
    </section>
  )
}
