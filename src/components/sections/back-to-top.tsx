"use client";

import { useState, useEffect } from "react";
import { IconArrowUp } from "@/components/ui/icons";

const s = {
  button: "fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-110",
  hidden: "opacity-0 pointer-events-none translate-y-4",
  visible: "opacity-100 pointer-events-auto translate-y-0",
};

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${s.button} ${visible ? s.visible : s.hidden}`}
      aria-label="Wróć na górę"
    >
      <IconArrowUp className="w-6 h-6" />
    </button>
  );
}
