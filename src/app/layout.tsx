import type { Metadata } from "next";
import { roboto } from "@/utils/fonts";
import "./styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.APP_URL}`),
  title: "MedexSepeti",
  description: "MedexSepeti clone by zakaria magdy",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
  openGraph: {
    url: "https://www.medexsepeti.com/",
    title: "MedexSepeti",
    description: "MedexSepeti clone by zakaria magdy",
    images: ["/auction-card.webp"],
    type: "website",
    siteName: "MedexSepeti",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zakariamagdy",
    creator: "@zakariamagdy",
    title: "MedexSepeti",
    description: "MedexSepeti clone by zakaria magdy",
    images: ["/medex-card.webp"],
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
  keywords: ["Medx", "clone", "zakaria", "magdy"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
