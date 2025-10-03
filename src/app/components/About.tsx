"use client";
import { useData } from '@/app/context/DataContext';

export default function About() {
    const { about } = useData();

    return (
        <section id="about" className="bg-stone-100">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight">{about.title}</h2>
                        <p className="mt-4 text-neutral-600">
                            {about.description}
                        </p>
                        <ul className="mt-6 grid gap-2 text-sm text-neutral-800">
                            {about.stats.map((stat) => (
                                <li key={stat} className="inline-flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-stone-300" /> {stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid gap-4">
                        {about.testimonials.map((testimonial, idx) => (
                            <figure key={idx} className="rounded-md border border-stone-100 p-6 bg-white">
                                <blockquote className="text-neutral-800">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                                <figcaption className="mt-3 text-sm text-neutral-500">&mdash; {testimonial.author}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}