import { useData } from '@/app/context/DataContext';

export default function Services() {
    const { services } = useData();

    return (
        <section id="services" className="bg-slate-900 text-slate-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
                <h2 className="text-3xl font-semibold tracking-tight">{services.title}</h2>
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-md overflow-hidden ring-1 ring-white/10 bg-slate-800 aspect-[4/3] grid place-items-center text-slate-400">
                        Media
                    </div>
                    <div className="grid gap-4">
                        {services.servicesList.map((service) => (
                            <article key={service.title} className="group rounded-md border border-white/10 bg-slate-800/60 p-5">
                                <h3 className="font-medium text-white">{service.title}</h3>
                                <p className="mt-1.5 text-sm text-slate-300">{service.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}