import { useData } from '@/app/context/DataContext';

export default function Why() {
    const { whyFeatures } = useData();

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="max-w-2xl text-center mx-auto">
                    <h2 className="text-3xl font-semibold tracking-tight">{whyFeatures.title}</h2>
                    <p className="mt-3 text-slate-600">
                        {whyFeatures.subtitle}
                    </p>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                    {whyFeatures.features.map((feature) => (
                        <div key={feature.heading} className="rounded-md border border-blue-100 bg-slate-50/50 p-6">
                            <h3 className="font-medium text-slate-900">{feature.heading}</h3>
                            <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}