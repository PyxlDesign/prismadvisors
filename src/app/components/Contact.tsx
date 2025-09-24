"use client";
import { useState } from 'react';
import { useData } from '@/app/context/DataContext';

export default function Contact() {
    const { contact } = useData();
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setMessage("");
        const fd = new FormData(e.currentTarget);
        const payload = Object.fromEntries(fd.entries());

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Something went wrong");
            setStatus("success");
            setMessage("Thanks — we'll get back to you shortly.");
            (e.currentTarget as HTMLFormElement).reset();
        } catch (err: unknown) {
            setStatus("error");
            setMessage((err as Error)?.message || "Unable to send right now.");
        }
    }

    return (
        <section id="contact" className="bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold tracking-tight">{contact.title}</h2>
                    <p className="mt-2 text-slate-600">
                        {contact.subtitle}
                    </p>
                </div>
                <form className="mt-8 grid gap-3 max-w-xl" onSubmit={submitForm}>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <input name="name" required placeholder="Full name" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
                        <input name="email" required type="email" placeholder="Work email" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
                    </div>
                    <input name="company" placeholder="Company" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
                    <input name="phone" placeholder="Phone (optional)" className="h-11 rounded-md border border-blue-200 px-3 outline-none focus:border-blue-300" />
                    <textarea name="message" placeholder="What do you need help with?" className="min-h-28 rounded-md border border-blue-200 px-3 py-2 outline-none focus:border-blue-300" />
                    <div className="flex items-center justify-between">
                        <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                            <input name="consent" type="checkbox" className="size-4 rounded border-blue-300" required /> I agree to the privacy policy
                        </label>
                        <button disabled={status === "sending"} className="inline-flex items-center rounded-full bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 disabled:opacity-70">
                            {status === "sending" ? "Sending…" : "Submit"}
                        </button>
                    </div>
                    {message && (
                        <p className={`text-sm ${status === "error" ? "text-red-600" : "text-emerald-700"}`}>{message}</p>
                    )}
                </form>
            </div>
        </section>
    );
}