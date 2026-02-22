"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { TestimonialCard } from "./TestimonialCard";
import { MOCK_TESTIMONIALS } from "./constant";

import "swiper/css";

export function TestimonialSection() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
        <div className="flex flex-col justify-between gap-8 py-4 px-4 md:px-0 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-0">
          <SectionTitleHeader
            subtitle="ULASAN"
            title="Apa Kata Orang Tua & Alumni"
            className="text-left items-start"
          />

          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold font-manrope text-primary flex items-end">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="text-lg text-muted-foreground/50 font-medium ml-2 mb-1">
                / {String(MOCK_TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => swiperRef?.slidePrev()}
                className="w-12 h-12 rounded-full border border-primary/20  bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 disabled:opacity-50 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => swiperRef?.slideNext()}
                className="w-12 h-12 rounded-full border border-primary/20 bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 disabled:opacity-50 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 min-w-0 overflow-hidden px-4 md:px-6 lg:px-0">
          <Swiper
            onSwiper={setSwiperRef}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            grabCursor={true}
            loop={true}
          >
            {MOCK_TESTIMONIALS.map((item) => (
              <SwiperSlide
                key={item.id}
                className="h-auto py-4 w-full md:w-[400px]!"
              >
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
