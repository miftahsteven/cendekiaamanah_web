/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/lib/db";
import { gallery } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { desc, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getGalleryItems({
  unitId,
  page = 1,
  limit = 10,
}: {
  unitId?: number;
  page?: number;
  limit?: number;
} = {}) {
  try {
    const offset = (page - 1) * limit;

    const whereClause = unitId
      ? unitId === -1
        ? undefined
        : eq(gallery.unitId, unitId)
      : undefined;

    const items = await db.query.gallery.findMany({
      orderBy: [desc(gallery.createdAt)],
      with: {
        unit: true,
      },
      where: whereClause,
      limit: limit,
      offset: offset,
    });

    const allItems = await db
      .select({ count: sql<number>`count(*)` })
      .from(gallery)
      .where(whereClause);

    const totalCount = Number(allItems[0]?.count || 0);
    const totalPages = Math.ceil(totalCount / limit);

    return {
      success: true,
      data: items,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
      },
    };
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return { success: false, error: "Failed to fetch gallery items" };
  }
}

export async function createGalleryItem(data: {
  title: string;
  image: string;
  unitId: number | null;
}) {
  try {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "1") {
      return { success: false, error: "Unauthorized" };
    }

    await db.insert(gallery).values({
      title: data.title,
      image: data.image,
      unitId: data.unitId,
    });

    revalidatePath("/dashboard/gallery");
    revalidatePath("/");
    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return { success: false, error: "Failed to create gallery item" };
  }
}

export async function updateGalleryItem(
  id: number,
  data: {
    title: string;
    image: string;
    unitId: number | null;
  },
) {
  try {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "1") {
      return { success: false, error: "Unauthorized" };
    }

    const existingItem = await db
      .select()
      .from(gallery)
      .where(eq(gallery.id, id))
      .limit(1);

    if (!existingItem.length) {
      return { success: false, error: "Item not found" };
    }

    // User said: "remove image from claudinary if changed or delete"
    if (existingItem[0].image !== data.image) {
      // Extract public ID from URL/path
      // stored image is just a path or URL.
      const oldImage = existingItem[0].image;
      if (oldImage) {
        try {
          // Optimization: Just rely on Cloudinary to handle non-existent gracefully or catch error.
          const publicIdMatch = oldImage.match(
            /upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/,
          );
          let publicIdToDelete = oldImage;

          if (oldImage.startsWith("http")) {
            // if full url by mistake
            if (publicIdMatch) publicIdToDelete = publicIdMatch[1];
          } else {
            // assume it's relative path or public id.
            // remove extension if present
            publicIdToDelete = oldImage.replace(/\.[^/.]+$/, "");
          }

          await cloudinary.uploader.destroy(publicIdToDelete);
        } catch (err) {
          console.error("Failed to delete old image from Cloudinary", err);
        }
      }
    }

    await db
      .update(gallery)
      .set({
        title: data.title,
        image: data.image,
        unitId: data.unitId,
      })
      .where(eq(gallery.id, id));

    revalidatePath("/dashboard/gallery");
    revalidatePath("/");
    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return { success: false, error: "Failed to update gallery item" };
  }
}

export async function deleteGalleryItem(id: number) {
  try {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "1") {
      return { success: false, error: "Unauthorized" };
    }

    const existingItem = await db
      .select()
      .from(gallery)
      .where(eq(gallery.id, id))
      .limit(1);

    if (existingItem.length) {
      const image = existingItem[0].image;
      if (image) {
        try {
          const publicIdToDelete = image.replace(/\.[^/.]+$/, "");
          // If full URL logic needed, add here.
          await cloudinary.uploader.destroy(publicIdToDelete);
        } catch (err) {
          console.error("Failed to delete image from Cloudinary", err);
        }
      }
    }

    await db.delete(gallery).where(eq(gallery.id, id));

    revalidatePath("/dashboard/gallery");
    revalidatePath("/");
    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return { success: false, error: "Failed to delete gallery item" };
  }
}
