import type { ContactCardsContent } from "@/types/contact-cards"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16",

  // Left: form
  left: "flex flex-col",
  title: "text-4xl font-semibold text-foreground mb-4",
  description: "text-sm text-muted-foreground leading-relaxed mb-8",
  formTitle: "text-lg font-semibold text-foreground mb-6",
  fieldGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  fieldFull: "col-span-1 md:col-span-2",
  fieldLabel:
    "block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-widest",
  fieldInput:
    "w-full border border-dashed border-border bg-background text-sm px-4 py-3 text-muted-foreground/50",
  fieldTextarea:
    "w-full border border-dashed border-border bg-background text-sm px-4 py-3 text-muted-foreground/50 min-h-[120px]",
  submitRow: "flex justify-start mt-6",
  submitButton:
    "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",

  // Right: image + info cards + social
  right: "flex flex-col gap-8",
  imagePlaceholder: "h-48 bg-muted flex items-center justify-center",
  imageIcon: "w-10 h-10 text-muted-foreground/30",
  imageLabel: "text-xs text-muted-foreground/50 mt-2",

  // Info cards
  infoCards: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  infoCard: "border border-dashed border-border p-5",
  infoIconBox:
    "w-10 h-10 border border-dashed border-border flex items-center justify-center mb-3",
  infoIconLabel: "text-[8px] text-muted-foreground/50",
  infoTitle: "text-sm font-semibold text-foreground mb-1",
  infoContent: "text-xs text-muted-foreground",

  // Social
  socialRow: "flex gap-4",
  socialLink: "text-sm text-muted-foreground",
}

interface Props {
  content: ContactCardsContent
}

export function ContactCardsWireframe({ content }: Props) {
  const { title, description, formTitle, fields, submitText, infoCards, socialLinks } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Left: form */}
        <div className={w.left}>
          <h2 className={w.title}>{title}</h2>
          <p className={w.description}>{description}</p>

          {formTitle && <h3 className={w.formTitle}>{formTitle}</h3>}

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

        {/* Right: image + info cards + social */}
        <div className={w.right}>
          {/* Image placeholder */}
          <div className={w.imagePlaceholder}>
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className={w.imageIcon} />
              <span className={w.imageLabel}>map / image</span>
            </div>
          </div>

          {/* Info cards */}
          <div className={w.infoCards}>
            {infoCards.map((card, i) => (
              <div key={i} className={w.infoCard}>
                <div className={w.infoIconBox}>
                  <span className={w.infoIconLabel}>icon</span>
                </div>
                <h4 className={w.infoTitle}>{card.title}</h4>
                <p className={w.infoContent}>{card.content}</p>
              </div>
            ))}
          </div>

          {/* Social links */}
          {socialLinks && (
            <div className={w.socialRow}>
              {socialLinks.map((link, i) => (
                <span key={i} className={w.socialLink}>{link.label}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
