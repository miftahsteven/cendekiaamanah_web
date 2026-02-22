import {
  CloudArrowDownIcon,
  SparklesIcon,
  BeakerIcon,
  SunIcon,
  CloudIcon,
  BuildingOfficeIcon,
  ArrowTrendingUpIcon,
  TruckIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { FacilityRowData } from "@/components/public/units/SchoolFacilitySection";

export const HIDROPONIK_HERO_CONTENT = {
  title: "Unit Bisnis Hidroponik Pesantren Cendekia Amanah",
  description:
    "Unit Bisnis Hidroponik Pesantren Cendekia Amanah merupakan salah satu unit usaha pesantren yang bergerak di bidang pertanian modern tanpa tanah.\n\nMenggunakan teknologi hidroponik terkini, kami memproduksi berbagai jenis sayuran segar berkualitas tinggi yang sehat, higienis, dan bebas pestisida kimia. Unit ini juga menjadi sarana pembelajaran wirausaha bagi para santri.",
  programImage: "/images/bisnis/hero-hidroponik.png",
  socialMedia: [
    {
      icon: "/images/icon/facebook.svg",
      href: "https://www.facebook.com/people/SMA-Pesantren-Cendekia-Amanah",
      label: "Facebook",
    },
    {
      icon: "/images/icon/instagram.svg",
      href: "https://instagram.com/pesantren.cendekia.amanah",
      label: "Instagram",
    },
    {
      icon: "/images/icon/youtube.svg",
      href: "https://youtube.com/amanahtv",
      label: "YouTube",
    },
  ],
  email: "bisnis@cendekiaamanah.id",
  phone: "(021) 7788-9900",
  registrationLink: "https://order.cendekiaamanah.id",
  registrationLabel: "PESAN SAYURAN SEKARANG",
};

export const HIDROPONIK_MOTTO_CONTENT = {
  headerSubtitle: "FILOSOFI & NILAI BISNIS",
  title: "Pertanian Modern untuk Generasi Mandiri",
  arabicQuote:
    "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ",
  translation:
    '"Sesungguhnya Allah mencintai seseorang yang apabila bekerja, mengerjakannya dengan itqan (profesional dan sempurna)." (HR. Thabrani)',
  listIntro:
    "Nilai-nilai yang menjadi landasan operasional unit bisnis hidroponik kami.",
  points: [
    "Profesional",
    "Berkualitas",
    "Inovatif",
    "Berkelanjutan",
    "Amanah",
    "Ramah Lingkungan",
    "Edukasi",
    "Keberkahan",
  ],
  backgroundImage: "/images/common/motto-bg.png",
};

export const HIDROPONIK_VISI_MISI_CONTENT = {
  visi: {
    label: "Visi",
    content:
      "Menjadi unit bisnis hidroponik terdepan yang menghasilkan produk berkualitas tinggi sekaligus menjadi sarana edukasi wirausaha bagi santri.",
  },
  misi: {
    label: "Misi",
    points: [
      "Memproduksi sayuran segar berkualitas tinggi dengan metode hidroponik modern.",
      "Menyediakan sarana pembelajaran praktik kewirausahaan bagi santri pesantren.",
      "Berkontribusi pada kemandirian ekonomi pesantren dan masyarakat sekitar.",
    ],
  },
};

export const HIDROPONIK_SCHOOL_PROGRAM_CONTENT = {
  subtitle: "PROGRAM UNIT BISNIS",
  title: "Inovasi Pertanian Modern",
  description:
    "Unit Bisnis Hidroponik Cendekia Amanah menjalankan berbagai program produksi dan edukasi yang mendukung kemandirian ekonomi pesantren.",
  programs: [
    { label: "Produksi Sayuran" },
    { label: "Jenis Tanaman" },
    { label: "Teknologi" },
    { label: "Edukasi Santri" },
    { label: "Pemasaran" },
  ],
  programSekolah: {
    title: "Produksi Sayuran",
    description:
      "Program produksi sayuran hidroponik berkualitas tinggi yang segar, sehat, dan bebas pestisida.",
    items: [
      "Produksi sayuran segar harian",
      "Kontrol kualitas ketat",
      "Standar kebersihan tinggi",
      "Pengemasan higienis dan modern",
    ],
    image: "/images/bisnis/gallery/hidroponik4.png",
  },
  ekstrakurikuler: {
    title: "Jenis Tanaman",
    description:
      "Berbagai jenis tanaman hidroponik yang kami budidayakan dengan teknologi modern dan perawatan optimal.",
    items: [
      "Selada Romaine & Butter Lettuce",
      "Kangkung & Bayam",
      "Pakcoy & Caisim",
      "Tomat Cherry & Paprika",
      "Basil & Mint Herbs",
    ],
    image: "/images/bisnis/gallery/hidroponik6.png",
  },
  pembiasaan: {
    title: "Teknologi Hidroponik",
    description:
      "Implementasi teknologi hidroponik terkini untuk hasil produksi yang optimal dan efisien.",
    items: [
      "Sistem NFT (Nutrient Film Technique)",
      "Sistem DFT (Deep Flow Technique)",
      "Monitoring nutrisi otomatis",
      "Manajemen iklim greenhouse",
    ],
    image: "/images/bisnis/gallery/hidroponik7.png",
  },
};

// Product List Section Data
export const HIDROPONIK_PRODUCT_LIST = {
  subtitle: "JENIS SAYURAN",
  title: "Jenis Sayuran yang Dibudidayakan",
  description:
    "Berbagai jenis sayuran segar dan sehat dibudidayakan melalui sistem hidroponik, antara lain:",
  products: [
    {
      id: "1",
      title: "Selada Romaine",
      description:
        "Selada hijau renyah dengan nutrisi tinggi, cocok untuk salad",
      image: "/images/bisnis/hidroponik1.png",
    },
    {
      id: "2",
      title: "Butter Lettuce",
      description: "Selada lembut dengan tekstur mentega, ideal untuk sandwich",
      image: "/images/bisnis/hidroponik7.png",
    },
    {
      id: "3",
      title: "Kangkung Hidroponik",
      description:
        "Kangkung segar bebas pestisida, cocok untuk tumis dan sayur",
      image: "/images/bisnis/hidroponik9.png",
    },
    {
      id: "4",
      title: "Bayam Hijau",
      description: "Bayam organik kaya zat besi untuk berbagai masakan sehat",
      image: "/images/bisnis/hidroponik3.png",
    },
    {
      id: "5",
      title: "Pakcoy",
      description: "Sayuran Asia populer dengan rasa lembut dan segar",
      image: "/images/bisnis/hidroponik2.png",
    },
    {
      id: "6",
      title: "Caisim",
      description: "Sawi hijau dengan batang renyah, cocok untuk tumis dan sup",
      image: "/images/bisnis/hidroponik4.png",
    },
    {
      id: "7",
      title: "Tomat Cherry",
      description: "Tomat mini manis segar untuk salad dan garnish",
      image: "/images/bisnis/hidroponik5.png",
    },
    {
      id: "8",
      title: "Basil (Kemangi Italia)",
      description: "Herba aromatik premium untuk masakan Italia dan Asia",
      image: "/images/bisnis/hidroponik6.png",
    },
    {
      id: "9",
      title: "Mint Herbs",
      description: "Daun mint segar untuk minuman dan masakan",
      image: "/images/bisnis/hidroponik9.png",
    },
    {
      id: "10",
      title: "Paprika",
      description: "Paprika warna-warni yang renyah dan manis",
      image: "/images/bisnis/hidroponik3.png",
    },
  ],
};

export const HIDROPONIK_FACILITY_CONTENT = {
  subtitle: "FASILITAS PRODUKSI",
  title: "Fasilitas Modern untuk Hasil Berkualitas",
  description:
    "Unit Bisnis Hidroponik dilengkapi dengan fasilitas produksi modern yang mendukung proses budidaya tanaman secara optimal dan efisien.",
  buttonText: "PESAN PRODUK KAMI",
  buttonLink: "/kontak",
};

export const HIDROPONIK_FACILITY_DATA: FacilityRowData[] = [
  {
    items: [
      { icon: BuildingOfficeIcon, label: "Greenhouse Modern" },
      { icon: BeakerIcon, label: "Lab. Nutrisi" },
      { icon: SparklesIcon, label: "Area Pembibitan" },
    ],
  },
  {
    items: [
      { icon: SunIcon, label: "Sistem Pencahayaan" },
      { icon: ShoppingCartIcon, label: "Ruang Pengemasan" },

      { icon: TruckIcon, label: "Cold Storage" },
    ],
  },
  {
    items: [
      { icon: ArrowTrendingUpIcon, label: "Monitoring Pertumbuhan" },
      { icon: CloudArrowDownIcon, label: "Sistem Irigasi Otomatis" },
    ],
  },
  {
    items: [
      { icon: CloudIcon, label: "Kontrol Suhu & Kelembaban" },
      { icon: BeakerIcon, label: "Mixing Nutrisi Otomatis" },
    ],
  },
];

export const HIDROPONIK_ACHIEVEMENTS = {
  subtitle: "PENCAPAIAN UNIT BISNIS",
  title: "Prestasi Unit Bisnis Hidroponik Cendekia Amanah",
  description:
    "Bukti nyata dedikasi tim dalam mengembangkan unit bisnis hidroponik yang berkualitas dan berdampak positif.",
  items: [
    {
      title: "Omzet Ratusan Juta Rupiah/Bulan",
      description: "Penjualan produk hidroponik tahun 2024",
      image: "/images/galery/bisnis1.png",
    },
    {
      title: "Supplier Resmi Restoran & Hotel",
      description: "Menjadi supplier sayuran premium di Jabodetabek",
      image: "/images/galery/bisnis2.png",
    },
    {
      title: "Best Agricultural Innovation Award",
      description: "Penghargaan Inovasi Pertanian Kota Depok 2024",
      image: "/images/galery/bisnis1.png",
    },
    {
      title: "1000+ Kg Produksi per Bulan",
      description: "Kapasitas produksi sayuran hidroponik",
      image: "/images/galery/bisnis2.png",
    },
    {
      title: "50+ Santri Terlatih",
      description: "Jumlah santri yang terlatih dalam budidaya hidroponik",
      image: "/images/galery/bisnis1.png",
    },
    {
      title: "Sertifikasi Organik",
      description: "Produk tersertifikasi bebas pestisida kimia",
      image: "/images/galery/bisnis2.png",
    },
  ],
};

export const HIDROPONIK_GALLERY_CONTENT = {
  subtitle: "GALERI KEGIATAN",
  title:
    "Dokumentasi aktivitas produksi dan pembelajaran di Unit Bisnis Hidroponik Cendekia Amanah.",
};

export const HIDROPONIK_GALLERY_ITEMS = [
  {
    id: "1",
    image: "/images/bisnis/gallery/hidroponik2.png",
    alt: "Greenhouse Hidroponik Cendekia Amanah",
  },

  {
    id: "2",
    image: "/images/bisnis/gallery/hidroponik5.png",
    alt: "Proses Pengemasan Produk",
  },
  {
    id: "3",
    image: "/images/bisnis/gallery/hidroponik3.png",
    alt: "Santri Belajar Hidroponik",
  },
  {
    id: "4",
    image: "/images/bisnis/gallery/hidroponik4.png",
    alt: "Hasil Panen Sayuran Segar",
  },
  {
    id: "5",
    image: "/images/bisnis/gallery/hidroponik2.png",
    alt: "Proses Budidaya Tanaman Hidroponik",
  },

  {
    id: "6",
    image: "/images/bisnis/gallery/hidroponik6.png",
    alt: "Tim Hidroponik Cendekia Amanah",
  },
  {
    id: "7",
    image: "/images/bisnis/gallery/hidroponik7.png",
    alt: "Tim Hidroponik Cendekia Amanah",
  },
  {
    id: "8",
    image: "/images/bisnis/gallery/hidroponik8.png",
    alt: "Tim Hidroponik Cendekia Amanah",
  },
  {
    id: "9",
    image: "/images/bisnis/gallery/hidroponik9.png",
    alt: "Tim Hidroponik Cendekia Amanah",
  },
];

export const HIDROPONIK_NEWS_CONTENT = {
  subtitle: "BERITA & INFORMASI TERBARU",
  title:
    "Update kegiatan, produksi, dan informasi penting dari Unit Bisnis Hidroponik Cendekia Amanah",
};

export const HIDROPONIK_NEWS_ITEMS = [
  {
    id: "1",
    title: "Unit Bisnis Hidroponik Raih Omzet Ratusan Juta Rupiah",
    description:
      "Unit bisnis hidroponik Cendekia Amanah mencatatkan omzet ratusan juta rupiah dengan produksi sayuran organik berkualitas. Keberhasilan ini menjadi contoh nyata pembelajaran kewirausahaan bagi santri.",
    category: "bisnis",
    image: "/images/bisnis/gallery/hidroponik1.png",
    slug: "hidroponik-raih-omzet-ratusan-juta-2024",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Kerjasama dengan Restoran Premium di Jabodetabek",
    description:
      "Unit Bisnis Hidroponik Cendekia Amanah menjalin kerjasama dengan sejumlah restoran premium di wilayah Jabodetabek sebagai supplier sayuran segar berkualitas tinggi.",
    category: "bisnis",
    image: "/images/bisnis/gallery/hidroponik2.png",
    slug: "kerjasama-restoran-premium-jabodetabek",
    publishedAt: "2024-01-12",
  },
  {
    id: "3",
    title: "Pelatihan Hidroponik untuk Santri Angkatan Baru",
    description:
      "Unit Bisnis Hidroponik mengadakan pelatihan intensif budidaya hidroponik untuk santri angkatan baru sebagai bagian dari program edukasi kewirausahaan pesantren.",
    category: "bisnis",
    image: "/images/bisnis/gallery/hidroponik6.png",
    slug: "pelatihan-hidroponik-santri-baru",
    publishedAt: "2024-01-08",
  },
  {
    id: "4",
    title: "Ekspansi Greenhouse dan Peningkatan Kapasitas Produksi",
    description:
      "Unit Bisnis Hidroponik Cendekia Amanah melakukan ekspansi greenhouse untuk meningkatkan kapasitas produksi sayuran hidroponik guna memenuhi permintaan pasar yang terus meningkat.",
    category: "bisnis",
    image: "/images/bisnis/gallery/hidroponik4.png",
    slug: "ekspansi-greenhouse-kapasitas-produksi",
    publishedAt: "2024-01-05",
  },
];

export const HIDROPONIK_STRUCTURE_ORGANIZATION_CONTENT = {
  subtitle: "TIM PENGELOLA",
  title:
    "Tim pengelola Unit Bisnis Hidroponik Cendekia Amanah yang profesional dan berdedikasi dalam mengembangkan unit usaha yang berkualitas.",
  description: "Tim Unit Bisnis Hidroponik PCA",
  leaders: [
    {
      name: "Ust. Ahmad Fauzan, S.Pt",
      role: "Kepala Unit Bisnis Hidroponik",
      image: "/images/guru/guru4.png",
    },
    {
      name: "Ust. Rizki Pratama, S.P",
      role: "Koordinator Produksi",
      image: "/images/guru/guru5.png",
    },
    {
      name: "Ustazah Laila Fitri, S.T",
      role: "Koordinator Teknologi & Monitoring",
      image: "/images/guru/guru3.png",
    },
    {
      name: "Ust. Dimas Kurniawan",
      role: "Koordinator Pemasaran",
      image: "/images/guru/guru6.png",
    },
    {
      name: "Ustazah Putri Ayu, S.E",
      role: "Administrasi & Keuangan",
      image: "/images/guru/guru2.png",
    },
    {
      name: "Ust. Budi Santoso",
      role: "Teknisi Greenhouse",
      image: "/images/guru/guru4.png",
    },
  ],
};
