"use client";

import { problemContent } from "@/lib/content";
import { MapPin } from "lucide-react";

const s = {
  section: "relative py-20 md:py-28 bg-secondary",

  container: "container mx-auto px-6",
  content: "max-w-3xl mx-auto",

  headline: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-10 h2-bar-center",

  paragraphs: "space-y-6",
  paragraphFirst: "text-lg md:text-xl text-foreground leading-relaxed",
  paragraph: "text-base md:text-lg text-muted-foreground leading-relaxed",

  memorableBox: "mt-12 bg-card border-l-4 border-accent p-6 rounded-r-md shadow-sm",
  memorable: "text-lg md:text-xl text-foreground font-medium",

  location: "mt-8 text-center text-muted-foreground flex items-center justify-center gap-2",
};

export function ProblemSection() {
  return (
    <section id="problem" className={s.section}>
      <div className={s.container}>
        <div className={s.content}>
          <h2 className={s.headline}>{problemContent.headline}</h2>

          <div className={s.paragraphs}>
            {problemContent.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? s.paragraphFirst : s.paragraph}>
                {para}
              </p>
            ))}
          </div>

          <div className={s.memorableBox}>
            <p className={s.memorable}>"{problemContent.memorable}"</p>
          </div>

          <p className={s.location}>
            <MapPin className="w-5 h-5 text-accent" />
            {problemContent.location}
          </p>
        </div>
      </div>
    </section>
  );
}
