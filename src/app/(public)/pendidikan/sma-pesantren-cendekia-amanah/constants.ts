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

export const SMA_HERO_CONTENT = {
  title: "SMA Pesantren Cendekia Amanah",
  description:
    "SMA Pesantren Pesantren Cendekia Amanah merupakan jenjang pendidikan menengah atas yang menggabungkan kurikulum nasional dengan penguatan nilai-nilai keislaman.\n\nDidukung oleh tenaga pendidik profesional dan lingkungan pesantren yang kondusif, SMA Pesantren PCA membina siswa agar siap bersaing di perguruan tinggi dan menjadi pemimpin masa depan yang berkarakter.",
  programImage: "/images/galery/smp5.png",
  socialMedia: [
    {
      icon: "/images/icon/facebook.svg",
      href: "https://www.facebook.com/people/SMA-Pesantren-Cendekia-Amanah",
      label: "Facebook",
    },
    {
      icon: "/images/icon/instagram.svg",
      href: "https://instagram.com/smapesantrencendekiaamanah",
      label: "Instagram",
    },
    {
      icon: "/images/icon/youtube.svg",
      href: "https://youtube.com/amanahtv",
      label: "YouTube",
    },
  ],
  email: "pesantrencendekia.amanah@gmail.com",
  phone: "+62858-8866-3587",
  registrationLink: "https://bit.ly/SPMB_SMAPCA_26-27",
  registrationLabel: "DAFTAR SPMB TA 26/27",
};

export const SMA_MOTTO_CONTENT = {
  headerSubtitle: "MOTTO & NILAI DASAR PCA",
  title: "Landasan Nilai dalam Mendidik Generasi Qur'ani",
  arabicQuote:
    "لَا حَسَدَ إِلَّا فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ مَالًا فَسُلِّطَ عَلَى هَلَكَتِهِ فِي الْحَقِّ، وَرَجُلٌ آتَاهُ اللَّهُ الْحِكْمَةَ فَهُوَ يَقْضِي بِهَا وَيُعَلِّمُهَا",
  translation:
    '"Tidak boleh hasad (ghibṭah) kecuali pada dua orang: orang yang Allah anugerahkan harta lalu ia infakkan di jalan kebaikan, dan orang yang Allah karuniakan ilmu (Al-Qur\'an dan As-Sunnah), lalu ia mengamalkan dan mengajarkannya." (HR. Bukhari dan Muslim)',
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

export const SMA_VISI_MISI_CONTENT = {
  visi: {
    label: "Visi",
    content:
      "Mewujudkan SMA Pesantren yang unggul dalam prestasi akademik, berkarakter Islami, dan berwawasan global.",
  },
  misi: {
    label: "Misi",
    points: [
      "Menyelenggarakan pendidikan berkualitas tinggi berbasis kurikulum nasional dan nilai-nilai Islam.",
      "Mengembangkan potensi akademik, minat, dan bakat siswa secara optimal.",
      "Membentuk siswa yang berakhlak mulia, mandiri, dan siap berkontribusi bagi bangsa.",
    ],
  },
};

export const SMA_SCHOOL_PROGRAM_CONTENT = {
  subtitle: "PROGRAM SEKOLAH",
  title: "Pendidikan Berkualitas untuk Masa Depan Cemerlang",
  description:
    "Program SMA Pesantren Cendekia Amanah dirancang untuk mempersiapkan siswa yang unggul secara akademik, kuat secara spiritual, dan siap melanjutkan ke perguruan tinggi terbaik.",
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
      "Program unggulan untuk mempersiapkan siswa meraih prestasi akademik terbaik.",
    items: [
      "Persiapan intensif SNBT & seleksi mandiri PTN",
      "Qiratul Kutub (Kitab Kuning), Qiratul Qur'an,Muadalah",
      "Program Tahfidzul Qur'an (min. 5 Juz) dan kajian keislaman",
      "Kelas olimpiade sains dan penelitian ilmiah",
      "Pembinaan kepemimpinan dan organisasi siswa",
      "Desain Grafis, Public Speaking, Photography, Literacy",
    ],
    image: "/images/galery/sma2.png",
  },
  ekstrakurikuler: {
    title: "Ekstrakurikuler",
    description:
      "Wadah pengembangan minat dan bakat siswa melalui berbagai kegiatan non-akademik yang menunjang soft skill dan kepercayaan diri.",
    items: [
      "Karya Ilmiah Remaja",
      "Cinematography, Seni Musik",
      "Paskibra,Pramuka",
      "Hadroh & Marawis",
      "Panahan, Pencak silat",
      "English Club, Arabic Club",
      "Basket, Futsal",
    ],
    image: "/images/galery/sma3.png",
  },
  pembiasaan: {
    title: "Pembiasaan",
    description:
      "Pembiasaan positif yang menjadi bagian kehidupan sehari-hari siswa untuk menanamkan disiplin, tanggung jawab, dan adab.",
    items: [
      "Sholat berjamaah dan kajian rutin",
      "Disiplin waktu dan kemandirian",
      "Budaya belajar dan adab keseharian",
      "Kepedulian sosial dan kebersamaan",
    ],
    image: "/images/galery/sma4.png",
  },
};

