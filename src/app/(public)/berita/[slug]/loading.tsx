import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 md:px-0 py-8 md:py-12 space-y-4 md:space-y-8">
      {/* Breadcrumb Skeleton */}
      <div className="flex gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Title & Hero Image Skeleton */}
      <div className="space-y-6">
        <Skeleton className="h-10 w-3/4 md:w-1/2" />
        <Skeleton className="w-full aspect-video md:aspect-[2.5/1] rounded-2xl" />
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 py-4 md:py-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-64 w-full rounded-xl my-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
}
