import type { Metadata } from "next";
import { Fraunces, Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sushi Empire — Japanese & Chinese Fusion · Funchal, Madeira",
  description:
    "Hand-crafted sushi and traditional Chinese warmth, served all-you-can-eat in Funchal's most cinematic dining room. Estrada Monumental 340H.",
  openGraph: {
    title: "Sushi Empire — Funchal",
    description:
      "Where Tokyo meets Madeira. Hand-crafted sushi, warm Chinese dishes, 4.2★ on Google.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${notoJp.variable}`}
    >
      <body className="grain">{children}</body>
    </html>
  );
}
