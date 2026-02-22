"use client";

import { DINIYAH_MOTTO_CONTENT } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";
import { MottoSection } from "@/components/public/units/MottoSection";

export function DiniyahMottoSection() {
  return (
    <MottoSection
      headerSubtitle={DINIYAH_MOTTO_CONTENT.headerSubtitle}
      title={DINIYAH_MOTTO_CONTENT.title}
      arabicQuote={DINIYAH_MOTTO_CONTENT.arabicQuote}
      translation={DINIYAH_MOTTO_CONTENT.translation}
      listIntro={DINIYAH_MOTTO_CONTENT.listIntro}
      points={DINIYAH_MOTTO_CONTENT.points}
      backgroundImage={DINIYAH_MOTTO_CONTENT.backgroundImage}
    />
  );
}
