"use client";
import { useState } from 'react';
import { useData } from '@/app/context/DataContext';

export default function Header() {
    const { navigation } = useData();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-blue-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="h-16 flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2">
                        <div className="size-6 rounded-sm bg-blue-700" />
                        <span className="font-medium tracking-tight">Prism Advisors</span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        {navigation.map((item) => (
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
                        {navigation.map((item) => (
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
    );
}