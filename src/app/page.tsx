// app/page.tsx — Prism Advisors (Next.js App Router + Tailwind v4)

import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Why from './components/Why';
import Services from './components/Services';
import Industries from './components/Industries';
import About from './components/About';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-slate-900 antialiased">
      <Header />
      <Hero />
      <Welcome />
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