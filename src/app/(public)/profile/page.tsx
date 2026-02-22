import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesantren Cendekia Amanah",
  description:
    "Pesantren Cendekia Amanah - Lembaga pendidikan Islam terpadu yang menggabungkan sistem pesantren tradisional dengan pendidikan modern",
};

import { PesantrenHeroSection } from "@/features/profile/HeroSection";
import { PesantrenMottoSection } from "@/features/profile/MottoSection";
import { PesantrenVisiMisiSection } from "@/features/profile/VisiMisiSection";
import { PesantrenSchoolProgramSection } from "@/features/profile/SchoolProgramSection";
import { PesantrenStructureOrganizationSection } from "@/features/profile/StructureOrganizationSection";
import { PesantrenFacilitySection } from "@/features/profile/FacilitySection";
import { PesantrenAchievementSection } from "@/features/profile/AchievementSection";
import { PesantrenGallerySection } from "@/features/profile/GallerySection";
import { PesantrenNewsSection } from "@/features/profile/NewsSection";

import { PesantrenLeaderQuoteSection } from "@/features/profile/LeaderQuoteSection";

export default function PesantrenPage() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <PesantrenHeroSection />

      {/* Section Motto */}
      <PesantrenMottoSection />

      {/* Section Visi Misi */}
      <PesantrenVisiMisiSection />

      {/* Section Leader Quote */}
      <PesantrenLeaderQuoteSection />

      {/* Section Program Pesantren */}
      {/* <PesantrenSchoolProgramSection /> */}

      {/* Section Achievements */}
      {/* <PesantrenAchievementSection /> */}

      {/* Section Fasilitas Pesantren */}
      <PesantrenFacilitySection />

      {/* Section Gallery */}
      <PesantrenGallerySection />

      {/* Section Structure Organization */}
      <PesantrenStructureOrganizationSection />

      {/* Section News */}
      <PesantrenNewsSection />
    </div>
  );
}
