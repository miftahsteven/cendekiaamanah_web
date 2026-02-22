import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { carouselItems } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const [item] = await db
      .select()
      .from(carouselItems)
      .where(eq(carouselItems.id, id))
      .limit(1);

    if (!item) {
      return NextResponse.json(
        { error: "Carousel item not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error fetching carousel item:", error);
    return NextResponse.json(
      { error: "Failed to fetch carousel item" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const body = await request.json();
    const { title, subtitle, image, link, buttonText, order, isActive } = body;

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    const [updatedItem] = await db
      .update(carouselItems)
      .set({
        title,
        subtitle,
        image,
        link,
        buttonText: buttonText || "selengkapnya",
        order,
        isActive,
      })
      .where(eq(carouselItems.id, id))
      .returning();

    if (!updatedItem) {
      return NextResponse.json(
        { error: "Carousel item not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error("Error updating carousel item:", error);
    return NextResponse.json(
      { error: "Failed to update carousel item" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const [deletedItem] = await db
      .delete(carouselItems)
      .where(eq(carouselItems.id, id))
      .returning();

    if (!deletedItem) {
      return NextResponse.json(
        { error: "Carousel item not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Carousel item deleted successfully",
      item: deletedItem,
    });
  } catch (error) {
    console.error("Error deleting carousel item:", error);
    return NextResponse.json(
      { error: "Failed to delete carousel item" },
      { status: 500 },
    );
  }
}
