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

export const SMP_HERO_CONTENT = {
  title: "SMP Pesantren Cendekia Amanah",
  description:
    "SMP Pesantren Cendekia Amanah merupakan jenjang pendidikan menengah pertama yang memadukan kurikulum nasional dengan penguatan karakter Islami.\n\nDengan tenaga pendidik berpengalaman dan lingkungan pesantren yang kondusif, SMP Pesantren PCA membina siswa agar memiliki fondasi akademik yang kuat dan akhlak yang mulia.",
  programImage: "/images/galery/smp4.png",
  socialMedia: [
    {
      icon: "/images/icon/instagram.svg",
      href: "https://instagram.com/smppesantrencendekia",
      label: "Instagram",
    },
    {
      icon: "/images/icon/youtube.svg",
      href: "https://youtube.com/amanahtv",
      label: "YouTube",
    },
  ],
  email: "pesantrencendekia.amanah@gmail.com",
  phone: "+62 851-8336-8851",
  //registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScTzlwVYinYQQ6DqkksZKHi6cRy2HWjBemuK8bHzB9s3SEJ2A/viewform",
  registrationLink: "https://s.id/SPMBSMPPCA2627",
  registrationLabel: "DAFTAR SPMB TA 26/27",
};

export const SMP_MOTTO_CONTENT = {
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

export const SMP_VISI_MISI_CONTENT = {
  visi: {
    label: "Visi",
    content:
      "Mewujudkan SMP Pesantren yang unggul dalam prestasi akademik, berkarakter Islami, dan berlandaskan nilai-nilai Qur'ani.",
  },
  misi: {
    label: "Misi",
    points: [
      "Menyelenggarakan pendidikan berkualitas yang mengintegrasikan ilmu pengetahuan dan nilai-nilai Islam.",
      "Mengembangkan potensi akademik dan non-akademik siswa secara optimal.",
      "Membentuk siswa yang berakhlak mulia, mandiri, dan siap melanjutkan ke jenjang pendidikan tinggi.",
    ],
  },
};

export const SMP_SCHOOL_PROGRAM_CONTENT = {
  subtitle: "PROGRAM SEKOLAH",
  title: "Membangun Fondasi Akademik dan Karakter",
  description:
    "Program SMP Pesantren Cendekia Amanah dirancang untuk membangun fondasi akademik yang kuat sekaligus menanamkan nilai-nilai karakter Islami pada setiap siswa.",
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
      "Program unggulan yang fokus pada penguatan akademik dan pembentukan karakter siswa.",
    items: [
      "Qiratul Kutub (Kitab Kuning), Qiratul Qur'an,Muadalah",
      "Penguatan mata pelajaran inti dan persiapan ujian nasional",
      "Program Tahfidzul Qur'an (min. 5 Juz) dan kajian keislaman",
      "Pembelajaran STEM (Science, Technology, Engineering, Math)",
      "Pembinaan olimpiade dan kompetisi akademik",
    ],
    image: "/images/galery/smp1.png",
  },
  ekstrakurikuler: {
    title: "Ekstrakurikuler",
    description:
      "Wadah pengembangan minat dan bakat siswa melalui kegiatan non-akademik yang menyenangkan dan edukatif.",
    items: [
      "Paskibra, Pramuka",
      "Karya ilmiah Remaja",
      "Basket, Futsal",
      "Pencak Silat, Panahan, Taekwondo",
      "Hadroh, Qori",
      "Arabic & English Club",
      "PMR, Musik",
    ],
    image: "/images/galery/smp2.png",
  },
  pembiasaan: {
    title: "Pembiasaan",
    description:
      "Pembiasaan positif yang ditanamkan setiap hari untuk membentuk karakter siswa yang disiplin dan berakhlak mulia.",
    items: [
      "Sholat berjamaah dan dzikir pagi",
      "Literasi dan budaya membaca",
      "Disiplin waktu dan kebersihan",
      "Adab dan sopan santun",
    ],
    image: "/images/galery/smp3.png",
  },
};

export const SMP_FACILITY_CONTENT = {
  subtitle: "FASILITAS SEKOLAH",
  title: "Sarana Belajar yang Mendukung Perkembangan Siswa",
  description:
    "SMP Pesantren Cendekia Amanah menyediakan fasilitas lengkap yang mendukung proses pembelajaran dan pengembangan potensi siswa secara optimal.",
  buttonText: "DAFTAR SPMB TA 26/27",
  buttonLink: "/daftar",
};

