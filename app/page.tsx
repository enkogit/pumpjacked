import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pumpjack optimization platform",
  description: "Dynamometer card analytics, anomaly detection, and field-ready optimization recommendations for rod-pumped wells."
};

export default function Page() {
  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
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
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" />Offline-friendly</span>
              <span>•</span>
              <span>API-ready</span>
              <span>•</span>
              <span>Field-proven heuristics + ML</span>
            </div>
          </div>
          <div className="relative">
            <div className="card p-6">
              <div className="h-64 md:h-80 rounded-xl bg-gradient-to-br from-brand-100 to-white border border-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Dynamometer card</p>
                  <p className="text-5xl font-semibold mt-2">▱▰▱</p>
                  <p className="text-slate-500 mt-3">Live classification • Fillage • Pump intake pressure</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold">+4–8%</p>
                  <p className="text-slate-600">Avg. uplift from setpoint tuning</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold">-18%</p>
                  <p className="text-slate-600">Power per barrel</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold">2x</p>
                  <p className="text-slate-600">Faster failure detection</p>
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
