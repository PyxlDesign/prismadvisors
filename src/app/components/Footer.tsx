"use client";
import { useData } from '@/app/context/DataContext';

export default function Footer() {
    const { footer } = useData();

    return (
        <footer className="bg-stone-800">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm text-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <span>© {new Date().getFullYear()} Prism Advisors</span>
                </div>
                <nav className="flex items-center gap-6">
                    {footer.links.map((link) => (
                        <a key={link.label} href={link.href} className="hover:underline">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}