import { GalleryGrid } from "@/components/common/GalleryGrid";
import { getGalleryItems } from "@/server/actions/gallery";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface UnitGallerySectionProps {
  unitSlug: string;
}

export async function UnitGallerySection({
  unitSlug,
}: UnitGallerySectionProps) {
  // Find unit by slug
  const [unit] = await db.select().from(units).where(eq(units.slug, unitSlug));

  if (!unit) {
    return null; // Or return empty state
  }

  // Fetch gallery items for this unit
  const result = await getGalleryItems({ unitId: unit.id, limit: 12 });
  const galleryItems = result.success && result.data ? result.data : [];

  // Map to GalleryItem interface
  const mappedItems = galleryItems.map((item) => {
    const imageSrc = item.image.startsWith("http")
      ? item.image
      : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.image}`;

    return {
      id: item.id.toString(),
      category: unit.slug,
      image: imageSrc,
      alt: item.title,
    };
  });

  return (
    <GalleryGrid
      items={mappedItems}
      subtitle="GALERI AKTIVITAS"
      title={`Galeri Kegiatan ${unit.name}`}
      showFilter={false} // No filter needed for single unit
      headerPosition="left" // Default validation from existing implementation might differ
    />
  );
}
