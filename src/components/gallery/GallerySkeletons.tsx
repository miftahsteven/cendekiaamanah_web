import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

// Content-only skeleton for gallery grid (no header)
export function GalleryContentSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Card key={i} className="overflow-hidden">
          <div className="aspect-video bg-muted relative">
            <Skeleton className="w-full h-full" />
          </div>
          <CardContent className="p-4 space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-16 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Content-only skeleton for news list (no header)
export function NewsContentSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="overflow-hidden flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 aspect-video sm:aspect-auto bg-muted shrink-0">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex-1 p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Skeleton className="h-8 w-8 rounded" />
                <Skeleton className="h-8 w-8 rounded" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </Card>
      ))}
    </div>
  );
}

// Content-only skeleton for carousel list (no header)
export function CarouselContentSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-muted/50 rounded-lg"
        >
          <Skeleton className="w-full h-48 md:w-32 md:h-20 rounded shrink-0" />
          <div className="flex-1 w-full md:w-auto space-y-2">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-3 w-16" />
          </div>
          <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-2">
            <Skeleton className="h-6 w-14 rounded" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-8 w-8 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Legacy - kept for backwards compatibility (full page skeleton with header)
export function GalleryListSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-9 w-48 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      {/* Grid Skeleton */}
      <Card className="border-none">
        <CardContent className="pt-6">
          <GalleryContentSkeleton />
        </CardContent>
      </Card>
    </div>
  );
}

export function GalleryFormSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-64 w-full rounded-lg" />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}
