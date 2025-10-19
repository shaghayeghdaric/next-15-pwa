// Utility function to join URLs without double slashes
export function joinUrls(base: string, path: string): string {
  const cleanBase = base.replace(/\/+$/, ""); // Remove trailing slashes
  const cleanPath = path.replace(/^\/+/, ""); // Remove leading slashes
  return `${cleanBase}/${cleanPath}`;
}
