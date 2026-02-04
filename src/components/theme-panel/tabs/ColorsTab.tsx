"use client";

import { ThemeConfig, darkBases, lightBases } from "@/lib/theme-config";
import { Slider, ColorPicker } from "../controls";
import { Sun, Moon } from "lucide-react";

interface ColorsTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
}

export function ColorsTab({ config, onChange }: ColorsTabProps) {
  const bases = config.colors.mode === 'dark' ? darkBases : lightBases;

  return (
    <div className="space-y-6">
      {/* Light/Dark Mode Toggle */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Tryb</p>
        <div className="flex gap-2">
          <button
            onClick={() => onChange('colors', { mode: 'dark', base: 'gray' })}
            className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
              config.colors.mode === 'dark'
                ? "border-accent bg-accent/10"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <Moon className="w-4 h-4" />
            <span className="text-sm">Ciemny</span>
          </button>
          <button
            onClick={() => onChange('colors', { mode: 'light', base: 'gray-light' })}
            className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
              config.colors.mode === 'light'
                ? "border-accent bg-accent/10"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <Sun className="w-4 h-4" />
            <span className="text-sm">Jasny</span>
          </button>
        </div>
      </div>

      {/* Accent Color */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Kolor akcentu</p>
        <ColorPicker
          value={config.colors.accent}
          onChange={(color) => onChange('colors', { accent: color })}
        />
      </div>

      {/* Base Theme */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Baza kolorów</p>
        <div className="space-y-2">
          {bases.map((base) => (
            <button
              key={base.id}
              onClick={() => onChange('colors', { base: base.id })}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                config.colors.base === base.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <div className="flex gap-1">
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: base.colors['--background'] }}
                />
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: base.colors['--card'] }}
                />
                <div
                  className="w-6 h-6 rounded"
                  style={{ backgroundColor: base.colors['--muted'] }}
                />
              </div>
              <span className="text-sm text-foreground">{base.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contrast */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Kontrast</p>
        <div className="flex gap-2">
          {(['low', 'normal', 'high'] as const).map((level) => (
            <button
              key={level}
              onClick={() => onChange('colors', { contrast: level })}
              className={`flex-1 p-2 rounded-lg border text-sm transition-all ${
                config.colors.contrast === level
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {level === 'low' ? 'Niski' : level === 'normal' ? 'Normalny' : 'Wysoki'}
            </button>
          ))}
        </div>
      </div>

      {/* Saturation */}
      <Slider
        label="Nasycenie"
        value={config.colors.saturation}
        min={50}
        max={150}
        step={10}
        unit="%"
        onChange={(v) => onChange('colors', { saturation: v })}
      />
    </div>
  );
}
