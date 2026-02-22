"use client";

import { HIDROPONIK_HERO_CONTENT } from "@/app/(public)/bisnis/hidroponik-pesantren-cendekia-amanah/constants";
import { HeroSectionSecondary } from "@/components/public/units/HeroSectionSecondary";

export function HidroponikHeroSection() {
  return (
    <HeroSectionSecondary
      title={HIDROPONIK_HERO_CONTENT.title}
      description={HIDROPONIK_HERO_CONTENT.description}
      programImage={HIDROPONIK_HERO_CONTENT.programImage}
      socialMedia={HIDROPONIK_HERO_CONTENT.socialMedia}
      email={HIDROPONIK_HERO_CONTENT.email}
      phone={HIDROPONIK_HERO_CONTENT.phone}
      registrationLink={HIDROPONIK_HERO_CONTENT.registrationLink}
      registrationLabel={HIDROPONIK_HERO_CONTENT.registrationLabel}
    />
  );
}
