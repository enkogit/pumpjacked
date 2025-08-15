import type { Metadata } from "next";
import UploadForm from "@/components/UploadForm";

export const metadata: Metadata = {
  title: "Free Card Check",
  description: "Upload recent dynamometer cards — get a no-commitment review with actionable ideas."
};

export default function Page() {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl font-semibold">Free Card Check</h1>
      <p className="text-slate-600 mt-2 max-w-2xl">
        Upload 1–3 recent cards (CSV or vendor export). We'll review them and send back the top
        actions we’d take to improve production & power efficiency.
      </p>

      <div className="card p-6 mt-8">
        <UploadForm />
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { title: "No commitment", desc: "You get a concrete sense of the insights—without buying anything."},
          { title: "Vendor-agnostic", desc: "We work with exports from most popular rod pump controllers."},
          { title: "Fast turnaround", desc: "We aim to respond within two business days."}
        ].map(x => (
          <div key={x.title} className="card p-6">
            <p className="font-semibold">{x.title}</p>
            <p className="text-slate-600 mt-2">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
