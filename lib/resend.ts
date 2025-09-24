// lib/resend.ts
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const RESEND_FROM = process.env.RESEND_FROM_EMAIL!;
export const RESEND_TO = process.env.RESEND_TO_EMAIL!;
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Website";
