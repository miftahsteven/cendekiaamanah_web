import { Metadata } from "next";
import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { GalleryContent } from "@/components/gallery/GalleryContent";
import { GalleryContentSkeleton } from "@/components/gallery/GallerySkeletons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kelola Galeri - Cendekia Amanah Admin",
  description: "Kelola galeri foto Cendekia Amanah",
};

interface GalleryPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function GalleryPage(props: GalleryPageProps) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page || "1") || 1;

  return (
    <div className="space-y-6">
      {/* Static Header - renders immediately */}
      <DashboardHeader
        title="Kelola Galeri"
        description="Kelola foto kegiatan dan fasilitas"
        buttonText="Tambah Foto"
        buttonHref="/dashboard/gallery/create"
      />

      {/* Content wrapped in Suspense - shows skeleton while loading */}
      <Suspense
        key={page}
        fallback={
          <Card className="border-none shadow-none">
            <CardHeader>
              <CardTitle>Daftar Foto</CardTitle>
            </CardHeader>
            <CardContent>
              <GalleryContentSkeleton />
            </CardContent>
          </Card>
        }
      >
        <GalleryContent page={page} />
      </Suspense>
    </div>
  );
}
