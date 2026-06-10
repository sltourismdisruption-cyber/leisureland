import type { Metadata } from "next";
import { Young_Serif, Albert_Sans, Kalam } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Fab from "@/components/Fab";
import CookieConsent from "@/components/CookieConsent";
import RevealObserver from "@/components/RevealObserver";
import Preloader from "@/components/Preloader";

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
    "Leisure Land · Sri Lanka's Nature-Inspired Water Park · 10 min from Galle",
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
      // data-js / data-ready are set by the boot script + preloader before
      // hydration; React must not treat them as a mismatch.
      suppressHydrationWarning
    >
      <body>
        {/* Arms JS-gated animations the instant the page parses; without JS,
            nothing is ever hidden and the preloader never renders. The
            watchdog un-arms everything if the app bundle never hydrates
            (flaky network), so the curtain can never strand the page blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var d=document.documentElement;d.setAttribute("data-js","");setTimeout(function(){if(!d.hasAttribute("data-ready"))d.removeAttribute("data-js")},6000);`,
          }}
        />
        <Preloader />
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
