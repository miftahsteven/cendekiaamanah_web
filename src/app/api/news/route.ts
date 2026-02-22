import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { news } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { slugify } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, excerpt, content, image, unitId, isPublished } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 },
      );
    }

    const slug = slugify(title) + "-" + Date.now();

    const [newNews] = await db
      .insert(news)
      .values({
        title,
        slug,
        excerpt,
        content,
        image,
        unitId: unitId || null,
        isPublished,
        publishedAt: isPublished ? new Date() : null,
      })
      .returning();

    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json(
      { error: "Failed to create news" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const allNews = await db.query.news.findMany({
      with: {
        unit: true,
      },
      orderBy: (news, { desc }) => [desc(news.createdAt)],
    });

    return NextResponse.json(allNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
