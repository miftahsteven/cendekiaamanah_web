import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, ImageIcon, Calendar } from "lucide-react";
import { getNews } from "@/server/actions/news";
import { DeleteNewsButton } from "@/components/news/DeleteNewsButton";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";
import { Badge } from "@/components/ui/badge";

export async function NewsContent() {
  const result = await getNews({ limit: 50 });
  const items = result.success && result.data ? result.data : [];

  // Fetch all units for mapping
  const allUnits = await db.select().from(units);
  const unitsMap = new Map(allUnits.map((u) => [u.id, u.name]));

  const getUnitLabel = (id: number | null) => {
    if (!id) return "Umum";
    return unitsMap.get(id) || "Unknown";
  };

  // Helper to construct image URL
  const getImageUrl = (path: string) => {
    if (path.startsWith("http")) return path;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${path}`;
  };

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Daftar Berita ({items.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Belum ada berita yang dibuat</p>
            <Button asChild variant="link">
              <Link href="/dashboard/news/create">Buat berita pertama</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden group flex flex-col sm:flex-row"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-48 aspect-video sm:aspect-auto bg-muted shrink-0">
                  {item.image ? (
                    <Image
                      src={getImageUrl(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3
                          className="font-semibold text-lg line-clamp-1"
                          title={item.title}
                        >
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.createdAt.toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span>•</span>
                          <Badge
                            variant="secondary"
                            className="text-xs py-0 h-5"
                          >
                            {getUnitLabel(item.unitId)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Link href={`/dashboard/news/${item.id}/edit`}>
                            <Pencil className="w-4 h-4" />
                          </Link>
                        </Button>
                        <DeleteNewsButton id={item.id} title={item.title} />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {item.excerpt || "Tidak ada ringkasan."}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
