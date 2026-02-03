import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { NavWireframe } from "@/components/wireframe/nav-wireframe"
import { wireframeNav } from "@/content/wireframe/nav"
import { wireframeNavV2 } from "@/content/wireframe/nav-v2"
import { wireframeNavV3 } from "@/content/wireframe/nav-v3"

export default function NavPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Nav" description="Nawigacja: logo + linki + CTA. 3 warianty." />

      <main>
        <SectionGroup title="V1 — Nekst Lewel (glassmorphism pill)">
          <ComponentLabel label="Oryginał — glassmorphism pill, logo + centered links + CTA" variant="styled" />
          <OriginalIframe src="/originals/nav-v1.html" height={80} />
          <ComponentLabel label="Wireframe — logo + links + CTA + mobile menu" variant="wireframe" />
          <NavWireframe content={wireframeNav} />
        </SectionGroup>

        <SectionGroup title="V2 — FIXMAN (sticky flat)">
          <ComponentLabel label="Oryginał — sticky white, icon-logo + horizontal links + yellow CTA" variant="styled" />
          <OriginalIframe src="/originals/nav-v2.html" height={80} />
          <ComponentLabel label="Wireframe — ten sam layout strukturalny" variant="wireframe" />
          <NavWireframe content={wireframeNavV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Altero (dark + contact info)">
          <ComponentLabel label="Oryginał — dark bg, adres+tel w headerze, biały CTA" variant="styled" />
          <OriginalIframe src="/originals/nav-v3.html" height={80} />
          <ComponentLabel label="Wireframe — logo + contact info + links + CTA + mobile menu" variant="wireframe" />
          <NavWireframe content={wireframeNavV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
