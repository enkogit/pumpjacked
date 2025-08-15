import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Your questions answered: data sources, accuracy, security, and integration."
};

const faqs = [
  {
    q: "What card formats do you support?",
    a: "CSV exports and vendor-native formats are supported out of the box. We can add custom parsers for atypical encodings."
  },
  {
    q: "How accurate are your labels and suggestions?",
    a: "We combine rule-based heuristics with supervised models. We expose confidence bands and you can override labels."
  },
  {
    q: "Do you integrate with our SCADA / historian?",
    a: "Yes. We can poll, subscribe, or batch ingest depending on your network. Talk to us to pick the most reliable path."
  },
  {
    q: "Is our data secure?",
    a: "Data is encrypted at rest and in transit. We support SSO, role-based access, and region-level isolation."
  },
  {
    q: "Can we run this on-prem?",
    a: "Yes. Enterprise deployments can be hosted in your cloud or on-premises, with private networking."
  }
];

export default function Page() {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl font-semibold text-center">FAQ</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {faqs.map((f) => (
          <div key={f.q} className="card p-6">
            <p className="font-semibold">{f.q}</p>
            <p className="text-slate-600 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
      <div className="card p-6 mt-8 text-center">
        <p className="font-semibold">Still have questions?</p>
        <p className="text-slate-600 mt-1">We’ll answer them live and show you the product.</p>
        <a href="#demo" className="btn btn-primary mt-4">Book a demo</a>
      </div>
    </section>
  );
}
