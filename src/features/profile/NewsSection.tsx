import { NewsGrid } from "@/components/common/NewsGrid";
import { getNews } from "@/server/actions/news";
import { formatDate } from "@/lib/utils";

export async function PesantrenNewsSection() {
  const { data } = await getNews({ limit: 4 });

  const newsItems = (data || []).map((item) => ({
    id: item.id.toString(),
    title: item.title,
    description: item.excerpt || "",
    category: (item.unit?.name.toLowerCase().includes("sma")
      ? "sma"
      : item.unit?.name.toLowerCase().includes("smp")
        ? "smp"
        : item.unit?.name.toLowerCase().includes("diniyah")
          ? "madrasah diniyah"
          : item.unit?.name.toLowerCase().includes("hidroponik") ||
              item.unit?.name.toLowerCase().includes("koperasi")
            ? "bisnis"
            : "all") as any,
    image: item.image
      ? item.image.startsWith("http")
        ? item.image
        : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.image}`
      : "/images/placeholder.jpg",
    slug: item.slug,
    publishedAt: formatDate(item.publishedAt || new Date()),
  }));

  return (
    <NewsGrid
      items={newsItems}
      subtitle="BERITA TERBARU"
      title="Informasi & Kegiatan Pesantren Cendekia Amanah"
      headerAlign="left"
      showViewAllButton={true}
      viewAllLink="/berita"
      basePath="/berita"
    />
  );
}
