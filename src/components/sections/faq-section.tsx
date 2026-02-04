"use client";

import { useState } from "react";
import { faqContent } from "@/lib/content";
import { ChevronDown } from "lucide-react";

const s = {
  section: "bg-background section-spacing",

  container: "container mx-auto px-6",

  header: "text-center max-w-3xl mx-auto mb-12",
  headline: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground h2-bar-center",

  items: "max-w-3xl mx-auto space-y-3",

  item: "group bg-card border border-border overflow-hidden rounded-lg transition-colors",
  itemOpen: "border-accent",

  question: "w-full flex justify-between items-center p-5 md:p-6 text-left cursor-pointer",
  questionText: "font-semibold text-base md:text-lg text-foreground pr-4 transition-colors",
  questionTextOpen: "text-accent",

  questionIcon: "w-10 h-10 flex items-center justify-center shrink-0 transition-colors bg-secondary rounded-md",
  questionIconOpen: "bg-accent",
  questionIconInner: "text-muted-foreground transition-all duration-300",
  questionIconInnerOpen: "text-accent-foreground rotate-180",

  answerWrapper: "grid transition-all duration-300 ease-out",
  answerWrapperClosed: "grid-rows-[0fr] opacity-0",
  answerWrapperOpen: "grid-rows-[1fr] opacity-100",
  answerInner: "overflow-hidden",
  answer: "px-5 md:px-6 pb-5 md:pb-6 text-foreground/80 text-sm md:text-base leading-relaxed",
};

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        {/* Header */}
        <div className={s.header}>
          <h2 className={s.headline}>{faqContent.headline}</h2>
        </div>

        {/* FAQ Items */}
        <div className={s.items}>
          {faqContent.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${s.item} ${isOpen ? s.itemOpen : ""}`}
              >
                <button
                  className={s.question}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`${s.questionText} ${isOpen ? s.questionTextOpen : ""}`}>
                    {item.question}
                  </span>
                  <div className={`${s.questionIcon} ${isOpen ? s.questionIconOpen : ""}`}>
                    <ChevronDown
                      className={`w-5 h-5 ${s.questionIconInner} ${isOpen ? s.questionIconInnerOpen : ""}`}
                    />
                  </div>
                </button>

                {/* Animated answer */}
                <div className={`${s.answerWrapper} ${isOpen ? s.answerWrapperOpen : s.answerWrapperClosed}`}>
                  <div className={s.answerInner}>
                    <div className={s.answer}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
