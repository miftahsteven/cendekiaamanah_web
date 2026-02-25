import {
  ShoppingBagIcon,
  CreditCardIcon,
  WalletIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  BookOpenIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { FacilityRowData } from "@/components/public/units/SchoolFacilitySection";

export const KOPERASI_HERO_CONTENT = {
  title: "Unit Bisnis Koperasi Pesantren Cendekia Amanah",
  description:
    "Koperasi Pesantren Cendekia Amanah merupakan unit usaha berbasis ekonomi syariah yang melayani kebutuhan santri, guru, dan masyarakat sekitar.\n\nKoperasi ini tidak hanya menyediakan berbagai kebutuhan sehari-hari dengan harga terjangkau, tetapi juga menjadi sarana pembelajaran ekonomi dan kewirausahaan bagi para santri.",
  programImage: "/images/bisnis/hero-mart.png",
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
  email: "pesantrencendekia.amanah@gmail.com",
  phone: "(021) 7788-9900",
  registrationLink: "/kontak",
  registrationLabel: "HUBUNGI KAMI",
};

export const KOPERASI_MOTTO_CONTENT = {
  headerSubtitle: "FILOSOFI & PRINSIP SYARIAH",
  title: "Ekonomi Kerakyatan Berbasis Nilai Islam",
  arabicQuote: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ",
  translation:
    '"Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa." (QS. Al-Maidah: 2)',
  listIntro:
    "Prinsip-prinsip syariah yang menjadi landasan operasional Koperasi Pesantren Cendekia Amanah.",
  points: [
    "Syariah",
    "Amanah",
    "Gotong Royong",
    "Keadilan",
    "Kemandirian",
    "Transparansi",
    "Keberkahan",
    "Profesional",
  ],
  backgroundImage: "/images/common/motto-bg.png",
};

export const KOPERASI_VISI_MISI_CONTENT = {
  visi: {
    label: "Visi",
    content:
      "Menjadi koperasi berbasis syariah yang mandiri, profesional, dan berkontribusi pada kemandirian ekonomi pesantren serta kesejahteraan anggota.",
  },
  misi: {
    label: "Misi",
    points: [
      "Menyediakan kebutuhan santri dan masyarakat dengan harga terjangkau dan prinsip syariah.",
      "Menumbuhkan jiwa wirausaha dan pemahaman ekonomi Islam bagi santri.",
      "Mendukung kemandirian ekonomi pesantren melalui pengelolaan yang profesional dan transparan.",
    ],
  },
};

export const KOPERASI_SCHOOL_PROGRAM_CONTENT = {
  subtitle: "LAYANAN KOPERASI",
  title: "Melayani dengan Amanah dan Profesional",
  description:
    "Koperasi Pesantren Cendekia Amanah menyediakan berbagai layanan untuk memenuhi kebutuhan santri, guru, dan masyarakat sekitar dengan prinsip ekonomi syariah.",
  programs: [
    { label: "Toko Kebutuhan" },
    { label: "Simpan Pinjam" },
    { label: "Kantin Sehat" },
    { label: "Edukasi Ekonomi" },
    { label: "Layanan Digital" },
  ],
  programSekolah: {
    title: "Toko Kebutuhan",
    description:
      "Menyediakan berbagai kebutuhan sehari-hari santri dan masyarakat dengan harga terjangkau.",
    items: [
      "Alat tulis dan perlengkapan sekolah",
      "Kebutuhan mandi dan pakaian",
      "Makanan ringan dan minuman halal",
      "Kitab dan buku islami",
    ],
    image: "/images/bisnis/koperasi1.png",
  },
  ekstrakurikuler: {
    title: "Lokasi Strategis di Lingkungan Asrama",
    description:
      "Koperasi berada di dalam lingkungan pesantren, memudahkan santri mengakses kebutuhan sehari-hari tanpa harus keluar area asrama.",
    items: [
      "Jarak dekat dari asrama santri putra dan putri",
      "Buka setiap hari sesuai jam aktivitas santri",
      "Tidak perlu izin keluar untuk berbelanja",
      "Hemat waktu dan lebih aman",
      "Harga terjangkau khusus warga pesantren",
    ],
    image: "/images/bisnis/koperasi11.png",
  },
  pembiasaan: {
    title: "Kantin Sehat",
    description:
      "Menyediakan makanan dan minuman sehat, halal, dan bergizi untuk santri dan warga pesantren.",
    items: [
      "Menu makan siang bergizi",
      "Jajanan sehat dan halal",
      "Minuman segar alami",
      "Catering acara pesantren",
    ],
    image: "/images/bisnis/koperasi5.png",
  },
};

// Product List Section Data
export const KOPERASI_PRODUCT_LIST = {
  subtitle: "PRODUK KOPERASI",
  title: "Produk yang Tersedia di Koperasi",
  description:
    "Berbagai kebutuhan santri dan warga pesantren tersedia dengan harga terjangkau dan kualitas terjamin:",
  products: [
    {
      id: "1",
      title: "Alat Tulis Lengkap",
      description:
        "Pulpen, pensil, buku tulis, dan perlengkapan sekolah lainnya",
      image: "/images/bisnis/koperasi1.png",
    },
    {
      id: "2",
      title: "Perlengkapan Ibadah",
      description: "Sajadah, mukena, sarung, kopyah, dan tasbih berkualitas",
      image: "/images/bisnis/koperasi2.png",
    },
    {
      id: "3",
      title: "Kitab & Buku Islami",
      description: "Al-Quran, kitab kuning, dan buku-buku keislaman",
      image: "/images/bisnis/koperasi3.png",
    },
    {
      id: "4",
      title: "Makanan Ringan Halal",
      description: "Snack sehat dan halal untuk camilan santri",
      image: "/images/bisnis/koperasi4.png",
    },
    {
      id: "5",
      title: "Minuman Segar",
      description: "Minuman kemasan halal dan minuman tradisional",
      image: "/images/bisnis/koperasi5.png",
    },
    {
      id: "6",
      title: "Perlengkapan Mandi",
      description: "Sabun, sampo, sikat gigi, dan kebutuhan mandi lainnya",
      image: "/images/bisnis/koperasi6.png",
    },
    {
      id: "7",
      title: "Pakaian Santri",
      description: "Baju koko, gamis, dan seragam pesantren",
      image: "/images/bisnis/koperasi7.png",
    },
    {
      id: "8",
      title: "Obat-obatan Dasar",
      description: "Obat-obatan ringan dan P3K untuk kebutuhan darurat",
      image: "/images/bisnis/koperasi8.png",
    },
    {
      id: "9",
      title: "Makanan Siap Saji",
      description: "Menu makan siang dan malam untuk santri",
      image: "/images/bisnis/koperasi9.png",
    },
    {
      id: "10",
      title: "Aksesoris Elektronik",
      description: "Charger, earphone, dan aksesoris gadget halal",
      image: "/images/bisnis/koperasi10.png",
    },
  ],
};

export const KOPERASI_FACILITY_CONTENT = {
  subtitle: "FASILITAS KOPERASI",
  title: "Fasilitas Lengkap untuk Pelayanan Terbaik",
  description:
    "Koperasi Pesantren Cendekia Amanah dilengkapi dengan fasilitas modern untuk memberikan pelayanan terbaik kepada anggota dan masyarakat.",
  buttonText: "KUNJUNGI KOPERASI",
  buttonLink: "/kontak",
};

export const KOPERASI_FACILITY_DATA: FacilityRowData[] = [
  {
    items: [
      { icon: BuildingStorefrontIcon, label: "Toko Modern" },
      { icon: CreditCardIcon, label: "Pembayaran Digital" },
      { icon: ArchiveBoxIcon, label: "Gudang Penyimpanan" },
      { icon: UserGroupIcon, label: "Ruang Layanan Anggota" },
    ],
  },
  {
    items: [
      { icon: WalletIcon, label: "Counter Simpan Pinjam" },
      { icon: BuildingOffice2Icon, label: "Kantor Administrasi" },
    ],
  },
  {
    items: [
      { icon: ShoppingBagIcon, label: "Mini Market" },
      { icon: DevicePhoneMobileIcon, label: "Sistem Kasir Digital" },
      { icon: BookOpenIcon, label: "Pojok Literasi Ekonomi" },
    ],
  },
  {
    items: [
      { icon: BanknotesIcon, label: "Counter Pembayaran" },
      { icon: ArrowTrendingUpIcon, label: "Dashboard Monitoring" },
    ],
  },
];

export const KOPERASI_ACHIEVEMENTS = {
  subtitle: "PENCAPAIAN KOPERASI",
  title: "Prestasi Koperasi Pesantren Cendekia Amanah",
  description:
    "Bukti nyata dedikasi dalam mengembangkan ekonomi syariah yang berdampak positif bagi santri dan masyarakat.",
  items: [
    {
      title: "500+ Anggota Aktif",
      description: "Jumlah anggota koperasi yang aktif bertransaksi",
      image: "/images/bisnis/koperasi2.png",
    },
    {
      title: "Omzet Puluhan Juta per Bulan",
      description: "Total transaksi bulanan koperasi",
      image: "/images/bisnis/koperasi1.png",
    },
    {
      title: "Penghargaan Koperasi Syariah Terbaik",
      description: "Tingkat Kota Depok tahun 2024",
      image: "/images/bisnis/koperasi2.png",
    },
    {
      title: "100+ Santri Terlatih",
      description: "Santri yang terlatih dalam manajemen koperasi",
      image: "/images/bisnis/koperasi1.png",
    },
    {
      title: "SHU Positif Konsisten",
      description: "Sisa Hasil Usaha positif setiap tahun",
      image: "/images/bisnis/koperasi2.png",
    },
    {
      title: "Sertifikasi Koperasi Syariah",
      description: "Tersertifikasi oleh Dewan Syariah Nasional",
      image: "/images/bisnis/koperasi1.png",
    },
  ],
};

export const KOPERASI_GALLERY_CONTENT = {
  subtitle: "GALERI KEGIATAN",
  title:
    "Dokumentasi aktivitas dan layanan Koperasi Pesantren Cendekia Amanah.",
};

export const KOPERASI_GALLERY_ITEMS = [
  {
    id: "1",
    image: "/images/bisnis/koperasi9.png",
    alt: "Toko Koperasi Cendekia Amanah",
  },
  {
    id: "2",
    image: "/images/bisnis/koperasi8.png",
    alt: "Layanan Simpan Pinjam Syariah",
  },
  {
    id: "3",
    image: "/images/bisnis/koperasi7.png",
    alt: "Santri Belajar di Koperasi",
  },
  {
    id: "4",
    image: "/images/bisnis/koperasi6.png",
    alt: "Rapat Anggota Tahunan",
  },
  {
    id: "5",
    image: "/images/bisnis/koperasi4.png",
    alt: "Pelayanan Anggota Koperasi",
  },
  {
    id: "6",
    image: "/images/bisnis/koperasi5.png",
    alt: "Tim Koperasi Cendekia Amanah",
  },
  {
    id: "7",
    image: "/images/bisnis/koperasi3.png",
    alt: "Tim Koperasi Cendekia Amanah",
  },
  {
    id: "8",
    image: "/images/bisnis/koperasi2.png",
    alt: "Tim Koperasi Cendekia Amanah",
  },
  {
    id: "9",
    image: "/images/bisnis/koperasi1.png",
    alt: "Tim Koperasi Cendekia Amanah",
  },
];

export const KOPERASI_NEWS_CONTENT = {
  subtitle: "BERITA & INFORMASI TERBARU",
  title:
    "Update kegiatan, layanan, dan informasi penting dari Koperasi Pesantren Cendekia Amanah",
};

export const KOPERASI_NEWS_ITEMS = [
  {
    id: "1",
    title: "Koperasi PCA Raih Penghargaan Koperasi Syariah Terbaik",
    description:
      "Koperasi Pesantren Cendekia Amanah meraih penghargaan sebagai Koperasi Syariah Terbaik tingkat Kota Depok atas komitmennya dalam menerapkan prinsip ekonomi Islam.",
    category: "bisnis",
    image: "/images/bisnis/koperasi3.png",
    slug: "koperasi-pca-raih-penghargaan-syariah-2024",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Program Edukasi Ekonomi Syariah untuk Santri",
    description:
      "Koperasi mengadakan program edukasi ekonomi syariah bagi santri untuk menumbuhkan jiwa wirausaha dan pemahaman tentang sistem ekonomi Islam.",
    category: "bisnis",
    image: "/images/bisnis/koperasi1.png",
    slug: "program-edukasi-ekonomi-syariah-santri",
    publishedAt: "2024-01-12",
  },
  {
    id: "3",
    title: "Rapat Anggota Tahunan Koperasi PCA",
    description:
      "Koperasi Pesantren Cendekia Amanah mengadakan Rapat Anggota Tahunan dengan agenda pertanggungjawaban pengurus dan pembagian SHU kepada anggota.",
    category: "bisnis",
    image: "/images/bisnis/koperasi8.png",
    slug: "rat-koperasi-pca-2024",
    publishedAt: "2024-01-08",
  },
  {
    id: "4",
    title: "Launching Sistem Digital Koperasi",
    description:
      "Koperasi PCA meluncurkan sistem digital untuk memudahkan transaksi dan monitoring simpan pinjam anggota secara real-time dan transparan.",
    category: "bisnis",
    image: "/images/bisnis/koperasi7.png",
    slug: "launching-sistem-digital-koperasi",
    publishedAt: "2024-01-05",
  },
];

export const KOPERASI_STRUCTURE_ORGANIZATION_CONTENT = {
  subtitle: "PENGURUS KOPERASI",
  title:
    "Pengurus Koperasi Pesantren Cendekia Amanah yang profesional dan amanah dalam mengelola unit usaha berbasis syariah.",
  description: "Pengurus Koperasi PCA",
  leaders: [
    {
      name: "Ust. H. Subhan Malik, S.E., M.M",
      role: "Ketua Koperasi",
      image: "/images/guru/guru4.png",
    },
    {
      name: "Ustazah Nur Hidayah, S.E",
      role: "Sekretaris Koperasi",
      image: "/images/guru/guru2.png",
    },
    {
      name: "Ust. Abdul Ghani, S.E",
      role: "Bendahara",
      image: "/images/guru/guru5.png",
    },
    {
      name: "Ustazah Siti Rahmah, M.Ak",
      role: "Pengawas Keuangan",
      image: "/images/guru/guru3.png",
    },
    {
      name: "Ust. Fikri Ramadhan",
      role: "Koordinator Toko & Kantin",
      image: "/images/guru/guru6.png",
    },
    {
      name: "Ustazah Dewi Safitri, S.E.Sy",
      role: "Koordinator Simpan Pinjam",
      image: "/images/guru/guru7.png",
    },
  ],
};
