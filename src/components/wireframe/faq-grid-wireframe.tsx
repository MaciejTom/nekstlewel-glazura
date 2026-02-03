import type { FaqContent } from "@/types/faq"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-12",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed",

  // Grid
  grid: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 max-w-5xl mx-auto",

  // Item
  item: "border-b border-dashed border-border py-5 flex justify-between items-center",
  questionText: "font-semibold text-foreground text-sm",
  toggleIcon:
    "w-6 h-6 border border-dashed border-border flex items-center justify-center shrink-0 ml-4",
  toggleLabel: "text-[8px] text-muted-foreground/50",
}

interface Props {
  content: FaqContent
}

export function FaqGridWireframe({ content }: Props) {
  const { title, subtitle, items } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>{title}</h2>
          {subtitle && <p className={w.subtitle}>{subtitle}</p>}
        </div>

        {/* 2-col grid of questions (collapsed state) */}
        <div className={w.grid}>
          {items.map((item, i) => (
            <div key={i} className={w.item}>
              <span className={w.questionText}>{item.question}</span>
              <div className={w.toggleIcon}>
                <span className={w.toggleLabel}>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
