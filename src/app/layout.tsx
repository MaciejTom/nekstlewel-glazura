import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Glazurnik Zielona Góra - posadzki przemysłowe, hale, serwisy",
  description: "Specjalista od posadzek przemysłowych. Hale, serwisy samochodowe, showroomy. Zielona Góra i okolice. Zadzwoń: 510 625 088.",
  openGraph: {
    title: "Glazurnik Zielona Góra | Posadzki przemysłowe",
    description: "Hale, serwisy samochodowe, showroomy. Specjalista od dużych powierzchni przemysłowych.",
    type: "website",
    locale: "pl_PL",
    siteName: "Glazurnik Zielona Góra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glazurnik Zielona Góra | Posadzki przemysłowe",
    description: "Hale, serwisy samochodowe, showroomy. Specjalista od dużych powierzchni.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