export const SMP_FACILITY_DATA: FacilityRowData[] = [
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

export const SMP_ACHIEVEMENTS = {
  subtitle: "PRESTASI SISWA",
  title: "Jejak Juara Siswa SMP Pesantren Cendekia Amanah",
  description:
    "Bukti nyata dedikasi dan kerja keras siswa dalam meraih prestasi di berbagai bidang kompetisi.",
  items: [
    {
      title: "Juara I Kompetisi Robotika",
      description: "Tingkat Provinsi Jawa Barat tahun 2024",
      image: "/images/units/juara1.jpg",
    },
    {
      title: "Juara II Olimpiade Matematika",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara2.jpg",
    },
    {
      title: "Juara I Lomba Pidato Bahasa Inggris",
      description: "Tingkat Kota Depok tahun 2024",
      image: "/images/units/juara3.jpg",
    },
    {
      title: "Juara III O2SN Cabang Catur",
      description: "Tingkat Provinsi tahun 2024",
      image: "/images/units/juara4.jpg",
    },
    {
      title: "Juara I Tahfidz Competition",
      description: "Tingkat Jawa Barat tahun 2025",
      image: "/images/units/juara5.jpeg",
    },
    {
      title: "Juara II Lomba Sains Tingkat SMP",
      description: "Tingkat Kota Depok tahun 2025",
      image: "/images/units/juara6.jpg",
    },
  ],
};

export const SMP_GALLERY_CONTENT = {
  subtitle: "GALERI KEGIATAN SISWA",
  title:
    "Potret keseharian, pembelajaran, dan kegiatan siswa di lingkungan SMP Pesantren Pesantren Cendekia Amanah.",
};

export const SMP_GALLERY_ITEMS = [
  {
    id: "1",
    image: "/images/galery/smp1.png",
    alt: "Kegiatan Pembelajaran SMP",
  },
  {
    id: "2",
    image: "/images/galery/smp2.png",
    alt: "Siswa SMP dalam Kegiatan Kelas",
  },
  {
    id: "3",
    image: "/images/galery/smp3.png",
    alt: "Kegiatan Ekstrakurikuler SMP",
  },
  {
    id: "4",
    image: "/images/galery/smp4.png",
    alt: "Praktikum dan Eksperimen",
  },
  {
    id: "5",
    image: "/images/galery/smp5.png",
    alt: "Kegiatan Olahraga Siswa",
  },
  {
    id: "6",
    image: "/images/galery/madrasah1.png",
    alt: "Kegiatan Keagamaan",
  },
  {
    id: "7",
    image: "/images/galery/madrasah2.png",
    alt: "Pembelajaran Al-Quran",
  },
  {
    id: "8",
    image: "/images/galery/pesantren1.png",
    alt: "Lingkungan SMP Cendekia Amanah",
  },
  {
    id: "9",
    image: "/images/galery/pesantren2.png",
    alt: "Kegiatan Bersama",
  },
];

export const SMP_NEWS_CONTENT = {
  subtitle: "BERITA & PENGUMUMAN TERBARU",
  title:
    "Update kegiatan, program, dan informasi penting dari SMP Pesantren Pesantren Cendekia Amanah",
};

export const SMP_NEWS_ITEMS = [
  {
    id: "1",
    title: "Siswa SMP Juara Kompetisi Robotika Tingkat Provinsi",
    description:
      "Tim robotika SMP Cendekia Amanah berhasil menjuarai kompetisi robotika tingkat provinsi. Keberhasilan ini merupakan hasil dari pembelajaran STEM yang diterapkan secara konsisten di sekolah.",
    category: "smp",
    image: "/images/news/robotik.jpg",
    slug: "juara-kompetisi-robotika-provinsi-2024",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Program Tahfidz SMP Pesantren Cetak Hafidz Muda Berprestasi",
    description:
      "SMP Pesantren Cendekia Amanah berhasil mewisuda 20 siswa yang telah menghafal 5-10 juz Al-Quran. Program tahfidz intensif menjadi salah satu keunggulan sekolah.",
    category: "smp",
    image: "/images/news/wisuda.jpg",
    slug: "wisuda-tahfidz-smp-2024",
    publishedAt: "2024-01-12",
  },
  {
    id: "3",
    title: "Prestasi Siswa SMP di Olimpiade Matematika Tingkat Nasional",
    description:
      "Tim olimpiade matematika SMP Cendekia Amanah berhasil meraih medali perak dalam kompetisi tingkat nasional. Pencapaian luar biasa dari siswa-siswi kita.",
    category: "smp",
    image: "/images/news/piala.jpg",
    slug: "prestasi-olimpiade-matematika-2024",
    publishedAt: "2024-01-08",
  },
  {
    id: "4",
    title: "Kunjungan Edukatif ke Museum dan Pusat Sains",
    description:
      "Siswa SMP Pesantren melakukan kunjungan edukatif ke museum dan pusat sains sebagai bagian dari program pembelajaran di luar kelas yang interaktif dan menyenangkan.",
    category: "smp",
    image: "/images/news/hidroponik.jpg",
    slug: "kunjungan-edukatif-museum-2024",
    publishedAt: "2024-01-05",
  },
];

export const SMP_STRUCTURE_ORGANIZATION_CONTENT = {
  subtitle: "STRUKTUR ORGANISASI",
  title:
    "Struktur organisasi SMP Pesantren PCA dirancang untuk memastikan pengelolaan pendidikan yang efektif, transparan, dan berorientasi pada perkembangan siswa.",
  description: "Struktur SMP Pesantren PCA",
  leaders: [
    {
      name: "Ustazah Siti Rahayu, M.Pd",
      role: "Kepala Sekolah SMP Pesantren",
      image: "/images/guru/guru3.png",
    },
    {
      name: "Ustazah Aminah, S.Pd",
      role: "Waka Kurikulum",
      image: "/images/guru/guru1.png",
    },
    {
      name: "Ustazah Lina Wati, S.Pd",
      role: "Waka Kesiswaan",
      image: "/images/guru/guru7.png",
    },
    {
      name: "Ust. Fajar Hidayat, S.Si",
      role: "Guru Matematika & Sains",
      image: "/images/guru/guru4.png",
    },
    {
      name: "Ust. Rahmat Hidayat, S.Pd",
      role: "Guru Bahasa Inggris",
      image: "/images/guru/guru5.png",
    },
    {
      name: "Ustazah Aisyah, S.Pd.I",
      role: "Guru Tahfidz",
      image: "/images/guru/guru6.png",
    },
  ],
};
