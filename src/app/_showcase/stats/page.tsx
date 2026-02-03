import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { StatsWireframe } from "@/components/wireframe/stats-wireframe"
import { wireframeStats } from "@/content/wireframe/stats"
import { wireframeStatsV2 } from "@/content/wireframe/stats-v2"
import { wireframeStatsV3 } from "@/content/wireframe/stats-v3"

export default function StatsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Stats" description="Statystyki / metryki. 3 warianty." />

      <main>
        <SectionGroup title="V1 — TOM-ART (4-col grid)">
          <ComponentLabel label="Oryginał — 4-col: icon + big number + label, centered, divide-x" variant="styled" />
          <OriginalIframe src="/originals/stats-v1.html" height={250} />
          <ComponentLabel label="Wireframe — 4-col grid: icon + value + label" variant="wireframe" />
          <StatsWireframe content={wireframeStats} />
        </SectionGroup>

        <SectionGroup title="V2 — FIXMAN (3-col floating bar)">
          <ComponentLabel label="Oryginał — 3-col floating bar, shadow, overlap na hero" variant="styled" />
          <OriginalIframe src="/originals/stats-v2.html" height={200} />
          <ComponentLabel label="Wireframe — ten sam layout strukturalny" variant="wireframe" />
          <StatsWireframe content={wireframeStatsV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Elevating Spaces (4-col large numbers)">
          <ComponentLabel label="Oryginał — 4-col: duże liczby, minimal (8k, 31, 12K, 97%)" variant="styled" />
          <OriginalIframe src="/originals/stats-v3.html" height={250} />
          <ComponentLabel label="Wireframe — header (badge + title) + 4-col grid z opisami" variant="wireframe" />
          <StatsWireframe content={wireframeStatsV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
