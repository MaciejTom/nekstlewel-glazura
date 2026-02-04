"use client";

import { ThemeConfig } from "@/lib/theme-config";
import { DragList } from "../controls";

interface SectionsTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
  onUpdateConfig: (updates: Partial<ThemeConfig>) => void;
}

export function SectionsTab({ config, onUpdateConfig }: SectionsTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Kolejność i widoczność</p>
        <p className="text-xs text-muted-foreground">Przeciągnij aby zmienić</p>
      </div>

      <DragList
        items={config.sections}
        onChange={(sections) => onUpdateConfig({ sections })}
      />

      <div className="p-3 bg-muted/30 rounded-lg">
        <p className="text-xs text-muted-foreground">
          Kliknij ikonę oka aby pokazać/ukryć sekcję. Przeciągnij element aby zmienić kolejność na stronie.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            const allVisible = config.sections.map(s => ({ ...s, visible: true }));
            onUpdateConfig({ sections: allVisible });
          }}
          className="flex-1 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Pokaż wszystkie
        </button>
        <button
          onClick={() => {
            const allHidden = config.sections.map(s => ({ ...s, visible: false }));
            onUpdateConfig({ sections: allHidden });
          }}
          className="flex-1 py-2 text-xs border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Ukryj wszystkie
        </button>
      </div>
    </div>
  );
}
