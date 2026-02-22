"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  CategoryFilter,
  FilterCategory,
} from "@/components/common/CategoryFilter";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

interface BeritaFilterProps {
  categories: readonly FilterCategory[];
}

export function BeritaFilter({ categories }: BeritaFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Update URL on category change
  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category && category !== "all") {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    // Reset page to 1 when filter changes
    params.set("page", "1");
    router.push(`/berita?${params.toString()}`);
  };

  // Update URL on search change (debounced)
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }
    // Only push if value changed to avoid redundant pushes on load
    // But we need to check if current param differs from debounced
    const currentSearchParam = searchParams.get("search") || "";
    if (debouncedSearch !== currentSearchParam) {
      params.set("page", "1"); // Reset page
      router.push(`/berita?${params.toString()}`);
    }
  }, [debouncedSearch, router, searchParams]);

  return (
    <div className="w-full md:py-4 sticky top-16 md:top-14 z-20 bg-background/95 backdrop-blur-sm transition-all shadow-none border-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Filter Categories */}
        <div className="w-full md:w-auto hidden md:flex justify-start">
          <CategoryFilter
            activeFilter={activeCategory}
            onFilterChange={handleCategoryChange}
            categories={categories}
          />
        </div>

        {/* Search Input */}
        <div className="w-full md:w-1/3 relative">
          <div className="relative rounded-full w-full bg-white p-1.5 border border-input shadow-sm">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Cari berita..."
              className="pl-10 rounded-full w-full bg-transparent border-none shadow-none focus-visible:ring-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
