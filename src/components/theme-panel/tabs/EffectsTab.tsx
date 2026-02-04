"use client";

import { ThemeConfig } from "@/lib/theme-config";
import { Slider, VisualSelect } from "../controls";

interface EffectsTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
}

export function EffectsTab({ config, onChange }: EffectsTabProps) {
  const shadowOptions = [
    {
      id: 'none' as const,
      label: 'Brak',
      preview: (
        <div className="w-8 h-8 bg-card border border-border rounded" />
      ),
    },
    {
      id: 'subtle' as const,
      label: 'Subtelny',
      preview: (
        <div
          className="w-8 h-8 bg-card rounded"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}
        />
      ),
    },
    {
      id: 'strong' as const,
      label: 'Wyraźny',
      preview: (
        <div
          className="w-8 h-8 bg-card rounded"
          style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}
        />
      ),
    },
    {
      id: 'dramatic' as const,
      label: 'Dramatyczny',
      preview: (
        <div
          className="w-8 h-8 bg-card rounded"
          style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
        />
      ),
    },
  ];

  const hoverOptions = [
    { id: 'none' as const, label: 'Brak' },
    { id: 'scale' as const, label: 'Powiększenie' },
    { id: 'glow' as const, label: 'Blask' },
    { id: 'lift' as const, label: 'Uniesienie' },
  ];

  const speedOptions = [
    { value: 0, label: 'Wyłączone' },
    { value: 0.5, label: 'Wolne' },
    { value: 1, label: 'Normalne' },
    { value: 1.5, label: 'Szybkie' },
  ];

  return (
    <div className="space-y-6">
      {/* Shadows */}
      <VisualSelect
        label="Cienie"
        options={shadowOptions}
        value={config.effects.shadows}
        onChange={(v) => onChange('effects', { shadows: v })}
        columns={4}
      />

      {/* Animation Speed */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Szybkość animacji</p>
        <div className="flex gap-2">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onChange('effects', { animationSpeed: option.value })}
              className={`flex-1 p-2 rounded-lg border text-xs transition-all ${
                config.effects.animationSpeed === option.value
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Efekt hover</p>
        <div className="grid grid-cols-2 gap-2">
          {hoverOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onChange('effects', { hoverEffect: option.id })}
              className={`p-3 rounded-lg border text-sm transition-all ${
                config.effects.hoverEffect === option.id
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blur */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">Efekt blur</p>
          <button
            onClick={() => onChange('effects', {
              blur: { ...config.effects.blur, enabled: !config.effects.blur.enabled }
            })}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              config.effects.blur.enabled ? "bg-accent" : "bg-muted"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                config.effects.blur.enabled ? "left-7" : "left-1"
              }`}
            />
          </button>
        </div>
        {config.effects.blur.enabled && (
          <Slider
            label="Intensywność"
            value={config.effects.blur.intensity}
            min={0}
            max={20}
            step={2}
            unit="px"
            onChange={(v) => onChange('effects', {
              blur: { ...config.effects.blur, intensity: v }
            })}
          />
        )}
      </div>

      {/* Gradients */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Gradienty</p>
        <button
          onClick={() => onChange('effects', { gradients: !config.effects.gradients })}
          className={`relative w-12 h-6 rounded-full transition-colors ${
            config.effects.gradients ? "bg-accent" : "bg-muted"
          }`}
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
              config.effects.gradients ? "left-7" : "left-1"
            }`}
          />
        </button>
      </div>

      {/* Preview */}
      <div className="p-4 bg-muted/50 rounded-lg">
        <p className="text-xs text-muted-foreground mb-3">Podgląd hover</p>
        <button
          className="px-4 py-2 bg-accent text-accent-foreground rounded-lg transition-all hover:scale-105"
          style={{
            boxShadow: config.effects.shadows !== 'none'
              ? '0 3px 6px rgba(0,0,0,0.16)'
              : 'none',
            transitionDuration: config.effects.animationSpeed === 0
              ? '0s'
              : `${0.3 / config.effects.animationSpeed}s`,
          }}
        >
          Najedź myszką
        </button>
      </div>
    </div>
  );
}
