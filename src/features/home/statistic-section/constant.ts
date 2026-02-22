export interface StatisticPoint {
  icon: string;
  value: string;
  description: string;
  valueDescription: string;
}

export interface EducationUnit {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
}

export const STATISTICS: StatisticPoint[] = [
  {
    icon: "users",
    value: "1.200",
    valueDescription: "Alumni",
    description: "Lulusan PCA yang berkontribusi di berbagai bidang.",
  },
  {
    icon: "user-plus",
    value: "2.500",
    valueDescription: "Pendaftaran",
    description: "Pendaftaran santri baru setiap tahun.",
  },
  {
    icon: "map-pin",
    value: "18",
    valueDescription: "Daerah",
    description: "Asal daerah santri dari seluruh Indonesia.",
  },
];

export const EDUCATION_UNITS: EducationUnit[] = [
  {
    id: "mdca",
    number: "01",
    title: "Madrasah Diniyah Cendekia Amanah (MDCA)",
    description:
      "Pembelajaran diniyah yang menekankan pemahaman dasar keislaman, tahfidz Al-Qur'an, dan pembiasaan ibadah dalam lingkungan yang aman dan terarah.",
    href: "/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah",
  },
  {
    id: "smp",
    number: "02",
    title: "SMP Pesantren Cendekia Amanah",
    description:
      "Pendidikan tingkat menengah yang mengintegrasikan kurikulum nasional, nilai keislaman, serta program pengembangan minat dan bakat santri.",
    href: "/pendidikan/smp-pesantren-cendekia-amanah",
  },
  {
    id: "sma",
    number: "03",
    title: "SMA Pesantren Cendekia Amanah",
    description:
      "Pembinaan akademik, kepemimpinan, dan karakter untuk membekali santri melanjutkan studi ke perguruan tinggi dan menghadapi tantangan global.",
    href: "/pendidikan/sma-pesantren-cendekia-amanah",
  },
];
