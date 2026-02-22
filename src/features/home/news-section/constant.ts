export type NewsCategory = "sma" | "smp" | "madrasah diniyah" | "bisnis";

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
  { value: "madrasah diniyah", label: "Madrasah Diniyah" },
  { value: "sma", label: "SMA" },
  { value: "smp", label: "SMP" },
  { value: "bisnis", label: "Bisnis" },
] as const;

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "1",
    title:
      "Prestasi Gemilang Siswa SMA Cendekia Amanah di Olimpiade Sains Nasional",
    description:
      "Tim olimpiade sains SMA Cendekia Amanah berhasil meraih medali emas dan perak dalam kompetisi tingkat nasional. Pencapaian ini menunjukkan komitmen sekolah dalam mengembangkan potensi akademik siswa.",
    category: "sma",
    image: "/images/news/piala.jpg",
    slug: "prestasi-olimpiade-sains-nasional-2024",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Program Tahfidz Madrasah Diniyah Cetak Hafidz Cilik Berprestasi",
    description:
      "Madrasah Diniyah Cendekia Amanah berhasil mewisuda 10 santri yang telah menghafal 30 juz Al-Quran. Program tahfidz intensif menjadi salah satu keunggulan pesantren dalam membentuk generasi Qurani.",
    category: "madrasah diniyah",
    image: "/images/news/wisuda.jpg",
    slug: "wisuda-tahfidz-madrasah-diniyah-2024",
    publishedAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Siswa SMP Juara Kompetisi Robotika Tingkat Provinsi",
    description:
      "Tim robotika SMP Cendekia Amanah berhasil menjuarai kompetisi robotika tingkat provinsi. Keberhasilan ini merupakan hasil dari pembelajaran STEM yang diterapkan secara konsisten di sekolah.",
    category: "smp",
    image: "/images/news/robotik.jpg",
    slug: "juara-kompetisi-robotika-provinsi-2024",
    publishedAt: "2024-01-08",
  },
  {
    id: "4",
    title: "Unit Bisnis Hidroponik Raih Omzet Ratusan Juta Rupiah",
    description:
      "Unit bisnis hidroponik Cendekia Amanah mencatatkan omzet ratusan juta rupiah dengan produksi sayuran organik berkualitas. Keberhasilan ini menjadi contoh nyata pembelajaran kewirausahaan bagi santri.",
    category: "bisnis",
    image: "/images/news/hidroponik.jpg",
    slug: "hidroponik-raih-omzet-ratusan-juta-2024",
    publishedAt: "2024-01-05",
  },
];
