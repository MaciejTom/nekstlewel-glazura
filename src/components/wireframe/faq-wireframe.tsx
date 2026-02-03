import type { FaqContent } from "@/types/faq"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-12",
  title: "text-4xl font-semibold text-foreground mb-4",
  subtitle: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed",

  // Items
  items: "max-w-4xl mx-auto space-y-4",
  item: "border-b border-dashed border-border p-4",
  question: "flex justify-between items-center",
  questionText: "font-semibold text-foreground",
  toggleIcon:
    "w-6 h-6 border border-dashed border-border flex items-center justify-center shrink-0 ml-4",
  toggleLabel: "text-[8px] text-muted-foreground/50",
  answer: "mt-3 text-sm text-muted-foreground leading-relaxed",
}

interface Props {
  content: FaqContent
}

export function FaqWireframe({ content }: Props) {
  const { title, subtitle, items } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          {subtitle && <p className={w.subtitle}>{subtitle}</p>}
        </div>

        {/* FAQ items — all expanded in wireframe to show structure */}
        <div className={w.items}>
          {items.map((item, i) => (
            <div key={i} className={w.item}>
              <div className={w.question}>
                <span className={w.questionText}>{item.question}</span>
                <div className={w.toggleIcon}>
                  <span className={w.toggleLabel}>+</span>
                </div>
              </div>
              <p className={w.answer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
