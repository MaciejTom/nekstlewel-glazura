// Theme Configuration Types and Defaults

export interface ThemeConfig {
  // Typography
  typography: {
    headingFont: string;
    bodyFont: string;
    baseSize: number;
    scale: 'minor-third' | 'major-third' | 'perfect-fourth';
    headingWeight: number;
    lineHeight: number;
    letterSpacing: number;
  };

  // Colors
  colors: {
    accent: string;
    base: string;
    mode: 'light' | 'dark';
    contrast: 'low' | 'normal' | 'high';
    saturation: number;
  };

  // Layout
  layout: {
    containerWidth: 'narrow' | 'normal' | 'wide';
    sectionSpacing: 'compact' | 'normal' | 'spacious';
    borderRadius: number;
    cardPadding: 'tight' | 'normal' | 'loose';
    gridColumns: 2 | 3 | 4;
  };

  // Effects
  effects: {
    shadows: 'none' | 'subtle' | 'strong' | 'dramatic';
    animationSpeed: number;
    hoverEffect: 'scale' | 'glow' | 'lift' | 'none';
    blur: { enabled: boolean; intensity: number };
    gradients: boolean;
  };

  // Components
  components: {
    buttonStyle: 'square' | 'rounded' | 'pill';
    cardStyle: 'flat' | 'bordered' | 'elevated' | 'glass';
    navStyle: 'solid' | 'transparent' | 'blur';
    iconStyle: 'outline' | 'filled';
    separatorStyle: 'line' | 'gradient' | 'dots' | 'none';
  };

  // Sections
  sections: SectionConfig[];

  // Advanced
  customCSS: string;
}

export interface SectionConfig {
  id: string;
  name: string;
  visible: boolean;
  order: number;
}

// Font options
export const fontOptions = [
  { id: 'inter', name: 'Inter', fontVar: '--font-inter' },
  { id: 'space', name: 'Space Grotesk', fontVar: '--font-space' },
  { id: 'dm', name: 'DM Sans', fontVar: '--font-dm' },
  { id: 'outfit', name: 'Outfit', fontVar: '--font-outfit' },
  { id: 'jakarta', name: 'Plus Jakarta Sans', fontVar: '--font-jakarta' },
];

// Accent color presets
export const accentPresets = [
  { id: 'amber', name: 'Bursztyn', color: '#F59E0B', foreground: '#111827' },
  { id: 'blue', name: 'Niebieski', color: '#3B82F6', foreground: '#FFFFFF' },
  { id: 'yellow', name: 'Żółty', color: '#FACC15', foreground: '#09090B' },
  { id: 'orange', name: 'Pomarańcz', color: '#F97316', foreground: '#FFFFFF' },
  { id: 'emerald', name: 'Szmaragd', color: '#10B981', foreground: '#FFFFFF' },
  { id: 'red', name: 'Czerwony', color: '#EF4444', foreground: '#FFFFFF' },
  { id: 'purple', name: 'Fiolet', color: '#8B5CF6', foreground: '#FFFFFF' },
  { id: 'pink', name: 'Róż', color: '#EC4899', foreground: '#FFFFFF' },
  { id: 'cyan', name: 'Turkus', color: '#06B6D4', foreground: '#FFFFFF' },
];

// Base theme presets (dark mode)
export const darkBases = [
  {
    id: 'gray',
    name: 'Grafitowy',
    colors: {
      '--background': '#111827',
      '--foreground': '#F9FAFB',
      '--card': '#1F2937',
      '--card-foreground': '#F9FAFB',
      '--primary': '#374151',
      '--primary-foreground': '#FFFFFF',
      '--secondary': '#1F2937',
      '--muted': '#374151',
      '--muted-foreground': '#9CA3AF',
      '--border': '#374151',
      '--input': '#374151',
    }
  },
  {
    id: 'slate',
    name: 'Stalowy',
    colors: {
      '--background': '#0F172A',
      '--foreground': '#F1F5F9',
      '--card': '#1E293B',
      '--card-foreground': '#F1F5F9',
      '--primary': '#1E293B',
      '--primary-foreground': '#FFFFFF',
      '--secondary': '#1E293B',
      '--muted': '#334155',
      '--muted-foreground': '#94A3B8',
      '--border': '#334155',
      '--input': '#334155',
    }
  },
  {
    id: 'zinc',
    name: 'Cynkowy',
    colors: {
      '--background': '#09090B',
      '--foreground': '#FAFAFA',
      '--card': '#18181B',
      '--card-foreground': '#FAFAFA',
      '--primary': '#27272A',
      '--primary-foreground': '#FAFAFA',
      '--secondary': '#18181B',
      '--muted': '#27272A',
      '--muted-foreground': '#A1A1AA',
      '--border': '#27272A',
      '--input': '#27272A',
    }
  },
  {
    id: 'stone',
    name: 'Kamienny',
    colors: {
      '--background': '#1C1917',
      '--foreground': '#FAFAF9',
      '--card': '#292524',
      '--card-foreground': '#FAFAF9',
      '--primary': '#44403C',
      '--primary-foreground': '#FAFAF9',
      '--secondary': '#292524',
      '--muted': '#44403C',
      '--muted-foreground': '#A8A29E',
      '--border': '#44403C',
      '--input': '#44403C',
    }
  },
  {
    id: 'neutral',
    name: 'Neutralny',
    colors: {
      '--background': '#0A0A0A',
      '--foreground': '#F5F5F5',
      '--card': '#171717',
      '--card-foreground': '#F5F5F5',
      '--primary': '#262626',
      '--primary-foreground': '#F5F5F5',
      '--secondary': '#171717',
      '--muted': '#262626',
      '--muted-foreground': '#A3A3A3',
      '--border': '#262626',
      '--input': '#262626',
    }
  },
];

