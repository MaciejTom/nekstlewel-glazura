import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { ProcessWireframe } from "@/components/wireframe/process-wireframe"
import { ProcessTimelineWireframe } from "@/components/wireframe/process-timeline-wireframe"
import { ProcessGridWireframe } from "@/components/wireframe/process-grid-wireframe"
import { wireframeProcess } from "@/content/wireframe/process"
import { wireframeProcessV2 } from "@/content/wireframe/process-v2"
import { wireframeProcessV3 } from "@/content/wireframe/process-v3"

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Process" description="Kroki procesu. 3 warianty." />

      <main>
        <SectionGroup title="V1 — AI Solution (4 vertical cards)">
          <ComponentLabel label="Oryginał — 4 vertical step cards z badge + title + desc" variant="styled" />
          <OriginalIframe src="/originals/process-v1.html" height={600} />
          <ComponentLabel label="Wireframe — vertical step cards" variant="wireframe" />
          <ProcessWireframe content={wireframeProcess} />
        </SectionGroup>

        <SectionGroup title="V2 — Pan Piotr (horizontal timeline)">
          <ComponentLabel label="Oryginał — 4-step horizontal timeline z kółkami i linią łączącą" variant="styled" />
          <OriginalIframe src="/originals/process-v2.html" height={400} />
          <ComponentLabel label="Wireframe — horizontal timeline z kółkami numerowanymi" variant="wireframe" />
          <ProcessTimelineWireframe content={wireframeProcessV2} />
        </SectionGroup>

        <SectionGroup title="V3 — 6-step grid (3-col)">
          <ComponentLabel label="Oryginał — 6 numbered steps w 3-col grid z ikonami" variant="styled" />
          <OriginalIframe src="/originals/process-v3.html" height={500} />
          <ComponentLabel label="Wireframe — 3-col grid kart z ikonami + CTA" variant="wireframe" />
          <ProcessGridWireframe content={wireframeProcessV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
