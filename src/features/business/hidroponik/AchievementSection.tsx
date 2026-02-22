"use client";

import { StudentAchievementSection } from "@/components/public/units/StudentAchievementSection";
import { HIDROPONIK_ACHIEVEMENTS } from "@/app/(public)/bisnis/hidroponik-pesantren-cendekia-amanah/constants";

export function HidroponikAchievementSection() {
  return (
    <StudentAchievementSection
      subtitle={HIDROPONIK_ACHIEVEMENTS.subtitle}
      title={HIDROPONIK_ACHIEVEMENTS.title}
      description={HIDROPONIK_ACHIEVEMENTS.description}
      achievements={HIDROPONIK_ACHIEVEMENTS.items}
    />
  );
}
