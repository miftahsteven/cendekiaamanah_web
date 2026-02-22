"use client";

import { PESANTREN_MOTTO_CONTENT } from "@/app/(public)/profile/constants";
import { MottoSection } from "@/components/public/units/MottoSection";

export function PesantrenMottoSection() {
  return (
    <MottoSection
      headerSubtitle={PESANTREN_MOTTO_CONTENT.headerSubtitle}
      title={PESANTREN_MOTTO_CONTENT.title}
      arabicQuote={PESANTREN_MOTTO_CONTENT.arabicQuote}
      translation={PESANTREN_MOTTO_CONTENT.translation}
      listIntro={PESANTREN_MOTTO_CONTENT.listIntro}
      points={PESANTREN_MOTTO_CONTENT.points}
      backgroundImage={PESANTREN_MOTTO_CONTENT.backgroundImage}
    />
  );
}
