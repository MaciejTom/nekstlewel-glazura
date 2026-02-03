import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { OriginalIframe } from "@/components/showcase/original-iframe"
import { PricingWireframe } from "@/components/wireframe/pricing-wireframe"
import { PricingTableWireframe } from "@/components/wireframe/pricing-table-wireframe"
import { wireframePricing } from "@/content/wireframe/pricing"
import { wireframePricingV2 } from "@/content/wireframe/pricing-v2"
import { wireframePricingV3 } from "@/content/wireframe/pricing-v3"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Pricing" description="Cennik z tierami. 3 warianty." />

      <main>
        <SectionGroup title="V1 — Pricing Section (2-col cards)">
          <ComponentLabel label="Oryginał — 2-col: standard + popular z checkmark features" variant="styled" />
          <OriginalIframe src="/originals/pricing-v1.html" height={700} />
          <ComponentLabel label="Wireframe — 2-col: standard + featured tier" variant="wireframe" />
          <PricingWireframe content={wireframePricing} />
        </SectionGroup>

        <SectionGroup title="V2 — Internet Provider (3-col tiers)">
          <ComponentLabel label="Oryginał — 3-col: Standard $19, Extended $59, Premium $99" variant="styled" />
          <OriginalIframe src="/originals/pricing-v2.html" height={700} />
          <ComponentLabel label="Wireframe — ten sam layout strukturalny" variant="wireframe" />
          <PricingWireframe content={wireframePricingV2} />
        </SectionGroup>

        <SectionGroup title="V3 — Comparison Table">
          <ComponentLabel label="Oryginał — tabela porównawcza z checkmarks matrix" variant="styled" />
          <OriginalIframe src="/originals/pricing-v3.html" height={800} />
          <ComponentLabel label="Wireframe — tabela porównawcza: tiery w kolumnach + feature rows" variant="wireframe" />
          <PricingTableWireframe content={wireframePricingV3} />
        </SectionGroup>
      </main>
    </div>
  )
}
