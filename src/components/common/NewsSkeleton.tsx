import { Skeleton } from "@/components/ui/skeleton";

export function NewsSkeleton() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-64 md:w-96" />
          </div>
          {/* Filter Skeleton */}
          <div className="flex gap-2">
            <Skeleton className="h-8 w-16 rounded-full" />
            <Skeleton className="h-8 w-16 rounded-full" />
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden shadow-sm flex flex-col h-full"
            >
              <Skeleton className="h-48 w-full" />
              <div className="p-4 gap-3 flex flex-col flex-1">
                <Skeleton className="h-4 w-20 rounded-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-end mt-auto">
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button Skeleton */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </section>
  );
}
