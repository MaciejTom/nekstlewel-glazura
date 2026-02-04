"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ThemeConfig,
  defaultThemeConfig,
  fontOptions,
  darkBases,
  lightBases,
  typographyScales,
  getAccentForeground,
  STORAGE_KEY,
} from '@/lib/theme-config';

export function useThemeConfig() {
  const [config, setConfig] = useState<ThemeConfig>(defaultThemeConfig);
  const [history, setHistory] = useState<ThemeConfig[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const isInitialized = useRef(false);

  // Load config from localStorage on mount
  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ThemeConfig;
        // Merge with defaults in case new options were added
        const merged = { ...defaultThemeConfig, ...parsed };
        setConfig(merged);
        applyConfig(merged);
      } catch {
        applyConfig(defaultThemeConfig);
      }
    } else {
      applyConfig(defaultThemeConfig);
    }
  }, []);

  // Apply theme config to CSS variables
  const applyConfig = useCallback((cfg: ThemeConfig) => {
    const root = document.documentElement;
    const body = document.body;

    // --- COLORS ---
    const bases = cfg.colors.mode === 'dark' ? darkBases : lightBases;
    const baseTheme = bases.find(b => b.id === cfg.colors.base || b.id === cfg.colors.base + '-light');

    // Fallback to first base if not found
    const selectedBase = baseTheme || bases[0];

    if (selectedBase) {
      Object.entries(selectedBase.colors).forEach(([key, value]) => {
        // Apply saturation adjustment
        if (cfg.colors.saturation !== 100 && key !== '--foreground' && key !== '--card-foreground' && key !== '--primary-foreground') {
          root.style.setProperty(key, adjustSaturation(value, cfg.colors.saturation));
        } else {
          root.style.setProperty(key, value);
        }
      });
    }

    // Apply accent color
    const accentColor = cfg.colors.accent;
    const accentForeground = getAccentForeground(accentColor);
    root.style.setProperty('--accent', accentColor);
    root.style.setProperty('--accent-foreground', accentForeground);
    root.style.setProperty('--ring', accentColor);

    // Apply contrast
    if (cfg.colors.contrast === 'high') {
      root.style.setProperty('--muted-foreground', cfg.colors.mode === 'dark' ? '#D1D5DB' : '#4B5563');
    } else if (cfg.colors.contrast === 'low') {
      root.style.setProperty('--muted-foreground', cfg.colors.mode === 'dark' ? '#6B7280' : '#9CA3AF');
    }

    // --- TYPOGRAPHY ---
    const headingFont = fontOptions.find(f => f.id === cfg.typography.headingFont);
    const bodyFont = fontOptions.find(f => f.id === cfg.typography.bodyFont);

    if (bodyFont) {
      body.style.fontFamily = `var(${bodyFont.fontVar}), system-ui, sans-serif`;
    }

    root.style.setProperty('--font-heading', headingFont ? `var(${headingFont.fontVar})` : 'inherit');
    root.style.setProperty('--font-size-base', `${cfg.typography.baseSize}px`);
    root.style.setProperty('--heading-weight', cfg.typography.headingWeight.toString());
    root.style.setProperty('--line-height', cfg.typography.lineHeight.toString());
    root.style.setProperty('--letter-spacing', `${cfg.typography.letterSpacing}em`);

    // Typography scale
    const scale = typographyScales[cfg.typography.scale];
    root.style.setProperty('--scale', scale.toString());
    root.style.setProperty('--text-xs', `${cfg.typography.baseSize / scale / scale}px`);
    root.style.setProperty('--text-sm', `${cfg.typography.baseSize / scale}px`);
    root.style.setProperty('--text-base', `${cfg.typography.baseSize}px`);
    root.style.setProperty('--text-lg', `${cfg.typography.baseSize * scale}px`);
    root.style.setProperty('--text-xl', `${cfg.typography.baseSize * scale * scale}px`);
    root.style.setProperty('--text-2xl', `${cfg.typography.baseSize * scale * scale * scale}px`);
    root.style.setProperty('--text-3xl', `${cfg.typography.baseSize * scale * scale * scale * scale}px`);
    root.style.setProperty('--text-4xl', `${cfg.typography.baseSize * scale * scale * scale * scale * scale}px`);

    // --- LAYOUT ---
    const containerWidths = { narrow: '1024px', normal: '1280px', wide: '1440px' };
    root.style.setProperty('--container-width', containerWidths[cfg.layout.containerWidth]);

    const sectionSpacings = { compact: '3rem', normal: '5rem', spacious: '8rem' };
    root.style.setProperty('--section-spacing', sectionSpacings[cfg.layout.sectionSpacing]);

    root.style.setProperty('--radius', `${cfg.layout.borderRadius}px`);
    root.style.setProperty('--radius-sm', `${Math.max(0, cfg.layout.borderRadius - 4)}px`);
    root.style.setProperty('--radius-lg', `${cfg.layout.borderRadius + 4}px`);
    root.style.setProperty('--radius-xl', `${cfg.layout.borderRadius + 8}px`);

    const cardPaddings = { tight: '1rem', normal: '1.5rem', loose: '2rem' };
    root.style.setProperty('--card-padding', cardPaddings[cfg.layout.cardPadding]);

    root.style.setProperty('--grid-columns', cfg.layout.gridColumns.toString());

    // --- EFFECTS ---
    const shadowValues = {
      none: 'none',
      subtle: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      strong: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      dramatic: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    };
    root.style.setProperty('--shadow', shadowValues[cfg.effects.shadows]);

    root.style.setProperty('--animation-speed', cfg.effects.animationSpeed === 0 ? '0s' : `${0.3 / cfg.effects.animationSpeed}s`);
    root.style.setProperty('--animation-enabled', cfg.effects.animationSpeed === 0 ? '0' : '1');

    const hoverScales = { scale: '1.02', glow: '1', lift: '1', none: '1' };
    root.style.setProperty('--hover-scale', hoverScales[cfg.effects.hoverEffect]);
    root.style.setProperty('--hover-effect', cfg.effects.hoverEffect);

    root.style.setProperty('--blur-enabled', cfg.effects.blur.enabled ? '1' : '0');
    root.style.setProperty('--blur-intensity', `${cfg.effects.blur.intensity}px`);

    root.style.setProperty('--gradients-enabled', cfg.effects.gradients ? '1' : '0');

    // --- COMPONENTS ---
    const buttonRadii = { square: '0px', rounded: `${cfg.layout.borderRadius}px`, pill: '9999px' };
    root.style.setProperty('--button-radius', buttonRadii[cfg.components.buttonStyle]);

    root.style.setProperty('--card-style', cfg.components.cardStyle);
    root.style.setProperty('--nav-style', cfg.components.navStyle);
    root.style.setProperty('--icon-style', cfg.components.iconStyle);
    root.style.setProperty('--separator-style', cfg.components.separatorStyle);

    // Card style specific
    if (cfg.components.cardStyle === 'glass') {
      root.style.setProperty('--card-bg', 'rgba(255,255,255,0.05)');
      root.style.setProperty('--card-backdrop', 'blur(10px)');
    } else if (cfg.components.cardStyle === 'flat') {
      root.style.setProperty('--card-border', 'none');
    }

    // --- CUSTOM CSS ---
    let customStyleEl = document.getElementById('theme-custom-css');
    if (!customStyleEl) {
      customStyleEl = document.createElement('style');
      customStyleEl.id = 'theme-custom-css';
      document.head.appendChild(customStyleEl);
    }
    customStyleEl.textContent = cfg.customCSS;

  }, []);

  // Update config with debounced save
  const updateConfig = useCallback((updates: Partial<ThemeConfig> | ((prev: ThemeConfig) => ThemeConfig)) => {
    setConfig(prev => {
      const newConfig = typeof updates === 'function' ? updates(prev) : { ...prev, ...updates };

      // Save to localStorage (debounced would be better but keeping it simple)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));

      // Apply changes
      applyConfig(newConfig);

      // Add to history
      setHistory(h => [...h.slice(0, historyIndex + 1), prev].slice(-50));
      setHistoryIndex(i => i + 1);

      return newConfig;
    });
  }, [applyConfig, historyIndex]);

  // Deep update for nested properties
  const updateNested = useCallback(<K extends keyof ThemeConfig>(
    key: K,
    updates: Partial<ThemeConfig[K]>
  ) => {
    updateConfig(prev => ({
      ...prev,
      [key]: { ...prev[key], ...updates }
    }));
  }, [updateConfig]);

  // Undo
  const undo = useCallback(() => {
    if (historyIndex >= 0) {
      const prevConfig = history[historyIndex];
      setHistoryIndex(i => i - 1);
      setConfig(prevConfig);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prevConfig));
      applyConfig(prevConfig);
    }
  }, [history, historyIndex, applyConfig]);

  // Redo
  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextConfig = history[historyIndex + 1];
      setHistoryIndex(i => i + 1);
      setConfig(nextConfig);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextConfig));
      applyConfig(nextConfig);
    }
  }, [history, historyIndex, applyConfig]);

  // Reset to defaults
  const reset = useCallback(() => {
    setConfig(defaultThemeConfig);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultThemeConfig));
    applyConfig(defaultThemeConfig);
  }, [applyConfig]);

  // Export config
  const exportConfig = useCallback(() => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme-config.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [config]);

  // Import config
  const importConfig = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string) as ThemeConfig;
        const merged = { ...defaultThemeConfig, ...imported };
        updateConfig(merged);
      } catch (err) {
        console.error('Failed to import config:', err);
      }
    };
    reader.readAsText(file);
  }, [updateConfig]);

  return {
    config,
    updateConfig,
    updateNested,
    undo,
    redo,
    reset,
    exportConfig,
    importConfig,
    canUndo: historyIndex >= 0,
    canRedo: historyIndex < history.length - 1,
  };
}

// Helper function to adjust saturation
function adjustSaturation(hex: string, saturation: number): string {
  // Convert hex to HSL, adjust S, convert back
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  // Adjust saturation
  s = Math.min(1, Math.max(0, s * (saturation / 100)));

  // Convert back to RGB
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r2, g2, b2;
  if (s === 0) {
    r2 = g2 = b2 = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r2 = hue2rgb(p, q, h + 1/3);
    g2 = hue2rgb(p, q, h);
    b2 = hue2rgb(p, q, h - 1/3);
  }

  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${toHex(r2)}${toHex(g2)}${toHex(b2)}`;
}
