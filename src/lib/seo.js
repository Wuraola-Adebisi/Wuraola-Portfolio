export const SITE_URL = "https://wuraola-portfolio.vercel.app";
export const SITE_NAME = "Wuraola Adebisi";

export const DEFAULT_TITLE = "Wuraola Adebisi | Frontend Developer";
export const DEFAULT_DESCRIPTION =
  "Frontend developer with a background in Marketing Communications. I build structured, responsive web interfaces using React, TypeScript, JavaScript, HTML, and Tailwind CSS.";
export const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dnkfg07ov/image/upload/v1786629132/Screenshot_2026-08-13_145033_fuqahp.png";
export const DEFAULT_IMAGE_ALT =
  "Wuraola Adebisi, Frontend Developer portfolio preview";

export function truncate(text, max = 160) {
  if (!text) return undefined;

  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  return clean.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}
