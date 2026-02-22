"use client";

import { StudentAchievementSection } from "@/components/public/units/StudentAchievementSection";
import { SMA_ACHIEVEMENTS } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";

export function SmaAchievementSection() {
  return (
    <StudentAchievementSection
      subtitle={SMA_ACHIEVEMENTS.subtitle}
      title={SMA_ACHIEVEMENTS.title}
      description={SMA_ACHIEVEMENTS.description}
      achievements={SMA_ACHIEVEMENTS.items}
    />
  );
}
