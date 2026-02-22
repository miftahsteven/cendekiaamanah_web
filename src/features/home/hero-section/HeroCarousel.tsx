import { Suspense } from "react";
import { db } from "@/lib/db";
import { carouselItems } from "@/lib/db/schema";
import { asc, eq } from "drizzle-orm";
import { HeroCarouselClient } from "@/features/home/hero-section/HeroCarouselClient";
import { HeroCarouselSkeleton } from "@/features/home/hero-section/HeroCarouselSkeleton";
import type { CarouselItemData } from "@/types/carousel";
import { unstable_cache } from "next/cache";

const getCachedCarouselItems = unstable_cache(
  async (): Promise<CarouselItemData[]> => {
    try {
      const items = await db
        .select()
        .from(carouselItems)
        .where(eq(carouselItems.isActive, true))
        .orderBy(asc(carouselItems.order));
      return items;
    } catch (error) {
      console.error("Error fetching carousel items:", error);
      return [];
    }
  },
  ["active-carousel-items"],
  {
    revalidate: 60,
    tags: ["carousel-items"],
  },
);

async function HeroCarouselContent() {
  const slides = await getCachedCarouselItems();

  if (slides.length === 0) {
    return (
      <section className="relative w-full p-4 md:p-6 lg:p-8">
        <div className="relative h-[80vh] min-h-[550px] max-h-[850px] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-muted flex items-center justify-center">
          <p className="text-muted-foreground text-lg">
            Belum ada slide carousel yang aktif
          </p>
        </div>
      </section>
    );
  }

  return <HeroCarouselClient slides={slides} autoplayDelay={6000} />;
}

export function HeroCarousel() {
  return (
    <Suspense fallback={<HeroCarouselSkeleton />}>
      <HeroCarouselContent />
    </Suspense>
  );
}
