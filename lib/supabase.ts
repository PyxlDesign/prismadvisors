// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL!;
const service = process.env.SUPABASE_SERVICE_ROLE!; // server-side only

export const supabaseAdmin = createClient(url, service, {
    auth: { persistSession: false },
});
