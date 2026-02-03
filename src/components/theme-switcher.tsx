"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export type Theme = "industrial" | "minimal" | "sunny"

const themes: { id: Theme; label: string; icon: string }[] = [
  { id: "industrial", label: "Dark", icon: "moon" },
  { id: "minimal", label: "Light", icon: "sun" },
  { id: "sunny", label: "Sunny", icon: "sunrise" },
]

interface ThemeSwitcherProps {
  className?: string
  defaultTheme?: Theme
}

export function ThemeSwitcher({ className, defaultTheme = "industrial" }: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme") as Theme | null
    if (saved && themes.some(t => t.id === saved)) {
      setTheme(saved)
      applyTheme(saved)
    } else {
      applyTheme(defaultTheme)
    }
  }, [defaultTheme])

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute("data-theme", newTheme)
    if (newTheme === "industrial") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className={cn("flex items-center gap-1 p-1 bg-muted rounded-lg", className)}>
        {themes.map((t) => (
          <div key={t.id} className="w-16 h-8 rounded-md" />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-1 p-1 bg-muted/50 rounded-lg", className)}>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => handleThemeChange(t.id)}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
            theme === t.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("industrial")

  useEffect(() => {
    const updateTheme = () => {
      const current = document.documentElement.getAttribute("data-theme") as Theme
      setTheme(current || "industrial")
    }

    updateTheme()

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          updateTheme()
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  return theme
}
