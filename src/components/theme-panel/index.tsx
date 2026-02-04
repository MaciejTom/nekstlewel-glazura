"use client";

import { useState } from "react";
import {
  Palette,
  X,
  Type,
  Droplets,
  Layout,
  Sparkles,
  Component,
  Layers,
  Settings2,
} from "lucide-react";
import { useThemeConfig } from "@/hooks/useThemeConfig";
import {
  TypographyTab,
  ColorsTab,
  LayoutTab,
  EffectsTab,
  ComponentsTab,
  SectionsTab,
  AdvancedTab,
} from "./tabs";

type TabId = 'typography' | 'colors' | 'layout' | 'effects' | 'components' | 'sections' | 'advanced';

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'typography', label: 'Typo', icon: <Type className="w-4 h-4" /> },
  { id: 'colors', label: 'Kolory', icon: <Droplets className="w-4 h-4" /> },
  { id: 'layout', label: 'Layout', icon: <Layout className="w-4 h-4" /> },
  { id: 'effects', label: 'Efekty', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'components', label: 'UI', icon: <Component className="w-4 h-4" /> },
  { id: 'sections', label: 'Sekcje', icon: <Layers className="w-4 h-4" /> },
  { id: 'advanced', label: 'Zaawans.', icon: <Settings2 className="w-4 h-4" /> },
];

export function ThemePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('colors');

  const {
    config,
    updateConfig,
    updateNested,
    undo,
    redo,
    reset,
    exportConfig,
    importConfig,
    canUndo,
    canRedo,
  } = useThemeConfig();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-card border border-border rounded-xl shadow-2xl w-[360px] max-h-[80vh] flex flex-col animate-fade-in-up overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-card/80 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-accent" />
              <h3 className="font-bold text-foreground">Panel stylów</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 text-xs transition-colors ${
                  activeTab === tab.id
                    ? "text-accent border-b-2 border-accent bg-accent/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === 'typography' && (
              <TypographyTab config={config} onChange={updateNested} />
            )}
            {activeTab === 'colors' && (
              <ColorsTab config={config} onChange={updateNested} />
            )}
            {activeTab === 'layout' && (
              <LayoutTab config={config} onChange={updateNested} />
            )}
            {activeTab === 'effects' && (
              <EffectsTab config={config} onChange={updateNested} />
            )}
            {activeTab === 'components' && (
              <ComponentsTab config={config} onChange={updateNested} />
            )}
            {activeTab === 'sections' && (
              <SectionsTab
                config={config}
                onChange={updateNested}
                onUpdateConfig={updateConfig}
              />
            )}
            {activeTab === 'advanced' && (
              <AdvancedTab
                config={config}
                onChange={updateNested}
                onUpdateConfig={updateConfig}
                onExport={exportConfig}
                onImport={importConfig}
                onReset={reset}
                onUndo={undo}
                onRedo={redo}
                canUndo={canUndo}
                canRedo={canRedo}
              />
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-border bg-muted/30 text-center">
            <p className="text-xs text-muted-foreground">
              Zmiany zapisują się automatycznie
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isOpen
            ? "bg-muted text-foreground rotate-180"
            : "bg-accent text-accent-foreground hover:scale-110"
        }`}
        title="Panel stylów"
      >
        <Palette className="w-6 h-6" />
      </button>
    </div>
  );
}
