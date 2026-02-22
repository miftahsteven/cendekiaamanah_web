"use client";

import { DINIYAH_HERO_CONTENT } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";
import { HeroSection } from "@/components/public/units/HeroSection";

export function DiniyahHeroSection() {
  return (
    <HeroSection
      title={DINIYAH_HERO_CONTENT.title}
      description={DINIYAH_HERO_CONTENT.description}
      programImage={DINIYAH_HERO_CONTENT.programImage}
      socialMedia={DINIYAH_HERO_CONTENT.socialMedia}
      email={DINIYAH_HERO_CONTENT.email}
      phone={DINIYAH_HERO_CONTENT.phone}
      registrationLink={DINIYAH_HERO_CONTENT.registrationLink}
      registrationLabel={DINIYAH_HERO_CONTENT.registrationLabel}
    />
  );
}
