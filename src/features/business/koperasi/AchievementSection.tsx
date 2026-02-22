"use client";

import { StudentAchievementSection } from "@/components/public/units/StudentAchievementSection";
import { KOPERASI_ACHIEVEMENTS } from "@/app/(public)/bisnis/koperasi-pesantren-cendekia-amanah/constants";

export function KoperasiAchievementSection() {
  return (
    <StudentAchievementSection
      subtitle={KOPERASI_ACHIEVEMENTS.subtitle}
      title={KOPERASI_ACHIEVEMENTS.title}
      description={KOPERASI_ACHIEVEMENTS.description}
      achievements={KOPERASI_ACHIEVEMENTS.items}
    />
  );
}
