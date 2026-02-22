export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  initials: string;
  message: string;
  label: string;
}

export const MOCK_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Ahmad Cahyadi",
    role: "Wali Santri",
    initials: "AC",
    message:
      "Alhamdulillah, perkembangan akhlak dan akademik anak saya sangat pesat selama belajar di Cendekia Amanah. Lingkungannya sangat kondusif.",
    label: "Orang Tua",
  },
  {
    id: "2",
    name: "Budi Pratama",
    role: "Alumni 2023",
    initials: "BP",
    message:
      "Pengalaman belajar di sini sangat berkesan. Tidak hanya ilmu agama, tapi juga dibekali skill leadership yang sangat berguna di dunia perkuliahan.",
    label: "Alumni",
  },
  {
    id: "3",
    name: "Citra Dewi",
    role: "Wali Santri",
    initials: "CD",
    message:
      "Fasilitas asrama yang bersih dan program tahfidz yang terstruktur membuat saya tenang menitipkan putri saya di sini.",
    label: "Orang Tua",
  },
  {
    id: "4",
    name: "Dedi Kurniawan",
    role: "Alumni 2022",
    initials: "DK",
    message:
      "Guru-gurunya sangat suportif. Saya diajarkan untuk berpikir kritis dan mandiri. Cendekia Amanah tempat terbaik untuk menuntut ilmu.",
    label: "Alumni",
  },
  {
    id: "5",
    name: "Eka Putri",
    role: "Wali Santri",
    initials: "EP",
    message:
      "Sangat bersyukur bisa menyekolahkan anak di sini. Keseimbangan antara ilmu umum dan agama sangat terjaga dengan baik.",
    label: "Orang Tua",
  },
  {
    id: "6",
    name: "Fajar Nugraha",
    role: "Mitra Bisnis",
    initials: "FN",
    message:
      "Unit bisnis pesantren dikelola dengan sangat profesional. Santri-santrinya memiliki etos kerja yang tinggi.",
    label: "Mitra",
  },
  {
    id: "7",
    name: "Gita Safitri",
    role: "Alumni 2021",
    initials: "GS",
    message:
      "Kenangan selama di asrama tidak akan terlupakan. Persaudaraan antar santri sangat kuat dan masih terjalin sampai sekarang.",
    label: "Alumni",
  },
];
