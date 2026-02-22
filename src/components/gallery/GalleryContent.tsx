import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, ImageIcon } from "lucide-react";
import { getGalleryItems } from "@/server/actions/gallery";
import { DeleteGalleryButton } from "@/components/gallery/DeleteGalleryButton";
import { db } from "@/lib/db";
import { units } from "@/lib/db/schema";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface GalleryContentProps {
  page: number;
}

export async function GalleryContent({ page }: GalleryContentProps) {
  const limit = 12;

  const result = await getGalleryItems({ page, limit });
  const items = result.success && result.data ? result.data : [];
  const pagination = result.pagination || {
    page: 1,
    limit: 12,
    totalCount: 0,
    totalPages: 1,
  };

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
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Daftar Foto ({pagination.totalCount})</CardTitle>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground border rounded-lg">
            <p>Belum ada foto di galeri</p>
            <Button asChild variant="link">
              <Link href="/dashboard/gallery/create">Tambah foto pertama</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group flex flex-col h-full"
                >
                  <div className="relative aspect-video bg-muted border-b">
                    {item.image ? (
                      <Image
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                        <ImageIcon className="w-10 h-10" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-1 rounded-md">
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white hover:text-white hover:bg-white/20"
                      >
                        <Link href={`/dashboard/gallery/${item.id}/edit`}>
                          <Pencil className="w-4 h-4" />
                        </Link>
                      </Button>
                      <DeleteGalleryButton id={item.id} title={item.title} />
                    </div>
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <h3
                      className="font-semibold truncate mb-auto"
                      title={item.title}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full truncate max-w-[120px]">
                        {getUnitLabel(item.unitId)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.createdAt.toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`?page=${page > 1 ? page - 1 : 1}`}
                      className={
                        page <= 1 ? "pointer-events-none opacity-50" : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: pagination.totalPages }).map((_, i) => {
                    const p = i + 1;
                    if (
                      p === 1 ||
                      p === pagination.totalPages ||
                      (p >= page - 1 && p <= page + 1)
                    ) {
                      return (
                        <PaginationItem key={p}>
                          <PaginationLink
                            href={`?page=${p}`}
                            isActive={page === p}
                          >
                            {p}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                    if (p === page - 2 || p === page + 2) {
                      return (
                        <PaginationItem key={p}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}

                  <PaginationItem>
                    <PaginationNext
                      href={`?page=${page < pagination.totalPages ? page + 1 : pagination.totalPages}`}
                      className={
                        page >= pagination.totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
