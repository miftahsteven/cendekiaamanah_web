import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hidroponik Pesantren Cendekia Amanah | Pertanian Modern Berkualitas",
  description:
    "Unit Bisnis Hidroponik Pesantren Cendekia Amanah. Pertanian modern penghasil sayuran segar, sehat, dan bebas pestisida. Pusat pelatihan agribisnis santri dan masyarakat.",
  keywords: [
    "Hidroponik Pesantren",
    "Sayuran Segar Depok",
    "Pertanian Modern",
    "Bisnis Pesantren",
    "Agribisnis Santri",
  ],
};

import { Suspense } from "react";
import { GallerySkeleton } from "@/components/common/GallerySkeleton";
import { NewsSkeleton } from "@/components/common/NewsSkeleton";
import { HidroponikHeroSection } from "@/features/business/hidroponik/HeroSection";
import { HidroponikSchoolProgramSection } from "@/features/business/hidroponik/SchoolProgramSection";
import { HidroponikAchievementSection } from "@/features/business/hidroponik/AchievementSection";
import { HidroponikFacilitySection } from "@/features/business/hidroponik/FacilitySection";
import { HidroponikGallerySection } from "@/features/business/hidroponik/GallerySection";
import { HidroponikStructureOrganizationSection } from "@/features/business/hidroponik/StructureOrganizationSection";
import { HidroponikNewsSection } from "@/features/business/hidroponik/NewsSection";

export default function HidroponikPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <HidroponikHeroSection />

      {/* Section Program Unit Bisnis */}
      <HidroponikSchoolProgramSection />

      {/* Section Achievements */}
      {/* <HidroponikAchievementSection /> */}

      {/* Section Fasilitas */}
      <HidroponikFacilitySection />

      {/* Section Gallery */}
      <Suspense fallback={<GallerySkeleton />}>
        <HidroponikGallerySection />
      </Suspense>

      {/* Section Tim Pengelola */}
      <HidroponikStructureOrganizationSection />

      {/* Section News */}
      <Suspense fallback={<NewsSkeleton />}>
        <HidroponikNewsSection />
      </Suspense>
    </div>
  );
}
