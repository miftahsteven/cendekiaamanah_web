"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";

interface MottoSectionProps {
  headerSubtitle: string;
  title: string;
  arabicQuote?: string; // Optional in case not all units have it
  translation?: string;
  listIntro: string;
  points: string[];
  backgroundImage: string;
  className?: string;
}

export function MottoSection({
  headerSubtitle,
  title,
  arabicQuote,
  translation,
  listIntro,
  points,
  backgroundImage,
  className,
}: MottoSectionProps) {
  return (
    <section className={cn("w-full py-12 md:py-20", className)}>
      <div className="container mx-auto">
        {/* Header - Outside Background */}
        <div className="flex justify-center mb-10">
          <SectionTitleHeader
            subtitle={headerSubtitle}
            title={title}
            align="center"
          />
        </div>

        {/* Content Card with Background Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Motto Background"
              fill
              priority // Tambahkan priority jika ini berada di bagian atas halaman (above the fold)
              className="object-cover"
            />
          </div>

          {/* Content: Tambahkan padding yang cukup agar kontainer memiliki tinggi */}
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-white h-full">
            {/* Quote Content */}
            {(arabicQuote || translation) && (
              <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
                {arabicQuote && (
                  <p
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-loose text-white"
                    dir="rtl"
                  >
                    {arabicQuote}
                  </p>
                )}
                {translation && (
                  <p className="text-white/80 italic text-base md:text-lg leading-relaxed">
                    {translation}
                  </p>
                )}
              </div>
            )}

            {/* Values Section */}
            <div className="space-y-8">
              <div className="text-center  mx-auto">
                <h3 className="text-lg md:text-xl font-medium text-white/90">
                  {listIntro}
                </h3>
              </div>

              <div className="flex flex-col items-center gap-4">
                {/* First Row - 5 items */}
                <div className="flex flex-wrap justify-center gap-3">
                  {points.slice(0, 5).map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 pl-2 pr-3 rounded-full border border-dashed border-white/30 bg-white/10 backdrop-blur-md transition-all hover:bg-white/30"
                    >
                      <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white text-sm font-bold text-primary">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <p className="text-sm md:text-base font-medium text-white whitespace-nowrap">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Second Row - remaining items */}
                <div className="flex flex-wrap justify-center gap-3">
                  {points.slice(5).map((point, index) => (
                    <div
                      key={index + 5}
                      className="flex items-center gap-3 p-2 pl-2 pr-3 rounded-full border border-dashed border-white/30 bg-white/10 backdrop-blur-md transition-all hover:bg-white/30"
                    >
                      <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white text-sm font-bold text-primary">
                        {(index + 6).toString().padStart(2, "0")}
                      </span>
                      <p className="text-sm md:text-base font-medium text-white whitespace-nowrap">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
