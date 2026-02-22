"use client";

import { useState } from "react";
import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Pagination } from "swiper/modules";
import {
  BookOpenIcon,
  TrophyIcon,
  SparklesIcon,
  StarIcon,
  BuildingLibraryIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/pagination";

// Product Item Interface
export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProductListSectionProps {
  subtitle: string;
  title: string;
  description: string;
  products: ProductItem[];
}

interface ProgramItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface ProgramContentData {
  title: string;
  description: string;
  items: string[];
  image: string;
}

interface ProgramContentItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: string[];
  image: string;
  imagePosition?: "left" | "right";
}

interface BisnisProgramSectionProps {
  subtitle: string;
  title: string;
  description: string;
  programs: ProgramItem[];
  programSekolah: ProgramContentData;
  ekstrakurikuler: ProgramContentData;
  pembiasaan: ProgramContentData;
  // Product List Section Props
  productListSubtitle: string;
  productListTitle: string;
  productListDescription: string;
  products: ProductItem[];
  className?: string;
}

// Product Card Component
function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-2 md:p-3 h-full flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="pt-3 md:pt-4 flex flex-col gap-1 flex-1">
        <h4 className="text-sm md:text-base font-semibold text-foreground font-manrope line-clamp-2">
          {product.title}
        </h4>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}

// Product List Section Component
function ProductListSection({
  subtitle,
  title,
  description,
  products,
}: ProductListSectionProps) {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activePageIndex, setActivePageIndex] = useState(0);

  // Calculate total pages based on slides per view (approximately 4 on desktop)
  const slidesPerPage = 4;
  const totalPages = Math.ceil(products.length / slidesPerPage);

  // Calculate which page is active based on slide position
  const handleSlideChange = (swiper: SwiperType) => {
    const { activeIndex, slides } = swiper;
    const totalSlides = slides.length;
    const maxIndex =
      totalSlides - Math.floor(swiper.params.slidesPerView as number);

    // Calculate page based on progress through available slides
    if (activeIndex >= maxIndex) {
      // At the end, activate last page
      setActivePageIndex(totalPages - 1);
    } else {
      // Calculate page based on position
      const pageIndex = Math.floor(activeIndex / slidesPerPage);
      setActivePageIndex(Math.min(pageIndex, totalPages - 1));
    }
  };

  // Handle pagination button click
  const handlePageClick = (pageIndex: number) => {
    if (!swiperRef) return;

    const slidesPerView = swiperRef.params.slidesPerView as number;
    const totalSlides = products.length;
    const maxStartIndex = totalSlides - Math.floor(slidesPerView);

    if (pageIndex === totalPages - 1) {
      // Last page - go to end
      swiperRef.slideTo(maxStartIndex);
    } else {
      // Other pages - go to start of that page
      swiperRef.slideTo(pageIndex * slidesPerPage);
    }
  };

  return (
    <div className="mb-12 md:mb-16">
      {/* Header Row: Title on left, Description on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8">
        <SectionTitleHeader subtitle={subtitle} title={title} />
        <div className="flex items-center">
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Product Swiper */}
      <div className="relative">
        <Swiper
          onSwiper={setSwiperRef}
          onSlideChange={handleSlideChange}
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={2.15}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.3,
              spaceBetween: 24,
            },
          }}
          className="pb-16!"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Numbered Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index)}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 cursor-pointer",
                activePageIndex === index
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-foreground hover:bg-gray-200",
              )}
              aria-label={`Go to page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Program Content Item Component
function ProgramContentItem({
  icon: TitleIcon,
  title,
  description,
  items,
  image,
  imagePosition = "left",
}: ProgramContentItemProps) {
  const imageColumn = (
    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
  );

  const contentColumn = (
    <div className="flex flex-col justify-center space-y-4 md:px-10">
      {/* Title with Icon */}
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-white rounded-lg border border-gray-300">
          <TitleIcon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground font-manrope">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {description}
      </p>

      {/* List Items - Column Direction */}
      <div className="flex flex-col gap-3 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <BoltIcon className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-10">
      {imagePosition === "left" ? (
        <>
          {imageColumn}
          {contentColumn}
        </>
      ) : (
        <>
          {contentColumn}
          {imageColumn}
        </>
      )}
    </div>
  );
}

export function BisnisProgramSection({
  subtitle,
  title,
  description,
  programs,
  programSekolah,
  ekstrakurikuler,
  pembiasaan,
  productListSubtitle,
  productListTitle,
  productListDescription,
  products,
  className,
}: BisnisProgramSectionProps) {
  // Map header icons to programs
  const headerIcons: React.ComponentType<{ className?: string }>[] = [
    BookOpenIcon,
    SparklesIcon,
    TrophyIcon,
    StarIcon,
    BuildingLibraryIcon,
  ];

  return (
    <section className={cn("w-full py-12 md:py-20 ", className)}>
      <div className="container mx-auto">
        {/* Product List Section - NEW */}
        <ProductListSection
          subtitle={productListSubtitle}
          title={productListTitle}
          description={productListDescription}
          products={products}
        />

        {/* Section Heading - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10 ">
          {/* Column 1: Title Header */}
          <SectionTitleHeader subtitle={subtitle} title={title} />

          {/* Column 2: Description */}
          <div className="flex items-center">
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Program List Row */}
        <div className="flex flex-wrap gap-6 border-b border-gray-300 pb-6 ">
          {programs.map((program, index) => {
            const IconComponent = headerIcons[index] || BookOpenIcon;
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="p-1.5 bg-white rounded-lg border border-gray-300">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                  {program.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Program Content Sections */}
        <div className="mt-6">
          {/* Program Sekolah - Image Left */}
          <ProgramContentItem
            icon={BookOpenIcon}
            title={programSekolah.title}
            description={programSekolah.description}
            items={programSekolah.items}
            image={programSekolah.image}
            imagePosition="left"
          />

          {/* Ekstrakurikuler - Image Right */}
          <ProgramContentItem
            icon={SparklesIcon}
            title={ekstrakurikuler.title}
            description={ekstrakurikuler.description}
            items={ekstrakurikuler.items}
            image={ekstrakurikuler.image}
            imagePosition="right"
          />

          {/* Pembiasaan - Image Left */}
          <ProgramContentItem
            icon={TrophyIcon}
            title={pembiasaan.title}
            description={pembiasaan.description}
            items={pembiasaan.items}
            image={pembiasaan.image}
            imagePosition="left"
          />
        </div>
      </div>
    </section>
  );
}
