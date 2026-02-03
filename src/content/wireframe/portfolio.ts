import type { PortfolioContent } from "@/types"

type Project = PortfolioContent["projects"][0]

const normal = (n: number): Project => ({
  title: `Project Title ${n}`,
  category: "Category",
  specs: "Technology",
  image: "",
})

const featured = (n: number): Project => ({
  ...normal(n),
  featured: true,
})

const wide = (n: number): Project => ({
  ...normal(n),
  wide: true,
})

const base: Pick<PortfolioContent, "tagline" | "title" | "titleAccent" | "stats" | "galleryButton"> = {
  tagline: "/ section tagline",
  title: "Section",
  titleAccent: "Title",
  stats: [
    { value: "00+", label: "Stat Label" },
    { value: "00%", label: "Stat Label", highlight: true },
  ],
  galleryButton: { text: "View All Projects", href: "#" },
}

// ── MOSAIC (CSS grid 4-col — featured/wide items) ──

// Mosaic: 1F + 2N + 1W = 4 items
// [F  F] [N ] [N ]
// [F  F] [W     W]
export const wireframePortfolio: PortfolioContent = {
  ...base,
  projects: [featured(1), normal(2), normal(3), wide(4)],
}

// Featured + 4 small: 1F + 4N = 5 items
// [F  F] [N ] [N ]
// [F  F] [N ] [N ]
export const wireframePortfolioF4n: PortfolioContent = {
  ...base,
  projects: [featured(1), normal(2), normal(3), normal(4), normal(5)],
}

// Two featured: 2F = 2 items
// [F1  F1] [F2  F2]
// [F1  F1] [F2  F2]
export const wireframePortfolio2f: PortfolioContent = {
  ...base,
  projects: [featured(1), featured(2)],
}

// Wide + small: 2W + 4N = 6 items
// [W     W] [N ] [N ]
// [W     W] [N ] [N ]
export const wireframePortfolio2w4n: PortfolioContent = {
  ...base,
  projects: [wide(1), normal(2), normal(3), wide(4), normal(5), normal(6)],
}

// ── GALLERY (flex-wrap — all normal items) ──

// Gallery 3: 3 items in a row
// [N ] [N ] [N ]
export const wireframePortfolio3n: PortfolioContent = {
  ...base,
  projects: [normal(1), normal(2), normal(3)],
}

// Gallery 4: 4 items in a row
// [N] [N] [N] [N]
export const wireframePortfolio4n: PortfolioContent = {
  ...base,
  projects: [normal(1), normal(2), normal(3), normal(4)],
}

// Gallery 6: 2 rows × 3 cols
// [N ] [N ] [N ]
// [N ] [N ] [N ]
export const wireframePortfolio6n: PortfolioContent = {
  ...base,
  projects: [normal(1), normal(2), normal(3), normal(4), normal(5), normal(6)],
}
