"use client";
import { useData } from '@/app/context/DataContext';

export default function Hero() {
    const { hero } = useData();

    return (
        <section id="home" className="relative flex h-[80vh] min-h-[500px] isolate">
            {/* Background Video */}
            <div className="absolute inset-0 -z-20">
                <video
                    autoPlay
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-label="Prism Advisors introduction video background"
                >
                    <source src="/prism-advisors-intro.mp4" type="video/mp4" />
                    <p>Your browser does not support the video tag.</p>
                </video>
            </div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 -z-10">
                <div className="h-full w-full bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
            </div>

            <div className="self-end mt-0 mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 sm:py-24 text-center text-white">
                    <h1 className="mx-auto max-w-3xl text-4xl/tight sm:text-5xl/tight font-semibold">
                        {hero.title}
                    </h1>
                </div>
            </div>

        </section>
    );
}