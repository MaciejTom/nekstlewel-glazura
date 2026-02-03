import type { FaqSplitContent } from "@/types/faq-split"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16",

  // Left: image
  imageCol: "flex items-center justify-center",
  imagePlaceholder: "w-full h-80 bg-muted flex items-center justify-center",
  imageIcon: "w-10 h-10 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50 mt-2",

  // Right: FAQ
  faqCol: "flex flex-col",
  badge:
    "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-widest mb-4 self-start",
  title: "text-3xl font-semibold text-foreground mb-8",

  // Items
  items: "space-y-4",
  item: "border border-dashed border-border p-5",
  question: "flex justify-between items-center",
  questionText: "font-semibold text-foreground text-sm",
  toggleIcon:
    "w-6 h-6 border border-dashed border-border flex items-center justify-center shrink-0 ml-4",
  toggleLabel: "text-[8px] text-muted-foreground/50",
  answer: "mt-3 text-sm text-muted-foreground leading-relaxed",
}

interface Props {
  content: FaqSplitContent
}

export function FaqSplitWireframe({ content }: Props) {
  const { badge, title, items } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Left: image placeholder */}
        <div className={w.imageCol}>
          <div className={w.imagePlaceholder}>
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className={w.imageIcon} />
              <span className={w.imageLabel}>image</span>
            </div>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className={w.faqCol}>
          {badge && <span className={w.badge}>{badge}</span>}
          <h2 className={w.title}>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>

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
      </div>
    </section>
  )
}
