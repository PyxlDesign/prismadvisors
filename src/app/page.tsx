"use client";

import { useState } from "react";

export default function PrismAdvisorsLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "About", href: "#about" },
    { label: "Insights", href: "#insights" },
  ];

  return (
    <main className="min-h-dvh bg-white text-neutral-900 antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="size-7 rounded-md bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500" />
              <span className="font-semibold tracking-tight">Prism Advisors</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-neutral-600 transition-colors">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 ring-1 ring-black/10 hover:ring-black/20 transition-shadow shadow-sm hover:shadow">
                Contact
              </a>
              <a
                href="#portal"
                className="hidden lg:inline-flex items-center rounded-xl px-4 py-2 bg-black text-white hover:bg-neutral-800">
                Client Login
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center size-10 rounded-xl ring-1 ring-black/10"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-black/5">
            <div className="mx-auto max-w-7xl px-4 py-4 grid gap-3">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="rounded-lg px-3 py-2 hover:bg-neutral-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="rounded-lg px-3 py-2 ring-1 ring-black/10">
                Contact
              </a>
              <a href="#portal" className="rounded-lg px-3 py-2 bg-black text-white">
                Client Login
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-clip">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(900px_500px_at_10%_20%,rgba(6,182,212,0.12),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-emerald-500" /> Now onboarding Q4 clients
            </p>
            <h1 className="mt-6 text-4xl/tight sm:text-5xl/tight font-semibold tracking-tight">
              Clear, continuous finance ops for growing companies.
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">
              Prism Advisors provides end‑to‑end accounting and bookkeeping—monthly closes, AP/AR, payroll, and CFO advisory—so you can scale with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white hover:bg-neutral-800">
                Book a consult
              </a>
              <a href="#services" className="inline-flex items-center rounded-xl px-5 py-3 ring-1 ring-black/10 hover:ring-black/20">
                Explore services
              </a>
            </div>
          </div>

          {/* Logo strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-6 opacity-70">
            {["Acme Co", "Northwind", "Globex", "Umbrella", "Stark", "Wayne"].map((brand) => (
              <div key={brand} className="h-10 rounded-lg ring-1 ring-black/5 grid place-items-center text-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-t border-black/5 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2>
            <p className="mt-2 text-neutral-600">Modular, outcome‑focused packages you can mix and match.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Bookkeeping & Close",
                body: "Monthly reconciliations, financial statements, and variance analysis.",
                points: ["Cash/Accrual", "Multi‑entity", "US/IFRS"],
              },
              {
                title: "AP / AR Operations",
                body: "Invoice processing, bill pay, collections, and cash application.",
                points: ["Approval workflows", "Vendor mgmt", "Aging dashboards"],
              },
              {
                title: "Payroll & Compliance",
                body: "End‑to‑end payroll ops and statutory filings.",
                points: ["Multi‑jurisdiction", "Benefits sync", "Year‑end"],
              },
              {
                title: "CFO Advisory",
                body: "Budgeting, forecasting, board packs, and KPI tracking.",
                points: ["Cash runway", "Unit economics", "Scenario modeling"],
              },
              {
                title: "Systems & Automation",
                body: "ERP/GL migrations, integrations, and workflow automation.",
                points: ["NetSuite, QBO", "Zapier/Make", "Custom scripts"],
              },
              {
                title: "Audit Readiness",
                body: "Policies, controls, and documentation for audits and diligence.",
                points: ["PBC lists", "SOX‑lite", "Documentation"],
              },
            ].map((card) => (
              <article key={card.title} className="group rounded-2xl bg-white p-6 ring-1 ring-black/10 hover:shadow-sm hover:ring-black/20 transition-all">
                <div className="size-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 opacity-80 group-hover:opacity-100" />
                <h3 className="mt-4 font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{card.body}</p>
                <ul className="mt-4 text-sm text-neutral-700 grid gap-1">
                  {card.points.map((p) => (
                    <li key={p} className="inline-flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-neutral-300" /> {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Industries</h2>
            <p className="mt-2 text-neutral-600">Experience across SMB and enterprise finance functions.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Professional Services", "E‑commerce & Retail", "Aviation & Logistics", "Real Estate", "SaaS & Tech", "Healthcare", "Hospitality", "Non‑profits"].map((i) => (
              <div key={i} className="rounded-xl ring-1 ring-black/10 p-5 bg-gradient-to-br from-white to-neutral-50">
                <div className="size-9 rounded-md bg-neutral-900/90" />
                <div className="mt-3 font-medium">{i}</div>
                <p className="text-sm text-neutral-600 mt-1">Short description about work delivered in this sector.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & testimonials */}
      <section id="about" className="py-20 border-y border-black/5 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Outcomes over output.</h2>
              <p className="mt-3 text-neutral-600">We combine rigorous accounting controls with modern automation so your numbers are timely, accurate, and decision‑ready.</p>
              <ul className="mt-6 grid gap-3 text-sm text-neutral-800">
                {[
                  "2‑day average month‑end close",
                  "99.8% reconciliation accuracy",
                  "< 24h vendor onboarding",
                ].map((fact) => (
                  <li key={fact} className="inline-flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-500" /> {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4">
              {[
                {
                  quote:
                    "Prism rebuilt our finance stack and gave us real‑time visibility. Our board updates are now painless.",
                  author: "COO, E‑commerce brand",
                },
                {
                  quote:
                    "The CFO pack and forecasts helped us navigate a complex fundraising process.",
                  author: "Founder, SaaS company",
                },
              ].map((t, idx) => (
                <figure key={idx} className="rounded-2xl bg-white p-6 ring-1 ring-black/10">
                  <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm text-neutral-500">— {t.author}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Insights</h2>
              <p className="mt-2 text-neutral-600">Templates and finance how‑tos from our team.</p>
            </div>
            <a href="#" className="hidden sm:inline-flex text-sm hover:underline">View all</a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group rounded-2xl ring-1 ring-black/10 overflow-hidden bg-white">
                <div className="aspect-[16/9] bg-neutral-100" />
                <div className="p-6">
                  <div className="text-xs text-neutral-500">Article</div>
                  <h3 className="mt-1 font-semibold group-hover:underline">
                    How to accelerate month‑end close
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">A practical checklist your team can implement this week.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to get started?</h2>
          <p className="mt-3 text-neutral-600">Tell us about your business and we’ll map a finance plan in your first call.</p>
          <form className="mt-8 grid gap-3 text-left">
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="h-11 rounded-xl ring-1 ring-black/10 px-3 outline-none focus:ring-black/20" />
              <input required type="email" placeholder="Work email" className="h-11 rounded-xl ring-1 ring-black/10 px-3 outline-none focus:ring-black/20" />
            </div>
            <input placeholder="Company" className="h-11 rounded-xl ring-1 ring-black/10 px-3 outline-none focus:ring-black/20" />
            <textarea placeholder="What do you need help with?" className="min-h-28 rounded-xl ring-1 ring-black/10 px-3 py-2 outline-none focus:ring-black/20" />
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-neutral-600">
                <input type="checkbox" className="size-4 rounded border-neutral-300" /> I agree to the privacy policy
              </label>
              <button className="inline-flex items-center rounded-xl bg-black px-5 py-3 text-white hover:bg-neutral-800">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500" />
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
