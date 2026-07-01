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
  title: "Paul Song — building where technology meets the living world",
  description:
    "A body of work at the seam of software and the physical world — farms, sensors, scripture, infrastructure, and the living things in between.",
  openGraph: {
    title: "Paul Song — building where technology meets the living world",
    description:
      "Projects at the seam of software and the physical world — farms, sensors, scripture, infrastructure, and the living things in between.",
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
      <body className="bg-slate-900 text-slate-200">{children}</body>
    </html>
  );
}
