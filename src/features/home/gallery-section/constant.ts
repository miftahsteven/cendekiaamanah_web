export type GalleryCategory = "all" | "sma" | "smp" | "madrasah" | "bisnis";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: string;
}

export const GALLERY_CATEGORIES = [
  { value: "all", label: "Semua Galeri" },
  { value: "sma", label: "SMA" },
  { value: "smp", label: "SMP" },
  { value: "madrasah", label: "Madrasah" },
  { value: "bisnis", label: "Bisnis" },
] as const;

export const MOCK_GALLERY: GalleryItem[] = [
  {
    id: "1",
    category: "sma",
    image: "/images/galery/sma1.png",
    alt: "Kegiatan SMA Cendekia Amanah",
  },
  {
    id: "2",
    category: "smp",
    image: "/images/galery/smp1.png",
    alt: "Kegiatan SMP Cendekia Amanah",
  },
  {
    id: "3",
    category: "bisnis",
    image: "/images/galery/pesantren1.png",
    alt: "Kegiatan Bisnis Cendekia Amanah",
  },
  {
    id: "4",
    category: "madrasah",
    image: "/images/galery/madrasah1.png",
    alt: "Kegiatan Madrasah Diniyah",
  },
  {
    id: "5",
    category: "bisnis",
    image: "/images/galery/bisnis1.png",
    alt: "Unit Bisnis Cendekia Amanah",
  },
  {
    id: "6",
    category: "sma",
    image: "/images/galery/sma2.png",
    alt: "Fasilitas SMA Cendekia Amanah",
  },
  {
    id: "7",
    category: "bisnis",
    image: "/images/galery/bisnis2.png",
    alt: "Lingkungan Bisnis Cendekia Amanah",
  },
  {
    id: "8",
    category: "smp",
    image: "/images/galery/smp2.png",
    alt: "Pembelajaran SMP Cendekia Amanah",
  },
  {
    id: "9",
    category: "madrasah",
    image: "/images/galery/madrasah2.png",
    alt: "Santri Madrasah Diniyah",
  },
];
