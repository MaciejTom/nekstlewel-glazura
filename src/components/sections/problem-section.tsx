"use client";

import Image from "next/image";
import { problemContent } from "@/lib/content";
import { IconLocation } from "@/components/ui/icons";

const s = {
  section: "relative pt-24 pb-16 md:pt-32 md:pb-20",

  bgWrapper: "absolute inset-0",
  bgOverlay: "absolute inset-0 bg-background/95",

  container: "container mx-auto px-6 relative z-10",
  content: "max-w-3xl mx-auto",

  headline: "font-heading text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-10 h2-bar-center",

  paragraphs: "space-y-6",
  paragraphFirst: "text-lg md:text-xl text-foreground leading-relaxed",
  paragraph: "text-base md:text-lg text-muted-foreground leading-relaxed",

  memorableBox: "mt-12 bg-card border-l-4 border-primary p-6",
  memorable: "text-lg md:text-xl text-foreground font-medium",

  location: "mt-8 text-center text-muted-foreground flex items-center justify-center gap-2",
};

export function ProblemSection() {
  return (
    <section id="problem" className={s.section}>
      <div className={s.bgWrapper}>
        <Image
          src="/background.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className={s.bgOverlay} />
      </div>

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
            <IconLocation className="w-5 h-5 text-primary" />
            {problemContent.location}
          </p>
        </div>
      </div>
    </section>
  );
}
