import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pumpjacked.com"),
  title: {
    default: "Pumpjacked — Predictable production from every pumpjack",
    template: "%s — Pumpjacked"
  },
  description: "Industrial-grade analytics for pumpjack operations: dynamometer card analysis, anomaly detection, and optimization insights you can take to the field.",
  keywords: ["pumpjack analytics", "dynamometer card", "rod pump", "artificial lift optimization", "production optimization", "oilfield analytics"],
  openGraph: {
    type: "website",
    url: "https://www.pumpjacked.com",
    title: "Pumpjacked — Predictable production from every pumpjack",
    description: "Industrial-grade analytics for pumpjack operations.",
    images: ["/og.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pumpjacked — Predictable production from every pumpjack",
    description: "Industrial-grade analytics for pumpjack operations.",
    images: ["/og.svg"]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-slate-200">
          <div className="container flex items-center justify-between py-4">
            <a className="flex items-center gap-2" href="/">
              <img src="/logo.svg" alt="Pumpjacked" className="h-8 w-auto" />
            </a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="/#how-it-works" className="hover:text-brand-700">How it works</a>
              <a href="/#pricing" className="hover:text-brand-700">Pricing</a>
              <a href="/faq" className="hover:text-brand-700">FAQ</a>
            </nav>
            <div className="flex gap-3">
              <a href="/free-card-check" className="btn btn-ghost">Free Card Check</a>
              <a href="#demo" className="btn btn-primary">Book a demo</a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-slate-200 mt-20">
          <div className="container py-12 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <img src="/logo.svg" className="h-6 w-auto mb-3" alt="Pumpjacked" />
              <p className="text-slate-600">Analytics that turn pumpjacks into predictable producers.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-semibold">Product</p>
                <a href="/how-it-works" className="block hover:text-brand-700">How it works</a>
                <a href="/pricing" className="block hover:text-brand-700">Pricing</a>
                <a href="/faq" className="block hover:text-brand-700">FAQ</a>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Company</p>
                <a href="#demo" className="block hover:text-brand-700">Book a demo</a>
                <a href="/free-card-check" className="block hover:text-brand-700">Free Card Check</a>
              </div>
            </div>
            <div className="text-slate-500">
              <p>&copy; {new Date().getFullYear()} Pumpjacked. All rights reserved.</p>
            </div>
          </div>
        </footer>
        {/* JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pumpjacked",
            "url": "https://www.pumpjacked.com",
            "logo": "https://www.pumpjacked.com/logo.svg",
            "description": "Industrial analytics for pumpjack operations",
            "sameAs": []
          }) }}
        />
      </body>
    </html>
  );
}
