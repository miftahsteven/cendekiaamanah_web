"use client";

import { StudentAchievementSection } from "@/components/public/units/StudentAchievementSection";
import { PESANTREN_ACHIEVEMENTS } from "@/app/(public)/profile/constants";

export function PesantrenAchievementSection() {
  return (
    <StudentAchievementSection
      subtitle={PESANTREN_ACHIEVEMENTS.subtitle}
      title={PESANTREN_ACHIEVEMENTS.title}
      description={PESANTREN_ACHIEVEMENTS.description}
      achievements={PESANTREN_ACHIEVEMENTS.items}
    />
  );
}
