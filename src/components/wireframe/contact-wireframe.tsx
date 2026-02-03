import type { ContactContent } from "@/types/contact"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  sectionBg: "bg-background py-24 border-y border-dashed border-border relative",
  bgIndicator: "absolute top-3 right-3 border border-dashed border-border px-2 py-1 text-[8px] text-muted-foreground/50 uppercase tracking-widest",
  container: "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16",

  // Left: info
  left: "flex flex-col justify-between",
  badge: "inline-block border border-dashed border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-widest mb-6 self-start",
  title: "text-4xl font-semibold text-foreground mb-6",
  description: "text-sm text-muted-foreground leading-relaxed max-w-md",
  imagePlaceholder: "mt-12 h-64 bg-muted flex items-center justify-center",
  imageIcon: "w-10 h-10 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50 mt-2 text-center",

  // Contact items (phone, email, etc.)
  contactItems: "mt-10 space-y-4",
  contactItem: "flex items-center gap-3",
  contactItemIcon:
    "w-10 h-10 border border-dashed border-border flex items-center justify-center shrink-0",
  contactItemIconLabel: "text-[8px] text-muted-foreground/50",
  contactItemLabel: "text-sm text-muted-foreground",

  // Right: form
  form: "border border-dashed border-border p-8 md:p-12",
  formTitle: "text-lg font-semibold text-foreground mb-6",
  fieldGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  fieldFull: "col-span-1 md:col-span-2",
  fieldLabel: "block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest",
  fieldInput: "w-full border border-dashed border-border bg-background text-sm px-4 py-3 text-muted-foreground/50",
  fieldTextarea: "w-full border border-dashed border-border bg-background text-sm px-4 py-3 text-muted-foreground/50 min-h-[120px]",
  submitRow: "flex justify-end mt-6",
  submitButton: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface Props {
  content: ContactContent
}

export function ContactWireframe({ content }: Props) {
  const { badge, title, description, showImage, backgroundImage, contactItems, formTitle, fields, submitText } = content

  return (
    <section className={backgroundImage ? w.sectionBg : w.section}>
      {backgroundImage && <span className={w.bgIndicator}>bg: image</span>}
      <div className={w.container}>
        {/* Left: info + image/contactItems */}
        <div className={w.left}>
          <div>
            {badge && <span className={w.badge}>{badge}</span>}
            <h2 className={w.title}>{title}</h2>
            <p className={w.description}>{description}</p>
          </div>
          {contactItems && (
            <div className={w.contactItems}>
              {contactItems.map((item, i) => (
                <div key={i} className={w.contactItem}>
                  <div className={w.contactItemIcon}>
                    <span className={w.contactItemIconLabel}>icon</span>
                  </div>
                  <span className={w.contactItemLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          )}
          {!contactItems && showImage !== false && (
            <div className={w.imagePlaceholder}>
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className={w.imageIcon} />
                <span className={w.imageLabel}>image / map</span>
              </div>
            </div>
          )}
        </div>

        {/* Right: form */}
        <div className={w.form}>
          <h3 className={w.formTitle}>{formTitle}</h3>
          <div className="space-y-6">
            <div className={w.fieldGrid}>
              {fields.map((field, i) => (
                <div key={i} className={field.half ? "" : w.fieldFull}>
                  <label className={w.fieldLabel}>{field.label}</label>
                  {field.type === "textarea" ? (
                    <div className={w.fieldTextarea}>{field.placeholder}</div>
                  ) : (
                    <div className={w.fieldInput}>{field.placeholder}</div>
                  )}
                </div>
              ))}
            </div>
            <div className={w.submitRow}>
              <span className={w.submitButton}>{submitText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
