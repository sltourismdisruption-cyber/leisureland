import type { Metadata } from "next";
import { Young_Serif, Albert_Sans, Kalam } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Fab from "@/components/Fab";
import CookieConsent from "@/components/CookieConsent";
import RevealObserver from "@/components/RevealObserver";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Leisure Land — Sri Lanka's Nature-Inspired Water Park · 10 min from Galle",
  description:
    "A full day of slides, pools, traditional games and authentic Sri Lankan food. 10 minutes from Galle. From $13 per person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${albertSans.variable} ${kalam.variable}`}
    >
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Fab />
        <CookieConsent />
        <RevealObserver />
      </body>
    </html>
  );
}
