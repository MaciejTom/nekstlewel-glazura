import type { ProcessContent } from "@/types/process"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header
  header: "text-center mb-16",
  title: "text-4xl font-semibold text-foreground",

  // Timeline grid
  grid: "grid grid-cols-2 md:grid-cols-4 gap-8 relative",

  // Step
  step: "flex flex-col items-center text-center",
  circle:
    "w-16 h-16 rounded-full border-2 border-dashed border-border flex items-center justify-center mb-6",
  circleNumber: "text-lg font-semibold text-foreground",
  stepTitle: "text-sm font-semibold text-foreground mb-2",
  stepDesc: "text-xs text-muted-foreground leading-relaxed max-w-[180px]",

  // Connecting line
  line: "hidden md:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-border -z-0",
}

interface Props {
  content: ProcessContent
}

export function ProcessTimelineWireframe({ content }: Props) {
  const { title, steps } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        {title && (
          <div className={w.header}>
            <h2 className={w.title}>{title}</h2>
          </div>
        )}

        {/* Timeline */}
        <div className={w.grid}>
          {/* Connecting line */}
          <div className={w.line} />

          {steps.map((step, i) => (
            <div key={i} className={w.step}>
              <div className={w.circle}>
                <span className={w.circleNumber}>{step.badge}</span>
              </div>
              <h3 className={w.stepTitle}>{step.title}</h3>
              <p className={w.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
