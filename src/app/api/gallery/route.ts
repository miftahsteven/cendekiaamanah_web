import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { gallery } from "@/lib/db/schema";
import { auth } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, image, unitId } = body;

    if (!title || !image) {
      return NextResponse.json(
        { error: "Title and image are required" },
        { status: 400 },
      );
    }

    const [newGallery] = await db
      .insert(gallery)
      .values({
        title,
        image,
        unitId: unitId || null,
      })
      .returning();

    return NextResponse.json(newGallery, { status: 201 });
  } catch (error) {
    console.error("Error creating gallery:", error);
    return NextResponse.json(
      { error: "Failed to create gallery item" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const allGallery = await db.query.gallery.findMany({
      with: {
        unit: true,
      },
      orderBy: (gallery, { desc }) => [desc(gallery.createdAt)],
    });

    return NextResponse.json(allGallery);
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery" },
      { status: 500 },
    );
  }
}
