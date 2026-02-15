const SESSION_KEY = "pw-authenticated";

// SHA-256 hash of the password, so it's not plain text in the bundle
const PASSWORD_HASH =
  "aab6f39cb6761d0d8c7790ade3bcfd8d43495d6920f2e45f0ee704ea24879714";

async function sha256(input: string): Promise<string> {
  const encoded = new TextEncoder().encode(input);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyPassword(input: string): Promise<boolean> {
  const hash = await sha256(input);
  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, "1");
    return true;
  }
  return false;
}

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}
