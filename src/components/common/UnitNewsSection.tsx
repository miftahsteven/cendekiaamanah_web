import { NewsGrid } from "@/components/common/NewsGrid";
import { getNews } from "@/server/actions/news";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface UnitNewsSectionProps {
  unitSlug: string;
  subtitle?: string;
  title?: string;
  className?: string;
}

export async function UnitNewsSection({
  unitSlug,
  subtitle = "INFORMASI TERBARU",
  title = "Berita & Pengumuman Terbaru",
}: UnitNewsSectionProps) {
  // Find unit by slug
  const unit = await db.query.units.findFirst({
    where: eq(units.slug, unitSlug),
  });

  if (!unit) {
    return null;
  }

  const newsResult = await getNews({ unitId: unit.id, limit: 4 });
  const newsItems =
    newsResult.success && newsResult.data ? newsResult.data : [];

  // Map news items to NewsItem interface
  const mappedItems = newsItems.map((item) => {
    // transform image path to full URL
    const imageSrc = item.image
      ? item.image.startsWith("http")
        ? item.image
        : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.image}`
      : "/images/placeholder-news.jpg";

    return {
      id: item.id.toString(),
      title: item.title,
      description: item.excerpt || "",
      category: unit.name, // Usually unit name for specific section
      image: imageSrc,
      slug: item.slug,
      publishedAt: item.createdAt.toISOString(),
    };
  });

  if (mappedItems.length === 0) {
    return null;
  }

  return (
    <NewsGrid
      items={mappedItems}
      subtitle={subtitle}
      title={title}
      headerAlign="left"
      showViewAllButton={true} // maybe hide if not many? or link to filtered page?
      viewAllLink={`/berita?category=${unit.slug}`}
      basePath="/berita"
      showFilter={false}
    />
  );
}
