import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";
import { getNews } from "@/server/actions/news";
import { formatDate } from "@/lib/utils";
import { BeritaFilter } from "./BeritaFilter";
import { BeritaList } from "./BeritaList";
import { NEWS_CATEGORIES } from "./constants";

interface BeritaContentProps {
  page: number;
  category: string;
  search: string;
}

export async function BeritaContent({
  page,
  category,
  search,
}: BeritaContentProps) {
  const limit = 12;

  // Resolve Unit ID from category slug
  let unitId: number | null | undefined = undefined;
  let unitIds: number[] | undefined = undefined;

  if (category !== "all") {
    // Fetch all units to map
    const allUnits = await db.select().from(units);

    // Map category to unit
    if (category === "bisnis") {
      // Find units related to business (Hidroponik, Koperasi)
      const businessUnits = allUnits.filter(
        (u) => u.slug.includes("hidroponik") || u.slug.includes("koperasi"),
      );

      if (businessUnits.length > 0) {
        unitIds = businessUnits.map((u) => u.id);
      } else {
        // Category selected but no matching units found -> return no news
        unitId = -1;
      }
    } else {
      // Try to find unit with slug containing the category name
      // e.g. "sma" -> "sma-pesantren..."
      // "madrasah diniyah" -> "madrasah-diniyah..."
      const normalizedCategory = category.replace(" ", "-").toLowerCase();
      const foundUnit = allUnits.find((u) =>
        u.slug.includes(normalizedCategory),
      );

      if (foundUnit) {
        unitId = foundUnit.id;
      } else {
        // Category selected but unit not found -> return no news
        unitId = -1;
      }
    }
  }

  // Fetch News
  const { data, pagination } = await getNews({
    unitId: unitId, // undefined = all, null = umum (explicit null)
    unitIds: unitIds,
    page,
    limit,
    query: search,
  });

  // Transform data for UI
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
    <>
      <BeritaFilter categories={NEWS_CATEGORIES} />

      <div className="px-1">
        <BeritaList
          items={newsItems}
          currentPage={pagination?.page || 1}
          totalPages={pagination?.totalPages || 1}
        />
      </div>
    </>
  );
}
