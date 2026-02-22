"use client";

import { StudentAchievementSection } from "@/components/public/units/StudentAchievementSection";
import { SMP_ACHIEVEMENTS } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";

export function SmpAchievementSection() {
  return (
    <StudentAchievementSection
      subtitle={SMP_ACHIEVEMENTS.subtitle}
      title={SMP_ACHIEVEMENTS.title}
      description={SMP_ACHIEVEMENTS.description}
      achievements={SMP_ACHIEVEMENTS.items}
    />
  );
}
