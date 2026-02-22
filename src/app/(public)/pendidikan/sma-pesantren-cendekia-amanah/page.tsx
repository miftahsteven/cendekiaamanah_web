import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMA Pesantren Cendekia Amanah | Sekolah Menengah Atas Unggulan",
  description:
    "SMA Pesantren Cendekia Amanah. Mempersiapkan pemimpin masa depan dengan integrasi kurikulum nasional dan kepesantrenan, fokus pada tahfidz dan sains di lingkungan yang asri.",
  keywords: [
    "SMA Pesantren",
    "SMA Unggulan Depok",
    "SMA Cendekia Amanah",
    "Sekolah Tahfidz",
    "Pesantren Modern",
  ],
};

import { Suspense } from "react";
import { GallerySkeleton } from "@/components/common/GallerySkeleton";
import { NewsSkeleton } from "@/components/common/NewsSkeleton";
import { SmaHeroSection } from "@/features/education/sma/HeroSection";
import { SmaMottoSection } from "@/features/education/sma/MottoSection";
import { SmaVisiMisiSection } from "@/features/education/sma/VisiMisiSection";
import { SmaSchoolProgramSection } from "@/features/education/sma/SchoolProgramSection";
import { SmaStructureOrganizationSection } from "@/features/education/sma/StructureOrganizationSection";
import { SmaFacilitySection } from "@/features/education/sma/FacilitySection";
import { SmaAchievementSection } from "@/features/education/sma/AchievementSection";
import { SmaGallerySection } from "@/features/education/sma/GallerySection";
import { SmaNewsSection } from "@/features/education/sma/NewsSection";

export default function SmaPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <SmaHeroSection />

      {/* Section Motto */}
      {/* <SmaMottoSection /> */}

      {/* Section Visi Misi */}
      {/* <SmaVisiMisiSection /> */}

      {/* Section School Program */}
      <SmaSchoolProgramSection />

      {/* Section Achievements */}
      <SmaAchievementSection />

      {/* Section Fasilitas Sekolah */}
      <SmaFacilitySection />

      {/* Section Gallery */}
      <Suspense fallback={<GallerySkeleton />}>
        <SmaGallerySection />
      </Suspense>

      {/* Section Structure Organization */}
      <SmaStructureOrganizationSection />

      {/* Section News */}
      <Suspense fallback={<NewsSkeleton />}>
        <SmaNewsSection />
      </Suspense>
    </div>
  );
}
