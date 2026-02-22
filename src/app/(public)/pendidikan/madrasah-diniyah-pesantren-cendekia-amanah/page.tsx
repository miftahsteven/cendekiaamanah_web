import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Madrasah Diniyah Pesantren Cendekia Amanah | Pendidikan Agama Islam Mendalam",
  description:
    "Madrasah Diniyah (Madin) Pesantren Cendekia Amanah. Memperdalam pemahaman agama Islam melalui kajian kitab kuning, tahsin, dan tahfidz Al-Qur'an untuk membentuk karakter santri yang tafaqquh fiddin.",
  keywords: [
    "Madrasah Diniyah",
    "Madin Cendekia Amanah",
    "Pesantren Depok",
    "Kajian Kitab Kuning",
    "Tahfidz Quran",
  ],
};

import { Suspense } from "react";
import { GallerySkeleton } from "@/components/common/GallerySkeleton";
import { NewsSkeleton } from "@/components/common/NewsSkeleton";
import { DiniyahHeroSection } from "@/features/education/diniyah/HeroSection";
import { DiniyahMottoSection } from "@/features/education/diniyah/MottoSection";
import { DiniyahVisiMisiSection } from "@/features/education/diniyah/VisiMisiSection";
import { DiniyahSchoolProgramSection } from "@/features/education/diniyah/SchoolProgramSection";
import { DiniyahStructureOrganizationSection } from "@/features/education/diniyah/StructureOrganizationSection";
import { DiniyahFacilitySection } from "@/features/education/diniyah/FacilitySection";
import { DiniyahAchievementSection } from "@/features/education/diniyah/AchievementSection";
import { DiniyahGallerySection } from "@/features/education/diniyah/GallerySection";
import { DiniyahNewsSection } from "@/features/education/diniyah/NewsSection";

export default function DiniyahPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <DiniyahHeroSection />

      {/* Section Motto */}
      {/* <DiniyahMottoSection /> */}

      {/* Section Visi Misi */}
      {/* <DiniyahVisiMisiSection /> */}

      {/* Section School Program */}
      <DiniyahSchoolProgramSection />

      {/* Section Achievements */}
      <DiniyahAchievementSection />

      {/* Section Fasilitas Sekolah */}
      <DiniyahFacilitySection />

      {/* Section Gallery */}
      <Suspense fallback={<GallerySkeleton />}>
        <DiniyahGallerySection />
      </Suspense>

      {/* Section Structure Organization */}
      <DiniyahStructureOrganizationSection />

      {/* Section News */}
      <Suspense fallback={<NewsSkeleton />}>
        <DiniyahNewsSection />
      </Suspense>
    </div>
  );
}
