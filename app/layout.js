import { Figtree, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import "./globals.css";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"SanzyHub","description":"Toko template landing page Next.js","url":"https://landing-sanzyhub.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://landing-sanzyhub.pintuweb.id"),
  title: { default: "SanzyHub — Template Landing Page Next.js yang Lebih dari Satu Halaman", template: "%s — SanzyHub" },
  description: "Lima belas template landing page Next.js dengan halaman dalam, formulir dan kalkulator yang bisa dicoba, dan isi di satu berkas data. Semua demo live; lisensi sekali bayar per usaha.",
  applicationName: "SanzyHub",
  keywords: ["template landing page", "template next.js", "template website indonesia", "landing page tailwind", "beli template website"],
  authors: [{ name: "SanzyHub" }],
  creator: "SanzyHub",
  publisher: "SanzyHub",
  alternates: { canonical: "https://landing-sanzyhub.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-sanzyhub.pintuweb.id",
    siteName: "SanzyHub",
    title: { default: "SanzyHub — Template Landing Page Next.js yang Lebih dari Satu Halaman", template: "%s — SanzyHub" },
    description: "Lima belas template landing page Next.js dengan halaman dalam, formulir dan kalkulator yang bisa dicoba, dan isi di satu berkas data. Semua demo live; lisensi sekali bayar per usaha.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "SanzyHub — Template Landing Page Next.js yang Lebih dari Satu Halaman" }],
  },
  twitter: {
    card: "summary_large_image",
    title: { default: "SanzyHub — Template Landing Page Next.js yang Lebih dari Satu Halaman", template: "%s — SanzyHub" },
    description: "Lima belas template landing page Next.js dengan halaman dalam, formulir dan kalkulator yang bisa dicoba, dan isi di satu berkas data. Semua demo live; lisensi sekali bayar per usaha.",
    images: ["/og.jpg"],
  },
  verification: { google: "hU3YoPIg9qaWGhByXfXk5ynyriLME_4rIdojZCQBKck" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${figtree.variable} ${inter.variable} antialiased`}>
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-indigo-deep focus:px-4 focus:py-2 focus:text-white">Lompat ke konten</a>
        <SiteHeader />
        <div id="konten">{children}</div>
        <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
