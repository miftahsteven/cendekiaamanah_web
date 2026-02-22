import { HeroCarousel } from "@/features/home/hero-section/HeroCarousel";
import { PartnerSection } from "@/features/home/partner-section/PartnerSection";
import { NewsSection } from "@/features/home/news-section/NewsSection";
import { NewsSkeleton } from "@/components/common/NewsSkeleton";
import { StatisticSection } from "@/features/home/statistic-section/StatisticSection";
import { GallerySection } from "@/features/home/gallery-section/GallerySection";
import { Suspense } from "react";
import { GallerySkeleton } from "@/components/common/GallerySkeleton";
import { TestimonialSection } from "@/features/home/testimonial-section/TestimonialSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Partner Section */}
      <PartnerSection />

      {/* News Section */}
      <div className="container mx-auto px-4 md:px-0">
        <Suspense fallback={<NewsSkeleton />}>
          <NewsSection />
        </Suspense>
      </div>

      {/* Statistic Section */}
      <StatisticSection />

      {/* Gallery Section */}
      <div className="container mx-auto px-4 md:px-0">
        <Suspense fallback={<GallerySkeleton />}>
          <GallerySection />
        </Suspense>
      </div>

      {/* Testimonial Section */}
      <TestimonialSection />
    </div>
  );
}
