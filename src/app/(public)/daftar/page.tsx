import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import { DINIYAH_HERO_CONTENT } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";
import { SMP_HERO_CONTENT } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";
import { SMA_HERO_CONTENT } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";

export const metadata: Metadata = {
  title: "Pendaftaran - Cendekia Amanah",
  description:
    "Daftarkan putra-putri Anda di Pesantren Cendekia Amanah untuk jenjang SMP dan SMA.",
};

const SOCIAL_MEDIA = [
  {
    icon: "/images/icon/instagram.svg",
    href: "https://instagram.com/pesantren.cendekia.amanah",
    label: "Instagram",
  },
  {
    icon: "/images/icon/facebook.svg",
    href: "https://www.facebook.com/people/SMA-Pesantren-Cendekia-Amanah",
    label: "Facebook",
  },
  {
    icon: "/images/icon/youtube.svg",
    href: "https://youtube.com/amanahtv",
    label: "YouTube",
  },
];

const REGISTRATION_UNITS = [
  {
    title: DINIYAH_HERO_CONTENT.title,
    url: DINIYAH_HERO_CONTENT.registrationLink,
    label: DINIYAH_HERO_CONTENT.registrationLabel,
    unit: "Madrasah Diniyah",
  },
  {
    title: SMP_HERO_CONTENT.title,
    url: SMP_HERO_CONTENT.registrationLink,
    label: SMP_HERO_CONTENT.registrationLabel,
    unit: "SMP",
  },
  {
    title: SMA_HERO_CONTENT.title,
    url: SMA_HERO_CONTENT.registrationLink,
    label: SMA_HERO_CONTENT.registrationLabel,
    unit: "SMA",
  },
];

export default function PendaftaranPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Header Section (Reusing style from KontakPage) */}
      <div className="w-full space-y-12 pt-12 md:pt-18 md:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:border-b border-gray-300 pb-6 md:pb-12">
          {/* Left: Title */}
          <h1 className="md:col-span-8 text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight pb-0 -mt-4 font-manrope">
            Pendaftaran Santri Baru
          </h1>

          {/* Right: Social Media */}
          <div className="md:col-span-4 hidden md:flex justify-start md:justify-end gap-4">
            {SOCIAL_MEDIA.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label={social.label}
              >
                <div className="relative w-6 h-6 md:w-10 md:h-10">
                  <Image
                    src={social.icon}
                    alt={social.label}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content: 3 Columns Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 md:py-16">
        {/* Left Column: Info (Sticky) */}
        <div className="space-y-4 h-fit lg:sticky lg:top-24">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-manrope">
            Link Pendaftaran per Jenjang Pendidikan
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Silakan pilih unit pendidikan yang dituju untuk melakukan
            pendaftaran santri baru.
          </p>
        </div>

        {/* Middle Column: Registration List */}
        <div className="col-span-2 space-y-6">
          {REGISTRATION_UNITS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 p-4 md:p-6 rounded-xl border border-gray-300 bg-background hover:shadow-md transition-all duration-500 group"
            >
              <div className="space-y-1 w-full flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary font-manrope">
                    {item.unit}
                  </h3>
                  <p className="text-foreground text-base md:text-lg">
                    {item.title}
                  </p>
                </div>
                <div className="pt-4 md:pt-0">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="inline-flex items-center justify-center bg-primary text-white py-1.5 md:py-3 px-3 md:px-4 rounded-full font-bold text-xs md:text-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                  >
                    {item.label}
                    <ArrowRightCircleIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
