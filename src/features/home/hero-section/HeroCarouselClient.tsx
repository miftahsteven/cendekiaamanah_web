"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { cn } from "@/lib/utils";
import type { HeroCarouselClientProps } from "@/types/carousel";

import "swiper/css";
import Image from "next/image";
import ArrowRightCircleIcon from "@heroicons/react/24/solid/ArrowRightCircleIcon";

function getLinkHref(link: string | null): string {
  if (!link) return "#";

  const normalizedLink = link.startsWith("/") ? link.slice(1) : link;

  const mapping: Record<string, string> = {
    smp: "/pendidikan/smp-pesantren-cendekia-amanah",
    sma: "/pendidikan/sma-pesantren-cendekia-amanah",
    diniyah: "/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah",
    koperasi: "/bisnis/koperasi-pesantren-cendekia-amanah",
    hidroponik: "/bisnis/hidroponik-pesantren-cendekia-amanah",
  };

  if (mapping[normalizedLink]) {
    return mapping[normalizedLink];
  }

  return link.startsWith("/") ? link : `/${link}`;
}

export function HeroCarouselClient({
  slides,
  autoplayDelay = 6000,
}: HeroCarouselClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Swiper onAutoplayTimeLeft callback for smooth progress bar
  const onAutoplayTimeLeft = (
    swiper: SwiperType,
    time: number,
    progress: number,
  ) => {
    if (!progressBarRef.current) return;
    const percentage = Math.min(Math.max((1 - progress) * 100, 0), 100);
    progressBarRef.current.style.width = `${percentage}%`;
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (swiperInstance) {
        swiperInstance.slideToLoop(index);
      }
    },
    [swiperInstance],
  );

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative w-full p-4 md:p-6 lg:p-8">
      {/* Carousel Container */}
      <div className="relative h-[80vh] min-h-[550px] max-h-[850px] w-full overflow-hidden rounded-xl lg:rounded-2xl shadow-xl">
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          loop
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative">
              {/* Background Image with next-cloudinary */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title || `Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content with Container Padding */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 md:pb-16 lg:pb-20 pointer-events-none">
          <div className="container mx-auto px-6 md:px-4">
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Row 1: Title and Bullets */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-5xl tracking-tight font-manrope">
                  {slides[activeIndex].title || "Selamat Datang"}
                </h1>

                {/* Bullets */}
                <div className="flex items-center gap-2 shrink-0 mb-2 pointer-events-auto bg-white/10 px-2 rounded-full">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="relative group py-2"
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <span
                        className={cn(
                          "block w-2.5 h-2.5 rounded-full transition-all duration-500",
                          activeIndex === index
                            ? "bg-white w-8"
                            : "bg-white/40 hover:bg-white/80 group-hover:scale-110",
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Progress Bar */}
              <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  style={{ width: "0%" }}
                />
              </div>

              {/* Row 3: Description and CTA */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
                {slides[activeIndex].subtitle && (
                  <p className="text-sm md:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
                    {slides[activeIndex].subtitle}
                  </p>
                )}

                {/* CTA Button */}
                {slides[activeIndex].link && (
                  <div className="flex flex-wrap items-center shrink-0 pointer-events-auto">
                    <Link
                      href={getLinkHref(slides[activeIndex].link)}
                      className="inline-flex items-center bg-white text-gray-900 py-2 px-2 md:px-4 md:py-3 rounded-full font-bold text-xs md:text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25"
                    >
                      {slides[activeIndex].buttonText || "Selengkapnya"}
                      <ArrowRightCircleIcon className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
