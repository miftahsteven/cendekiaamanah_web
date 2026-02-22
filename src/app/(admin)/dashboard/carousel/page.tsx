import { Metadata } from "next";
import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { CarouselContent } from "@/components/carousel/CarouselContent";
import { CarouselContentSkeleton } from "@/components/gallery/GallerySkeletons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kelola Carousel - Cendekia Amanah Admin",
  description: "Kelola carousel homepage Cendekia Amanah",
};

export default async function CarouselPage() {
  return (
    <div className="space-y-6">
      {/* Static Header - renders immediately */}
      <DashboardHeader
        title="Kelola Carousel"
        description="Kelola slider homepage"
        buttonText="Tambah Slide"
        buttonHref="/dashboard/carousel/create"
      />

      {/* Content wrapped in Suspense - shows skeleton while loading */}
      <Suspense
        fallback={
          <Card className="border-none">
            <CardHeader>
              <CardTitle>Daftar Slide</CardTitle>
            </CardHeader>
            <CardContent>
              <CarouselContentSkeleton />
            </CardContent>
          </Card>
        }
      >
        <CarouselContent />
      </Suspense>
    </div>
  );
}
