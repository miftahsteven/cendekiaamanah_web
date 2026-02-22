import { NewsGrid } from "@/components/common/NewsGrid";
import { getNews } from "@/server/actions/news";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";

export async function NewsSection() {
  // Fetch news and units in parallel
  const [newsResult, allUnits] = await Promise.all([
    getNews({ limit: 10 }), // Fetch recent news
    db.select().from(units),
  ]);

  const newsItems =
    newsResult.success && newsResult.data ? newsResult.data : [];

  // Construct categories for filter
  const categories = [
    { value: "all", label: "All" },
    ...allUnits.map((u) => {
      let label = u.name.replace("Cendekia Amanah", "").trim();
      if (label === "Madrasah Diniyah") label = "Diniyah";
      return {
        value: u.slug,
        label: label,
      };
    }),
  ];

  // Map news items to NewsItem interface
  const mappedItems = newsItems.map((item) => {
    // Determine category based on unitId
    const unit = allUnits.find((u) => u.id === item.unitId);
    let category = "all";
    if (unit) {
      category = unit.slug;
    }

    // transform image path to full URL
    const imageSrc = item.image
      ? item.image.startsWith("http")
        ? item.image
        : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.image}`
      : "/images/placeholder-news.jpg"; // Fallback if no image

    return {
      id: item.id.toString(),
      title: item.title,
      description: item.excerpt || "", // Use excerpt as description
      category: category,
      image: imageSrc,
      slug: item.slug,
      publishedAt: item.createdAt.toISOString(),
    };
  });

  return (
    <NewsGrid
      items={mappedItems}
      subtitle="BERITA & PENGUMUMAN TERBARU"
      title="Update kegiatan, program, dan informasi penting dari Pesantren Cendekia Amanah"
      headerAlign="left"
      showViewAllButton={true}
      viewAllLink="/berita"
      basePath="/berita"
      showFilter={true}
      categories={categories}
    />
  );
}
