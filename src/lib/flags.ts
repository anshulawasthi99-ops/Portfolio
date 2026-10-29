/**
 * Editorial placeholders ("your input needed" notes and screenshot slots) are
 * visible while you run `npm run dev`, and hidden on production builds
 * unless NEXT_PUBLIC_SHOW_PLACEHOLDERS=true.
 */
export const showPlaceholders =
  process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true" ||
  process.env.NODE_ENV !== "production";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
