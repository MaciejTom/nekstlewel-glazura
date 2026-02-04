"use client";

import Image from "next/image";
import { servicesContent, siteConfig } from "@/lib/content";
import { Phone, Check, Warehouse, Car, Building2, Store } from "lucide-react";

const s = {
  section: "bg-background section-spacing",
  container: "container mx-auto px-6",

  header: "text-center max-w-2xl mx-auto mb-12",
  headline: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground h2-bar-center",
  description: "mt-6 text-muted-foreground",

  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  card: "group bg-card border border-border overflow-hidden rounded-lg card-hover",
  cardImage: "relative aspect-[16/10] overflow-hidden",
  cardImageInner: "object-cover transition-transform duration-500 group-hover:scale-105 brightness-110",
  cardOverlay: "absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent",
  cardNumber: "absolute top-4 right-4 text-5xl font-bold text-white/30",

  cardContent: "p-6",
  cardIconRow: "flex items-center gap-3 mb-3",
  cardIcon: "w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center",
  cardTitle: "text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors",
  cardSubtitle: "text-sm text-accent font-medium mb-3",
  cardDesc: "text-muted-foreground text-sm mb-4",

  featureList: "space-y-2 pt-4 border-t border-border",
  featureItem: "flex items-start gap-2 text-sm text-muted-foreground",

  ctaSection: "mt-12",
  ctaCard: "bg-primary p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-lg",
  ctaText: "text-center md:text-left",
  ctaTitle: "text-2xl md:text-3xl font-bold text-primary-foreground",
  ctaSubtitle: "text-primary-foreground/80",
  ctaButton: "inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-semibold text-lg rounded-md hover:bg-accent/90 transition-colors",
};

const serviceImages = [
  "/glazura-hero.webp",
  "/glazura-2.webp",
  "/glazura-3.webp",
  "/glazura-4.webp",
];

const iconMap: Record<string, React.ReactNode> = {
  Warehouse: <Warehouse className="w-5 h-5 text-accent" />,
  Car: <Car className="w-5 h-5 text-accent" />,
  Building2: <Building2 className="w-5 h-5 text-accent" />,
  Store: <Store className="w-5 h-5 text-accent" />,
};

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
                <div className={s.cardIconRow}>
                  <div className={s.cardIcon}>
                    {iconMap[service.icon] || <Warehouse className="w-5 h-5 text-accent" />}
                  </div>
                  <h3 className={s.cardTitle}>{service.title}</h3>
                </div>
                {service.subtitle && <p className={s.cardSubtitle}>{service.subtitle}</p>}
                <p className={s.cardDesc}>{service.description}</p>

                <ul className={s.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={s.featureItem}>
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
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
              <Phone className="w-5 h-5" />
              Zadzwoń: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
