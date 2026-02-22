"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import {
  CategoryFilter,
  FilterCategory,
} from "@/components/common/CategoryFilter";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import "swiper/css";
import "swiper/css/pagination";

export interface GalleryItem {
  id: string;
  category?: string;
  image: string;
  alt: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  subtitle: string;
  title: string;
  showFilter?: boolean;
  categories?: readonly FilterCategory[] | FilterCategory[];
  headerPosition?: "left" | "right";
}

export function GalleryGrid({
  items,
  subtitle,
  title,
  showFilter = false,
  categories = [],
  headerPosition = "right",
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Filter items if filter is enabled
  const filteredItems =
    showFilter && activeFilter !== "all"
      ? items.filter((item) => item.category === activeFilter)
      : items;

  // Ensure we have at most 9 items for the grid to maintain 3x3 layout
  const displayGallery = filteredItems.slice(0, 9);

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto">
        {/* Header with optional filter */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Filter (Left on Desktop) - only show if filter enabled */}
          {showFilter && categories.length > 0 && (
            <div
              className={`${headerPosition === "right" ? "order-2 md:order-1" : "order-2"} w-full md:w-auto flex justify-center md:justify-start`}
            >
              <CategoryFilter
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                categories={categories}
              />
            </div>
          )}

          {/* Header (Right on Desktop if filter shown, or based on position) */}
          <div
            className={`${headerPosition === "right" ? "order-1 md:order-2" : "order-1"} w-full ${showFilter ? "md:w-auto max-w-2xl" : ""}`}
          >
            <SectionTitleHeader
              subtitle={subtitle}
              title={title}
              className={
                showFilter
                  ? "items-center md:items-end text-center md:text-right"
                  : "items-center md:items-end text-center md:text-right"
              }
            />
          </div>
        </div>

        {/* Mobile: Swiper (Normal Slider) */}
        <div className="block md:hidden w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.3}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            className="pb-12!"
          >
            {displayGallery.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Layout */}
        {displayGallery.length > 0 && (
          <>
            {displayGallery.length === 9 ? (
              /* Proportional Layout for exactly 9 items */
              <div className="hidden md:flex flex-row gap-4 mx-auto h-[800px]">
                {/* Column 1: Equal Height (1:1:1) */}
                <div className="flex flex-col gap-4 flex-1 h-full">
                  {displayGallery
                    .filter((_, i) => i % 3 === 0)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="relative w-full flex-1 rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => setSelectedImage(item)}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white text-sm font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {item.alt}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Column 2: Ratio 1:2:1 */}
                <div className="flex flex-col gap-4 flex-1 h-full">
                  {displayGallery
                    .filter((_, i) => i % 3 === 1)
                    .map((item, index) => {
                      let flexClass = "flex-1";
                      if (index === 1) flexClass = "flex-[2]";

                      return (
                        <div
                          key={item.id}
                          className={`relative w-full ${flexClass} rounded-xl overflow-hidden group cursor-pointer`}
                          onClick={() => setSelectedImage(item)}
                        >
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-sm font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              {item.alt}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Column 3: Ratio 1.5:1:2 */}
                <div className="flex flex-col gap-4 flex-1 h-full">
                  {displayGallery
                    .filter((_, i) => i % 3 === 2)
                    .map((item, index) => {
                      let flexClass = "flex-1";
                      if (index === 0) flexClass = "flex-[1.5]";
                      if (index === 2) flexClass = "flex-[2]";

                      return (
                        <div
                          key={item.id}
                          className={`relative w-full ${flexClass} rounded-xl overflow-hidden group cursor-pointer`}
                          onClick={() => setSelectedImage(item)}
                        >
                          <Image
                            src={item.image}
                            alt={item.alt}
                            fill
                            sizes="33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-sm font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              {item.alt}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              /* Fallback Grid Layout for < 9 items */
              <div className="hidden md:grid grid-cols-3 gap-4 mx-auto">
                {displayGallery.map((item) => (
                  <div
                    key={item.id}
                    className="relative w-full aspect-square rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-sm font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {displayGallery.length === 0 && (
          <div className="text-center py-20 text-muted-foreground hidden md:block">
            Tidak ada foto untuk kategori ini.
          </div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none text-white">
          <div className="relative w-full h-[80vh] flex flex-col items-center justify-center pointer-events-none">
            {selectedImage && (
              <>
                <div className="relative w-full h-full pointer-events-auto">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-lg font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm pointer-events-auto">
                  {selectedImage.alt}
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
