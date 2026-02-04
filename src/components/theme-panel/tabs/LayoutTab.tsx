"use client";

import { ThemeConfig } from "@/lib/theme-config";
import { Slider, VisualSelect } from "../controls";

interface LayoutTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
}

export function LayoutTab({ config, onChange }: LayoutTabProps) {
  const containerOptions = [
    {
      id: 'narrow' as const,
      label: 'Wąski',
      preview: (
        <div className="w-full h-4 flex justify-center">
          <div className="w-8 h-full bg-accent/50 rounded" />
        </div>
      ),
    },
    {
      id: 'normal' as const,
      label: 'Normalny',
      preview: (
        <div className="w-full h-4 flex justify-center">
          <div className="w-12 h-full bg-accent/50 rounded" />
        </div>
      ),
    },
    {
      id: 'wide' as const,
      label: 'Szeroki',
      preview: (
        <div className="w-full h-4 flex justify-center">
          <div className="w-16 h-full bg-accent/50 rounded" />
        </div>
      ),
    },
  ];

  const spacingOptions = [
    { id: 'compact' as const, label: 'Zwarte' },
    { id: 'normal' as const, label: 'Normalne' },
    { id: 'spacious' as const, label: 'Przestronne' },
  ];

  const paddingOptions = [
    { id: 'tight' as const, label: 'Ciasne' },
    { id: 'normal' as const, label: 'Normalne' },
    { id: 'loose' as const, label: 'Luźne' },
  ];

  const gridOptions = [
    {
      id: 2 as const,
      label: '2 kolumny',
      preview: (
        <div className="flex gap-1">
          <div className="w-4 h-4 bg-accent/50 rounded" />
          <div className="w-4 h-4 bg-accent/50 rounded" />
        </div>
      ),
    },
    {
      id: 3 as const,
      label: '3 kolumny',
      preview: (
        <div className="flex gap-1">
          <div className="w-3 h-4 bg-accent/50 rounded" />
          <div className="w-3 h-4 bg-accent/50 rounded" />
          <div className="w-3 h-4 bg-accent/50 rounded" />
        </div>
      ),
    },
    {
      id: 4 as const,
      label: '4 kolumny',
      preview: (
        <div className="flex gap-1">
          <div className="w-2 h-4 bg-accent/50 rounded" />
          <div className="w-2 h-4 bg-accent/50 rounded" />
          <div className="w-2 h-4 bg-accent/50 rounded" />
          <div className="w-2 h-4 bg-accent/50 rounded" />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Container Width */}
      <VisualSelect
        label="Szerokość kontenera"
        options={containerOptions}
        value={config.layout.containerWidth}
        onChange={(v) => onChange('layout', { containerWidth: v })}
      />

      {/* Section Spacing */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Odstępy sekcji</p>
        <div className="flex gap-2">
          {spacingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange('layout', { sectionSpacing: option.id })}
              className={`flex-1 p-2 rounded-lg border text-sm transition-all ${
                config.layout.sectionSpacing === option.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <Slider
        label="Zaokrąglenie rogów"
        value={config.layout.borderRadius}
        min={0}
        max={24}
        step={2}
        unit="px"
        onChange={(v) => onChange('layout', { borderRadius: v })}
      />

      {/* Card Padding */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Padding kart</p>
        <div className="flex gap-2">
          {paddingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange('layout', { cardPadding: option.id })}
              className={`flex-1 p-2 rounded-lg border text-sm transition-all ${
                config.layout.cardPadding === option.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Columns */}
      <VisualSelect
        label="Kolumny siatki"
        options={gridOptions}
        value={config.layout.gridColumns}
        onChange={(v) => onChange('layout', { gridColumns: v })}
      />

      {/* Preview */}
      <div className="p-4 bg-muted/50 rounded-lg">
        <p className="text-xs text-muted-foreground mb-2">Podgląd</p>
        <div
          className="bg-card border border-border p-4"
          style={{ borderRadius: `${config.layout.borderRadius}px` }}
        >
          <div className="text-sm text-foreground">Przykładowa karta</div>
        </div>
      </div>
    </div>
  );
}
