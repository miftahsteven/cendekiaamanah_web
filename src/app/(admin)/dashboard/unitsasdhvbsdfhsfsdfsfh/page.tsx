import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, School } from "lucide-react";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";
import { asc } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Kelola Unit - Cendekia Amanah Admin",
  description: "Kelola unit-unit Cendekia Amanah",
};

async function getUnits() {
  return await db.query.units.findMany({
    orderBy: [asc(units.id)],
  });
}

export default async function UnitsPage() {
  const unitsList = await getUnits();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Kelola Unit</h1>
          <p className="text-muted-foreground">
            Lihat dan edit informasi unit-unit Cendekia Amanah
          </p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <School className="w-5 h-5" />
          <span className="text-sm font-medium">
            {unitsList.length} Unit Total
          </span>
        </div>
      </div>

      {/* Units Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {unitsList.map((unit) => (
          <Card key={unit.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg line-clamp-1">
                    {unit.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                      {unit.abbreviation}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      /{unit.slug}
                    </span>
                  </div>
                </div>
                <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                  <Link href={`/dashboard/units/${unit.id}/edit`}>
                    <Pencil className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {unit.description || "Tidak ada deskripsi"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Card */}
      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <School className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">Tentang Unit</h3>
              <p className="text-sm text-muted-foreground">
                Unit-unit ini adalah bagian permanen dari Cendekia Amanah. Anda
                dapat mengedit nama, singkatan, dan deskripsi, namun tidak dapat
                menambah atau menghapus unit dari sistem.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
