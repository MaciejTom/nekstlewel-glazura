import { PageHeader, SectionGroup, ComponentLabel } from "@/components/showcase/layout"
import { PortfolioWireframe } from "@/components/wireframe/portfolio-wireframe"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import {
  wireframePortfolio,
  wireframePortfolioF4n,
  wireframePortfolio2f,
  wireframePortfolio2w4n,
  wireframePortfolio3n,
  wireframePortfolio4n,
  wireframePortfolio6n,
} from "@/content/wireframe/portfolio"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Portfolio" description="Mosaic grid (featured/wide) lub gallery (all normal). Dual mode grid." />

      <main>
        {/* Mosaic */}
        <SectionGroup title="Mosaic (featured / wide)">
          <ComponentLabel label="1F + 2N + 1W (4 items)" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio} />

          <ComponentLabel label="1F + 4N (5 items)" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolioF4n} />

          <ComponentLabel label="2F (2 items)" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio2f} />

          <ComponentLabel label="2W + 4N (6 items)" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio2w4n} />
        </SectionGroup>

        {/* Gallery */}
        <SectionGroup title="Gallery (all normal)">
          <ComponentLabel label="3N → 3 in a row" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio3n} />

          <ComponentLabel label="4N → 4 in a row" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio4n} />

          <ComponentLabel label="6N → 3+3" variant="wireframe" />
          <PortfolioWireframe content={wireframePortfolio6n} />
        </SectionGroup>

        {/* Styled */}
        <SectionGroup title="Styled">
          <ComponentLabel label="PortfolioSection — framer-motion, corner accents" variant="styled" />
          <PortfolioSection />
        </SectionGroup>
      </main>
    </div>
  )
}
