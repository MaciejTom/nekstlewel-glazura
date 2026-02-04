"use client";

import Image from "next/image";
import { problemContent } from "@/lib/content";
import { MapPin } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/30 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 h2-bar">
              {problemContent.headline}
            </h2>

            <div className="space-y-6">
              {problemContent.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={i === 0
                    ? "text-lg md:text-xl text-foreground leading-relaxed"
                    : "text-base md:text-lg text-muted-foreground leading-relaxed"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 bg-card border-l-4 border-accent p-6 rounded-r-md shadow-sm">
              <p className="text-lg md:text-xl text-foreground font-medium">
                "{problemContent.memorable}"
              </p>
            </div>

            <p className="mt-8 text-muted-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              {problemContent.location}
            </p>
          </div>

          {/* Right - Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/second.webp"
              alt="Posadzka przemysłowa"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
