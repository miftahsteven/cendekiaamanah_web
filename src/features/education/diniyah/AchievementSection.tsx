"use client";

import { StudentAchievementSection } from "@/components/public/units/StudentAchievementSection";
import { DINIYAH_ACHIEVEMENTS } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";

export function DiniyahAchievementSection() {
  return (
    <StudentAchievementSection
      subtitle={DINIYAH_ACHIEVEMENTS.subtitle}
      title={DINIYAH_ACHIEVEMENTS.title}
      description={DINIYAH_ACHIEVEMENTS.description}
      achievements={DINIYAH_ACHIEVEMENTS.items}
    />
  );
}
