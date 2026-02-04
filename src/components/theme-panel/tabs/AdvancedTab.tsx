"use client";

import { useRef } from "react";
import { ThemeConfig, defaultThemeConfig } from "@/lib/theme-config";
import { Download, Upload, RotateCcw, Undo2, Redo2 } from "lucide-react";

interface AdvancedTabProps {
  config: ThemeConfig;
  onChange: <K extends keyof ThemeConfig>(key: K, updates: Partial<ThemeConfig[K]>) => void;
  onUpdateConfig: (updates: Partial<ThemeConfig>) => void;
  onExport: () => void;
  onImport: (file: File) => void;
  onReset: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export function AdvancedTab({
  config,
  onUpdateConfig,
  onExport,
  onImport,
  onReset,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: AdvancedTabProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImport(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Undo/Redo */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Historia</p>
        <div className="flex gap-2">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border transition-colors ${
              canUndo
                ? "border-border hover:bg-muted"
                : "border-border/50 text-muted-foreground/50 cursor-not-allowed"
            }`}
          >
            <Undo2 className="w-4 h-4" />
            <span className="text-sm">Cofnij</span>
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border transition-colors ${
              canRedo
                ? "border-border hover:bg-muted"
                : "border-border/50 text-muted-foreground/50 cursor-not-allowed"
            }`}
          >
            <Redo2 className="w-4 h-4" />
            <span className="text-sm">Ponów</span>
          </button>
        </div>
      </div>

      {/* Export/Import */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Eksport / Import</p>
        <div className="flex gap-2">
          <button
            onClick={onExport}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Eksportuj</span>
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <Upload className="w-4 h-4" />
            <span className="text-sm">Importuj</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Custom CSS */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Własny CSS</p>
        <textarea
          value={config.customCSS}
          onChange={(e) => onUpdateConfig({ customCSS: e.target.value })}
          placeholder={`/* Dodaj własne style */\n.my-class {\n  color: red;\n}`}
          className="w-full h-32 p-3 bg-muted border border-border rounded-lg text-sm font-mono text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Style CSS zostaną dodane na końcu dokumentu
        </p>
      </div>

      {/* Reset */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Resetuj</p>
        <button
          onClick={() => {
            if (confirm('Czy na pewno chcesz zresetować wszystkie ustawienia do domyślnych?')) {
              onReset();
            }
          }}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-red-500/50 text-red-500 hover:bg-red-500/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="text-sm">Resetuj do domyślnych</span>
        </button>
      </div>

      {/* Current Config Preview */}
      <div>
        <p className="text-sm font-medium text-foreground mb-3">Aktualna konfiguracja</p>
        <div className="p-3 bg-muted rounded-lg max-h-40 overflow-auto">
          <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap">
            {JSON.stringify(config, null, 2).slice(0, 500)}...
          </pre>
        </div>
      </div>
    </div>
  );
}
