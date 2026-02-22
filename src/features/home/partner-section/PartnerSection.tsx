import Image from "next/image";
import { PARTNERS } from "./constant";

export function PartnerSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background overflow-hidden">
      <div className="container px-4 md:px-0 mx-auto mb-8 md:mb-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground font-manrope">
          PARTNER KAMI
        </h2>
        <p className="mt-2 text-foreground text-sm md:text-base max-w-3xl mx-auto">
          Bekerja sama dengan berbagai instansi dan perusahaan terkemuka untuk
          kemajuan pendidikan.
        </p>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-scroll hover:paused">
          {/* First set of partners */}
          <div className="flex items-center gap-8 md:gap-12 px-4">
            {PARTNERS.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="relative w-[100px] h-[60px] md:w-[140px] md:h-[80px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex items-center justify-center"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 140px"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for infinite scroll effect */}
          <div className="flex items-center gap-8 md:gap-12 px-4">
            {PARTNERS.map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="relative w-[100px] h-[60px] md:w-[140px] md:h-[80px] grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 flex items-center justify-center"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 140px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