// Light mode bases
export const lightBases = [
  {
    id: 'gray-light',
    name: 'Jasny Szary',
    colors: {
      '--background': '#F9FAFB',
      '--foreground': '#111827',
      '--card': '#FFFFFF',
      '--card-foreground': '#111827',
      '--primary': '#F3F4F6',
      '--primary-foreground': '#111827',
      '--secondary': '#F3F4F6',
      '--muted': '#E5E7EB',
      '--muted-foreground': '#6B7280',
      '--border': '#E5E7EB',
      '--input': '#E5E7EB',
    }
  },
  {
    id: 'slate-light',
    name: 'Jasny Stalowy',
    colors: {
      '--background': '#F8FAFC',
      '--foreground': '#0F172A',
      '--card': '#FFFFFF',
      '--card-foreground': '#0F172A',
      '--primary': '#F1F5F9',
      '--primary-foreground': '#0F172A',
      '--secondary': '#F1F5F9',
      '--muted': '#E2E8F0',
      '--muted-foreground': '#64748B',
      '--border': '#E2E8F0',
      '--input': '#E2E8F0',
    }
  },
  {
    id: 'zinc-light',
    name: 'Jasny Cynk',
    colors: {
      '--background': '#FAFAFA',
      '--foreground': '#09090B',
      '--card': '#FFFFFF',
      '--card-foreground': '#09090B',
      '--primary': '#F4F4F5',
      '--primary-foreground': '#09090B',
      '--secondary': '#F4F4F5',
      '--muted': '#E4E4E7',
      '--muted-foreground': '#71717A',
      '--border': '#E4E4E7',
      '--input': '#E4E4E7',
    }
  },
  {
    id: 'stone-light',
    name: 'Jasny Kamienny',
    colors: {
      '--background': '#FAFAF9',
      '--foreground': '#1C1917',
      '--card': '#FFFFFF',
      '--card-foreground': '#1C1917',
      '--primary': '#F5F5F4',
      '--primary-foreground': '#1C1917',
      '--secondary': '#F5F5F4',
      '--muted': '#E7E5E4',
      '--muted-foreground': '#78716C',
      '--border': '#E7E5E4',
      '--input': '#E7E5E4',
    }
  },
  {
    id: 'neutral-light',
    name: 'Jasny Neutralny',
    colors: {
      '--background': '#FAFAFA',
      '--foreground': '#0A0A0A',
      '--card': '#FFFFFF',
      '--card-foreground': '#0A0A0A',
      '--primary': '#F5F5F5',
      '--primary-foreground': '#0A0A0A',
      '--secondary': '#F5F5F5',
      '--muted': '#E5E5E5',
      '--muted-foreground': '#737373',
      '--border': '#E5E5E5',
      '--input': '#E5E5E5',
    }
  },
];

// Typography scales
export const typographyScales = {
  'minor-third': 1.2,
  'major-third': 1.25,
  'perfect-fourth': 1.333,
};

// Default sections
export const defaultSections: SectionConfig[] = [
  { id: 'hero', name: 'Hero', visible: true, order: 0 },
  { id: 'problem', name: 'Problem', visible: true, order: 1 },
  { id: 'services', name: 'Usługi', visible: true, order: 2 },
  { id: 'process', name: 'Proces', visible: true, order: 3 },
  { id: 'why-us', name: 'Dlaczego my', visible: true, order: 4 },
  { id: 'portfolio', name: 'Portfolio', visible: true, order: 5 },
  { id: 'faq', name: 'FAQ', visible: true, order: 6 },
  { id: 'contact', name: 'Kontakt', visible: true, order: 7 },
];

// Default theme configuration
export const defaultThemeConfig: ThemeConfig = {
  typography: {
    headingFont: 'inter',
    bodyFont: 'inter',
    baseSize: 16,
    scale: 'major-third',
    headingWeight: 700,
    lineHeight: 1.6,
    letterSpacing: 0,
  },
  colors: {
    accent: '#F59E0B',
    base: 'gray',
    mode: 'dark',
    contrast: 'normal',
    saturation: 100,
  },
  layout: {
    containerWidth: 'normal',
    sectionSpacing: 'normal',
    borderRadius: 8,
    cardPadding: 'normal',
    gridColumns: 3,
  },
  effects: {
    shadows: 'subtle',
    animationSpeed: 1,
    hoverEffect: 'scale',
    blur: { enabled: true, intensity: 10 },
    gradients: false,
  },
  components: {
    buttonStyle: 'rounded',
    cardStyle: 'bordered',
    navStyle: 'blur',
    iconStyle: 'outline',
    separatorStyle: 'line',
  },
  sections: defaultSections,
  customCSS: '',
};

// Helper to get accent foreground color based on luminance
export function getAccentForeground(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#111827' : '#FFFFFF';
}

// Storage key
export const STORAGE_KEY = 'glazura-theme-config';
