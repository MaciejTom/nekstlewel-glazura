import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { FooterWireframe } from "@/components/wireframe/footer-wireframe"
import { FooterMinimalWireframe } from "@/components/wireframe/footer-minimal-wireframe"
import { FooterNewsletterWireframe } from "@/components/wireframe/footer-newsletter-wireframe"
import { wireframeFooter } from "@/content/wireframe/footer"
import { wireframeFooterV2 } from "@/content/wireframe/footer-v2"
import { wireframeFooterV3 } from "@/content/wireframe/footer-v3"

export default function FooterPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Footer" description="Stopka: brand + linki + copyright. 3 warianty." />

      <main>
        <SectionGroup title="V1 — BuildPro (4-kolumnowy)">
          <ComponentLabel label="Oryginał — 4-col: brand+social, contact, pages, utility + copyright" variant="styled" />
          <OriginalIframe src="/originals/footer-v1.html" height={500} />
          <ComponentLabel label="Wireframe — CTA row + 4-col grid + copyright" variant="wireframe" />
          <FooterWireframe content={wireframeFooter} />
        </SectionGroup>

        <SectionGroup title="V2 — FIXMAN (minimalny 1-liniowy)">
          <ComponentLabel label="Oryginał — minimal: logo + copyright w jednej linii" variant="styled" />
          <OriginalIframe src="/originals/footer-v2.html" height={120} />
          <ComponentLabel label="Wireframe — single row: logo left + copyright right" variant="wireframe" />
          <FooterMinimalWireframe content={wireframeFooterV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Altero (4-col + newsletter)">
          <ComponentLabel label="Oryginał — 4-col z newsletter signup (input + arrow)" variant="styled" />
          <OriginalIframe src="/originals/footer-v3.html" height={400} />
          <ComponentLabel label="Wireframe — brand + links + newsletter + copyright" variant="wireframe" />
          <FooterNewsletterWireframe content={wireframeFooterV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
