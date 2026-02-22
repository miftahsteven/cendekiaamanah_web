import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { carouselItems } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { asc } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, subtitle, image, link, buttonText, order, isActive } = body;

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    const [newItem] = await db
      .insert(carouselItems)
      .values({
        title,
        subtitle,
        image,
        link,
        buttonText: buttonText || "selengkapnya",
        order: order || 0,
        isActive: isActive ?? true,
      })
      .returning();

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Error creating carousel item:", error);
    return NextResponse.json(
      { error: "Failed to create carousel item" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const items = await db
      .select()
      .from(carouselItems)
      .orderBy(asc(carouselItems.order));

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching carousel items:", error);
    return NextResponse.json(
      { error: "Failed to fetch carousel items" },
      { status: 500 },
    );
  }
}
