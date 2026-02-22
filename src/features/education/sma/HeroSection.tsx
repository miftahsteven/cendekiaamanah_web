"use client";

import { SMA_HERO_CONTENT } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";
import { HeroSection } from "@/components/public/units/HeroSection";

export function SmaHeroSection() {
  return (
    <HeroSection
      title={SMA_HERO_CONTENT.title}
      description={SMA_HERO_CONTENT.description}
      programImage={SMA_HERO_CONTENT.programImage}
      socialMedia={SMA_HERO_CONTENT.socialMedia}
      email={SMA_HERO_CONTENT.email}
      phone={SMA_HERO_CONTENT.phone}
      registrationLink={SMA_HERO_CONTENT.registrationLink}
      registrationLabel={SMA_HERO_CONTENT.registrationLabel}
    />
  );
}
