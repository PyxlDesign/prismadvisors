"use client";
import { useData } from '@/app/context/DataContext';

export default function About() {
    const { about } = useData();

    return (
        <section id="about" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight">{about.title}</h2>
                        <p className="mt-4 text-slate-600">
                            {about.description}
                        </p>
                        <ul className="mt-6 grid gap-2 text-sm text-slate-800">
                            {about.stats.map((stat) => (
                                <li key={stat} className="inline-flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-blue-300" /> {stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid gap-4">
                        {about.testimonials.map((testimonial, idx) => (
                            <figure key={idx} className="rounded-md border border-blue-100 p-6 bg-white">
                                <blockquote className="text-slate-800">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                                <figcaption className="mt-3 text-sm text-slate-500">&mdash; {testimonial.author}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}