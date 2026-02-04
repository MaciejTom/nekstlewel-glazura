"use client";

import { ThemeConfig, fontOptions } from "@/lib/theme-config";
import { Slider, VisualSelect } from "../controls";

interface TypographyTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
}

export function TypographyTab({ config, onChange }: TypographyTabProps) {
  const fontOptionsForSelect = fontOptions.map(f => ({
    id: f.id,
    label: f.name,
    preview: (
      <span
        className="text-xl font-semibold"
        style={{ fontFamily: `var(${f.fontVar}), system-ui` }}
      >
        Aa
      </span>
    ),
  }));

  const scaleOptions = [
    { id: 'minor-third' as const, label: 'Minor Third', preview: <span className="text-xs">1.2</span> },
    { id: 'major-third' as const, label: 'Major Third', preview: <span className="text-xs">1.25</span> },
    { id: 'perfect-fourth' as const, label: 'Perfect Fourth', preview: <span className="text-xs">1.33</span> },
  ];

  return (
    <div className="space-y-6">
      {/* Heading Font */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Czcionka nagłówków</p>
        <div className="space-y-2">
          {fontOptions.map((font) => (
            <button
              key={font.id}
              onClick={() => onChange('typography', { headingFont: font.id })}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                config.typography.headingFont === font.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <span
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: `var(${font.fontVar}), system-ui` }}
              >
                Aa
              </span>
              <span className="text-sm text-foreground">{font.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Body Font */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Czcionka treści</p>
        <div className="space-y-2">
          {fontOptions.map((font) => (
            <button
              key={font.id}
              onClick={() => onChange('typography', { bodyFont: font.id })}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                config.typography.bodyFont === font.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <span
                className="text-base text-foreground"
                style={{ fontFamily: `var(${font.fontVar}), system-ui` }}
              >
                Lorem ipsum dolor sit amet
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Base Size */}
      <Slider
        label="Rozmiar bazowy"
        value={config.typography.baseSize}
        min={14}
        max={20}
        step={1}
        unit="px"
        onChange={(v) => onChange('typography', { baseSize: v })}
      />

      {/* Scale */}
      <VisualSelect
        label="Skala typograficzna"
        options={scaleOptions}
        value={config.typography.scale}
        onChange={(v) => onChange('typography', { scale: v })}
      />

      {/* Heading Weight */}
      <Slider
        label="Grubość nagłówków"
        value={config.typography.headingWeight}
        min={500}
        max={900}
        step={100}
        onChange={(v) => onChange('typography', { headingWeight: v })}
      />

      {/* Line Height */}
      <Slider
        label="Wysokość linii"
        value={config.typography.lineHeight}
        min={1.4}
        max={2}
        step={0.1}
        onChange={(v) => onChange('typography', { lineHeight: v })}
      />

      {/* Letter Spacing */}
      <Slider
        label="Odstęp liter"
        value={config.typography.letterSpacing}
        min={-0.02}
        max={0.05}
        step={0.01}
        unit="em"
        onChange={(v) => onChange('typography', { letterSpacing: v })}
      />
    </div>
  );
}
