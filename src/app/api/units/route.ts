import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const allUnits = await db.query.units.findMany({
      orderBy: (units, { asc }) => [asc(units.id)],
    });

    return NextResponse.json(allUnits);
  } catch (error) {
    console.error("Error fetching units:", error);
    return NextResponse.json(
      { error: "Failed to fetch units" },
      { status: 500 },
    );
  }
}
