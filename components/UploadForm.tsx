"use client";

import { useState } from "react";

export default function UploadForm() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!files || !email) {
        alert("Please add files and your email.");
        return;
      }
      setStatus("uploading");
      const form = new FormData();
      Array.from(files).forEach((f) => form.append("files", f));
      form.append("email", email);
      form.append("company", company);
      form.append("notes", notes);

      // Placeholder API call: wire to a real endpoint later
      const res = await fetch("/api/card-check", { method: "POST", body: form });
      if (!res.ok) throw new Error("Upload failed");
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Work email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Company (optional)</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
            placeholder="Acme Energy"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Upload 1–3 card files (CSV or vendor export)</label>
        <input
          type="file"
          accept=".csv,.txt,.json"
          multiple
          onChange={(e) => setFiles(e.target.files)}
          className="mt-1 block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-medium file:bg-brand-600 file:text-white hover:file:bg-brand-700"
        />
        <p className="text-xs text-slate-500 mt-1">We’ll only use these for the review.</p>
      </div>

      <div>
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-300"
          placeholder="Anything we should know about these wells?"
        />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={status === "uploading"}>
          {status === "uploading" ? "Uploading…" : "Submit"}
        </button>
        {status === "done" && <span className="text-green-600 text-sm">Thanks — we’ll be in touch.</span>}
        {status === "error" && <span className="text-red-600 text-sm">Something went wrong. Try again.</span>}
      </div>
      <p className="text-xs text-slate-500">Please don’t include sensitive data. By submitting, you agree to our contact.</p>
    </form>
  );
}
