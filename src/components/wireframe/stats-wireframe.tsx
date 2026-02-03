import type { StatsContent } from "@/types/stats"

const w = {
  // Section
  section: "bg-background py-20 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-12",
  badge: "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-widest mb-4",
  title: "text-4xl font-semibold text-foreground",

  // Grid (base — column count set dynamically)
  gridBase: "grid grid-cols-2 gap-8 text-center",

  // Stat item
  item: "flex flex-col items-center gap-2 p-4",
  iconBox:
    "w-10 h-10 border border-dashed border-border flex items-center justify-center mb-2",
  iconLabel: "text-[8px] text-muted-foreground/50",
  value: "text-3xl font-semibold text-foreground",
  label: "text-xs text-muted-foreground uppercase tracking-widest",
  description: "text-xs text-muted-foreground mt-1",

  // Dividers (structural — vertical lines between items)
  divider: "border-l border-dashed border-border",
}

interface Props {
  content: StatsContent
}

export function StatsWireframe({ content }: Props) {
  const { badge, title, stats } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Optional header */}
        {(badge || title) && (
          <div className={w.header}>
            {badge && <span className={w.badge}>{badge}</span>}
            {title && <h2 className={w.title}>{title}</h2>}
          </div>
        )}

        <div className={`${w.gridBase} ${stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
          {stats.map((stat, i) => (
            <div key={i} className={`${w.item} ${i > 0 ? w.divider : ""}`}>
              {/* Icon placeholder */}
              {stat.icon && (
                <div className={w.iconBox}>
                  <span className={w.iconLabel}>icon</span>
                </div>
              )}

              {/* Value */}
              <span className={w.value}>{stat.value}</span>

              {/* Label */}
              <span className={w.label}>{stat.label}</span>

              {/* Optional description */}
              {stat.description && (
                <span className={w.description}>{stat.description}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
