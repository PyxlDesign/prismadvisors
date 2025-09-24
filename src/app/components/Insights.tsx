import { useData } from '@/app/context/DataContext';

export default function Insights() {
    const { insights } = useData();

    return (
        <section id="insights" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-3xl font-semibold tracking-tight">{insights.title}</h2>
                    <a href="#" className="hidden sm:inline-flex text-sm hover:underline">
                        View all
                    </a>
                </div>
                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {insights.articles.map((title, i) => (
                        <article key={i} className="rounded-md border border-blue-100 bg-white overflow-hidden">
                            <div className="aspect-[16/9] bg-slate-100" />
                            <div className="p-6">
                                <div className="text-xs text-slate-500">Article</div>
                                <h3 className="mt-1 font-medium">{title}</h3>
                                <p className="mt-2 text-sm text-slate-600">A practical resource from our team to help you run smarter finance operations.</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}