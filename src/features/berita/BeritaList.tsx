"use client";

import { NewsItem } from "./constants";
import { NewsCard } from "@/components/common/NewsCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

interface BeritaListProps {
  items: NewsItem[]; // Using common constant type, or should use DB type? Let's use DB type or aligned type.
  // Actually, page.tsx will map DB items to this shape.
  currentPage: number;
  totalPages: number;
}

export function BeritaList({
  items,
  currentPage,
  totalPages,
}: BeritaListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      router.push(`/berita?${params.toString()}`);

      // Scroll to top
      const listElement = document.getElementById("berita-list-top");
      if (listElement) {
        listElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (items.length === 0) {
    return (
      <div className="w-full py-12 text-center text-muted-foreground">
        Tidak ada berita yang ditemukan.
      </div>
    );
  }

  return (
    <div
      className="w-full py-2 md:py-8 md:mt-4 bg-background"
      id="berita-list-top"
    >
      <div className="container mx-auto space-y-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {items.map((news) => (
            <NewsCard
              key={news.id}
              news={news}
              basePath="/berita"
              orientation="horizontal"
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                // Show first, last, current, and adjacent
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }

                if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }

                return null;
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      handlePageChange(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
