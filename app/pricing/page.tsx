import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing that scales with you. Start free with a no-commitment card check."
};

const tiers = [
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
];

export default function Page() {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-center">Pricing</h1>
      <p className="text-slate-600 text-center mt-3">Start free. Scale as you grow.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {tiers.map((t) => (
          <div key={t.name} className={"card p-6 " + (t.highlight ? "ring-2 ring-brand-600" : "")}>
            <p className="text-sm uppercase tracking-wide text-slate-500">{t.name}</p>
            <p className="text-3xl font-semibold mt-2">{t.price} <span className="text-base font-normal text-slate-500">{t.cadence}</span></p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {t.features.map(f => <li key={f}>• {f}</li>)}
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
  );
}
