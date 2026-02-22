import { Metadata } from "next";
import { BeritaHero } from "@/features/berita/BeritaHero";
import { BeritaFilter } from "@/features/berita/BeritaFilter";
import { BeritaCards } from "@/features/berita/BeritaCards";
import { BeritaCardsSkeleton } from "@/features/berita/BeritaCardsSkeleton";
import { NEWS_CATEGORIES } from "@/features/berita/constants";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Berita - Cendekia Amanah",
  description: "Berita dan informasi terbaru dari Cendekia Amanah",
};

interface PageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    search?: string;
  }>;
}

export default async function BeritaPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page || "1") || 1;
  const category = searchParams.category || "all";
  const search = searchParams.search || "";

  // Key for Suspense to re-trigger loading state when params change
  const suspenseKey = `${page}-${category}-${search}`;

  return (
    <div className="container mx-auto px-4 md:px-0">
      <BeritaHero />

      {/* Filter is static - renders immediately */}
      <BeritaFilter categories={NEWS_CATEGORIES} />

      {/* Cards wrapped in Suspense with key to show skeleton on param change */}
      <Suspense key={suspenseKey} fallback={<BeritaCardsSkeleton />}>
        <BeritaCards page={page} category={category} search={search} />
      </Suspense>
    </div>
  );
}