export const SMA_FACILITY_CONTENT = {
  subtitle: "FASILITAS SEKOLAH",
  title: "Lingkungan Belajar Modern dan Nyaman",
  description:
    "SMA Pesantren Cendekia Amanah menyediakan fasilitas lengkap yang mendukung proses pembelajaran, penelitian, dan pengembangan potensi siswa secara optimal.",
  buttonText: "DAFTAR SPMB TA 26/27",
  buttonLink: "/daftar",
};

export const SMA_FACILITY_DATA: FacilityRowData[] = [
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

export const SMA_ACHIEVEMENTS = {
  subtitle: "PRESTASI SISWA",
  title: "Jejak Juara Siswa SMA Pesantren Cendekia Amanah",
  description:
    "Bukti nyata dedikasi dan kerja keras siswa dalam meraih prestasi di berbagai bidang, baik akademik maupun non-akademik.",
  items: [
    {
      title: "Juara I Olimpiade Sains Nasional",
      description: "Tingkat Provinsi Jawa Barat tahun 2024",
      image: "/images/units/juara1.jpg",
    },
    {
      title: "Juara II Debat Bahasa Inggris",
      description: "Tingkat Nasional tahun 2024",
      image: "/images/units/juara2.jpg",
    },
    {
      title: "Juara I Kompetisi Penelitian Ilmiah",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara3.jpg",
    },
    {
      title: "Juara III Lomba Karya Tulis Ilmiah",
      description: "Tingkat Nasional tahun 2024",
      image: "/images/units/juara4.jpg",
    },
    {
      title: "Juara I Lomba Pidato Bahasa Arab",
      description: "Tingkat Jawa Barat tahun 2025",
      image: "/images/units/juara5.jpeg",
    },
    {
      title: "Juara I Olimpiade Matematika",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara6.jpg",
    },
  ],
};

export const SMA_GALLERY_CONTENT = {
  subtitle: "GALERI KEGIATAN SISWA",
  title:
    "Potret keseharian, pembelajaran, dan kegiatan siswa di lingkungan SMA Pesantren Pesantren Cendekia Amanah.",
};

export const SMA_GALLERY_ITEMS = [
  {
    id: "1",
    image: "/images/galery/sma1.png",
    alt: "Kegiatan Pembelajaran SMA",
  },
  {
    id: "2",
    image: "/images/galery/sma2.png",
    alt: "Siswa SMA dalam Kegiatan Kelas",
  },
  {
    id: "3",
    image: "/images/galery/sma3.png",
    alt: "Kegiatan Ekstrakurikuler SMA",
  },
  {
    id: "4",
    image: "/images/galery/sma4.png",
    alt: "Praktikum di Laboratorium",
  },
  {
    id: "5",
    image: "/images/galery/sma5.png",
    alt: "Kegiatan Olahraga Siswa",
  },
  {
    id: "6",
    image: "/images/galery/sma6.png",
    alt: "Kegiatan Keagamaan",
  },
  {
    id: "7",
    image: "/images/galery/sma7.png",
    alt: "Upacara dan Kegiatan Formal",
  },
  {
    id: "8",
    image: "/images/galery/sma8.png",
    alt: "Lingkungan SMA Cendekia Amanah",
  },
  {
    id: "9",
    image: "/images/galery/pesantren1.png",
    alt: "Kegiatan Ibadah Siswa",
  },
];

export const SMA_NEWS_CONTENT = {
  subtitle: "BERITA & PENGUMUMAN TERBARU",
  title:
    "Update kegiatan, program, dan informasi penting dari SMA Pesantren Pesantren Cendekia Amanah",
};

export const SMA_NEWS_ITEMS = [
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
    title: "Program Persiapan SNBT SMA Pesantren Cendekia Amanah",
    description:
      "SMA Pesantren Cendekia Amanah mengadakan program intensif persiapan SNBT dengan metode belajar yang efektif dan bimbingan tentor berpengalaman untuk mempersiapkan siswa meraih PTN favorit.",
    category: "sma",
    image: "/images/news/wisuda.jpg",
    slug: "program-persiapan-snbt-2024",
    publishedAt: "2024-01-12",
  },
  {
    id: "3",
    title: "Siswa SMA Raih Prestasi di Kompetisi Debat Internasional",
    description:
      "Tim debat SMA Cendekia Amanah berhasil meraih juara di kompetisi debat bahasa Inggris tingkat internasional. Keberhasilan ini membuktikan kualitas pendidikan bahasa asing di sekolah.",
    category: "sma",
    image: "/images/news/robotik.jpg",
    slug: "prestasi-debat-internasional-2024",
    publishedAt: "2024-01-08",
  },
  {
    id: "4",
    title: "Wisuda Tahfidz Siswa SMA Pesantren Cendekia Amanah",
    description:
      "SMA Pesantren Cendekia Amanah berhasil mewisuda 15 siswa yang telah menghafal Al-Quran. Program tahfidz menjadi salah satu keunggulan sekolah dalam membentuk generasi Qurani berprestasi.",
    category: "sma",
    image: "/images/news/hidroponik.jpg",
    slug: "wisuda-tahfidz-sma-2024",
    publishedAt: "2024-01-05",
  },
];

