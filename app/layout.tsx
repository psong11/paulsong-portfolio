import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://paulsong.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Paul Song — old systems, made new",
  description:
    "Farms, gas lines, paper archives, ancient languages, membership desks — infrastructure people depend on, rebuilt with AI, sensors, and care.",
  openGraph: {
    title: "Paul Song — old systems, made new",
    description:
      "Farms, gas lines, paper archives, ancient languages, membership desks — infrastructure people depend on, rebuilt with AI, sensors, and care.",
    url: SITE_URL,
    siteName: "Paul Song",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-paper text-ink-soft">{children}</body>
    </html>
  );
}
