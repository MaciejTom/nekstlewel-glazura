import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { FaqWireframe } from "@/components/wireframe/faq-wireframe"
import { FaqGridWireframe } from "@/components/wireframe/faq-grid-wireframe"
import { FaqSplitWireframe } from "@/components/wireframe/faq-split-wireframe"
import { wireframeFaq } from "@/content/wireframe/faq"
import { wireframeFaqV2 } from "@/content/wireframe/faq-v2"
import { wireframeFaqV3 } from "@/content/wireframe/faq-v3"

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="FAQ" description="Sekcja pytań i odpowiedzi. 3 warianty." />

      <main>
        <SectionGroup title="V1 — Altero (1-col accordion)">
          <ComponentLabel label="Oryginał — details/summary accordion, + icon rotate 45, light bg" variant="styled" />
          <OriginalIframe src="/originals/faq-v1.html" height={600} />
          <ComponentLabel label="Wireframe — centered title + accordion (all expanded)" variant="wireframe" />
          <FaqWireframe content={wireframeFaq} />
        </SectionGroup>

        <SectionGroup title="V2 — Altero v4 (2-col grid)">
          <ComponentLabel label="Oryginał — 2-column grid FAQ, expandable details, minimal borders" variant="styled" />
          <OriginalIframe src="/originals/faq-v2.html" height={500} />
          <ComponentLabel label="Wireframe — 2-col grid pytań (collapsed)" variant="wireframe" />
          <FaqGridWireframe content={wireframeFaqV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Pet Grooming (split: image + FAQ)">
          <ComponentLabel label="Oryginał — card-based z hover border effects" variant="styled" />
          <OriginalIframe src="/originals/faq-v3.html" height={600} />
          <ComponentLabel label="Wireframe — split: image left + badge/title + accordion right" variant="wireframe" />
          <FaqSplitWireframe content={wireframeFaqV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
