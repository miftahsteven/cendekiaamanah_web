import { Skeleton } from "@/components/ui/skeleton";

export function GallerySkeleton() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-end gap-6 md:gap-12 mb-8 md:mb-12">
          <div className="w-full md:w-auto text-right">
            <div className="space-y-2 flex flex-col items-end">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-8 w-64 md:w-96" />
            </div>
          </div>
        </div>

        {/* Desktop Grid Skeleton (approximate 3 columns) */}
        <div className="hidden md:grid grid-cols-3 gap-4 mx-auto h-[600px]">
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full flex-1 rounded-xl" />
            <Skeleton className="w-full flex-1 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full flex-[2] rounded-xl" />
            <Skeleton className="w-full flex-1 rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full flex-1 rounded-xl" />
            <Skeleton className="w-full flex-[1.5] rounded-xl" />
          </div>
        </div>

        {/* Mobile Skeleton */}
        <div className="block md:hidden w-full">
          <div className="flex gap-4 overflow-hidden">
            <Skeleton className="w-[80vw] aspect-square rounded-2xl shrink-0" />
            <Skeleton className="w-[80vw] aspect-square rounded-2xl shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
