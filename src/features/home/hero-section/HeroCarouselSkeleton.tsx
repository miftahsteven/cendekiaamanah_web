import { Skeleton } from "@/components/ui/skeleton";

export function HeroCarouselSkeleton() {
  return (
    <section className="relative w-full p-4 md:p-6 lg:p-8">
      <div className="relative h-[80vh] min-h-[550px] max-h-[850px] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-muted">
        {/* Background skeleton */}
        <Skeleton className="absolute inset-0" />

        {/* Content skeleton */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-12 md:pb-16 lg:pb-20">
          <div className="container mx-auto px-6 md:px-4">
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Row 1: Title and bullets */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
                <div className="space-y-3 max-w-5xl">
                  <Skeleton className="h-12 md:h-16 lg:h-20 w-full" />
                  <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4" />
                </div>

                {/* Bullets skeleton */}
                <div className="flex items-center gap-3 shrink-0 mb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="w-2.5 h-2.5 rounded-full" />
                  ))}
                </div>
              </div>

              {/* Row 2: Progress bar */}
              <Skeleton className="w-full h-[2px] rounded-full" />

              {/* Row 3: Description and CTA */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
                <div className="space-y-2 max-w-2xl">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>

                <Skeleton className="h-12 w-48 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
