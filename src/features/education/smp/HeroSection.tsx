"use client";

import { SMP_HERO_CONTENT } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";
import { HeroSection } from "@/components/public/units/HeroSection";

export function SmpHeroSection() {
  return (
    <HeroSection
      title={SMP_HERO_CONTENT.title}
      description={SMP_HERO_CONTENT.description}
      programImage={SMP_HERO_CONTENT.programImage}
      socialMedia={SMP_HERO_CONTENT.socialMedia}
      email={SMP_HERO_CONTENT.email}
      phone={SMP_HERO_CONTENT.phone}
      registrationLink={SMP_HERO_CONTENT.registrationLink}
      registrationLabel={SMP_HERO_CONTENT.registrationLabel}
    />
  );
}
