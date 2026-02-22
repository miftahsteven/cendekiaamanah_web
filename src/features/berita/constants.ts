export type NewsCategory =
  | "sma"
  | "smp"
  | "madrasah diniyah"
  | "bisnis"
  | "all";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: NewsCategory;
  image: string;
  slug: string;
  publishedAt: string;
}

export const NEWS_CATEGORIES = [
  { value: "all", label: "Semua Berita" },
  { value: "diniyah", label: "Madrasah Diniyah" },
  { value: "sma", label: "SMA" },
  { value: "smp", label: "SMP" },
  { value: "bisnis", label: "Bisnis" },
] as const;
