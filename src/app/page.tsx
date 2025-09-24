// app/page.tsx — Prism Advisors (Next.js App Router + Tailwind v4)

"use client";
import { useState } from "react";

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "Insights", href: "#insights" },
  ];

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setStatus("success");
      setMessage("Thanks — we’ll get back to you shortly.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Unable to send right now.");
    }
  }

  return (
    <main className="min-h-dvh bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-blue-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="size-6 rounded-sm bg-blue-700" />
              <span className="font-medium tracking-tight">Prism Advisors</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-slate-600 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full px-4 py-2 ring-1 ring-blue-200 hover:bg-blue-50/50">
                Contact
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center size-10"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-blue-100">
            <div className="mx-auto max-w-6xl px-4 py-4 grid gap-2">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="rounded px-2 py-2 hover:bg-blue-50/50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-full px-3 py-2 ring-1 ring-blue-200 text-center">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(80%_60%_at_50%_20%,#dbeafe,transparent),linear-gradient(to_bottom,#0b3d91,60%,#0b3d91)] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-24 sm:py-32 text-center text-white">
            <h1 className="mx-auto max-w-3xl text-4xl/tight sm:text-5xl/tight font-semibold">
              Accounting that scales with you.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-blue-100">
              From startups to enterprises, Prism Advisors delivers full-stack accounting, bookkeeping, and CFO advisory—so your leadership can focus on growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
                Speak to an advisor
              </a>
              <a href="#services" className="inline-flex items-center rounded-full px-6 py-3 ring-1 ring-white/50 hover:bg-white/10">
                Explore services
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <svg className="text-white rotate-180 max-h-15 object-cover w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path fill="currentColor" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path fill="currentColor" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path fill="currentColor" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl text-center mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Why Partner With Prism Advisors</h2>
            <p className="mt-3 text-slate-600">
              Finance operations should be clear, timely, and dependable. We blend specialist expertise with modern automation to give you accurate numbers and actionable insight—month after month.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { h: "Specialist Expertise", p: "Experienced accountants delivering rigorous controls and timely reporting." },
              { h: "End-to-End Operations", p: "Bookkeeping, AP/AR, payroll, and management reporting under one roof." },
              { h: "Enterprise-Grade Standards", p: "Documented processes, audit-ready outputs, and scalable systems." },
            ].map((it) => (
              <div key={it.h} className="rounded-md border border-blue-100 bg-slate-50/50 p-6">
                <h3 className="font-medium text-slate-900">{it.h}</h3>
                <p className="mt-2 text-sm text-slate-600">{it.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-900 text-slate-50">
        {/* <div className="relative">
          <svg className="text-white max-h-15 object-cover w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path fill="currentColor" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path fill="currentColor" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path fill="currentColor" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div> */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Our Services</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-md overflow-hidden ring-1 ring-white/10 bg-slate-800 aspect-[4/3] grid place-items-center text-slate-400">
              Media
            </div>
            <div className="grid gap-4">
              {[
                { t: "Bookkeeping & Close", p: "Monthly reconciliations, financial statements, and variance analysis that keep your numbers decision-ready." },
                { t: "AP / AR Operations", p: "Streamlined invoice capture, approval workflows, bill pay, collections, and cash application." },
                { t: "Payroll & Compliance", p: "End-to-end payroll operations and filings across multiple jurisdictions, synced with your HR systems." },
                { t: "Management Reporting", p: "Board packs, KPI scorecards, and rolling forecasts that help leadership make the right calls." },
                { t: "Systems & Automation", p: "ERP/GL migrations, integrations, and automated workflows (NetSuite, QuickBooks Online, and more)." },
                { t: "Audit & Diligence Readiness", p: "Policies, controls, documentation, and PBC management that simplify audits and fundraising." },
              ].map((c) => (
                <article key={c.t} className="group rounded-md border border-white/10 bg-slate-800/60 p-5">
                  <h3 className="font-medium text-white">{c.t}</h3>
                  <p className="mt-1.5 text-sm text-slate-300">{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Industries We Serve</h2>
            <p className="mt-2 text-slate-600">We’ve built finance operations across a wide range of sectors:</p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Professional Services", "E-commerce & Retail", "Aviation & Logistics", "Real Estate", "SaaS & Technology", "Healthcare", "Hospitality", "Non-profit"].map((i) => (
              <div key={i} className="rounded-md border border-blue-100 p-5 bg-white">
                <div className="size-9 rounded-sm bg-blue-700/90" />
                <div className="mt-3 font-medium">{i}</div>
                <p className="text-sm text-slate-600 mt-1">Short description about work delivered in this sector.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Reliable numbers. Every month.</h2>
              <p className="mt-4 text-slate-600">
                Prism Advisors acts as an extension of your finance team. With a proven cadence, rigorous controls, and modern systems, we give leadership confidence in every decision.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-slate-800">
                {["2-day average month-end close", "99.8% reconciliation accuracy", "<24h vendor onboarding"].map((fact) => (
                  <li key={fact} className="inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue-300" /> {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {[
                {
                  q: "Prism rebuilt our finance stack and gave us real-time visibility. Our board updates are now painless.",
                  a: "COO, E-commerce",
                },
                {
                  q: "Clear reports, fast closes, and thoughtful forecasting—we finally feel in control.",
                  a: "Founder, SaaS",
                },
              ].map((t, idx) => (
                <figure key={idx} className="rounded-md border border-blue-100 p-6 bg-white">
                  <blockquote className="text-slate-800">“{t.q}”</blockquote>
                  <figcaption className="mt-3 text-sm text-slate-500">— {t.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight">Insights & Resources</h2>
            <a href="#" className="hidden sm:inline-flex text-sm hover:underline">
              View all
            </a>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["How to accelerate your month-end close", "5 controls to put in place before your next audit", "Rolling forecasts: a CFO’s playbook"].map((title, i) => (
              <article key={i} className="rounded-md border border-blue-100 bg-white overflow-hidden">
                <div className="aspect-[16/9] bg-slate-100" />
                <div className="p-6">
                  <div className="text-xs text-slate-500">Article</div>
                  <h3 className="mt-1 font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">A practical resource from our team to help you run smarter finance operations.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">Let’s Talk</h2>
            <p className="mt-2 text-slate-600">
              Tell us about your business and we’ll design an accounting plan tailored to your needs.
            </p>
          </div>
          <form className="mt-8 grid gap-3 max-w-xl" onSubmit={submitForm}>
            <div className="grid sm:grid-cols-2 gap-3">
              <input name="name" required placeholder="Full name" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
              <input name="email" required type="email" placeholder="Work email" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
            </div>
            <input name="company" placeholder="Company" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
            <input name="phone" placeholder="Phone (optional)" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
            <textarea name="message" placeholder="What do you need help with?" className="min-h-28 rounded-md border border-blue-200 px-3 py-2 outline-none focus:border-blue-300" />
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input name="consent" type="checkbox" className="size-4 rounded border-blue-300" required /> I agree to the privacy policy
              </label>
              <button disabled={status === "sending"} className="inline-flex items-center rounded-full bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 disabled:opacity-70">
                {status === "sending" ? "Sending…" : "Submit"}
              </button>
            </div>
            {message && (
              <p className={`text-sm ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>{message}</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 border-t border-blue-50 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-sm bg-blue-700" />
            <span>© {new Date().getFullYear()} Prism Advisors</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#portal" className="hover:underline">Client portal</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
