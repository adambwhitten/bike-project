import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReCycle — Commute E-Bikes",
  description:
    "Revolutionize your commute with ReCycle electric bikes. Sustainable, powerful, and built to last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${roboto.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <AgentationProvider />
      </body>
    </html>
  );
}
