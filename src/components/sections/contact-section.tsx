"use client";

import { contactContent, siteConfig } from "@/lib/content";
import { IconCall, IconMail, IconLocation, IconBadge, IconMap } from "@/components/ui/icons";

const s = {
  section: "bg-background section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-12",

  grid: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12",

  // Left side
  left: "flex flex-col",
  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 h2-bar",
  description: "text-muted-foreground mb-8",

  contactItems: "space-y-4",
  contactItem: "group flex items-center gap-4 p-3 -mx-3 hover:bg-card transition-colors cursor-pointer",
  contactIcon: "w-12 h-12 bg-primary flex items-center justify-center",
  contactIconInner: "text-primary-foreground text-xl",
  contactLabel: "text-xs text-muted-foreground uppercase tracking-wider",
  contactValue: "text-lg text-foreground font-heading group-hover:text-primary transition-colors",

  area: "mt-8 pt-6 border-t border-border",
  areaLabel: "text-xs text-muted-foreground mb-2 uppercase tracking-wider flex items-center gap-2",
  areaIcon: "text-primary text-base",
  areaValue: "text-foreground",

  // Right side - CTA card
  right: "",
  rightCard: "bg-card border border-border p-6 lg:p-8 h-full",

  ctaHeadline: "font-heading text-2xl md:text-3xl text-foreground mb-3",
  ctaDescription: "text-muted-foreground mb-6 text-sm",

  // Memorable
  memorable: "bg-secondary border-l-4 border-primary p-4 mb-6",
  memorableText: "text-primary font-heading text-sm tracking-wide",

  // Map
  mapWrapper: "w-full h-56 lg:h-64 mb-6 border border-border overflow-hidden",
  map: "w-full h-full grayscale hover:grayscale-0 transition-all duration-500",

  ctaButton: "w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-4 font-heading text-lg tracking-wide hover:bg-primary/90 transition-colors",
  ctaButtonIcon: "text-2xl",
};

export function ContactSection() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d21.38!3d50.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU3JzAwLjAiTiAyMcKwMjInNDguMCJF!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl&q=Szyby+26,+Ostrowiec+%C5%9Awi%C4%99tokrzyski";

  return (
    <section id="kontakt" className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>
          {/* Left - Contact Info */}
          <div className={s.left}>
            <h2 className={s.headline}>{contactContent.headline}</h2>
            <p className={s.description}>{contactContent.description}</p>

            <div className={s.contactItems}>
              <a href={siteConfig.phoneHref} className={s.contactItem}>
                <div className={s.contactIcon}>
                  <IconCall className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>Telefon</div>
                  <div className={s.contactValue}>{contactContent.details.phone}</div>
                </div>
              </a>

              <a href={`mailto:${contactContent.details.email}`} className={s.contactItem}>
                <div className={s.contactIcon}>
                  <IconMail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>Email</div>
                  <div className={s.contactValue}>{contactContent.details.email}</div>
                </div>
              </a>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <IconLocation className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>Adres</div>
                  <div className={s.contactValue}>{contactContent.details.address}</div>
                </div>
              </div>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <IconBadge className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>NIP</div>
                  <div className={s.contactValue}>{contactContent.details.nip}</div>
                </div>
              </div>
            </div>

            <div className={s.area}>
              <div className={s.areaLabel}>
                <IconMap className="w-4 h-4 text-primary" />
                Obszar działania
              </div>
              <div className={s.areaValue}>{contactContent.area}</div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className={s.right}>
            <div className={s.rightCard}>
              <h3 className={s.ctaHeadline}>{contactContent.cta.headline}</h3>
              <p className={s.ctaDescription}>{contactContent.cta.description}</p>

              {/* Memorable */}
              <div className={s.memorable}>
                <p className={s.memorableText}>"{contactContent.memorable}"</p>
              </div>

              {/* Map */}
              <div className={s.mapWrapper}>
                <iframe
                  src={mapSrc}
                  className={s.map}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja MAL-CER"
                />
              </div>

              <a href={siteConfig.phoneHref} className={s.ctaButton}>
                <IconCall className="w-6 h-6" />
                {contactContent.cta.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
