import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { LogosWireframe } from "@/components/wireframe/logos-wireframe"
import { LogosHeaderWireframe } from "@/components/wireframe/logos-header-wireframe"
import { LogosInlineWireframe } from "@/components/wireframe/logos-inline-wireframe"
import { wireframeLogos } from "@/content/wireframe/logos"
import { wireframeLogosV2 } from "@/content/wireframe/logos-v2"
import { wireframeLogosV3 } from "@/content/wireframe/logos-v3"

export default function LogosPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Logos" description="Loga partnerów / klientów. 3 warianty." />

      <main>
        <SectionGroup title="V1 — Altero (6-col grid z border)">
          <ComponentLabel label="Oryginał — 6-col grid with borders, opacity logos" variant="styled" />
          <OriginalIframe src="/originals/logos-v1.html" height={150} />
          <ComponentLabel label="Wireframe — 6-col grid: logo placeholders" variant="wireframe" />
          <LogosWireframe content={wireframeLogos} />
        </SectionGroup>

        <SectionGroup title="V2 — Home Repair (header + icon-text grid)">
          <ComponentLabel label="Oryginał — 8-item grayscale logo grid z header" variant="styled" />
          <OriginalIframe src="/originals/logos-v2.html" height={150} />
          <ComponentLabel label="Wireframe — header (badge + title + desc) + 4-col icon-name grid" variant="wireframe" />
          <LogosHeaderWireframe content={wireframeLogosV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Home Page (inline flex-wrap)">
          <ComponentLabel label="Oryginał — 6 logos z icon + text: Enterprise, Company, etc." variant="styled" />
          <OriginalIframe src="/originals/logos-v3.html" height={150} />
          <ComponentLabel label="Wireframe — centered label + flex-wrap icon-name row" variant="wireframe" />
          <LogosInlineWireframe content={wireframeLogosV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
