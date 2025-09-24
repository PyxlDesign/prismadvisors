// app/api/contact/route.ts
// import { NextResponse } from "next/server";
// import { z } from "zod";
// import { supabaseAdmin } from "@/lib/supabase";
// import { resend, RESEND_FROM, RESEND_TO, SITE_NAME } from "@/lib/resend";

// Basic validation
// const ContactSchema = z.object({
//     name: z.string().trim().min(1, "Name is required"),
//     email: z.string().trim().email("Valid email required"),
//     company: z.string().trim().optional(),
//     phone: z.string().trim().optional(),
//     message: z.string().trim().min(1, "Message is required"),
//     consent: z.string().optional(), // “on” when checked
// });

// export async function POST(req: Request) {
//     try {
//         const json = await req.json();
//         const parsed = ContactSchema.safeParse(json);
//         if (!parsed.success) {
//             const msg = parsed.error.issues.map(i => i.message).join(", ");
//             return NextResponse.json({ error: msg }, { status: 400 });
//         }

//         const { name, email, company, phone, message } = parsed.data;

//         // Insert into Supabase
//         const ua = req.headers.get("user-agent") ?? undefined;
//         const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
//         const { error: dbError } = await supabaseAdmin
//             .from("leads")
//             .insert([{ name, email, company, phone, message, user_agent: ua, ip }]);
//         if (dbError) {
//             console.error("Supabase insert error:", dbError);
//         }

//         // Send notification via Resend
//         await resend.emails.send({
//             from: RESEND_FROM,
//             to: [RESEND_TO],
//             subject: `New lead • ${SITE_NAME}`,
//             reply_to: email,
//             text: [
//                 `Name: ${name}`,
//                 `Email: ${email}`,
//                 `Company: ${company || "-"}`,
//                 `Phone: ${phone || "-"}`,
//                 "",
//                 "Message:",
//                 message,
//             ].join("\n"),
//         });

//         return NextResponse.json({ ok: true });
//     } catch (err: any) {
//         console.error("Contact error:", err);
//         return NextResponse.json({ error: "Unable to process your request." }, { status: 500 });
//     }
// }
