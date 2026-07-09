import type { Metadata } from "next";
import Script from "next/script";
import { Young_Serif, Albert_Sans, Kalam } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import Fab from "@/components/Fab";
import CookieConsent from "@/components/CookieConsent";
import RevealObserver from "@/components/RevealObserver";
import Preloader from "@/components/Preloader";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

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

// Sitewide defaults. `metadataBase` lets every page use relative canonical/OG
// URLs that resolve to https://leisureland.lk. Individual pages override title,
// description, canonical and OG image (see src/lib/seo.ts). The title/desc here
// are the fallback for any route that sets none (e.g. /admin); trimmed to ≤60.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Leisure Land | Nature Water Park & Stay in Galle",
  description:
    "A nature-immersed water park, jungle adventures and rooms tucked in the paddy fields of Galle. Day outings and stays — message us on WhatsApp.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image" },
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
      // Lets Next 16 suspend the CSS smooth scrolling while it jumps to the
      // top on route changes (see missing-data-scroll-behavior warning).
      data-scroll-behavior="smooth"
      // data-js / data-ready are set by the boot script + preloader before
      // hydration; React must not treat them as a mismatch.
      suppressHydrationWarning
    >
      <body>
        {/* Arms JS-gated animations the instant the page parses; without JS,
            nothing is ever hidden and the preloader never renders. The
            watchdog un-arms everything if the app bundle never hydrates
            (flaky network), so the curtain can never strand the page blank. */}
        <Script
          id="boot-js"
          strategy="beforeInteractive"
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
