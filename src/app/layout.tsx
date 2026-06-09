import type { Metadata } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import RevealOnScroll from "@/components/site/RevealOnScroll";

// Canopy pairing (locked): rounded playful display + friendly humanist body.
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Leisure Land — Sri Lanka's Nature-Inspired Water Park · 10 min from Galle",
  description:
    "A full day of slides, pools, traditional games & authentic Sri Lankan food. 10 minutes from Galle. Day passes from $13 per person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunitoSans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
        <RevealOnScroll />
      </body>
    </html>
  );
}
