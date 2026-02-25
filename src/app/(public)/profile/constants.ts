import {
  ComputerDesktopIcon,
  BeakerIcon,
  SparklesIcon,
  VideoCameraIcon,
  CloudIcon,
  HomeIcon,
  FilmIcon,
  TrophyIcon,
  CakeIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { FacilityRowData } from "@/components/public/units/SchoolFacilitySection";

export const PESANTREN_HERO_CONTENT = {
  title: "Pesantren Cendekia Amanah",
  description:
    "Pesantren Cendekia Amanah merupakan lembaga pendidikan Islam terpadu yang menggabungkan sistem pesantren tradisional dengan pendidikan modern.\n\nDengan lingkungan yang kondusif dan pembinaan intensif, Pesantren Cendekia Amanah membentuk santri yang berilmu, berakhlak mulia, dan siap menjadi pemimpin umat.",
  programImage: "/images/galery/pesantren1.png",
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
  phone: "+62857-7644-6468",
  registrationLink: "https://bit.ly/SPMB_SMAPCA_26-27",
  registrationLabel: "DAFTAR SPMB TA 26/27",
};

export const PESANTREN_MOTTO_CONTENT = {
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

export const PESANTREN_VISI_MISI_CONTENT = {
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

export const PESANTREN_SCHOOL_PROGRAM_CONTENT = {
  subtitle: "PROGRAM PESANTREN",
  title: "Pendidikan Holistik untuk Generasi Berkualitas",
  description:
    "Program Pesantren Cendekia Amanah dirancang untuk membentuk santri yang unggul dalam ilmu agama, akademik, dan keterampilan hidup, siap menjadi pemimpin masa depan.",
  programs: [
    { label: "Program Pesantren" },
    { label: "Ekstrakurikuler" },
    { label: "Pembiasaan" },
    { label: "Prestasi" },
    { label: "Fasilitas" },
  ],
  programSekolah: {
    title: "Program Pesantren",
    description:
      "Program unggulan pesantren yang fokus pada pembinaan ruhani, akademik, dan keterampilan santri.",
    items: [
      "Program tahfidz Al-Quran dengan target hafalan 30 juz",
      "Kajian kitab kuning dan ilmu keislaman klasik",
      "Pendidikan formal (SMP/SMA) terintegrasi",
      "Pembinaan bahasa Arab dan Inggris intensif",
    ],
    image: "/images/galery/pesantren1.png",
  },
  ekstrakurikuler: {
    title: "Ekstrakurikuler",
    description:
      "Wadah pengembangan potensi santri di luar kegiatan akademik untuk membentuk karakter yang tangguh dan berprestasi.",
    items: [
      "Pencak silat dan bela diri",
      "Kaligrafi dan seni Islam",
      "Hadrah dan sholawat",
      "Jurnalistik dan media",
      "Kewirausahaan santri",
    ],
    image: "/images/galery/pesantren2.png",
  },
  pembiasaan: {
    title: "Pembiasaan",
    description:
      "Pembiasaan ibadah dan akhlak mulia yang menjadi ciri khas kehidupan pesantren.",
    items: [
      "Sholat berjamaah 5 waktu dan sholat malam",
      "Tilawah dan muroja'ah Al-Quran harian",
      "Puasa sunnah dan amalan-amalan sunnah",
      "Khidmat dan ta'dzim kepada guru",
    ],
    image: "/images/galery/pesantren3.png",
  },
};

export const PESANTREN_FACILITY_CONTENT = {
  subtitle: "FASILITAS PESANTREN",
  title: "Lingkungan Kondusif untuk Ibadah dan Pembelajaran",
  description:
    "Pesantren Cendekia Amanah menyediakan fasilitas lengkap yang mendukung kehidupan santri dalam beribadah, belajar, dan mengembangkan potensi diri.",
  buttonText: "DAFTAR SPMB TA 26/27",
  buttonLink: "/daftar",
};

export const PESANTREN_FACILITY_DATA: FacilityRowData[] = [
  {
    items: [
      { icon: ComputerDesktopIcon, label: "Smart Class" },
      { icon: BeakerIcon, label: "Lab. IPA" },
      { icon: SparklesIcon, label: "Hidroponik" },
      { icon: VideoCameraIcon, label: "CCTV" },
    ],
  },
  {
    items: [
      { icon: CloudIcon, label: "Ruang Belajar AC" },
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

export const PESANTREN_ACHIEVEMENTS = {
  subtitle: "PRESTASI SANTRI",
  title: "Jejak Juara Santri Pesantren Cendekia Amanah",
  description:
    "Bukti nyata dedikasi dan kerja keras santri dalam meraih prestasi di berbagai bidang keagamaan dan akademik.",
  items: [
    {
      title: "Juara I Musabaqah Tilawatil Quran",
      description: "Tingkat Nasional tahun 2024",
      image: "/images/units/juara1.jpg",
    },
    {
      title: "Juara I Tahfidz 30 Juz",
      description: "Tingkat Jawa Barat tahun 2024",
      image: "/images/units/juara2.jpg",
    },
    {
      title: "Juara II Lomba Pidato Bahasa Arab",
      description: "Tingkat Nasional tahun 2025",
      image: "/images/units/juara3.jpg",
    },
    {
      title: "Juara I Pencak Silat Tingkat Nasional",
      description: "Tahun 2024",
      image: "/images/units/juara7.jpeg",
    },
    {
      title: "Juara I Kaligrafi Islam",
      description: "Tingkat Provinsi tahun 2025",
      image: "/images/units/juara5.jpeg",
    },
    {
      title: "Juara III Olimpiade PAI",
      description: "Tingkat Nasional tahun 2024",
      image: "/images/units/juara6.jpg",
    },
  ],
};

export const PESANTREN_STRUCTURE_ORGANIZATION_CONTENT = {
  subtitle: "STRUKTUR ORGANISASI",
  title:
    "Struktur organisasi Pesantren Cendekia Amanah dirancang untuk memastikan pembinaan santri yang efektif, terstruktur, dan berorientasi pada tujuan pesantren.",
  description: "Struktur Pesantren Cendekia Amanah",
  leaders: [
    {
      name: "KH Cholil Nafis",
      role: "Pengasuh Pesantren",
      image: "/images/guru/leader.png",
    },
    {
      name: "Ustazah Khadijah, M.Pd",
      role: "Direktur Pesantren",
      image: "/images/guru/guru6.png",
    },
    {
      name: "Ustazah Fatimah, S.Ag",
      role: "Kepala Tahfidz",
      image: "/images/guru/guru2.png",
    },
    {
      name: "Ust. Hakim Zainal, Lc.",
      role: "Kepala Asrama Putra",
      image: "/images/guru/guru4.png",
    },
    {
      name: "Ust. Ibrahim Hakim, S.Pd.I",
      role: "Pembina Santri Putra",
      image: "/images/guru/guru5.png",
    },
    {
      name: "Ustazah Aisyah, S.Pd",
      role: "Pembina Santri Putri",
      image: "/images/guru/guru3.png",
    },
  ],
};
