/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "@/lib/db";
import { news, units } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { desc, eq, and, sql, inArray } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getNews({
  unitId,
  unitIds,
  limit = 10,
  page = 1,
  query,
}: {
  unitId?: number | null;
  unitIds?: number[];
  limit?: number;
  page?: number;
  query?: string;
} = {}) {
  try {
    const offset = (page - 1) * limit;

    const conditions = [];
    if (unitIds && unitIds.length > 0) {
      conditions.push(inArray(news.unitId, unitIds));
    } else if (unitId !== undefined) {
      // If unitId is null, it means "Umum" (General), so we specifically look for null
      if (unitId === null) {
        conditions.push(sql`${news.unitId} IS NULL`);
      } else {
        // If unitId is a specific number
        conditions.push(eq(news.unitId, unitId));
      }
    }

    // basic search if query exists
    if (query) {
      conditions.push(sql`${news.title} ILIKE ${`%${query}%`}`);
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    const data = await db.query.news.findMany({
      orderBy: [desc(news.createdAt)],
      where: whereClause,
      limit: limit,
      offset: offset,
      with: {
        unit: true,
        author: true,
      },
    });

    // Get total count for pagination
    // This is a bit expensive but necessary for pagination
    // A more optimized way would be to use a separate count query or estimated count
    // For now, simple count is fine
    const allItems = await db
      .select({ count: sql<number>`count(*)` })
      .from(news)
      .where(whereClause);

    const totalCount = Number(allItems[0]?.count || 0);
    const totalPages = Math.ceil(totalCount / limit);

    return {
      success: true,
      data: data,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
      },
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return { success: false, error: "Failed to fetch news" };
  }
}

export async function getNewsById(id: number) {
  try {
    const item = await db.query.news.findFirst({
      where: eq(news.id, id),
      with: {
        unit: true,
        author: true,
      },
    });

    if (!item) {
      return { success: false, error: "News not found" };
    }

    return { success: true, data: item };
  } catch (error) {
    console.error("Error fetching news by id:", error);
    return { success: false, error: "Failed to fetch news" };
  }
}

export async function createNews(data: {
  title: string;
  excerpt?: string;
  content: string;
  image?: string;
  unitId: number | null;
  isPublished?: boolean;
}) {
  try {
    const session = await auth();
    if (!session || (session.user as any).role !== "admin") {
      return { success: false, error: "Unauthorized" };
    }

    // Generate slug from title
    let slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Ensure slug uniqueness (simple append random string if conflict, or just timestamp)
    // For simplicity, appending timestamp
    slug = `${slug}-${Date.now()}`;

    await db.insert(news).values({
      title: data.title,
      slug: slug,
      excerpt: data.excerpt,
      content: data.content, // HTML content from Tiptap
      image: data.image, // Path/PublicID from Cloudinary
      unitId: data.unitId,
      authorId: parseInt((session.user as any).id),
      isPublished: data.isPublished ?? true, // Default to published for now
      publishedAt: new Date(),
    });

    revalidatePath("/dashboard/news");
    revalidatePath("/");
    revalidatePath("/profile");
    revalidateTag("news", "max");
    return { success: true };
  } catch (error) {
    console.error("Error creating news:", error);
    return { success: false, error: "Failed to create news" };
  }
}

export async function updateNews(
  id: number,
  data: {
    title: string;
    excerpt?: string;
    content: string;
    image?: string;
    unitId: number | null;
    isPublished?: boolean;
  },
) {
  try {
    const session = await auth();
    if (!session || (session.user as any).role !== "admin") {
      return { success: false, error: "Unauthorized" };
    }

    const existingItem = await db
      .select()
      .from(news)
      .where(eq(news.id, id))
      .limit(1);

    if (!existingItem.length) {
      return { success: false, error: "News not found" };
    }

    // Handle Image Deletion if Changed
    if (existingItem[0].image && existingItem[0].image !== data.image) {
      const oldImage = existingItem[0].image;
      if (oldImage) {
        try {
          // Basic heuristic to extract public_id if it's not a full URL
          // or if it IS a full URL, try to extract it.
          // Since we save only path/public_id, we can just try to destroy it.
          // If the user previously saved a full URL by mistake, we might need to parse it.
          // Assuming we are saving proper public_id as per plan.

          // If it looks like a URL, try to extract public_id
          let publicIdToDelete = oldImage;
          if (oldImage.startsWith("http")) {
            const match = oldImage.match(
              /upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/,
            );
            if (match) publicIdToDelete = match[1];
          } else {
            // remove extension
            publicIdToDelete = oldImage.replace(/\.[^/.]+$/, "");
          }

          await cloudinary.uploader.destroy(publicIdToDelete);
        } catch (err) {
          console.error("Failed to delete old image from Cloudinary", err);
        }
      }
    }

    // Update Slug if title changed?
    // Usually better to keep slug stable for SEO, but if user wants to change it,
    // we could. Le's keep slug stable for now unless explicitly requested.
    // Or we update it. Let's update it to keep it in sync with title,
    // but typically we shouldn't change slugs of published items often.
    // For now, let's update it for consistency.
    let slug = existingItem[0].slug;
    if (existingItem[0].title !== data.title) {
      slug =
        data.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "") + `-${Date.now()}`;
    }

    await db
      .update(news)
      .set({
        title: data.title,
        slug: slug,
        excerpt: data.excerpt,
        content: data.content,
        image: data.image,
        unitId: data.unitId,
        isPublished: data.isPublished,
        updatedAt: new Date(),
      })
      .where(eq(news.id, id));

    revalidatePath("/dashboard/news");
    revalidatePath("/");
    revalidatePath("/profile");
    revalidateTag("news", "max");
    return { success: true };
  } catch (error) {
    console.error("Error updating news:", error);
    return { success: false, error: "Failed to update news" };
  }
}

export async function deleteNews(id: number) {
  try {
    const session = await auth();
    if (!session || (session.user as any).role !== "admin") {
      return { success: false, error: "Unauthorized" };
    }

    const existingItem = await db
      .select()
      .from(news)
      .where(eq(news.id, id))
      .limit(1);

    if (existingItem.length) {
      const image = existingItem[0].image;
      if (image) {
        try {
          let publicIdToDelete = image;
          if (image.startsWith("http")) {
            const match = image.match(/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/);
            if (match) publicIdToDelete = match[1];
          } else {
            publicIdToDelete = image.replace(/\.[^/.]+$/, "");
          }
          await cloudinary.uploader.destroy(publicIdToDelete);
        } catch (err) {
          console.error("Failed to delete image from Cloudinary", err);
        }
      }
    }

    await db.delete(news).where(eq(news.id, id));

    revalidatePath("/dashboard/news");
    revalidatePath("/");
    revalidatePath("/profile");
    revalidateTag("news", "max");
    return { success: true };
  } catch (error) {
    console.error("Error deleting news:", error);
    return { success: false, error: "Failed to delete news" };
  }
}

export async function getNewsBySlug(slug: string) {
  try {
    const item = await db.query.news.findFirst({
      where: eq(news.slug, slug),
      with: {
        unit: true,
        author: true,
      },
    });

    if (!item) {
      return { success: false, error: "News not found" };
    }

    return { success: true, data: item };
  } catch (error) {
    console.error("Error fetching news by slug:", error);
    return { success: false, error: "Failed to fetch news" };
  }
}
