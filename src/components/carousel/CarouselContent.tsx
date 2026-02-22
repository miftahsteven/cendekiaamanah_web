import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Eye, EyeOff } from "lucide-react";
import { db } from "@/lib/db";
import { carouselItems } from "@/lib/db/schema";
import { asc } from "drizzle-orm";
import { DeleteCarouselButton } from "@/components/carousel/DeleteCarouselButton";

async function getCarouselItems() {
  return await db
    .select()
    .from(carouselItems)
    .orderBy(asc(carouselItems.order));
}

export async function CarouselContent() {
  const items = await getCarouselItems();

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Daftar Slide ({items.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Belum ada slide carousel</p>
            <Button asChild variant="link">
              <Link href="/dashboard/carousel/create">
                Tambah slide pertama
              </Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors"
              >
                <div className="relative w-full h-48 md:w-32 md:h-20 bg-muted rounded overflow-hidden shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title || `Slide ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-primary/20 to-primary/5" />
                  )}
                </div>

                <div className="flex-1 w-full md:w-auto min-w-0">
                  <h3 className="font-medium truncate">
                    {item.title || `Slide ${index + 1}`}
                  </h3>
                  <span className="text-sm text-muted-foreground line-clamp-2 md:line-clamp-1">
                    {item.subtitle || "Tidak ada subtitle"}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    Order: {item.order}
                  </p>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-2">
                  <div className="flex items-center gap-2">
                    {item.isActive ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                        <Eye className="w-3 h-3" />
                        Aktif
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        <EyeOff className="w-3 h-3" />
                        Nonaktif
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="ghost" size="icon">
                      <Link href={`/dashboard/carousel/${item.id}/edit`}>
                        <Pencil className="w-4 h-4" />
                      </Link>
                    </Button>
                    <DeleteCarouselButton
                      id={item.id}
                      title={item.title || `Slide ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
