import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontak - Cendekia Amanah",
  description:
    "Hubungi Cendekia Amanah untuk informasi lebih lanjut tentang pendidikan dan pendaftaran",
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

const CONTACT_UNITS = [
  {
    title: "Whatsapp Admin Madrasah Diniyah",
    number: "+6285290392246",
    href: "https://wa.me/6285290392246",
    unit: "Madrasah Diniyah",
  },
  {
    title: "Whatsapp SMP Pesantren Cendekia Amanah",
    number: "+6285290392246",
    href: "https://wa.me/6285290392246",
    unit: "SMP",
  },
  {
    title: "Whatsapp SMA Pesantren Cendekia Amanah",
    number: "+6285290392246",
    href: "https://wa.me/6285290392246",
    unit: "SMA",
  },
];

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Header Section (Reusing style from BeritaHero) */}
      <div className="w-full space-y-12 pt-12 md:pt-18 md:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:border-b border-gray-300 pb-6 md:pb-12">
          {/* Left: Title */}
          <h1 className="md:col-span-8 text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight pb-0 -mt-4 font-manrope">
            Kontak Kami
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
        <div className="col-span-1 space-y-4 h-fit lg:sticky lg:top-24 justify-end items-center">
          {/* <div className="relative w-full aspect-1/2 lg:aspect-auto h-[200px] lg:h-[300px] rounded-2xl overflow-hidden items-start justify-baseline">
            <Image
              src="/images/guru/gurucustomer.png"
              alt="Customer Service Cendekia Amanah"
              fill
              className="object-contain"
            />
          </div> */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground font-manrope">
            Kontak WhatsApp per Jenjang Pendidikan
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Pilih unit pendidikan yang ingin Anda hubungi untuk mendapatkan
            informasi lebih detail.
          </p>
        </div>

        {/* Middle Column: Contact List */}
        <div className="col-span-2 space-y-6">
          {CONTACT_UNITS.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start gap-2 p-2 md:p-4 rounded-xl border border-gray-300 bg-background hover:shadow-md transition-all duration-500 group"
            >
              <div className="flex items-center gap-2">
                {/* WhatsApp Icon */}
                <div className="shrink-0 w-6 h-6 md:w-10 md:h-10 relative">
                  <Image
                    src="/images/icon/whatsapp.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain group-hover:scale-125 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary font-manrope">
                  {contact.number}
                </h3>
              </div>

              {/* Text Info */}
              <p className="text-foreground text-base md:text-lg">
                {contact.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
