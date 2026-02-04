"use client";

import { useState, useEffect } from "react";
import { Palette, X } from "lucide-react";

const themes = [
  { id: "industrial", name: "Industrial", accent: "#F59E0B", font: "Inter", fontVar: "--font-inter" },
  { id: "steel", name: "Steel Blue", accent: "#3B82F6", font: "Space Grotesk", fontVar: "--font-space" },
  { id: "concrete", name: "Concrete", accent: "#FACC15", font: "DM Sans", fontVar: "--font-dm" },
  { id: "warm", name: "Warm", accent: "#F97316", font: "Outfit", fontVar: "--font-outfit" },
  { id: "emerald", name: "Emerald", accent: "#10B981", font: "Plus Jakarta Sans", fontVar: "--font-jakarta" },
];

const themeColors: Record<string, Record<string, string>> = {
  industrial: {
    "--background": "#111827",
    "--foreground": "#F9FAFB",
    "--card": "#1F2937",
    "--card-foreground": "#F9FAFB",
    "--primary": "#374151",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#1F2937",
    "--muted": "#374151",
    "--muted-foreground": "#9CA3AF",
    "--accent": "#F59E0B",
    "--accent-foreground": "#111827",
    "--border": "#374151",
  },
  steel: {
    "--background": "#0F172A",
    "--foreground": "#F1F5F9",
    "--card": "#1E293B",
    "--card-foreground": "#F1F5F9",
    "--primary": "#1E293B",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#1E293B",
    "--muted": "#334155",
    "--muted-foreground": "#94A3B8",
    "--accent": "#3B82F6",
    "--accent-foreground": "#FFFFFF",
    "--border": "#334155",
  },
  concrete: {
    "--background": "#09090B",
    "--foreground": "#FAFAFA",
    "--card": "#18181B",
    "--card-foreground": "#FAFAFA",
    "--primary": "#27272A",
    "--primary-foreground": "#FAFAFA",
    "--secondary": "#18181B",
    "--muted": "#27272A",
    "--muted-foreground": "#A1A1AA",
    "--accent": "#FACC15",
    "--accent-foreground": "#09090B",
    "--border": "#27272A",
  },
  warm: {
    "--background": "#1C1917",
    "--foreground": "#FAFAF9",
    "--card": "#292524",
    "--card-foreground": "#FAFAF9",
    "--primary": "#44403C",
    "--primary-foreground": "#FAFAF9",
    "--secondary": "#292524",
    "--muted": "#44403C",
    "--muted-foreground": "#A8A29E",
    "--accent": "#F97316",
    "--accent-foreground": "#FFFFFF",
    "--border": "#44403C",
  },
  emerald: {
    "--background": "#0A0A0A",
    "--foreground": "#F5F5F5",
    "--card": "#171717",
    "--card-foreground": "#F5F5F5",
    "--primary": "#262626",
    "--primary-foreground": "#F5F5F5",
    "--secondary": "#171717",
    "--muted": "#262626",
    "--muted-foreground": "#A3A3A3",
    "--accent": "#10B981",
    "--accent-foreground": "#FFFFFF",
    "--border": "#262626",
  },
};

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("industrial");

  useEffect(() => {
    const saved = localStorage.getItem("glazura-theme");
    if (saved && themeColors[saved]) {
      setCurrentTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (themeId: string) => {
    const root = document.documentElement;
    const colors = themeColors[themeId];
    const theme = themes.find(t => t.id === themeId);

    if (colors) {
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }

    if (theme) {
      document.body.style.fontFamily = `var(${theme.fontVar}), system-ui, sans-serif`;
    }
  };

  const selectTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem("glazura-theme", themeId);
    applyTheme(themeId);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-2xl p-4 w-72 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-foreground">Wybierz motyw</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => selectTheme(theme.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                  currentTheme === theme.id
                    ? "bg-accent/20 ring-2 ring-accent"
                    : "hover:bg-muted"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full shadow-inner"
                  style={{ backgroundColor: theme.accent }}
                />
                <div className="text-left flex-1">
                  <div className="text-sm font-semibold text-foreground">{theme.name}</div>
                  <div className="text-xs text-muted-foreground">{theme.font}</div>
                </div>
                {currentTheme === theme.id && (
                  <div className="w-2 h-2 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 pt-3 border-t border-border">
            Motyw zapisuje się automatycznie
          </p>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Zmień motyw"
      >
        <Palette className="w-6 h-6" />
      </button>
    </div>
  );
}
