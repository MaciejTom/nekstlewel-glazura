"use client"

import { useState } from "react"

export function OriginalIframe({
  src,
  height = 400,
}: {
  src: string
  height?: number
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground text-xs font-mono">
          Loading original...
        </div>
      )}
      <iframe
        src={src}
        className="w-full h-full border-0"
        onLoad={() => setLoaded(true)}
        title="Original component"
      />
    </div>
  )
}
