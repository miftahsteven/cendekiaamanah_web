import {
  ComputerDesktopIcon,
  BeakerIcon,
  SunIcon,
  VideoCameraIcon,
  HomeModernIcon,
  HomeIcon,
  FilmIcon,
  TrophyIcon,
  CakeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { FacilityRowData } from "@/components/public/units/SchoolFacilitySection";

export const DINIYAH_HERO_CONTENT = {
  title: "Madrasah Diniyah Cendekia Amanah",
  description:
    "Madrasah Diniyah Pesantren Cendekia Amanah merupakan jenjang pendidikan menengah yang fokus pada penguatan akademik, kepemimpinan, dan karakter santri.\n\nDidukung oleh tenaga pendidik berpengalaman serta lingkungan pesantren yang kondusif, Madrasah Diniyah PCA membina santri agar siap melanjutkan ke perguruan tinggi dan berkontribusi positif bagi masyarakat.",
  programImage: "/images/galery/pesantren3.png",
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
  email: "diniyah@cendekiaamanah.id",
  phone: "+62 852-9039-2246",
  registrationLink: "https://bit.ly/SPMB_SMAPCA_26-27",
  registrationLabel: "DAFTAR SPMB TA 26/27",
};

export const DINIYAH_MOTTO_CONTENT = {
  headerSubtitle: "MOTTO & NILAI DASAR PCA",
  title: "Landasan Nilai dalam Mendidik Generasi Qur'ani",
  arabicQuote:
    "لَا حَسَدَ إِلَّا فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ مَالًا فَسُلِّطَ عَلَى هَلَكَتِهِ فِي الْحَقِّ، وَرَجُلٌ آتَاهُ اللَّهُ الْحِكْمَةَ فَهُوَ يَقْضِي بِهَا وَيُعَلِّمُهَا",
  translation:
    "“Tidak boleh hasad (ghibṭah) kecuali pada dua orang: orang yang Allah anugerahkan harta lalu ia infakkan di jalan kebaikan, dan orang yang Allah karuniakan ilmu (Al-Qur’an dan As-Sunnah), lalu ia mengamalkan dan mengajarkannya.” (HR. Bukhari dan Muslim)",
  listIntro:
    "Nilai yang ditanamkan dalam setiap aspek pendidikan dan pembinaan santri.",
  points: [
    "Ikhlas",
    "Tekun",
    "Disiplin",
    "Tanggung Jawab",
    "Kreatif",
    "Hormat kepada Orang Tua dan Guru",
    "Ikhlas",
    "Doa",
  ],
  backgroundImage: "/images/common/motto-bg.png",
};

export const DINIYAH_VISI_MISI_CONTENT = {
  visi: {
    label: "Visi",
    content:
      "Terwujudnya lembaga pendidikan Islam yang membentuk generasi berkarakter Qur'ani.",
  },
  misi: {
    label: "Misi",
    points: [
      "Menyelenggarakan pendidikan berbasis Al-Qur'an dengan wawasan global.",
      "Mengembangkan sistem pendidikan yang mengombinasikan metode salaf (khazanah Islam) dan khalaf (pendekatan modern).",
      "Mencetak generasi cendekiawan yang berilmu, beramal, mandiri, dan amanah.",
    ],
  },
};

export const DINIYAH_SCHOOL_PROGRAM_CONTENT = {
  subtitle: "PROGRAM SEKOLAH",
  title: "Lebih dari Sekadar Kurikulum",
  description:
    "Program Madrasah Diniyah Cendekia Amanah dirancang untuk membentuk santri yang unggul secara akademik, kuat secara spiritual, dan siap menghadapi masa depan.",
  programs: [
    { label: "Program Sekolah" },
    { label: "Ekstrakurikuler" },
    { label: "Pembiasaan" },
    { label: "Prestasi" },
    { label: "Fasilitas" },
  ],
  programSekolah: {
    title: "Program Sekolah",
    description:
      "Program unggulan dirancang untuk meningkatkan kualitas akademik dan karakter santri.",
    items: [
      "Penguatan akademik & persiapan perguruan tinggi",
      "Program tahfidz dan kajian keislaman",
      "Pembinaan kepemimpinan dan organisasi santri",
      "Publishing would boost my credibility.",
    ],
    image: "/images/galery/pesantren2.png",
  },
  ekstrakurikuler: {
    title: "Ekstrakurikuler",
    description:
      "Ruang tumbuh minat dan bakat santri, beragam kegiatan non-akademik yang membantu santri mengenali potensi, melatih kerja sama, dan membangun kepercayaan diri.",
    items: [
      "Olahraga dan kebugaran",
      "Seni, budaya, dan kreativitas",
      "Sains, teknologi, dan literasi digital",
      "Bahasa dan komunikasi",
      "Finance dan Teknologi",
    ],
    image: "/images/galery/madrasah4.png",
  },
  pembiasaan: {
    title: "Pembiasaan",
    description:
      "Karakter terbentuk dari kebiasaan baik, Pembiasaan positif menjadi bagian dari kehidupan sehari-hari santri untuk menanamkan disiplin, tanggung jawab, dan adab.",
    items: [
      "Sholat berjamaah dan kajian rutin",
      "Disiplin waktu dan kemandirian",
      "Budaya belajar dan adab keseharian",
      "Kepedulian dan kebersamaan",
    ],
    image: "/images/galery/smp2.png",
  },
};

export const DINIYAH_FACILITY_CONTENT = {
  subtitle: "FASILITAS SEKOLAH",
  title: "Lingkungan Belajar yang Aman dan Nyaman",
  description:
    "Pesantren Cendekia Amanah menyediakan fasilitas yang mendukung proses pembelajaran, ibadah, dan pembinaan karakter santri secara optimal.",
  buttonText: "DAFTAR SPMB TA 26/27",
  buttonLink: "/daftar",
};

// Default facility data with icons
export const DEFAULT_FACILITY_DATA: FacilityRowData[] = [
  {
    items: [
      { icon: ComputerDesktopIcon, label: "Smart Class" },
      { icon: BeakerIcon, label: "Lab. IPA" },
      { icon: SunIcon, label: "Hidroponik" },
      { icon: VideoCameraIcon, label: "CCTV" },
    ],
  },
  {
    items: [
      { icon: HomeModernIcon, label: "Ruang Belajar AC" },
      { icon: HomeIcon, label: "Asrama (Ranjang, Kasur, Lemari)" },
    ],
  },
  {
    items: [
      { icon: FilmIcon, label: "Ruang Studio" },
      { icon: TrophyIcon, label: "Lapangan Olahraga" },
      { icon: CakeIcon, label: "Ruang Makan" },
    ],
  },
  {
    items: [
      { icon: AcademicCapIcon, label: "Moving Class" },
      {
        icon: ComputerDesktopIcon,
        label: "Lab. Komputer Perpustakaan Digital",
      },
    ],
  },
];

export const DINIYAH_ACHIEVEMENTS = {
  subtitle: "PRESTASI SANTRI",
  title: "Jejak Juara Santri Cendekia Amanah",
  description:
    "Bukti nyata dedikasi dan kerja keras santri dalam meraih prestasi di berbagai bidang, baik akademik maupun non-akademik.",
  items: [
    {
      title: "Juara I Lomba Pidato Islami",
      description: "Tingkat Kota Depok tahun 2024",
      image: "/images/units/juara1.jpg",
    },
    {
      title: "Juara V Lomba Catur O2Sn",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara8.jpg",
    },
    {
      title: "Juara I Story Telling",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara2.jpg",
    },
    {
      title: "Juara I Pencak Silat Kelas Tanding Remaja Pagar Nusa",
      description: "Tahun 2024",
      image: "/images/units/juara7.jpeg",
    },
    {
      title: "Juara I Ajang Kompetisi Sains Indonesia",
      description: "Tahun 2024",
      image: "/images/units/juara3.jpg",
    },
    {
      title: "Juara II Creativity Competition Menggambar",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara6.jpg",
    },
  ],
};

// Gallery Section Content
export const DINIYAH_GALLERY_CONTENT = {
  subtitle: "GALERI KEGIATAN SANTRI",
  title:
    "Potret keseharian, pembelajaran, dan kegiatan santri di lingkungan Madrasah Diniyah Pesantren Cendekia Amanah.",
};

export const DINIYAH_GALLERY_ITEMS = [
  {
    id: "1",
    image: "/images/galery/madrasah1.png",
    alt: "Kegiatan Pembelajaran Madrasah Diniyah",
  },
  {
    id: "2",
    image: "/images/galery/madrasah2.png",
    alt: "Santri Madrasah Diniyah Belajar Al-Quran",
  },
  {
    id: "3",
    image: "/images/galery/sma1.png",
    alt: "Aktivitas Harian Santri",
  },
  {
    id: "4",
    image: "/images/galery/sma2.png",
    alt: "Kegiatan Ekstrakurikuler Santri",
  },
  {
    id: "5",
    image: "/images/galery/smp1.png",
    alt: "Pembelajaran di Kelas",
  },
  {
    id: "6",
    image: "/images/galery/smp2.png",
    alt: "Kegiatan Olahraga Santri",
  },
  {
    id: "7",
    image: "/images/galery/pesantren1.png",
    alt: "Kegiatan Ibadah Santri",
  },
  {
    id: "8",
    image: "/images/galery/bisnis1.png",
    alt: "Kegiatan Praktik Kewirausahaan",
  },
  {
    id: "9",
    image: "/images/galery/bisnis2.png",
    alt: "Lingkungan Pesantren Cendekia Amanah",
  },
];

// News Section Content
export const DINIYAH_NEWS_CONTENT = {
  subtitle: "BERITA & PENGUMUMAN TERBARU",
  title:
    "Update kegiatan, program, dan informasi penting dari Madrasah Diniyah Pesantren Cendekia Amanah",
};

export const DINIYAH_NEWS_ITEMS = [
  {
    id: "1",
    title: "Program Tahfidz Madrasah Diniyah Cetak Hafidz Cilik Berprestasi",
    description:
      "Madrasah Diniyah Cendekia Amanah berhasil mewisuda 10 santri yang telah menghafal 30 juz Al-Quran. Program tahfidz intensif menjadi salah satu keunggulan pesantren dalam membentuk generasi Qurani.",
    category: "madrasah diniyah",
    image: "/images/news/wisuda.jpg",
    slug: "wisuda-tahfidz-madrasah-diniyah-2024",
    publishedAt: "2024-01-10",
  },
  {
    id: "2",
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

export const DINIYAH_STRUCTURE_ORGANIZATION_CONTENT = {
  subtitle: "STRUKTUR ORGANISASI",
  title:
    "Struktur organisasi Madrasah Diniyah PCA dirancang untuk memastikan pengelolaan pendidikan yang efektif, transparan, dan berorientasi pada pembinaan santri.",
  description: "Struktur Madrasah Diniyah PCA ",
  leaders: [
    {
      name: "Ustazah Aminah, S.Pd.I",
      role: "Kepala Madrasah Diniyah",
      image: "/images/guru/guru1.png",
    },
    {
      name: "Ustazah Fatimah, M.Pd",
      role: "Waka Kurikulum",
      image: "/images/guru/guru2.png",
    },
    {
      name: "Ustazah Siti Khadijah, S.Ag",
      role: "Waka Kesiswaan",
      image: "/images/guru/guru3.png",
    },
    {
      name: "Ust. Yusuf Mansur, Lc.",
      role: "Guru Fiqih",
      image: "/images/guru/guru4.png",
    },
    {
      name: "Ust. Ibrahim Hakim, S.Pd.I",
      role: "Guru Bahasa Arab",
      image: "/images/guru/guru5.png",
    },
    {
      name: "Ustazah Aisyah, S.Pd",
      role: "Guru Tahfidz",
      image: "/images/guru/guru6.png",
    },
  ],
};
