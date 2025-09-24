"use client";
import { useData } from '@/app/context/DataContext';

export default function Industries() {
    const { industries } = useData();

    return (
        <section id="industries" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight">{industries.title}</h2>
                    <p className="mt-2 text-slate-600">{industries.subtitle}</p>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.industriesList.map((industry) => (
                        <div key={industry} className="rounded-md border border-blue-100 p-5 bg-white">
                            <div className="size-9 rounded-sm bg-blue-700/90" />
                            <div className="mt-3 font-medium">{industry}</div>
                            <p className="text-sm text-slate-600 mt-1">Short description about work delivered in this sector.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}