"use client";

import { useEffect, useState, use } from "react";
import { notFound } from "next/navigation";
import { NewsForm } from "@/components/news/NewsForm";
import { getNewsById } from "@/server/actions/news";
import { Loader2 } from "lucide-react";

export default function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const newsId = parseInt(id);

  const [units, setUnits] = useState<Array<{ id: number; name: string }>>([]);
  const [news, setNews] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        if (isNaN(newsId)) {
          setError(true);
          return;
        }

        // Fetch news and units in parallel
        const [newsResult, unitsResponse] = await Promise.all([
          getNewsById(newsId),
          fetch("/api/units"),
        ]);

        if (!newsResult.success || !newsResult.data) {
          setError(true);
          return;
        }

        setNews(newsResult.data);

        if (unitsResponse.ok) {
          const unitsData = await unitsResponse.json();
          setUnits(unitsData);
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [newsId]);

  if (error) {
    notFound();
  }

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      <NewsForm units={units} initialData={news} isEditing />
    </div>
  );
}
