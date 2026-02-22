import { db } from "@/lib/db";
import { gallery, units } from "@/lib/db/schema";
import { GalleryForm } from "@/components/gallery/GalleryForm";
import { Metadata } from "next";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit Foto Galeri - Cendekia Amanah Admin",
  description: "Edit informasi foto galeri Cendekia Amanah",
};

interface EditGalleryPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditGalleryPage({
  params,
}: EditGalleryPageProps) {
  const { id } = await params;
  const galleryId = parseInt(id);

  if (isNaN(galleryId)) {
    notFound();
  }

  const [galleryItem] = await db
    .select()
    .from(gallery)
    .where(eq(gallery.id, galleryId))
    .limit(1);

  if (!galleryItem) {
    notFound();
  }

  const unitsList = await db
    .select({ id: units.id, name: units.name })
    .from(units);

  return <GalleryForm initialData={galleryItem} units={unitsList} isEditing />;
}
