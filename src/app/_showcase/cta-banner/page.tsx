import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { CtaBannerWireframe } from "@/components/wireframe/cta-banner-wireframe"
import { wireframeCtaBanner } from "@/content/wireframe/cta-banner"
import { wireframeCtaBannerV2 } from "@/content/wireframe/cta-banner-v2"
import { wireframeCtaBannerV3 } from "@/content/wireframe/cta-banner-v3"

export default function CtaBannerPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="CTA Banner" description="Full-width call-to-action. 3 warianty." />

      <main>
        <SectionGroup title="V1 — Luxury Hotel (centered + 2 buttons)">
          <ComponentLabel label="Oryginał — centered: icon + headline + subtitle + 2 buttons, dark bg" variant="styled" />
          <OriginalIframe src="/originals/cta-banner-v1.html" height={400} />
          <ComponentLabel label="Wireframe — centered: icon + headline + subtitle + 2 buttons" variant="wireframe" />
          <CtaBannerWireframe content={wireframeCtaBanner} />
        </SectionGroup>

        <SectionGroup title="V2 — Glassmorphism (minimal, 1 button)">
          <ComponentLabel label="Oryginał — Ready to Dive In? centered, minimal, single button" variant="styled" />
          <OriginalIframe src="/originals/cta-banner-v2.html" height={350} />
          <ComponentLabel label="Wireframe — ten sam layout strukturalny" variant="wireframe" />
          <CtaBannerWireframe content={wireframeCtaBannerV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Ultra-Widowiskowy (neon green)">
          <ComponentLabel label="Oryginał — Gotowy na Cyfrową Rewolucję? neon green accent" variant="styled" />
          <OriginalIframe src="/originals/cta-banner-v3.html" height={400} />
          <ComponentLabel label="Wireframe — ten sam layout strukturalny" variant="wireframe" />
          <CtaBannerWireframe content={wireframeCtaBannerV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