export const SMA_STRUCTURE_ORGANIZATION_CONTENT = {
  subtitle: "STRUKTUR ORGANISASI",
  title:
    "Struktur organisasi SMA Pesantren PCA dirancang untuk memastikan pengelolaan pendidikan yang efektif, transparan, dan berorientasi pada prestasi siswa.",
  description: "Struktur SMA Pesantren PCA",
  leaders: [
    {
      name: "Ustazah Nurul Aini, M.Pd",
      role: "Kepala Sekolah SMA Pesantren",
      image: "/images/guru/guru2.png",
    },
    {
      name: "Ustazah Dewi Lestari, S.Pd",
      role: "Waka Kurikulum",
      image: "/images/guru/guru3.png",
    },
    {
      name: "Ustazah Maryam, S.Ag",
      role: "Waka Kesiswaan",
      image: "/images/guru/guru7.png",
    },
    {
      name: "Ust. Hendra Wijaya, S.Si",
      role: "Guru Matematika & Sains",
      image: "/images/guru/guru4.png",
    },
    {
      name: "Ust. Arif Rahman, S.Pd",
      role: "Guru Bahasa Inggris",
      image: "/images/guru/guru5.png",
    },
    {
      name: "Ustazah Khadijah, S.Pd.I",
      role: "Guru Tahfidz",
      image: "/images/guru/guru1.png",
    },
  ],
};
