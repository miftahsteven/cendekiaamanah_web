import { Metadata } from "next";
import { Suspense } from "react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatsSkeleton } from "@/components/dashboard/DashboardSkeleton";

export const metadata: Metadata = {
  title: "Dashboard - Cendekia Amanah Admin",
  description: "Dashboard admin Cendekia Amanah",
};

export default async function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Static Page Header - renders immediately */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Selamat datang di panel admin Cendekia Amanah
        </p>
      </div>

      {/* Stats Grid wrapped in Suspense - shows skeleton while loading */}
      <Suspense fallback={<DashboardStatsSkeleton />}>
        <DashboardStats />
      </Suspense>
    </div>
  );
}
