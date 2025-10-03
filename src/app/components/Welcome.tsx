"use client";
import { useData } from '@/app/context/DataContext';

export default function Hero() {
    const { welcome } = useData();

    return (
        <section id="welcome" className="relative bg-stone-200">

            <div className="self-end mt-0 mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 sm:py-24 lg:pt-34 lg:pb-40 text-center text-stone-900">
                    <h2 className="mt-5 mx-auto max-w-2xl text- font-semibold text-3xl sm:text-4xl">
                        {welcome.title}
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-stone-700">
                        {welcome.description}
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a href={welcome.ctaButtons.primary.href} className="inline-flex items-center rounded-full bg-stone-800 px-6 py-3 text-white hover:bg-stone-900">
                            {welcome.ctaButtons.primary.text}
                        </a>
                        {welcome.ctaButtons.secondary && (
                            <a href={welcome.ctaButtons.secondary.href} className="inline-flex items-center rounded-full px-6 py-3 ring-1 ring-white/50 hover:bg-white/10">
                                {welcome.ctaButtons.secondary.text}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180" style={{ height: '80px' }}>
                <svg className="text-white max-h-15 object-cover w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path fill="currentColor" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                    <path fill="currentColor" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                    <path fill="currentColor" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>

        </section>
    );
}