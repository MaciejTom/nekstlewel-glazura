import type { LogosHeaderContent } from "@/types/logos-header"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-12",
  badge:
    "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-widest mb-4",
  title: "text-4xl font-semibold text-foreground mb-4",
  description: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed",

  // Grid
  grid: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto",

  // Logo item
  item: "flex flex-col items-center gap-3 p-6 border border-dashed border-border",
  iconBox:
    "w-10 h-10 border border-dashed border-border flex items-center justify-center",
  iconLabel: "text-[8px] text-muted-foreground/50",
  name: "text-sm font-semibold text-foreground",
}

interface Props {
  content: LogosHeaderContent
}

export function LogosHeaderWireframe({ content }: Props) {
  const { badge, title, description, logos } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          {badge && <span className={w.badge}>{badge}</span>}
          <h2 className={w.title}>{title}</h2>
          {description && <p className={w.description}>{description}</p>}
        </div>

        {/* Logo grid */}
        <div className={w.grid}>
          {logos.map((logo, i) => (
            <div key={i} className={w.item}>
              <div className={w.iconBox}>
                <span className={w.iconLabel}>icon</span>
              </div>
              <span className={w.name}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
