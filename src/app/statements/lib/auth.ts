const SESSION_KEY = "pw-authenticated";

// SHA-256 hash of the password, so it's not plain text in the bundle
const PASSWORD_HASH =
  "4f8ae673af8be5083db8d91eef413325ec18417bccbd93029eba8f1e62f46c57";

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
