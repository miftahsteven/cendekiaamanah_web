"use client";

import { PESANTREN_HERO_CONTENT } from "@/app/(public)/profile/constants";
import { HeroSection } from "@/components/public/units/HeroSection";

export function PesantrenHeroSection() {
  return (
    <HeroSection
      title={PESANTREN_HERO_CONTENT.title}
      description={PESANTREN_HERO_CONTENT.description}
      programImage={PESANTREN_HERO_CONTENT.programImage}
      socialMedia={PESANTREN_HERO_CONTENT.socialMedia}
      email={PESANTREN_HERO_CONTENT.email}
      phone={PESANTREN_HERO_CONTENT.phone}
      registrationLink={PESANTREN_HERO_CONTENT.registrationLink}
      registrationLabel={PESANTREN_HERO_CONTENT.registrationLabel}
    />
  );
}
