"use client";

import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface AchievementItem {
  title: string;
  description: string;
  image: string;
}

interface StudentAchievementSectionProps {
  subtitle: string;
  title: string;
  description: string;
  achievements: AchievementItem[];
  className?: string;
}

export function StudentAchievementSection({
  subtitle,
  title,
  description,
  achievements,
  className,
}: StudentAchievementSectionProps) {
  return (
    <section className={cn("w-full py-10 md:py-20 overflow-hidden", className)}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center text-center mb-8 md:mb-14 mx-auto">
          <SectionTitleHeader
            subtitle={subtitle}
            title={title}
            align="center"
            className="mb-4"
          />
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mx-auto">
            {description}
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Navigation Buttons - Different position for mobile */}
          <div className="absolute top-1/2 left-1 md:-left-4 lg:-left-12 transform -translate-y-1/2 z-10">
            <button
              className="cursor-pointer swiper-button-prev-custom p-2 md:p-3 bg-white/90 md:bg-white rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 "
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 right-1 md:-right-4 lg:-right-12 transform -translate-y-1/2 z-10">
            <button
              className="cursor-pointer swiper-button-next-custom p-2 md:p-3 bg-white/90 md:bg-white rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 "
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={600}
            watchSlidesProgress={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={"auto"}
            spaceBetween={10}
            breakpoints={{
              320: {
                coverflowEffect: {
                  rotate: 0,
                  depth: 100,
                  modifier: 1.5,
                  slideShadows: true,
                },
                spaceBetween: 8,
              },
              640: {
                coverflowEffect: {
                  rotate: 0,
                  depth: 150,
                  modifier: 1.8,
                  slideShadows: true,
                },
                spaceBetween: 10,
              },
              1024: {
                coverflowEffect: {
                  rotate: 0,
                  depth: 186,
                  modifier: 2,
                  slideShadows: true,
                },
                spaceBetween: 12,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 192,
              modifier: 2,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
            className="w-full py-6 md:py-8 px-4 md:px-8 achievement-swiper"
            style={{ overflow: "visible" }}
          >
            {achievements.map((item, index) => (
              <SwiperSlide
                key={index}
                className="achievement-slide rounded-xl md:rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-full group p-2 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent rounded-lg group-hover:scale-110 transition-transform duration-700" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-white text-left">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {achievements.map((item, index) => (
              <SwiperSlide
                key={index}
                className="achievement-slide rounded-xl md:rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-full group p-2 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/50 to-transparent rounded-lg group-hover:scale-110 transition-transform duration-700" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-white text-left">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper styles for responsive slides */}
      <style jsx global>{`
        .achievement-swiper .swiper-slide {
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .achievement-swiper .swiper-slide-active {
          opacity: 1;
        }

        /* Responsive slide dimensions */
        .achievement-slide {
          width: 260px;
          height: 340px;
        }

        @media (min-width: 640px) {
          .achievement-slide {
            width: 320px;
            height: 420px;
          }
        }

        @media (min-width: 1024px) {
          .achievement-slide {
            width: 400px;
            height: 500px;
          }
        }

        /* Style pagination bullets */
        .achievement-swiper .swiper-pagination {
          position: relative;
          margin-top: 1.5rem;
        }

        .achievement-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
        }

        .achievement-swiper .swiper-pagination-bullet-active {
          background: var(--primary, #16a34a);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
