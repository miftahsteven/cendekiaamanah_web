"use client";

import { SMA_MOTTO_CONTENT } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";
import { MottoSection } from "@/components/public/units/MottoSection";

export function SmaMottoSection() {
  return (
    <MottoSection
      headerSubtitle={SMA_MOTTO_CONTENT.headerSubtitle}
      title={SMA_MOTTO_CONTENT.title}
      arabicQuote={SMA_MOTTO_CONTENT.arabicQuote}
      translation={SMA_MOTTO_CONTENT.translation}
      listIntro={SMA_MOTTO_CONTENT.listIntro}
      points={SMA_MOTTO_CONTENT.points}
      backgroundImage={SMA_MOTTO_CONTENT.backgroundImage}
    />
  );
}
