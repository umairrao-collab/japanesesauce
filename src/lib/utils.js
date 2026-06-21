import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Merge Tailwind classes safely (later classes win on conflicts).
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(input) {
  return new Date(input).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function absoluteUrl(path) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://japanesesauceguide.com"
  return `${base}${path}`
}