"use client";

import { ThemeConfig } from "@/lib/theme-config";
import { VisualSelect } from "../controls";

interface ComponentsTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
}

export function ComponentsTab({ config, onChange }: ComponentsTabProps) {
  const buttonOptions = [
    {
      id: 'square' as const,
      label: 'Kwadratowy',
      preview: (
        <div className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-none">
          Btn
        </div>
      ),
    },
    {
      id: 'rounded' as const,
      label: 'Zaokrąglony',
      preview: (
        <div className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-lg">
          Btn
        </div>
      ),
    },
    {
      id: 'pill' as const,
      label: 'Pigułka',
      preview: (
        <div className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full">
          Btn
        </div>
      ),
    },
  ];

  const cardOptions = [
    {
      id: 'flat' as const,
      label: 'Płaski',
      preview: (
        <div className="w-10 h-8 bg-card" />
      ),
    },
    {
      id: 'bordered' as const,
      label: 'Obramowany',
      preview: (
        <div className="w-10 h-8 bg-card border border-border rounded" />
      ),
    },
    {
      id: 'elevated' as const,
      label: 'Uniesiony',
      preview: (
        <div
          className="w-10 h-8 bg-card rounded"
          style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        />
      ),
    },
    {
      id: 'glass' as const,
      label: 'Szklany',
      preview: (
        <div
          className="w-10 h-8 rounded border border-white/10"
          style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)' }}
        />
      ),
    },
  ];

  const navOptions = [
    {
      id: 'solid' as const,
      label: 'Solidny',
      preview: (
        <div className="w-full h-3 bg-card border-b border-border" />
      ),
    },
    {
      id: 'transparent' as const,
      label: 'Przezroczysty',
      preview: (
        <div className="w-full h-3 bg-transparent border-b border-border/30" />
      ),
    },
    {
      id: 'blur' as const,
      label: 'Blur',
      preview: (
        <div
          className="w-full h-3 border-b border-border/30"
          style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
        />
      ),
    },
  ];

  const iconOptions = [
    { id: 'outline' as const, label: 'Konturowe' },
    { id: 'filled' as const, label: 'Wypełnione' },
  ];

  const separatorOptions = [
    { id: 'line' as const, label: 'Linia' },
    { id: 'gradient' as const, label: 'Gradient' },
    { id: 'dots' as const, label: 'Kropki' },
    { id: 'none' as const, label: 'Brak' },
  ];

  return (
    <div className="space-y-6">
      {/* Button Style */}
      <VisualSelect
        label="Styl przycisków"
        options={buttonOptions}
        value={config.components.buttonStyle}
        onChange={(v) => onChange('components', { buttonStyle: v })}
      />

      {/* Card Style */}
      <VisualSelect
        label="Styl kart"
        options={cardOptions}
        value={config.components.cardStyle}
        onChange={(v) => onChange('components', { cardStyle: v })}
        columns={4}
      />

      {/* Nav Style */}
      <VisualSelect
        label="Styl nawigacji"
        options={navOptions}
        value={config.components.navStyle}
        onChange={(v) => onChange('components', { navStyle: v })}
      />

      {/* Icon Style */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Styl ikon</p>
        <div className="flex gap-2">
          {iconOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange('components', { iconStyle: option.id })}
              className={`flex-1 p-3 rounded-lg border text-sm transition-all ${
                config.components.iconStyle === option.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Separator Style */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Styl separatorów</p>
        <div className="grid grid-cols-4 gap-2">
          {separatorOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange('components', { separatorStyle: option.id })}
              className={`p-2 rounded-lg border text-xs transition-all ${
                config.components.separatorStyle === option.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="p-4 bg-muted/50 rounded-lg space-y-4">
        <p className="text-xs text-muted-foreground">Podgląd komponentów</p>

        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-accent text-accent-foreground text-sm"
            style={{
              borderRadius: config.components.buttonStyle === 'square'
                ? '0'
                : config.components.buttonStyle === 'pill'
                  ? '9999px'
                  : `${config.layout.borderRadius}px`
            }}
          >
            Przycisk
          </button>
          <button
            className="px-4 py-2 border border-border text-foreground text-sm"
            style={{
              borderRadius: config.components.buttonStyle === 'square'
                ? '0'
                : config.components.buttonStyle === 'pill'
                  ? '9999px'
                  : `${config.layout.borderRadius}px`
            }}
          >
            Przycisk
          </button>
        </div>

        <div
          className={`p-3 ${
            config.components.cardStyle === 'bordered' ? 'border border-border' :
            config.components.cardStyle === 'elevated' ? 'shadow-lg' :
            config.components.cardStyle === 'glass' ? 'border border-white/10' : ''
          }`}
          style={{
            borderRadius: `${config.layout.borderRadius}px`,
            background: config.components.cardStyle === 'glass'
              ? 'rgba(255,255,255,0.05)'
              : 'var(--card)',
            backdropFilter: config.components.cardStyle === 'glass' ? 'blur(10px)' : undefined,
          }}
        >
          <p className="text-sm text-card-foreground">Przykładowa karta</p>
        </div>
      </div>
    </div>
  );
}
