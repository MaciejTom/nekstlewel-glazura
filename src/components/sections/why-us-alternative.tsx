"use client";

import { whyUsContent, siteConfig } from "@/lib/content";
import { Phone, Square, Shield, Warehouse } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Square: <Square className="w-8 h-8 text-accent" />,
  Shield: <Shield className="w-8 h-8 text-accent" />,
  Warehouse: <Warehouse className="w-8 h-8 text-accent" />,
};

export function WhyUsAlternative() {
  return (
    <section id="dlaczego" className="bg-background py-20 md:py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 h2-bar-center">
            {whyUsContent.headline}
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whyUsContent.features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                {iconMap[item.icon] || <Square className="w-8 h-8 text-accent" />}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {item.memorable && (
                <p className="text-sm text-accent font-medium border-l-2 border-accent pl-3">
                  {item.memorable}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg rounded-md hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-6 h-6" />
            Zadzwoń: {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
