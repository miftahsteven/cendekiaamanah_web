import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Image, SlidersHorizontal, Users } from "lucide-react";
import { db } from "@/lib/db";
import { news, gallery, carouselItems, units } from "@/lib/db/schema";
import { count } from "drizzle-orm";

async function getStats() {
  const [newsCount] = await db.select({ count: count() }).from(news);
  const [galleryCount] = await db.select({ count: count() }).from(gallery);
  const [carouselCount] = await db
    .select({ count: count() })
    .from(carouselItems);
  const [unitsCount] = await db.select({ count: count() }).from(units);

  return {
    news: newsCount.count,
    gallery: galleryCount.count,
    carousel: carouselCount.count,
    units: unitsCount.count,
  };
}

export async function DashboardStats() {
  const stats = await getStats();

  const statCards = [
    {
      title: "Total Berita",
      value: stats.news,
      icon: Newspaper,
      color: "bg-blue-500",
    },
    {
      title: "Total Galeri",
      value: stats.gallery,
      icon: Image,
      color: "bg-green-500",
    },
    {
      title: "Total Carousel",
      value: stats.carousel,
      icon: SlidersHorizontal,
      color: "bg-purple-500",
    },
    {
      title: "Unit Aktif",
      value: stats.units,
      icon: Users,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
