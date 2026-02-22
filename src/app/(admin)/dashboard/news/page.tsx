import { Metadata } from "next";
import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { NewsContent } from "@/components/news/NewsContent";
import { NewsContentSkeleton } from "@/components/gallery/GallerySkeletons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kelola Berita - Cendekia Amanah Admin",
  description: "Kelola berita dan artikel Cendekia Amanah",
};

export default async function NewsPage() {
  return (
    <div className="space-y-6">
      {/* Static Header - renders immediately */}
      <DashboardHeader
        title="Kelola Berita"
        description="Kelola artikel dan berita terbaru"
        buttonText="Tambah Berita"
        buttonHref="/dashboard/news/create"
      />

      {/* Content wrapped in Suspense - shows skeleton while loading */}
      <Suspense
        fallback={
          <Card className="border-none">
            <CardHeader>
              <CardTitle>Daftar Berita</CardTitle>
            </CardHeader>
            <CardContent>
              <NewsContentSkeleton />
            </CardContent>
          </Card>
        }
      >
        <NewsContent />
      </Suspense>
    </div>
  );
}
