import Image from "next/image";

export interface SocialMedia {
  icon: string;
  href: string;
  label: string;
}

const SOCIAL_MEDIA: SocialMedia[] = [
  {
    icon: "/images/icon/instagram.svg",
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: "/images/icon/facebook.svg",
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: "/images/icon/youtube.svg",
    href: "https://youtube.com",
    label: "YouTube",
  },
];

export function BeritaHero() {
  return (
    <div className="w-full space-y-12 pt-12 md:pt-18 md:pb-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center md:border-b border-gray-300 pb-6 md:pb-12">
        {/* Left: Title */}
        <h1 className="md:col-span-8 text-2xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight pb-0 -mt-4 font-manrope">
          Berita & Informasi PCA
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
              <Image
                src={social.icon}
                alt={social.label}
                width={32}
                height={32}
                className="w-6 md:w-10 h-6 md:h-10"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
