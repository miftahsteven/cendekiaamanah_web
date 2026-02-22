"use client";

import { SMP_MOTTO_CONTENT } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";
import { MottoSection } from "@/components/public/units/MottoSection";

export function SmpMottoSection() {
  return (
    <MottoSection
      headerSubtitle={SMP_MOTTO_CONTENT.headerSubtitle}
      title={SMP_MOTTO_CONTENT.title}
      arabicQuote={SMP_MOTTO_CONTENT.arabicQuote}
      translation={SMP_MOTTO_CONTENT.translation}
      listIntro={SMP_MOTTO_CONTENT.listIntro}
      points={SMP_MOTTO_CONTENT.points}
      backgroundImage={SMP_MOTTO_CONTENT.backgroundImage}
    />
  );
}
