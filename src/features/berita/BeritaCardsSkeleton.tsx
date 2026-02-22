import { Skeleton } from "@/components/ui/skeleton";

export function BeritaCardsSkeleton() {
  return (
    <div className="w-full py-8 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
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
    </div>
  );
}
