import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SMP Pesantren Cendekia Amanah | Sekolah Menengah Pertama Berbasis Pesantren",
  description:
    "Daftar SMP Pesantren Cendekia Amanah. Sekolah Menengah Pertama (SMP) dengan kurikulum terpadu nasional dan pesantren, membentuk generasi cerdas, berkarakter Islami, dan berprestasi di Depok.",
  keywords: [
    "SMP Pesantren",
    "Sekolah Islam Depok",
    "SMP Cendekia Amanah",
    "Pendidikan Berkarakter",
    "Sekolah Berasrama",
  ],
};

import { Suspense } from "react";
import { GallerySkeleton } from "@/components/common/GallerySkeleton";
import { NewsSkeleton } from "@/components/common/NewsSkeleton";
import { SmpHeroSection } from "@/features/education/smp/HeroSection";
import { SmpMottoSection } from "@/features/education/smp/MottoSection";
import { SmpVisiMisiSection } from "@/features/education/smp/VisiMisiSection";
import { SmpSchoolProgramSection } from "@/features/education/smp/SchoolProgramSection";
import { SmpStructureOrganizationSection } from "@/features/education/smp/StructureOrganizationSection";
import { SmpFacilitySection } from "@/features/education/smp/FacilitySection";
import { SmpAchievementSection } from "@/features/education/smp/AchievementSection";
import { SmpGallerySection } from "@/features/education/smp/GallerySection";
import { SmpNewsSection } from "@/features/education/smp/NewsSection";

export default function SmpPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <SmpHeroSection />

      {/* Section Motto */}
      {/* <SmpMottoSection /> */}

      {/* Section Visi Misi */}
      {/* <SmpVisiMisiSection /> */}

      {/* Section School Program */}
      <SmpSchoolProgramSection />

      {/* Section Achievements */}
      <SmpAchievementSection />

      {/* Section Fasilitas Sekolah */}
      <SmpFacilitySection />

      {/* Section Gallery */}
      <Suspense fallback={<GallerySkeleton />}>
        <SmpGallerySection />
      </Suspense>

      {/* Section Structure Organization */}
      <SmpStructureOrganizationSection />

      {/* Section News */}
      <Suspense fallback={<NewsSkeleton />}>
        <SmpNewsSection />
      </Suspense>
    </div>
  );
}
