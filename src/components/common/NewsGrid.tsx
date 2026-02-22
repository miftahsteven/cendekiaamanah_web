"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { NewsCard, NewsItem } from "./NewsCard";
import { SectionTitleHeader } from "./SectionTitleHeader";
import { CategoryFilter, FilterCategory } from "./CategoryFilter";

import "swiper/css";
import "swiper/css/pagination";

interface NewsGridProps {
  items: NewsItem[];
  subtitle: string;
  title: string;
  headerAlign?: "left" | "center";
  showViewAllButton?: boolean;
  viewAllLink?: string;
  basePath?: string;
  showFilter?: boolean;
  categories?: readonly FilterCategory[] | FilterCategory[];
}

export function NewsGrid({
  items,
  subtitle,
  title,
  headerAlign = "left",
  showViewAllButton = true,
  viewAllLink = "/berita",
  basePath = "/berita",
  showFilter = false,
  categories = [],
}: NewsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Filter items if filter is enabled
  const filteredItems =
    showFilter && activeFilter !== "all"
      ? items.filter((item) => item.category === activeFilter)
      : items;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto">
        {/* First Row: Header and optional Filter */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          {/* Header */}
          <SectionTitleHeader
            subtitle={subtitle}
            title={title}
            align={headerAlign}
          />

          {/* Filter Component - only show if filter enabled */}
          {showFilter && categories.length > 0 && (
            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <CategoryFilter
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                categories={categories}
              />
            </div>
          )}
        </div>

        {/* Mobile: Swiper */}
        <div className="block md:hidden">
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
            {filteredItems.map((news) => (
              <SwiperSlide key={news.id}>
                <NewsCard news={news} basePath={basePath} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.slice(0, 4).map((news) => (
            <NewsCard key={news.id} news={news} basePath={basePath} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAllButton && (
          <div className="flex justify-center mt-8 md:mt-12">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground hover:text-foreground/80 transition-colors group"
            >
              LIHAT SEMUA
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
