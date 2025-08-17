import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pumpjack optimization platform",
  description: "Dynamometer card analytics, anomaly detection, and field-ready optimization recommendations for rod-pumped wells."
};

export default function Page() {
  return (
    <>
      <section className="relative isolate py-16 md:py-24">
        {/* Full-width background image */}
        <Image
          src="/img/landing.jpg"   // place the file at public/img/landing.jpg
          alt=""                   // decorative background
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        {/* Light overlay so dark text stays readable */}
        <div className="absolute inset-0 -z-10 bg-white/70 backdrop-blur-[1px]" />

        {/* Content stays centered within container */}
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
              Predictable production from every pumpjack
            </h1>
            <p className="text-lg text-slate-600 mt-6">
              Pumpjacked turns raw cards into decisions: spot failures earlier, tune setpoints,
              and extract more barrels per kWh—without babysitting every well.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/free-card-check" className="btn btn-primary">Free Card Check</a>
              <a href="#demo" className="btn btn-ghost">Book a demo</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Offline-friendly
              </span>
              <span>•</span>
              <span>API-ready</span>
              <span>•</span>
              <span>Field-proven heuristics + ML</span>
            </div>
          </div>

          <div className="relative">
            <div className="card p-6">
              <div className="relative h-64 md:h-80 rounded-xl bg-gradient-to-br from-brand-100 to-white border border-slate-200 p-4 overflow-hidden">
                {/* keep your pumpcard image */}
                <Image
                  src="/img/pumpcard_demo.png"
                  alt="Dynamometer card example"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 640px, 100vw"
                  priority
                />
              </div>

              {/* your three benefit tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold">Near real-time</p>
                  <p className="text-slate-600">Automated card analysis &amp; alerts when behavior deviates.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold">90-day+ trends</p>
                  <p className="text-slate-600">Rolling performance history to spot drift, gas interference &amp; wear early.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold">Up to 12× faster</p>
                  <p className="text-slate-600">Failure detection vs. 1-card-per-day reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="container py-12 md:py-20 scroll-mt-24 prose prose-slate max-w-none">
      <h1>How Pumpjacked works</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Ingest", desc: "Upload CSV, LAS, or vendor exports; or stream via API, Auto-normalization by well, unit, and sampling cadence, Edge-compatible agent for low-connectivity fields." },
            { title: "Analyze", desc: "Auto-labeling: fillage, pump intake pressure, gas interference, fluid pound, sticking, wear, Change logs &amp; verification windows to measure uplift, Setpoint suggestions with projected production &amp; energy impact." },
            { title: "Act", desc: "Clear playbook steps tailored per well, Change logs &amp; verification windows to measure uplift, Notifications to email/SMS/Slack when action is due." }
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <p className="font-semibold text-lg">{f.title}</p>
              <p className="text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
        <h3>Security &amp; privacy</h3>
        <p>All data encrypted in transit and at rest. Fine-grained access control by asset, role, and region. SOC2-ready architecture.</p>
      </section>
      <section id="demo" className="container py-16 md:py-24">
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Ready to see your wells differently?</h2>
          <p className="text-slate-600 mt-4">Bring three recent cards—we'll walk you through what we see and what to do next.</p>
          <div className="mt-6">
            <a href="/free-card-check" className="btn btn-primary">Start Free Card Check</a>
          </div>
          <p className="text-xs text-slate-500 mt-3">No credit card. No install.</p>
        </div>
      </section>
      {/* PRICING */}
      <section id="pricing" className="container py-16 md:py-24 scroll-mt-24">
        <h1 className="text-4xl font-semibold text-center">Pricing</h1>
        <p className="text-slate-600 text-center mt-3">Start free. Scale as you grow.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              name: "Field",
              price: "$0",
              cadence: "one-time",
              features: [
                "Free Card Check on 1–3 wells",
                "30-minute walkthrough",
                "Action ideas you can try immediately"
              ],
              cta: { label: "Start Free Card Check", href: "/free-card-check" }
            },
            {
              name: "Ops",
              price: "$1,250",
              cadence: "/mo (up to 25 wells)",
              features: [
                "Automatic card ingestion",
                "Live labeling & anomaly alerts",
                "Optimization suggestions & tracking",
                "Email/SMS notifications"
              ],
              cta: { label: "Talk to sales", href: "#demo" },
              highlight: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              cadence: "",
              features: [
                "Unlimited wells & users",
                "Private cloud or on-prem",
                "SSO, RBAC, audit trails",
                "Priority support & SLAs"
              ],
              cta: { label: "Contact us", href: "#demo" }
            }
          ].map((t) => (
            <div key={t.name} className={"card p-6 " + (t.highlight ? "ring-2 ring-brand-600" : "")}>
              <p className="text-sm uppercase tracking-wide text-slate-500">{t.name}</p>
              <p className="text-3xl font-semibold mt-2">
                {t.price} <span className="text-base font-normal text-slate-500">{t.cadence}</span>
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href={t.cta.href} className="btn btn-primary mt-6 w-full text-center">{t.cta.label}</a>
            </div>
          ))}
        </div>

        <div className="card p-6 mt-10">
          <p className="font-semibold">Notes</p>
          <ul className="list-disc pl-5 text-slate-600 mt-2">
            <li>Ops plan billed annually; monthly available at a premium.</li>
            <li>Enterprise includes solution engineering and data pipelines as needed.</li>
          </ul>
        </div>
      </section>

    </>
  );
}
