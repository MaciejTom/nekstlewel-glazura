import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3, Fira_Code } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin", "latin-ext"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Remonty Ostrowiec Świętokrzyski - MAL-CER Cezary Żelazowski",
  description: "Remonty, wykończenia wnętrz, elewacje i budowa domów w Ostrowcu i okolicach. Jeden wykonawca od A do Z. Zadzwoń: 782 068 013.",
  openGraph: {
    title: "MAL-CER | Remonty Ostrowiec Świętokrzyski",
    description: "Wykończenia wnętrz, elewacje, budowa domów. Jeden wykonawca od A do Z. Cezary Żelazowski.",
    type: "website",
    locale: "pl_PL",
    siteName: "MAL-CER",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAL-CER | Remonty Ostrowiec Świętokrzyski",
    description: "Wykończenia wnętrz, elewacje, budowa domów. Jeden wykonawca od A do Z.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${bebasNeue.variable} ${sourceSans.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
