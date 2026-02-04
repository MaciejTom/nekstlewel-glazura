"use client";

import { useState } from "react";
import { accentPresets } from "@/lib/theme-config";

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [showCustom, setShowCustom] = useState(false);
  const [customColor, setCustomColor] = useState(value);

  const isPreset = accentPresets.some(p => p.color === value);

  return (
    <div className="space-y-3">
      {/* Presets */}
      <div className="grid grid-cols-5 gap-2">
        {accentPresets.map((preset) => (
          <button
            key={preset.id}
            onClick={() => {
              onChange(preset.color);
              setShowCustom(false);
            }}
            className={`group relative w-full aspect-square rounded-lg transition-all ${
              value === preset.color
                ? "ring-2 ring-white ring-offset-2 ring-offset-card scale-110"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: preset.color }}
            title={preset.name}
          >
            {value === preset.color && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-4 h-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Custom Color Toggle */}
      <button
        onClick={() => setShowCustom(!showCustom)}
        className={`w-full py-2 px-3 text-sm rounded-lg border transition-colors ${
          showCustom || !isPreset
            ? "border-accent bg-accent/10 text-accent"
            : "border-border text-muted-foreground hover:text-foreground"
        }`}
      >
        {showCustom || !isPreset ? "Własny kolor" : "Wybierz własny kolor"}
      </button>

      {/* Custom Color Input */}
      {(showCustom || !isPreset) && (
        <div className="flex gap-2">
          <div
            className="w-12 h-10 rounded-lg border border-border overflow-hidden"
            style={{ backgroundColor: customColor }}
          >
            <input
              type="color"
              value={customColor}
              onChange={(e) => {
                setCustomColor(e.target.value);
                onChange(e.target.value);
              }}
              className="w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <input
            type="text"
            value={customColor}
            onChange={(e) => {
              const val = e.target.value;
              setCustomColor(val);
              if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
                onChange(val);
              }
            }}
            placeholder="#000000"
            className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm font-mono text-foreground"
          />
        </div>
      )}
    </div>
  );
}
