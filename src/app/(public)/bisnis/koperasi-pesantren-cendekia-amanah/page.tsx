import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koperasi Pesantren Cendekia Amanah | Ekonomi Umat Berbasis Syariah",
  description:
    "Koperasi Pesantren Cendekia Amanah (Kopontren). Menyediakan kebutuhan santri dan masyarakat dengan prinsip ekonomi syariah yang transparan, amanah, dan mensejahterakan.",
  keywords: [
    "Koperasi Pesantren",
    "Kopontren Cendekia Amanah",
    "Ekonomi Syariah",
    "Belanja Santri",
    "Unit Usaha Pesantren",
  ],
};

import { Suspense } from "react";
import { GallerySkeleton } from "@/components/common/GallerySkeleton";
import { NewsSkeleton } from "@/components/common/NewsSkeleton";
import { KoperasiHeroSection } from "@/features/business/koperasi/HeroSection";
import { KoperasiSchoolProgramSection } from "@/features/business/koperasi/SchoolProgramSection";
import { KoperasiAchievementSection } from "@/features/business/koperasi/AchievementSection";
import { KoperasiFacilitySection } from "@/features/business/koperasi/FacilitySection";
import { KoperasiGallerySection } from "@/features/business/koperasi/GallerySection";
import { KoperasiStructureOrganizationSection } from "@/features/business/koperasi/StructureOrganizationSection";
import { KoperasiNewsSection } from "@/features/business/koperasi/NewsSection";

export default function KoperasiPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <KoperasiHeroSection />

      {/* Section Layanan Koperasi */}
      <KoperasiSchoolProgramSection />

      {/* Section Achievements */}
      {/* <KoperasiAchievementSection /> */}

      {/* Section Fasilitas */}
      <KoperasiFacilitySection />

      {/* Section Gallery */}
      <Suspense fallback={<GallerySkeleton />}>
        <KoperasiGallerySection />
      </Suspense>

      {/* Section Pengurus Koperasi */}
      <KoperasiStructureOrganizationSection />

      {/* Section News */}
      <Suspense fallback={<NewsSkeleton />}>
        <KoperasiNewsSection />
      </Suspense>
    </div>
  );
}
