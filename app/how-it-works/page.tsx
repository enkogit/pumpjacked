import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How it works",
  description: "From raw cards to field-ready actions in three steps: ingest, analyze, act."
};

export default function Page() {
  return (
    <section className="container py-16 md:py-24 prose prose-slate max-w-none">
      <h1>How Pumpjacked works</h1>
      <p className="lead">From raw cards to field-ready actions in three steps.</p>

      <h2>1) Ingest</h2>
      <ul>
        <li>Upload CSV, LAS, or vendor exports; or stream via API.</li>
        <li>Auto-normalization by well, unit, and sampling cadence.</li>
        <li>Edge-compatible agent for low-connectivity fields.</li>
      </ul>

      <h2>2) Analyze</h2>
      <ul>
        <li>Auto-labeling: fillage, pump intake pressure, gas interference, fluid pound, sticking, wear.</li>
        <li>Trend detection &amp; exception ranking with confidence bands.</li>
        <li>Setpoint suggestions with projected production &amp; energy impact.</li>
      </ul>

      <h2>3) Act</h2>
      <ul>
        <li>Clear playbook steps tailored per well.</li>
        <li>Change logs &amp; verification windows to measure uplift.</li>
        <li>Notifications to email/SMS/Slack when action is due.</li>
      </ul>

      <h3>Security &amp; privacy</h3>
      <p>All data encrypted in transit and at rest. Fine-grained access control by asset, role, and region. SOC2-ready architecture.</p>
    </section>
  );
}
