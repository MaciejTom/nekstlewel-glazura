import Link from "next/link"

export function SectionGroup({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <div className="border-b-4 border-border">
      <div className="px-6 py-4 bg-foreground text-background flex items-center justify-between">
        <h2 className="text-sm font-bold font-mono uppercase tracking-widest">{title}</h2>
        {href && (
          <Link
            href={href}
            className="text-[10px] font-mono uppercase tracking-widest text-background/60 hover:text-background border border-background/30 px-3 py-1"
          >
            all variants
          </Link>
        )}
      </div>
      {children}
    </div>
  )
}

export function ComponentLabel({
  label,
  variant,
}: {
  label: string
  variant: "wireframe" | "styled"
}) {
  return (
    <div className="px-6 py-2 bg-muted border-b border-border flex items-center gap-3">
      <span
        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border ${
          variant === "wireframe"
            ? "border-border text-muted-foreground"
            : "border-foreground text-foreground"
        }`}
      >
        {variant}
      </span>
      <code className="text-xs text-muted-foreground">{label}</code>
    </div>
  )
}

export function PageHeader({
  title,
  description,
  backHref = "/",
}: {
  title: string
  description: string
  backHref?: string
}) {
  return (
    <header className="border-b border-border px-6 py-4 flex items-center gap-6">
      <Link
        href={backHref}
        className="text-xs font-mono text-muted-foreground hover:text-foreground border border-border px-3 py-1"
      >
        &larr; back
      </Link>
      <div>
        <h1 className="text-lg font-semibold text-foreground font-mono">{title}</h1>
        <p className="text-sm text-muted-foreground font-mono">{description}</p>
      </div>
    </header>
  )
}
