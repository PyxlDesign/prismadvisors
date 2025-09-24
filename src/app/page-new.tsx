// app/page.tsx — Prism Advisors (Next.js App Router + Tailwind v4)

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Why from '@/app/components/Why';
import Services from '@/app/components/Services';
import Industries from '@/app/components/Industries';
import About from '@/app/components/About';
import Insights from '@/app/components/Insights';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-slate-900 antialiased">
      <Header />
      <Hero />
      <Why />
      <Services />
      <Industries />
      <About />
      <Insights />
      <Contact />
      <Footer />
    </main>
  );
}