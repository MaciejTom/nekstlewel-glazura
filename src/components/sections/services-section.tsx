"use client";

import Image from "next/image";
import { servicesContent, siteConfig } from "@/lib/content";
import { IconCall, IconCheck } from "@/components/ui/icons";

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  header: "text-center max-w-2xl mx-auto mb-12",
  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground h2-bar-center",
  description: "mt-6 text-muted-foreground",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  card: "group bg-card border border-border overflow-hidden card-hover",
  cardImage: "relative aspect-[16/10] overflow-hidden",
  cardImageInner: "object-cover transition-transform duration-500 group-hover:scale-105",
  cardOverlay: "absolute inset-0 bg-gradient-to-t from-background/60 to-transparent",
  cardNumber: "absolute top-4 right-4 font-heading text-5xl text-white/30",

  cardContent: "p-6",
  cardTitle: "font-heading text-xl md:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors",
  cardSubtitle: "text-sm text-primary uppercase tracking-wide mb-3",
  cardDesc: "text-muted-foreground text-sm mb-4",

  featureList: "space-y-2 pt-4 border-t border-border",
  featureItem: "flex items-start gap-2 text-sm text-muted-foreground",

  ctaSection: "mt-12",
  ctaCard: "bg-primary p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6",
  ctaText: "text-center md:text-left",
  ctaTitle: "font-heading text-2xl md:text-3xl text-primary-foreground",
  ctaSubtitle: "text-primary-foreground/80",
  ctaButton: "inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 font-heading text-lg tracking-wide hover:bg-foreground hover:text-background transition-colors",
};

const serviceImages = [
  "/service1.jpg",
  "/serv2.jpg",
  "/serv3.jpg",
  "/serv4.jpg",
];

export function ServicesSection() {
  const { services } = servicesContent;

  return (
    <section id="uslugi" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <h2 className={s.headline}>{servicesContent.headline}</h2>
          <p className={s.description}>{servicesContent.description}</p>
        </div>

        <div className={s.grid}>
          {services.map((service, index) => (
            <div key={service.id} className={s.card}>
              <div className={s.cardImage}>
                <Image
                  src={serviceImages[index]}
                  alt={service.title}
                  fill
                  className={s.cardImageInner}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={s.cardOverlay} />
                <span className={s.cardNumber}>0{index + 1}</span>
              </div>

              <div className={s.cardContent}>
                <h3 className={s.cardTitle}>{service.title}</h3>
                {service.subtitle && <p className={s.cardSubtitle}>{service.subtitle}</p>}
                <p className={s.cardDesc}>{service.description}</p>

                <ul className={s.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={s.featureItem}>
                      <IconCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={s.ctaSection}>
          <div className={s.ctaCard}>
            <div className={s.ctaText}>
              <h3 className={s.ctaTitle}>Potrzebujesz wyceny?</h3>
              <p className={s.ctaSubtitle}>Przyjadę, obejrzę, wycenię konkretnie.</p>
            </div>
            <a href={siteConfig.phoneHref} className={s.ctaButton}>
              <IconCall className="w-5 h-5" />
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
