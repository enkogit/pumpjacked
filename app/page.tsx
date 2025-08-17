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

      <section className="container py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Card analytics", desc: "Surface & downhole cards with auto-labeling and exception highlighting (gas interference, fluid pound, sticking, wear)." },
            { title: "Optimization insights", desc: "Setpoint suggestions, speed/torque balancing, gas anchor checks—ranked by impact." },
            { title: "Playbook to action", desc: "Clear next steps for operators + tracking to verify uplift after changes." }
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <p className="font-semibold text-lg">{f.title}</p>
              <p className="text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
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
    </>
  );
}
