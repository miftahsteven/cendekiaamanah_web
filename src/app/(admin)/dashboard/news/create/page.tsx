"use client";

import { useEffect, useState } from "react";
import { NewsForm } from "@/components/news/NewsForm";

export default function CreateNewsPage() {
  const [units, setUnits] = useState<Array<{ id: number; name: string }>>([]);
  const [isLoadingUnits, setIsLoadingUnits] = useState(true);

  useEffect(() => {
    async function fetchUnits() {
      try {
        const response = await fetch("/api/units");
        if (response.ok) {
          const data = await response.json();
          setUnits(data);
        }
      } catch (error) {
        console.error("Failed to fetch units:", error);
      } finally {
        setIsLoadingUnits(false);
      }
    }
    fetchUnits();
  }, []);

  return (
    <div className="container mx-auto">
      <NewsForm units={units} isLoadingUnits={isLoadingUnits} />
    </div>
  );
}
