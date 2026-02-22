import { GalleryGrid } from "@/components/common/GalleryGrid";
import { getGalleryItems } from "@/server/actions/gallery";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";

export async function GallerySection() {
  const result = await getGalleryItems({ limit: 50 });
  const galleryItems = result.success && result.data ? result.data : [];

  const allUnits = await db.select().from(units);

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

  // Map gallery items to GalleryItem interface
  const mappedItems = galleryItems.map((item) => {
    const unit = allUnits.find((u) => u.id === item.unitId);
    let category = "all";
    if (unit) {
      category = unit.slug;
    }

    const imageSrc = item.image.startsWith("http")
      ? item.image
      : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.image}`;

    return {
      id: item.id.toString(),
      category: category,
      image: imageSrc,
      alt: item.title,
    };
  });

  return (
    <GalleryGrid
      items={mappedItems}
      subtitle="GALERI AKTIVITAS"
      title="Potret kegiatan dan fasilitas di Lingkungan Cendekia Amanah"
      showFilter={true}
      categories={categories}
      headerPosition="right"
    />
  );
}
