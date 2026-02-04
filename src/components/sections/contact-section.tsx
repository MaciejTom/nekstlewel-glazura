"use client";

import { contactContent, siteConfig } from "@/lib/content";
import { Phone, MapPin, Clock, Map } from "lucide-react";

const s = {
  section: "bg-secondary section-spacing",

  container: "container mx-auto px-6",

  grid: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12",

  // Left side
  left: "flex flex-col",
  headline: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 h2-bar",
  description: "text-muted-foreground mb-8",

  contactItems: "space-y-4",
  contactItem: "group flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-card transition-colors cursor-pointer",
  contactIcon: "w-12 h-12 bg-accent flex items-center justify-center rounded-md",
  contactLabel: "text-xs text-muted-foreground uppercase tracking-wider",
  contactValue: "text-lg text-foreground font-semibold group-hover:text-accent transition-colors",

  area: "mt-8 pt-6 border-t border-border",
  areaLabel: "text-xs text-muted-foreground mb-2 uppercase tracking-wider flex items-center gap-2",
  areaValue: "text-foreground",

  // Right side - CTA card
  right: "",
  rightCard: "bg-card border border-border p-6 lg:p-8 h-full rounded-lg",

  ctaHeadline: "text-2xl md:text-3xl font-bold text-foreground mb-3",
  ctaDescription: "text-muted-foreground mb-6 text-sm",

  // Memorable
  memorable: "bg-secondary border-l-4 border-accent p-4 mb-6 rounded-r-md",
  memorableText: "text-accent font-semibold text-sm",

  // Map
  mapWrapper: "w-full h-56 lg:h-64 mb-6 border border-border overflow-hidden rounded-md",
  map: "w-full h-full grayscale hover:grayscale-0 transition-all duration-500",

  ctaButton: "w-full inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 py-4 font-semibold text-lg rounded-md hover:bg-accent/90 transition-colors",
};

export function ContactSection() {
  // Zielona Góra map embed
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500!2d15.5!3d51.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU1JzQ4LjAiTiAxNcKwMzAnMDAuMCJF!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl&q=R%C3%B3%C5%BCana+5e1,+Zielona+G%C3%B3ra";

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
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>Telefon</div>
                  <div className={s.contactValue}>{contactContent.details.phone}</div>
                </div>
              </a>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>Adres</div>
                  <div className={s.contactValue}>{contactContent.details.address}</div>
                </div>
              </div>

              <div className={s.contactItem}>
                <div className={s.contactIcon}>
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className={s.contactLabel}>Godziny</div>
                  <div className={s.contactValue}>{contactContent.hours}</div>
                </div>
              </div>
            </div>

            <div className={s.area}>
              <div className={s.areaLabel}>
                <Map className="w-4 h-4 text-accent" />
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
                  title="Lokalizacja Glazurnik Zielona Góra"
                />
              </div>

              <a href={siteConfig.phoneHref} className={s.ctaButton}>
                <Phone className="w-6 h-6" />
                {contactContent.cta.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
